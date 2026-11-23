/* CISSP Command Center: gamified quiz + flashcard engine.
 * Plain JavaScript, no build step. Progress is stored in localStorage.
 *
 * Question format (see data/d*.js):
 *   { id, q, o: [option, ...], a: indexOfCorrectOption, e: explanation, t: topic, d: 1|2|3 }
 * Flashcard format:
 *   { id, f: front, b: back, t: topic }
 */
(function () {
  "use strict";

  const STORE_KEY = "cissp-cc-v1";
  const $app = document.getElementById("app");
  const $hud = document.getElementById("hud");
  const DOMAINS = CISSP.domains;

  // ---------- Game constants ----------
  const RANKS = ["Recruit", "Analyst", "Specialist", "Engineer", "Architect", "Manager", "Director", "CISO", "Legend"];
  const BOX_DAYS = [0, 0, 1, 3, 7, 16, 35]; // Leitner box -> review interval (days); box 1..6
  const PASS_PCT = 70;

  const BADGES = [
    { id: "first", icon: "🎯", name: "First Blood", desc: "Answer your first question correctly." },
    { id: "combo5", icon: "🔥", name: "On Fire", desc: "Hit a 5-answer combo." },
    { id: "combo15", icon: "⚡", name: "Unstoppable", desc: "Hit a 15-answer combo." },
    { id: "perfect", icon: "💎", name: "Flawless", desc: "Score 100% on a quiz of 10+ questions." },
    { id: "q100", icon: "💯", name: "Centurion", desc: "Answer 100 questions." },
    { id: "q500", icon: "🏆", name: "Veteran", desc: "Answer 500 questions." },
    { id: "streak3", icon: "📅", name: "Habit Forming", desc: "Study 3 days in a row." },
    { id: "streak7", icon: "🗓️", name: "Week Warrior", desc: "Study 7 days in a row." },
    { id: "master", icon: "🎓", name: "Domain Master", desc: "Reach 80% mastery in any domain." },
    { id: "exam", icon: "🛡️", name: "Exam Ready", desc: "Pass an exam simulation (70%+)." },
    { id: "cards50", icon: "🃏", name: "Card Shark", desc: "Review 50 flashcards." },
    { id: "cards250", icon: "🧠", name: "Memory Palace", desc: "Review 250 flashcards." },
    { id: "lvl5", icon: "⭐", name: "Rising Star", desc: "Reach level 5." },
    { id: "lvl10", icon: "🌟", name: "Senior Staff", desc: "Reach level 10." }
  ];

  // ---------- State ----------
  const defaultState = () => ({
    xp: 0,
    streak: { count: 0, last: null },
    answered: {},      // qid -> { c: correctCount, w: wrongCount, last: true|false }
    cards: {},         // cid -> { box: 1..6, due: epoch ms }
    badges: {},        // badgeId -> epoch ms earned
    stats: { answered: 0, correct: 0, bestCombo: 0, cardsReviewed: 0, exams: [] }
  });

  let state = load();
  function load() {
    try {
      const raw = JSON.parse(localStorage.getItem(STORE_KEY));
      if (raw) {
        const d = defaultState();
        return Object.assign(d, raw, { stats: Object.assign(d.stats, raw.stats || {}), streak: Object.assign(d.streak, raw.streak || {}) });
      }
    } catch (e) { /* ignore corrupt state */ }
    return defaultState();
  }
  function save() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }

  // ---------- Helpers ----------
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const shuffle = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const today = () => new Date().toISOString().slice(0, 10);
  const pct = (n, d) => (d ? Math.round((n / d) * 100) : 0);
  const domain = (id) => DOMAINS.find((d) => d.id === Number(id));
  const qBank = (id) => CISSP.questions[id] || [];
  const cBank = (id) => CISSP.flashcards[id] || [];
  const allQuestions = () => DOMAINS.flatMap((d) => qBank(d.id).map((q) => Object.assign({ dom: d.id }, q)));

  function levelInfo(xp) {
    // XP needed to reach level L: 50*(L-1)^2 + 100*(L-1)  (gentle quadratic curve)
    let lvl = 1;
    const need = (l) => 50 * (l - 1) * (l - 1) + 100 * (l - 1);
    while (xp >= need(lvl + 1)) lvl++;
    const base = need(lvl), next = need(lvl + 1);
    return { lvl, rank: RANKS[Math.min(RANKS.length - 1, Math.floor((lvl - 1) / 2))], into: xp - base, span: next - base, pct: pct(xp - base, next - base) };
  }

  function mastery(domId) {
    const bank = qBank(domId);
    let seen = 0, right = 0;
    bank.forEach((q) => { const a = state.answered[q.id]; if (a) { seen++; if (a.last) right++; } });
    return { total: bank.length, seen, right, pct: pct(right, bank.length) };
  }

  function dueCards(domId) {
    const now = Date.now();
    return cBank(domId).filter((c) => { const s = state.cards[c.id]; return !s || s.due <= now; });
  }

  // ---------- Feedback: toasts, confetti ----------
  function toast(html, cls = "") {
    const el = document.createElement("div");
    el.className = "toast " + cls;
    el.innerHTML = html;
    document.getElementById("toasts").appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }
  function confetti(n = 80) {
    const colors = ["#38bdf8", "#a78bfa", "#34d399", "#fbbf24", "#f472b6"];
    for (let i = 0; i < n; i++) {
      const c = document.createElement("i");
      c.className = "confetti";
      c.style.left = Math.random() * 100 + "vw";
      c.style.background = colors[i % colors.length];
      c.style.animationDuration = 1.8 + Math.random() * 1.8 + "s";
      c.style.animationDelay = Math.random() * 0.4 + "s";
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 4200);
    }
  }

  // ---------- XP, streaks, badges ----------
  function touchStreak() {
    const t = today();
    if (state.streak.last === t) return;
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    state.streak.count = state.streak.last === y ? state.streak.count + 1 : 1;
    state.streak.last = t;
    if (state.streak.count > 1) toast(`📅 <b>${state.streak.count}-day streak!</b> Keep it going.`, "xp");
  }
  function addXP(n) {
    if (n <= 0) return;
    const before = levelInfo(state.xp).lvl;
    state.xp += n;
    const after = levelInfo(state.xp);
    if (after.lvl > before) {
      toast(`🚀 <b>Level up!</b> You are now level ${after.lvl}, ${esc(after.rank)}.`, "badge-t");
      confetti();
    }
  }
  function award(id) {
    if (state.badges[id]) return;
    const b = BADGES.find((x) => x.id === id);
    state.badges[id] = Date.now();
    toast(`${b.icon} <b>Badge unlocked:</b> ${esc(b.name)}`, "badge-t");
  }
  function checkBadges(ctx = {}) {
    const s = state.stats;
    if (s.correct >= 1) award("first");
    if (s.bestCombo >= 5) award("combo5");
    if (s.bestCombo >= 15) award("combo15");
    if (s.answered >= 100) award("q100");
    if (s.answered >= 500) award("q500");
    if (state.streak.count >= 3) award("streak3");
    if (state.streak.count >= 7) award("streak7");
    if (DOMAINS.some((d) => qBank(d.id).length && mastery(d.id).pct >= 80)) award("master");
    if (s.cardsReviewed >= 50) award("cards50");
    if (s.cardsReviewed >= 250) award("cards250");
    const L = levelInfo(state.xp).lvl;
    if (L >= 5) award("lvl5");
    if (L >= 10) award("lvl10");
    if (ctx.perfect) award("perfect");
    if (ctx.examPass) award("exam");
  }

  function recordAnswer(q, correct) {
    const a = state.answered[q.id] || { c: 0, w: 0, last: false };
    correct ? a.c++ : a.w++;
    a.last = correct;
    state.answered[q.id] = a;
    state.stats.answered++;
    if (correct) state.stats.correct++;
    touchStreak();
  }

  // ---------- HUD ----------
  function renderHUD() {
    const L = levelInfo(state.xp);
    $hud.innerHTML = `
      <span class="chip" title="Daily streak">🔥 ${state.streak.count}</span>
      <span class="chip" title="Level ${L.lvl}: ${L.into}/${L.span} XP">
        Lv ${L.lvl} · ${esc(L.rank)}
        <span class="xpbar"><i style="width:${L.pct}%"></i></span>
      </span>
      <span class="chip" title="Total XP">✨ ${state.xp} XP</span>`;
    const route = (location.hash.split("/")[1] || "home");
    document.querySelectorAll("[data-nav]").forEach((a) => a.classList.toggle("active", a.dataset.nav === route || (route === "" && a.dataset.nav === "home")));
  }

  // ---------- Views ----------
  function viewHome() {
    const L = levelInfo(state.xp);
    const s = state.stats;
    const totalQ = allQuestions().length;
    const missed = Object.values(state.answered).filter((a) => !a.last).length;
    const lastExam = s.exams[s.exams.length - 1];
    $app.innerHTML = `
      <section class="panel hero">
        <div class="rank-badge" style="--pct:${L.pct}%"><span>${L.lvl}</span></div>
        <div class="grow">
          <h1>${esc(L.rank)} · Level ${L.lvl}</h1>
          <div class="muted">${L.into} / ${L.span} XP to next level · ${state.streak.count}-day streak</div>
          <div class="progress" style="margin-top:.6rem"><i style="width:${L.pct}%"></i></div>
        </div>
        <div class="row">
          <a class="btn primary" href="#/quiz/all/10">⚡ Quick 10</a>
          <a class="btn" href="#/exam">🛡️ Exam Sim</a>
          ${missed ? `<a class="btn warn" href="#/quiz/missed/25">🔁 Review missed (${missed})</a>` : ""}
        </div>
      </section>

      <div class="grid stats" style="margin-top:1rem">
        <div class="panel stat"><b>${s.answered}</b><span class="muted small">Questions answered</span></div>
        <div class="panel stat"><b>${pct(s.correct, s.answered)}%</b><span class="muted small">Accuracy</span></div>
        <div class="panel stat"><b>${s.bestCombo}</b><span class="muted small">Best combo</span></div>
        <div class="panel stat"><b>${s.cardsReviewed}</b><span class="muted small">Cards reviewed</span></div>
        <div class="panel stat"><b>${lastExam ? lastExam.pct + "%" : "–"}</b><span class="muted small">Last exam sim</span></div>
      </div>

      <div class="section-title"><h2>Domains</h2><span class="muted small">${totalQ} questions loaded</span></div>
      <div class="grid cols-4">${DOMAINS.map(domainCard).join("")}</div>`;
  }

  function domainCard(d) {
    const m = mastery(d.id);
    const cards = cBank(d.id).length;
    const due = dueCards(d.id).length;
    const locked = !m.total;
    return `
      <div class="panel domain-card ${locked ? "locked" : ""}" style="--dc:${d.color}">
        <div class="dc-head"><span class="dc-icon">${d.icon}</span>
          <div><div class="dc-code">${d.code} · ${d.weight}% of exam</div><h3>${esc(d.name)}</h3></div></div>
        ${locked ? `<div class="muted small">🔒 Question bank coming soon</div>` : `
          <div class="small muted">Mastery ${m.pct}% · ${m.seen}/${m.total} seen</div>
          <div class="progress"><i style="width:${m.pct}%"></i></div>
          <div class="small muted">${cards} flashcards · ${due} due</div>
          <div class="dc-actions">
            <a class="btn sm primary" href="#/setup/${d.id}">Practice</a>
            ${cards ? `<a class="btn sm" href="#/cards/${d.id}">Flashcards</a>` : ""}
          </div>`}
      </div>`;
  }

  function viewSetup(domId) {
    const d = domain(domId);
    if (!d || !qBank(d.id).length) return go("#/");
    const m = mastery(d.id);
    const missed = qBank(d.id).filter((q) => state.answered[q.id] && !state.answered[q.id].last).length;
    const unseen = qBank(d.id).filter((q) => !state.answered[q.id]).length;
    $app.innerHTML = `
      <section class="panel domain-card" style="--dc:${d.color}">
        <div class="dc-head"><span class="dc-icon">${d.icon}</span>
          <div><div class="dc-code">${d.code} · ${d.weight}% of exam</div><h1>${esc(d.name)}</h1></div></div>
        <div class="muted">Mastery ${m.pct}% · ${m.seen}/${m.total} seen · ${missed} to review · ${unseen} unseen</div>
        <div class="progress"><i style="width:${m.pct}%"></i></div>
      </section>
      <div class="grid cols-4" style="margin-top:1rem">
        ${[10, 25, 50].map((n) => `
          <a class="panel" href="#/quiz/${d.id}/${n}"><h3>${n} questions</h3><div class="muted small">Random mix, instant feedback</div></a>`).join("")}
        <a class="panel" href="#/quiz/${d.id}/all"><h3>Full bank (${m.total})</h3><div class="muted small">Every question in this domain</div></a>
        ${unseen ? `<a class="panel" href="#/quiz/${d.id}-new/25"><h3>New only (${unseen})</h3><div class="muted small">Questions you haven't seen yet</div></a>` : ""}
        ${missed ? `<a class="panel" href="#/quiz/${d.id}-missed/all"><h3>Missed (${missed})</h3><div class="muted small">Fix your weak spots</div></a>` : ""}
      </div>`;
  }

  // ----- Practice quiz (instant feedback) -----
  let quiz = null;

  function pickQuestions(scope, count) {
    let pool;
    if (scope === "all") pool = allQuestions();
    else if (scope === "missed") pool = allQuestions().filter((q) => state.answered[q.id] && !state.answered[q.id].last);
    else {
      const [id, filter] = scope.split("-");
      pool = qBank(Number(id)).map((q) => Object.assign({ dom: Number(id) }, q));
      if (filter === "new") pool = pool.filter((q) => !state.answered[q.id]);
      if (filter === "missed") pool = pool.filter((q) => state.answered[q.id] && !state.answered[q.id].last);
    }
    pool = shuffle(pool);
    const n = count === "all" ? pool.length : Math.min(Number(count) || 10, pool.length);
    // Shuffle options per question and remember where the correct one landed.
    return pool.slice(0, n).map((q) => {
      const order = shuffle(q.o.map((_, i) => i));
      return Object.assign({}, q, { opts: order.map((i) => q.o[i]), correct: order.indexOf(q.a) });
    });
  }

  function startQuiz(scope, count) {
    const qs = pickQuestions(scope, count);
    if (!qs.length) { toast("Nothing to practice here yet. 🎉"); return go("#/"); }
    quiz = { scope, qs, i: 0, picked: null, results: [], combo: 0, xp: 0 };
    renderQuiz();
  }

  function renderQuiz() {
    const q = quiz.qs[quiz.i];
    const d = domain(q.dom);
    const done = quiz.picked !== null;
    const isRight = done && quiz.picked === q.correct;
    $app.innerHTML = `
      <div class="quiz-top">
        <span class="chip">${d.icon} ${d.code}</span>
        <span class="chip">${quiz.i + 1} / ${quiz.qs.length}</span>
        <div class="progress" style="--dc:${d.color}"><i style="width:${pct(quiz.i + (done ? 1 : 0), quiz.qs.length)}%"></i></div>
        <span class="chip combo" id="combo">🔥 x${quiz.combo}</span>
        <span class="chip">✨ +${quiz.xp}</span>
        <a class="btn sm" href="#/">Quit</a>
      </div>
      <section class="panel" id="qpanel">
        <div class="row"><span class="tag">${esc(q.t || d.short)}</span><span class="tag">${"★".repeat(q.d || 1)}${"☆".repeat(3 - (q.d || 1))}</span></div>
        <div class="question">${esc(q.q)}</div>
        <div class="options">
          ${q.opts.map((o, i) => {
            let cls = "";
            if (done) { if (i === q.correct) cls = "correct"; else if (i === quiz.picked) cls = "wrong"; }
            return `<button class="option ${cls}" data-i="${i}" ${done ? "disabled" : ""}><span class="key">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`;
          }).join("")}
        </div>
        ${done ? `
          <div class="explain ${isRight ? "good" : "bad"}">
            <b>${isRight ? "✅ Correct!" : "❌ Not quite."}</b> The answer is <b>${"ABCD"[q.correct]}</b>.
            <div style="margin-top:.4rem">${esc(q.e)}</div>
          </div>
          <div class="row" style="margin-top:1rem"><span class="muted small">Press <kbd>Enter</kbd> to continue</span><span class="spacer"></span>
            <button class="btn primary" id="next">${quiz.i + 1 < quiz.qs.length ? "Next →" : "See results"}</button></div>`
        : `<div class="muted small" style="margin-top:1rem">Pick an answer or press <kbd>A</kbd>–<kbd>D</kbd> / <kbd>1</kbd>–<kbd>4</kbd></div>`}
      </section>`;
    $app.querySelectorAll(".option").forEach((b) => b.addEventListener("click", () => answerQuiz(Number(b.dataset.i))));
    const nx = document.getElementById("next");
    if (nx) nx.addEventListener("click", nextQuiz);
  }

  function answerQuiz(i) {
    if (!quiz || quiz.picked !== null) return;
    const q = quiz.qs[quiz.i];
    quiz.picked = i;
    const ok = i === q.correct;
    recordAnswer(q, ok);
    quiz.results.push({ q, picked: i, ok });
    if (ok) {
      quiz.combo++;
      state.stats.bestCombo = Math.max(state.stats.bestCombo, quiz.combo);
      const gain = 10 + (q.d || 1) * 2 + Math.min(10, (quiz.combo - 1) * 2);
      quiz.xp += gain;
      addXP(gain);
      if (quiz.combo === 5 || quiz.combo === 10 || quiz.combo % 15 === 0) toast(`🔥 <b>${quiz.combo} combo!</b> Bonus XP active.`, "xp");
    } else {
      quiz.combo = 0;
    }
    checkBadges();
    save();
    renderHUD();
    renderQuiz();
    document.getElementById("qpanel").classList.add(ok ? "pulse" : "shake");
  }

  function nextQuiz() {
    if (!quiz || quiz.picked === null) return;
    if (quiz.i + 1 < quiz.qs.length) { quiz.i++; quiz.picked = null; renderQuiz(); window.scrollTo(0, 0); }
    else finishQuiz();
  }

  function finishQuiz() {
    const right = quiz.results.filter((r) => r.ok).length;
    const p = pct(right, quiz.results.length);
    const perfect = p === 100 && quiz.results.length >= 10;
    const bonus = perfect ? 50 : p >= 80 ? 20 : 0;
    addXP(bonus);
    checkBadges({ perfect });
    save();
    renderHUD();
    if (p >= 80) confetti(perfect ? 140 : 60);
    renderResults({ title: "Practice complete", right, total: quiz.results.length, pctv: p, xp: quiz.xp + bonus, results: quiz.results, again: `#/quiz/${quiz.scope}/${quiz.qs.length}` });
    quiz = null;
  }

  function renderResults({ title, right, total, pctv, xp, results, again, extra = "" }) {
    const ring = pctv >= PASS_PCT ? "var(--good)" : pctv >= 50 ? "var(--warn)" : "var(--bad)";
    const byTopic = {};
    results.forEach((r) => { const k = r.q.t || "General"; byTopic[k] = byTopic[k] || { n: 0, ok: 0 }; byTopic[k].n++; if (r.ok) byTopic[k].ok++; });
    const weak = Object.entries(byTopic).filter(([, v]) => v.ok < v.n).sort((a, b) => a[1].ok / a[1].n - b[1].ok / b[1].n).slice(0, 5);
    $app.innerHTML = `
      <section class="panel" style="text-align:center">
        <h1>${esc(title)}</h1>
        <div class="score-ring" style="--pct:${pctv}%; --ring:${ring}"><span>${pctv}%</span></div>
        <div class="muted">${right} of ${total} correct · ✨ ${xp} XP earned</div>
        ${extra}
        <div class="row" style="justify-content:center; margin-top:1rem">
          <a class="btn primary" href="${again}">Go again</a>
          <a class="btn" href="#/">Dashboard</a>
        </div>
      </section>
      ${weak.length ? `<section class="panel" style="margin-top:1rem"><h3>Topics to revisit</h3>
        ${weak.map(([k, v]) => `<div class="row small"><span>${esc(k)}</span><span class="spacer"></span><span class="muted">${v.ok}/${v.n}</span></div>`).join("")}</section>` : ""}
      <section class="panel" style="margin-top:1rem">
        <h3>Review</h3>
        ${results.map((r, n) => `
          <div class="review-item">
            <div><b>${n + 1}.</b> ${esc(r.q.q)}</div>
            <div class="small ${r.ok ? "ans-good" : "ans-bad"}">${r.ok ? "✅" : "❌"} Your answer: ${r.picked === null ? "<i>none</i>" : esc(r.q.opts[r.picked])}</div>
            ${r.ok ? "" : `<div class="small ans-good">Correct: ${esc(r.q.opts[r.q.correct])}</div>`}
            <div class="small muted" style="margin-top:.3rem">${esc(r.q.e)}</div>
          </div>`).join("")}
      </section>`;
    window.scrollTo(0, 0);
  }

  // ----- Exam simulation (timed, no feedback until submit) -----
  let exam = null;
  let examTimer = null;

  function viewExamSetup() {
    const avail = DOMAINS.filter((d) => qBank(d.id).length);
    const total = allQuestions().length;
    const best = state.stats.exams.length ? Math.max(...state.stats.exams.map((e) => e.pct)) : null;
    $app.innerHTML = `
      <section class="panel">
        <h1>🛡️ Exam Simulation</h1>
        <p class="muted">Timed and unforgiving: no feedback until you submit. Questions are drawn across loaded domains in proportion to the official exam weights.
        Pass mark here is ${PASS_PCT}%. The real exam uses scaled scoring (700/1000) and adaptive testing, so treat this as a readiness signal.</p>
        <p class="small muted">Domains loaded: ${avail.map((d) => d.code).join(", ") || "none"} · ${total} questions available${best !== null ? ` · Best score ${best}%` : ""}</p>
        <div class="row">
          <label class="inline">Questions
            <select id="exN">${[25, 50, 100, 125, 150].map((n) => `<option ${n === 50 ? "selected" : ""} ${n > total ? "disabled" : ""}>${n}</option>`).join("")}</select></label>
          <label class="inline">Minutes per question
            <select id="exT"><option value="0.8">0.8</option><option value="1.2" selected>1.2 (exam pace)</option><option value="2">2</option></select></label>
          <span class="spacer"></span>
          <button class="btn primary" id="exGo" ${total ? "" : "disabled"}>Start exam</button>
        </div>
      </section>
      ${state.stats.exams.length ? `<section class="panel" style="margin-top:1rem"><h3>History</h3>
        ${state.stats.exams.slice(-10).reverse().map((e) => `<div class="row small"><span>${new Date(e.at).toLocaleString()}</span><span class="spacer"></span><span>${e.right}/${e.total}</span><b style="color:${e.pct >= PASS_PCT ? "var(--good)" : "var(--bad)"}">${e.pct}%</b></div>`).join("")}</section>` : ""}`;
    document.getElementById("exGo").addEventListener("click", () => {
      startExam(Number(document.getElementById("exN").value), Number(document.getElementById("exT").value));
    });
  }

  function startExam(n, minsPer) {
    const avail = DOMAINS.filter((d) => qBank(d.id).length);
    const wsum = avail.reduce((s, d) => s + d.weight, 0);
    let picked = [];
    avail.forEach((d) => {
      const k = Math.round((n * d.weight) / wsum);
      picked = picked.concat(pickQuestions(String(d.id), k));
    });
    // Top up or trim to exactly n.
    if (picked.length < n) {
      const have = new Set(picked.map((q) => q.id));
      picked = picked.concat(pickQuestions("all", "all").filter((q) => !have.has(q.id)).slice(0, n - picked.length));
    }
    picked = shuffle(picked).slice(0, n);
    exam = { qs: picked, i: 0, answers: Array(picked.length).fill(null), flags: Array(picked.length).fill(false), ends: Date.now() + picked.length * minsPer * 60000 };
    clearInterval(examTimer);
    examTimer = setInterval(tickExam, 1000);
    renderExam();
  }

  function tickExam() {
    if (!exam) return clearInterval(examTimer);
    const left = exam.ends - Date.now();
    const el = document.getElementById("timer");
    if (left <= 0) { toast("⏰ Time's up!"); return submitExam(); }
    if (el) {
      const m = Math.floor(left / 60000), s = Math.floor((left % 60000) / 1000);
      el.textContent = `⏱ ${m}:${String(s).padStart(2, "0")}`;
      el.classList.toggle("low", left < 5 * 60000);
    }
  }

  function renderExam() {
    const q = exam.qs[exam.i];
    const answered = exam.answers.filter((a) => a !== null).length;
    $app.innerHTML = `
      <div class="quiz-top">
        <span class="chip">🛡️ Exam</span>
        <span class="chip">${exam.i + 1} / ${exam.qs.length}</span>
        <div class="progress"><i style="width:${pct(answered, exam.qs.length)}%"></i></div>
        <span class="chip timer" id="timer">⏱</span>
        <button class="btn sm warn" id="exSubmit">Submit</button>
      </div>
      <section class="panel">
        <div class="row"><span class="tag">${domain(q.dom).code}</span><span class="spacer"></span>
          <button class="btn sm ${exam.flags[exam.i] ? "warn" : ""}" id="flag">${exam.flags[exam.i] ? "🚩 Flagged" : "⚑ Flag for review"}</button></div>
        <div class="question">${esc(q.q)}</div>
        <div class="options">
          ${q.opts.map((o, i) => `<button class="option ${exam.answers[exam.i] === i ? "selected" : ""}" data-i="${i}"><span class="key">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`).join("")}
        </div>
        <div class="row" style="margin-top:1rem">
          <button class="btn" id="prev" ${exam.i === 0 ? "disabled" : ""}>← Prev</button>
          <span class="spacer"></span>
          <button class="btn primary" id="nextq" ${exam.i + 1 >= exam.qs.length ? "disabled" : ""}>Next →</button>
        </div>
        <div class="qnav">${exam.qs.map((_, i) => `<button data-j="${i}" class="${exam.answers[i] !== null ? "answered" : ""} ${exam.flags[i] ? "flagged" : ""} ${i === exam.i ? "current" : ""}">${i + 1}</button>`).join("")}</div>
      </section>`;
    $app.querySelectorAll(".option").forEach((b) => b.addEventListener("click", () => { exam.answers[exam.i] = Number(b.dataset.i); renderExam(); }));
    $app.querySelectorAll(".qnav button").forEach((b) => b.addEventListener("click", () => { exam.i = Number(b.dataset.j); renderExam(); }));
    document.getElementById("prev").addEventListener("click", () => { exam.i--; renderExam(); });
    document.getElementById("nextq").addEventListener("click", () => { exam.i++; renderExam(); });
    document.getElementById("flag").addEventListener("click", () => { exam.flags[exam.i] = !exam.flags[exam.i]; renderExam(); });
    document.getElementById("exSubmit").addEventListener("click", () => {
      const left = exam.answers.filter((a) => a === null).length;
      if (!left || confirm(`${left} question(s) unanswered. Submit anyway?`)) submitExam();
    });
    tickExam();
  }

  function submitExam() {
    clearInterval(examTimer);
    const results = exam.qs.map((q, i) => ({ q, picked: exam.answers[i], ok: exam.answers[i] === q.correct }));
    results.forEach((r) => { if (r.picked !== null) recordAnswer(r.q, r.ok); });
    const right = results.filter((r) => r.ok).length;
    const p = pct(right, results.length);
    const xp = right * 8 + (p >= PASS_PCT ? 100 : 0);
    state.stats.exams.push({ at: Date.now(), right, total: results.length, pct: p });
    addXP(xp);
    checkBadges({ examPass: p >= PASS_PCT });
    save();
    renderHUD();
    if (p >= PASS_PCT) confetti(160);
    const byDom = DOMAINS.map((d) => {
      const rs = results.filter((r) => r.q.dom === d.id);
      return rs.length ? `<div class="row small"><span>${d.icon} ${d.code} ${esc(d.short)}</span><span class="spacer"></span><span>${rs.filter((r) => r.ok).length}/${rs.length}</span></div>` : "";
    }).join("");
    exam = null;
    renderResults({
      title: p >= PASS_PCT ? "🛡️ Exam passed!" : "Exam complete",
      right, total: results.length, pctv: p, xp, results, again: "#/exam",
      extra: `<div style="max-width:360px;margin:1rem auto 0;text-align:left">${byDom}</div>`
    });
  }

  // ----- Flashcards (Leitner spaced repetition) -----
  let deck = null;

  function viewCardsHome() {
    const withCards = DOMAINS.filter((d) => cBank(d.id).length);
    $app.innerHTML = `
      <div class="section-title"><h1>🃏 Flashcards</h1><span class="muted small">Spaced repetition: cards you know come back less often.</span></div>
      <div class="grid cols-4">
        ${DOMAINS.map((d) => {
          const n = cBank(d.id).length, due = dueCards(d.id).length;
          return `<div class="panel domain-card ${n ? "" : "locked"}" style="--dc:${d.color}">
            <div class="dc-head"><span class="dc-icon">${d.icon}</span><div><div class="dc-code">${d.code}</div><h3>${esc(d.name)}</h3></div></div>
            ${n ? `<div class="small muted">${n} cards · ${due} due now</div>
              <div class="dc-actions"><a class="btn sm primary" href="#/cards/${d.id}">${due ? "Review due" : "Study all"}</a></div>`
            : `<div class="muted small">🔒 Coming soon</div>`}
          </div>`;
        }).join("")}
      </div>
      ${withCards.length ? "" : `<p class="muted">No flashcards loaded yet.</p>`}`;
  }

  function startDeck(domId) {
    const d = domain(domId);
    if (!d || !cBank(d.id).length) return go("#/flashcards");
    let cards = dueCards(d.id);
    if (!cards.length) cards = cBank(d.id); // nothing due: free study
    deck = { dom: d.id, cards: shuffle(cards), i: 0, flipped: false, again: 0, good: 0 };
    renderDeck();
  }

  function renderDeck() {
    const d = domain(deck.dom);
    if (deck.i >= deck.cards.length) {
      $app.innerHTML = `<section class="panel" style="text-align:center"><h1>Deck complete 🎉</h1>
        <p class="muted">${deck.good} known · ${deck.again} to repeat</p>
        <div class="row" style="justify-content:center"><a class="btn primary" href="#/cards/${d.id}">Study again</a><a class="btn" href="#/flashcards">All decks</a></div></section>`;
      if (deck.again === 0 && deck.cards.length >= 10) confetti(60);
      deck = null;
      return;
    }
    const c = deck.cards[deck.i];
    const boxes = [1, 2, 3, 4, 5, 6].map((b) => cBank(d.id).filter((x) => (state.cards[x.id] ? state.cards[x.id].box : 1) === b).length);
    $app.innerHTML = `
      <div class="quiz-top">
        <span class="chip">${d.icon} ${d.code} Flashcards</span>
        <span class="chip">${deck.i + 1} / ${deck.cards.length}</span>
        <div class="progress" style="--dc:${d.color}"><i style="width:${pct(deck.i, deck.cards.length)}%"></i></div>
        <a class="btn sm" href="#/flashcards">Done</a>
      </div>
      <div class="flash-wrap">
        <div class="flashcard ${deck.flipped ? "flipped" : ""}" id="card">
          <div class="face front"><div class="tag" style="margin-bottom:1rem">${esc(c.t || d.short)}</div>${esc(c.f)}<span class="hint">Click or press <kbd>Space</kbd> to flip</span></div>
          <div class="face back">${esc(c.b)}</div>
        </div>
        <div class="row" id="rate" style="justify-content:center;margin-top:1rem">${rateButtons()}</div>
        <div class="boxes">${boxes.map((n, i) => `<div class="box"><b>${n}</b>Box ${i + 1}</div>`).join("")}</div>
      </div>`;
    document.getElementById("card").addEventListener("click", flipCard);
    bindRate();
  }

  function rateButtons() {
    return deck.flipped ? `
      <button class="btn bad" data-r="again">↺ Again <kbd>1</kbd></button>
      <button class="btn good" data-r="good">✓ Good <kbd>2</kbd></button>
      <button class="btn" data-r="easy">⚡ Easy <kbd>3</kbd></button>`
      : `<button class="btn primary" id="flip">Show answer</button>`;
  }
  function bindRate() {
    const f = document.getElementById("flip");
    if (f) f.addEventListener("click", flipCard);
    $app.querySelectorAll("[data-r]").forEach((b) => b.addEventListener("click", () => rateCard(b.dataset.r)));
  }

  // Flip in place so the 3D flip animation plays.
  function flipCard() {
    if (!deck) return;
    deck.flipped = !deck.flipped;
    document.getElementById("card").classList.toggle("flipped", deck.flipped);
    document.getElementById("rate").innerHTML = rateButtons();
    bindRate();
  }

  function rateCard(r) {
    if (!deck || !deck.flipped) return;
    const c = deck.cards[deck.i];
    const s = state.cards[c.id] || { box: 1, due: 0 };
    if (r === "again") { s.box = 1; deck.again++; deck.cards.push(c); }
    else { s.box = Math.min(6, s.box + (r === "easy" ? 2 : 1)); deck.good++; }
    s.due = Date.now() + BOX_DAYS[s.box] * 864e5;
    state.cards[c.id] = s;
    state.stats.cardsReviewed++;
    touchStreak();
    addXP(r === "again" ? 1 : 3);
    checkBadges();
    save();
    renderHUD();
    deck.i++;
    deck.flipped = false;
    renderDeck();
  }

  // ----- Profile -----
  function viewProfile() {
    const L = levelInfo(state.xp);
    const earned = Object.keys(state.badges).length;
    $app.innerHTML = `
      <section class="panel hero">
        <div class="rank-badge" style="--pct:${L.pct}%"><span>${L.lvl}</span></div>
        <div class="grow"><h1>${esc(L.rank)}</h1><div class="muted">${state.xp} XP · ${earned}/${BADGES.length} badges · ${state.streak.count}-day streak</div></div>
      </section>
      <div class="section-title"><h2>Badges</h2></div>
      <div class="grid cols-4">
        ${BADGES.map((b) => `<div class="panel badge ${state.badges[b.id] ? "earned" : ""}"><span class="b-icon">${b.icon}</span><div><b>${esc(b.name)}</b><div class="small muted">${esc(b.desc)}</div></div></div>`).join("")}
      </div>
      <div class="section-title"><h2>Domain mastery</h2></div>
      <section class="panel">
        ${DOMAINS.map((d) => { const m = mastery(d.id); return `<div style="--dc:${d.color};margin-bottom:.7rem">
          <div class="row small"><span>${d.icon} ${d.code} ${esc(d.name)}</span><span class="spacer"></span><span class="muted">${m.total ? m.pct + "%" : "–"}</span></div>
          <div class="progress"><i style="width:${m.pct}%"></i></div></div>`; }).join("")}
      </section>
      <div class="section-title"><h2>Data</h2></div>
      <section class="panel row">
        <button class="btn" id="exp">⬇ Export progress</button>
        <label class="btn">⬆ Import progress<input type="file" id="imp" accept="application/json" hidden></label>
        <span class="spacer"></span>
        <button class="btn bad" id="reset">Reset all progress</button>
      </section>`;
    document.getElementById("exp").addEventListener("click", () => {
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([JSON.stringify(state, null, 2)], { type: "application/json" }));
      a.download = `cissp-progress-${today()}.json`;
      a.click();
    });
    document.getElementById("imp").addEventListener("change", (ev) => {
      const f = ev.target.files[0];
      if (!f) return;
      f.text().then((t) => {
        try { const s = JSON.parse(t); if (typeof s.xp !== "number") throw 0; localStorage.setItem(STORE_KEY, t); state = load(); toast("Progress imported."); route(); }
        catch (e) { toast("That file doesn't look like a progress export."); }
      });
    });
    document.getElementById("reset").addEventListener("click", () => {
      if (confirm("Reset XP, badges, streaks and all progress? This cannot be undone.")) { state = defaultState(); save(); route(); }
    });
  }

  // ---------- Router ----------
  function go(h) { location.hash = h; }
  function route() {
    clearInterval(examTimer);
    exam = null;
    const parts = location.hash.replace(/^#\/?/, "").split("/");
    const [view, a, b] = parts;
    renderHUD();
    if (view !== "quiz") quiz = null;
    if (view !== "cards") deck = null;
    switch (view) {
      case "setup": return viewSetup(a);
      case "quiz": return startQuiz(a || "all", b || 10);
      case "exam": return viewExamSetup();
      case "flashcards": return viewCardsHome();
      case "cards": return startDeck(a);
      case "profile": return viewProfile();
      default: return viewHome();
    }
  }

  // ---------- Keyboard ----------
  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, select, textarea")) return;
    const k = e.key.toLowerCase();
    const idx = "abcd".indexOf(k) >= 0 ? "abcd".indexOf(k) : "1234".indexOf(k);
    if (quiz) {
      if (quiz.picked === null && idx >= 0 && idx < quiz.qs[quiz.i].opts.length) answerQuiz(idx);
      else if (quiz.picked !== null && (k === "enter" || k === "arrowright")) nextQuiz();
    } else if (exam) {
      if (idx >= 0 && idx < exam.qs[exam.i].opts.length) { exam.answers[exam.i] = idx; renderExam(); }
      else if (k === "arrowright" && exam.i + 1 < exam.qs.length) { exam.i++; renderExam(); }
      else if (k === "arrowleft" && exam.i > 0) { exam.i--; renderExam(); }
    } else if (deck) {
      if (k === " ") { e.preventDefault(); flipCard(); }
      else if (deck.flipped && k === "1") rateCard("again");
      else if (deck.flipped && k === "2") rateCard("good");
      else if (deck.flipped && k === "3") rateCard("easy");
    }
  });

  // Links to the current hash (e.g. "Go again") don't fire hashchange, so re-route manually.
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href^='#']");
    if (a && a.getAttribute("href") === location.hash) { e.preventDefault(); route(); }
  });

  window.addEventListener("hashchange", route);
  route();
})();
