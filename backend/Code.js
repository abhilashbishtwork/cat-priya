// Priya CAT Coach — Google Sheet backend.
// Frontend (GitHub Pages) POSTs events as text/plain JSON; GET ?action=state restores her progress.

const SHEET_ID = "17Rde4-ZAhWxYuuS3n7tBf6YtA9xcK3gDkEBqEiMtOFs";
const TABS = {
  Attempts: ["Timestamp (IST)", "Date", "Attempt ID", "Kind", "Section", "Level", "Correct", "Total", "Net score", "Seconds", "Passed", "Est. percentile", "Timed out"],
  Answers: ["Timestamp (IST)", "Attempt ID", "Kind", "Q no", "Question ID", "Section", "Type", "Her answer", "Correct answer", "Result", "Marks", "Question"],
  Tasks: ["Timestamp (IST)", "Plan day", "Date", "Task #", "Task", "Done"],
  Events: ["Timestamp (IST)", "Event", "Detail"],
  State: ["Updated at", "JSON (chunked across columns)"],
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
    const str = row.slice(1).join("");
    return json_({ ok: true, updatedAt: row[0] || null, state: str ? JSON.parse(str) : null });
  }
  return json_({ ok: true, ping: now_() });
}

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
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
    if (body.state) saveState_(body.state, body.updatedAt);
    return json_({ ok: true, ids: done });
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

function saveState_(state, updatedAt) {
  const prev = Number(tab_("State").getRange(2, 1).getValue()) || 0;
  if (Number(updatedAt) < prev) return; // never let an older copy overwrite a newer one
  const str = JSON.stringify(state), parts = [];
  for (let i = 0; i < str.length; i += 45000) parts.push(str.slice(i, i + 45000));
  const sh = tab_("State");
  sh.getRange(2, 1, 1, 30).clearContent();
  sh.getRange(2, 1, 1, parts.length + 1).setValues([[updatedAt || now_()].concat(parts)]);
}
