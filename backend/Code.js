// Priya CAT Coach — Google Sheet backend.
// Frontend (GitHub Pages) POSTs events as text/plain JSON; GET ?action=state restores her progress.

const APP_VERSION = 2;
const SHEET_ID = "17Rde4-ZAhWxYuuS3n7tBf6YtA9xcK3gDkEBqEiMtOFs";
const TABS = {
  Attempts: ["Timestamp (IST)", "Date", "Attempt ID", "Kind", "Section", "Level", "Correct", "Total", "Net score", "Seconds", "Passed", "Est. percentile", "Timed out"],
  Answers: ["Timestamp (IST)", "Attempt ID", "Kind", "Q no", "Question ID", "Section", "Type", "Her answer", "Correct answer", "Result", "Marks", "Question"],
  Tasks: ["Timestamp (IST)", "Plan day", "Date", "Task #", "Task", "Done"],
  Events: ["Timestamp (IST)", "Event", "Detail"],
  State: ["Updated at", "JSON (chunked across columns)"],
  Content: ["Updated at", "JSON written by the coach agent (chunked across columns)"],
};

function ss_() { return SpreadsheetApp.openById(SHEET_ID); }
function tab_(name) {
  const ss = ss_();
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.getRange(1, 1, 1, TABS[name].length).setValues([TABS[name]]).setFontWeight("bold");
    sh.setFrozenRows(1);
    sh.getRange("A:L").setNumberFormat("@"); // keep dates/answers as plain text
  }
  return sh;
}
function now_() { return Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd HH:mm:ss"); }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

// Run once from the editor to create tabs and grant permissions.
function setup() {
  Object.keys(TABS).forEach(tab_);
  const def = ss_().getSheetByName("Sheet1");
  if (def && ss_().getSheets().length > 1) ss_().deleteSheet(def);
}

function doGet(e) {
  const action = (e.parameter || {}).action;
  if (action === "state") {
    const row = tab_("State").getRange(2, 1, 1, 30).getValues()[0];
    const str = unchunk_(row.slice(1));
    return json_({ ok: true, updatedAt: row[0] || null, state: str ? JSON.parse(str) : null });
  }
  if (action === "content") return json_({ ok: true, content: readJson_("Content") });
  if (action === "dump" && e.parameter.key === ADMIN_KEY) return json_(dump_());
  if (action === "wipe" && e.parameter.key === ADMIN_KEY) return json_(wipe_(e.parameter.since));
  return json_({ ok: true, ping: now_() });
}

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  if (body.admin === ADMIN_KEY && body.content) { writeJson_("Content", lightContent_(body.content)); return json_({ ok: true, saved: "content" }); }
  // Fresh start 2026-10-17: ignore anything from older app versions (stale test data in old browsers).
  if (body.v !== APP_VERSION) return json_({ ok: true, ids: (body.events || []).map(ev => ev.id), ignored: true });
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const cache = CacheService.getScriptCache();
    const done = [];
    (body.events || []).forEach(ev => {
      if (ev.id && cache.get("ev_" + ev.id)) { done.push(ev.id); return; } // already written (retry)
      write_(ev);
      if (ev.id) { cache.put("ev_" + ev.id, "1", 21600); done.push(ev.id); }
    });
    let merged = null;
    if (body.state) { merged = mergeState(readState_(), body.state); saveState_(merged); }
    return json_({ ok: true, ids: done, state: merged });
  } finally {
    lock.releaseLock();
  }
}

function write_(ev) {
  const ts = now_();
  if (ev.type === "attempt") {
    const a = ev.attempt;
    tab_("Attempts").appendRow([ts, a.date, ev.id, a.kind, a.sec || "Mixed", a.level || "", a.c, a.t, a.net, a.secs, a.pass === undefined ? "" : a.pass ? "Yes" : "No", a.pct || "", a.timeout ? "Yes" : ""]);
    const rows = (ev.answers || []).map((x, i) => [ts, ev.id, a.kind, i + 1, x.qid, x.sec, x.type, x.her, x.correct, x.result, x.marks, x.text]);
    if (rows.length) { const sh = tab_("Answers"); sh.getRange(sh.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows); }
  } else if (ev.type === "task") {
    tab_("Tasks").appendRow([ts, ev.day, ev.date, ev.idx + 1, ev.task, ev.done ? "Done" : "Unticked"]);
  } else {
    tab_("Events").appendRow([ts, ev.type, ev.detail || ""]);
  }
}

function readState_() { return readJson_("State"); }
function readJson_(name) {
  const str = unchunk_(tab_(name).getRange(2, 2, 1, 29).getValues()[0]);
  return str ? JSON.parse(str) : null;
}
// Long JSON is split across cells. Each chunk is stored with a leading "|" so Sheets never trims or
// reinterprets a chunk that happens to start with a space, quote, digit or "=".
function chunk_(str) { const parts = []; for (let i = 0; i < str.length; i += 45000) parts.push("|" + str.slice(i, i + 45000)); return parts; }
function unchunk_(cells) { return cells.map(c => String(c)).filter(c => c !== "").map(c => c.charAt(0) === "|" ? c.slice(1) : c).join(""); }
function writeJson_(name, obj) {
  const parts = chunk_(JSON.stringify(obj));
  const sh = tab_(name);
  sh.getRange(2, 1, 1, 30).clearContent();
  sh.getRange(2, 1, 1, parts.length + 1).setValues([[now_()].concat(parts)]);
}

// Everything the coach agent needs to evaluate her, in one call.
function dump_() {
  const rows = name => { const v = tab_(name).getDataRange().getValues(); const h = v.shift(); return v.map(r => Object.fromEntries(h.map((k, i) => [k, r[i]]))); };
  return { ok: true, now: now_(), state: readState_(), content: readJson_("Content"), attempts: rows("Attempts"), answers: rows("Answers"), tasks: rows("Tasks"), events: rows("Events").slice(-50) };
}

// Phone and laptop copies are merged (see Merge.js), never overwritten.
function saveState_(state) {
  const updatedAt = String(state.updatedAt || Date.now());
  const parts = chunk_(JSON.stringify(state));
  const sh = tab_("State");
  sh.getRange(2, 1, 1, 30).clearContent();
  sh.getRange(2, 1, 1, parts.length + 1).setValues([[updatedAt].concat(parts)]);
}

// Test cleanup only: deletes rows written at/after `since` (IST "yyyy-MM-dd HH:mm:ss") and clears State.
function wipe_(since) {
  const out = {};
  ["Attempts", "Answers", "Tasks", "Events"].forEach(name => {
    const sh = tab_(name), n = sh.getLastRow() - 1;
    if (n < 1) { out[name] = 0; return; }
    const ts = sh.getRange(2, 1, n, 1).getValues().map(r => String(r[0]));
    let del = 0;
    for (let i = n - 1; i >= 0; i--) if (ts[i] >= since) { sh.deleteRow(i + 2); del++; }
    out[name] = del;
  });
  tab_("State").getRange(2, 1, 1, 30).clearContent();
  return { ok: true, deleted: out };
}

// Keep the Sheet light: questions/levels live in the app repo (levels.js), never here.
// Only the coach note and the next 7 days of plan are stored.
function lightContent_(c) {
  const today = Utilities.formatDate(new Date(), "Asia/Kolkata", "yyyy-MM-dd");
  const plan = {};
  Object.keys(c.plan || {}).filter(d => d >= today).sort().slice(0, 7).forEach(d => { plan[d] = c.plan[d]; });
  const out = { lastRun: c.lastRun || now_(), coach: c.coach || null, plan: plan };
  const str = JSON.stringify(out);
  if (str.length > 12000) throw new Error("Content too large (" + str.length + " chars); keep it under 12,000");
  return out;
}
