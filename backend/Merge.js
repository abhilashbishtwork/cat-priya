// Merges two copies of Priya's progress (phone + laptop) without losing anything.
// Shared verbatim by the app (merge.js) and the Apps Script backend (backend/Merge.js) — edit both together.
function mergeState(a, b) {
  if (!a) return b; if (!b) return a;
  const SECS3 = ["VARC", "DILR", "QA"];
  const levels = {}; SECS3.forEach(k => { levels[k] = Math.max((a.levels || {})[k] || 0, (b.levels || {})[k] || 0); });
  const tasks = {}, taskTs = {}, at = a.taskTs || {}, bt = b.taskTs || {};
  Object.keys(Object.assign({}, a.tasks, b.tasks)).forEach(k => {
    const ta = at[k] || 0, tb = bt[k] || 0, inA = k in (a.tasks || {}), inB = k in (b.tasks || {});
    const useB = !inA || (inB && (tb > ta || (tb === ta && b.tasks[k])));
    tasks[k] = useB ? !!b.tasks[k] : !!a.tasks[k]; taskTs[k] = Math.max(ta, tb);
  });
  const hist = {}, hkey = h => h.id || [h.date, h.kind, h.sec || "", +h.level || 0, +h.c || 0, +h.net || 0, +h.secs || 0].join("|");
  (a.history || []).concat(b.history || []).forEach(h => { hist[hkey(h)] = h; });
  const history = Object.keys(hist).map(k => hist[k]).sort((x, y) => (x.at || 0) - (y.at || 0) || (x.date < y.date ? -1 : x.date > y.date ? 1 : 0));
  const diag = !a.diag ? b.diag : !b.diag ? a.diag : ((b.diag.at || 0) > (a.diag.at || 0) ? b.diag : a.diag);
  const sa = a.streak || {}, sb = b.streak || {};
  const streak = (sa.last || "") === (sb.last || "") ? { last: sa.last || null, count: Math.max(sa.count || 0, sb.count || 0) } : ((sa.last || "") > (sb.last || "") ? sa : sb);
  return {
    xp: Math.max(a.xp || 0, b.xp || 0), levels, tasks, taskTs, history, diag, streak,
    lastBoost: (a.lastBoost || "") > (b.lastBoost || "") ? a.lastBoost : (b.lastBoost || a.lastBoost || null),
    updatedAt: Math.max(a.updatedAt || 0, b.updatedAt || 0),
  };
}
