// script.js - main app logic (quiz flow, timer, scoring, localStorage)

(() => {
  // App state
  const state = {
    view: 'home',
    subject: null,
    selectedTopics: [],
    questions: [],
    currentQ: 0,
    answers: {},
    startTS: null,
    durationSec: 0,
    timerInterval: null
  };

  // DOM refs
  const subjectsEl = document.getElementById('subjects');
  const topicsListEl = document.getElementById('topics-list');
  const topicsTitle = document.getElementById('topics-title');
  const viewHome = document.getElementById('view-home');
  const viewTopics = document.getElementById('view-topics');
  const viewTest = document.getElementById('view-test');
  const viewResult = document.getElementById('view-result');
  const historyHome = document.getElementById('history-home');

  // storage
  const STORAGE_KEY = 'banking_mock_results_v1';

  // Utility
  function $(id){ return document.getElementById(id); }

  // ---------- render subjects ----------
  function renderSubjects(){
    subjectsEl.innerHTML='';
    for(const subj of Object.keys(DB)){
      const div = document.createElement('div'); div.className='subject';
      const topicsCount = Object.keys(DB[subj].topics).length;
      div.innerHTML = `<h3>${subj}</h3><p class='muted'>${topicsCount} topics</p>`;
      div.onclick = ()=> openTopics(subj);
      subjectsEl.appendChild(div);
    }
    renderHistorySummary();
  }

  // ---------- topics ----------
  function openTopics(subject){
    state.subject = subject; state.selectedTopics = [];
    topicsTitle.textContent = `${subject} — Topics`;
    topicsListEl.innerHTML = '';
    for(const t of Object.keys(DB[subject].topics)){
      const btn = document.createElement('button'); btn.className='topic'; btn.textContent = t;
      btn.onclick = ()=>{ btn.classList.toggle('selected'); toggleTopic(t); };
      topicsListEl.appendChild(btn);
    }
    showView('topics');
  }
  function toggleTopic(t){ const i = state.selectedTopics.indexOf(t); if(i>-1) state.selectedTopics.splice(i,1); else state.selectedTopics.push(t); }

  // ---------- build questions ----------
  function buildQuestions(full=false){
    const subj = state.subject;
    let topics = full ? Object.keys(DB[subj].topics) : state.selectedTopics.slice();
    if(topics.length===0) topics = Object.keys(DB[subj].topics);
    const qs=[];
    for(const t of topics){
      const arr = DB[subj].topics[t] || [];
      for(const q of arr){ qs.push(Object.assign({},q,{topic:t})); }
    }
    // shuffle
    for(let i=qs.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [qs[i],qs[j]]=[qs[j],qs[i]]; }
    return qs;
  }

  // ---------- start test ----------
  function startTest(full=false){
    const minutes = parseInt($('timer-minutes').value) || 20;
    state.durationSec = minutes*60;
    state.questions = buildQuestions(full);
    state.currentQ = 0; state.answers = {}; state.startTS = Date.now();
    if(state.questions.length===0){ alert('No questions available for selected topics.'); return; }
    renderTest(); showView('test'); startTimer();
  }

  // ---------- timer ----------
  function startTimer(){
    if(state.timerInterval) clearInterval(state.timerInterval);
    state.timerInterval = setInterval(()=>{
      const elapsed = Math.floor((Date.now()-state.startTS)/1000);
      const remaining = Math.max(0, state.durationSec - elapsed);
      updateTimerDisplay(remaining);
      if(remaining<=0){ clearInterval(state.timerInterval); autoSubmit(); }
    },250);
  }
  function updateTimerDisplay(remaining){
    const m = String(Math.floor(remaining/60)).padStart(2,'0'); const s = String(remaining%60).padStart(2,'0');
    $('timer').textContent = `${m}:${s}`;
    const pct = state.durationSec>0 ? (remaining/state.durationSec*100) : 0;
    $('timer-bar').style.width = pct + '%';
  }

  // ---------- render question ----------
  function renderTest(){
    $('test-title').textContent = `${state.subject} Test`;
    $('test-subtitle').textContent = state.selectedTopics.length? state.selectedTopics.join(', '): 'Full subject';
    const wrap = $('questions-wrap'); wrap.innerHTML='';
    const q = state.questions[state.currentQ];
    const qcount = state.questions.length;
    $('q-progress').textContent = `Question ${state.currentQ+1} / ${qcount}`;

    const container = document.createElement('div'); container.className='question';
    container.innerHTML = `<div style="font-weight:700">${q.question}</div><div class='muted' style='margin-top:6px'>Topic: ${q.topic}</div>`;
    const opts = document.createElement('div'); opts.className='options';
    q.options.forEach((opt,idx)=>{
      const o = document.createElement('div'); o.className='option'; o.textContent = opt;
      if(state.answers[q.id]!==undefined && state.answers[q.id]===idx) o.classList.add('selected');
      o.onclick = ()=>{ state.answers[q.id]=idx; Array.from(opts.children).forEach((c,i)=> c.classList.toggle('selected', state.answers[q.id]===i)); };
      opts.appendChild(o);
    });
    container.appendChild(opts);
    wrap.appendChild(container);

    $('prev-q').disabled = state.currentQ===0;
    $('next-q').disabled = state.currentQ===qcount-1;
  }

  // ---------- navigation ----------
  function showView(v){
    state.view=v;
    viewHome.classList.add('hidden'); viewTopics.classList.add('hidden'); viewTest.classList.add('hidden'); viewResult.classList.add('hidden');
    if(v==='home') viewHome.classList.remove('hidden');
    if(v==='topics') viewTopics.classList.remove('hidden');
    if(v==='test') viewTest.classList.remove('hidden');
    if(v==='result') viewResult.classList.remove('hidden');
  }

  // ---------- submit & results ----------
  function autoSubmit(){ alert('Time is up — auto submitted the test.'); submitTest(true); }
  function submitTest(auto=false){
  if(state.timerInterval) clearInterval(state.timerInterval);
  const endTS = Date.now();
  const total = state.questions.length;

  let correct = 0;
  let attempted = 0;
  let wrong = 0;
  const incorrect=[];

  for(const q of state.questions){
    const ans = state.answers[q.id];
    if(ans !== undefined){ // attempted
      attempted++;
      if(ans === q.answer){
        correct++;
      } else {
        wrong++;
        incorrect.push({q,chosen:ans});
      }
    } else {
      // unattempted
      incorrect.push({q,chosen:undefined});
    }
  }

  const unattempted = total - attempted;
  const accuracy = attempted ? Math.round((correct/attempted)*100) : 0;
  const timeTakenSec = Math.floor((endTS-state.startTS)/1000);

  const result = { 
    id:'res-'+Date.now(), 
    subject:state.subject, 
    topics:state.selectedTopics.slice(), 
    total, 
    correct, 
    attempted, 
    wrong, 
    unattempted,
    accuracy, 
    timeTakenSec, 
    date:new Date().toISOString(), 
    incorrect 
  };

  saveResult(result);
  renderResult(result);
  showView('result');
}


 function renderResult(res){
  const sum = $('result-summary'); 
  sum.innerHTML='';

  const cards = [
    {t:'Score', v:`${res.correct} / ${res.total}`},
    {t:'Accuracy', v:`${res.accuracy}%`},
    {t:'Attempted', v:`${res.attempted}`},
    {t:'Wrong Answers', v:`${res.wrong}`},
    {t:'Unattempted', v:`${res.unattempted}`},
    {t:'Time taken', v:formatSec(res.timeTakenSec)},
    {t:'Subject', v:res.subject}
  ];

  for(const c of cards){
   const d = document.createElement('div'); 
d.className = 'result-card';

// apply colors for Score and Wrong Answers
if(c.t === 'Score') d.classList.add('score');
if(c.t === 'Wrong Answers') d.classList.add('wrong');

    d.innerHTML = `<div class='muted'>${c.t}</div>
                   <div style='font-weight:700;margin-top:6px'>${c.v}</div>`;
    sum.appendChild(d);
  }

  const incWrap = $('incorrect-list'); 
  incWrap.innerHTML='';
  if(res.incorrect.length===0){ 
    incWrap.innerHTML='<div class="muted">No incorrect answers — well done!</div>'; 
    return; 
  }
  for(const it of res.incorrect){
    const el = document.createElement('div'); 
    el.className='history-item';
    const chosen = it.chosen!==undefined ? it.q.options[it.chosen] : '<em>Unanswered</em>';
    el.innerHTML = `<div style='flex:1'>
      <div style='font-weight:700'>${it.q.question}</div>
      <div class='muted' style='margin-top:6px'>Your answer: ${chosen}</div>
      <div style='margin-top:6px'>Correct: <strong>${it.q.options[it.q.answer]}</strong></div>
      <div class='muted' style='margin-top:6px'>Solution: ${it.q.explanation || '—'}</div>
    </div>`;
    incWrap.appendChild(el);
  }
}


  function formatSec(s){ const m=Math.floor(s/60); const sec=s%60; return `${m}m ${sec}s`; }

  // ---------- storage ----------
  function saveResult(res){
    const cur = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    cur.unshift(res); // newest first
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cur));
    renderHistorySummary();
  }
  function loadResults(){ return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }

  // ---------- history on home ----------
  function renderHistorySummary(){
    const cur = loadResults();
    historyHome.innerHTML = '';
    if(cur.length===0){ historyHome.innerHTML = '<div class="muted">No past attempts yet.</div>'; return; }
    for(const r of cur.slice(0,6)){
      const item = document.createElement('div'); item.className='history-item';
      item.innerHTML = `<div style='flex:1'>
        <div style='font-weight:700'>${r.subject} — ${r.correct}/${r.total} (${r.accuracy}%)</div>
        <div class='muted'>${new Date(r.date).toLocaleString()} • ${r.topics.length? r.topics.join(', '): 'Full'}</div>
      </div>
      <div style='display:flex;gap:8px;align-items:center'>
        <button class='btn ghost small' data-id='${r.id}'>View</button>
        <button class='btn ghost small' data-del='${r.id}'>Delete</button>
      </div>`;
      historyHome.appendChild(item);
    }
    // handlers
    Array.from(historyHome.querySelectorAll('button[data-id]')).forEach(b => b.onclick = ()=> reopenResult(b.getAttribute('data-id')));
    Array.from(historyHome.querySelectorAll('button[data-del]')).forEach(b => b.onclick = ()=> deleteResult(b.getAttribute('data-del')));
  }

  window.reopenResult = function(id){
    const cur = loadResults();
    const r = cur.find(x=>x.id===id); if(!r) return; renderResult(r); showView('result');
  };

  function deleteResult(id){
    if(!confirm('Delete this attempt?')) return;
    let cur = loadResults();
    cur = cur.filter(x => x.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cur));
    renderHistorySummary();
  }

  // ---------- reset data ----------
  function resetData(){
    if(!confirm('This will clear all saved attempts. Continue?')) return;
    localStorage.removeItem(STORAGE_KEY);
    renderHistorySummary();
    alert('All saved attempts cleared.');
  }

  // ---------- event bindings ----------
  document.getElementById('back-home').onclick = ()=> showView('home');
  document.getElementById('back-to-home').onclick = ()=> showView('home');
  document.getElementById('reset-data').onclick = resetData;
  document.getElementById('start-topic-test').onclick = ()=> {
    if(state.selectedTopics.length===0){
      if(!confirm('No topics selected — start full subject test instead?')) return;
      startTest(true);
    } else startTest(false);
  };
  document.getElementById('start-full-test').onclick = ()=> startTest(true);
  document.getElementById('next-q').onclick = ()=> { if(state.currentQ < state.questions.length-1){ state.currentQ++; renderTest(); } };
  document.getElementById('prev-q').onclick = ()=> { if(state.currentQ>0){ state.currentQ--; renderTest(); } };
  document.getElementById('submit-test').onclick = ()=> { if(confirm('Finish test and submit?')) submitTest(false); };

  // keyboard navigation
  document.addEventListener('keydown', (e)=> {
    if(state.view!=='test') return;
    if(e.key==='ArrowRight') document.getElementById('next-q').click();
    if(e.key==='ArrowLeft') document.getElementById('prev-q').click();
    if(e.key==='Enter') document.getElementById('submit-test').click();
  });

  // init
  renderSubjects();
  showView('home');

})();

const toggleBtn = document.getElementById("themeToggle");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  toggleBtn.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    toggleBtn.textContent = "🌞";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleBtn.textContent = "🌙";
  }
});
