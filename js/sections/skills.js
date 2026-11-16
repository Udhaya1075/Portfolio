/* =====================================================
   SKILLS — EDIT THE DATA BELOW
   • Add a card:  copy one { ... } block into SKILLS
   • level (0–100) draws the ring; leave it out for a card with no ring
   • Add a tool/skill: add its name to that card's  chips  list
===================================================== */
const SKILLS = [
  { icon:'🎨', title:'Graphic Design', note:'Posters, social media & event visuals',
    level:82, chips:['Canva', 'Adobe Photoshop', 'Figma'] },

  { icon:'📊', title:'Data Analysis', note:'From raw data to clear insights',
    level:75, chips:['Power BI', 'SQL', 'Python', 'Excel'] },

  { icon:'🤝', title:'Professional', note:'Leading teams and events',
    level:88, chips:['Communication', 'Leadership', 'Problem Solving', 'Management'] },

  { icon:'🧩', title:'Product Building', note:'Ideas into working apps, built with AI tools',
    chips:['AI-assisted building', 'Product thinking', 'Prototyping'] }
];

/* What I'm building right now. state: 'live' (in progress) or any other text (e.g. 'Idea stage').
   Delete a line to hide it. */
const BUILDING = [
  { icon:'🧿', name:'FocBee', state:'In progress', live:true, desc:'A focus app that limits distracting apps and keeps goals on track.' },
  { icon:'🌐', name:'VirchX', state:'Idea stage',  live:false, desc:'An interactive 3D world for group discussions.' }
];

const LEARNING = ['Real-time apps', 'Business Management', 'Digital Marketing'];

/* ---------- render (no need to edit below) ---------- */
(() => {
  const { esc } = UI;
  document.getElementById('skillGrid').innerHTML = SKILLS.map((c, i) => `
    <article class="s-card glass reveal" style="--i:${i}">
      <div class="ring">
        ${c.level != null ? `<svg viewBox="0 0 40 40" aria-hidden="true"><circle class="ring-bg" cx="20" cy="20" r="17" pathLength="100"/><circle class="ring-fg" cx="20" cy="20" r="17" pathLength="100" style="--w:${+c.level}"/></svg>` : `<svg viewBox="0 0 40 40" aria-hidden="true"><circle class="ring-bg" cx="20" cy="20" r="17" pathLength="100" stroke-dasharray="3 4"/></svg>`}
        <div class="ring-in"><span class="ring-ico" aria-hidden="true">${c.icon}</span>${c.level != null ? `<span class="ring-pct">${+c.level}%</span>` : ''}</div>
      </div>
      <h3 class="s-title">${esc(c.title)}</h3>
      ${c.note ? `<p class="s-note">${esc(c.note)}</p>` : ''}
      <div class="s-chips">${c.chips.map(t => `<span class="s-chip">${esc(t)}</span>`).join('')}</div>
    </article>`).join('');

  document.getElementById('buildPanel').innerHTML = `
    <div class="build-lbl">Right now<b>What I’m building</b></div>
    <div class="build-items">${BUILDING.map(b => `
      <div class="b-item"><span class="b-ico" aria-hidden="true">${b.icon}</span>
        <div><div class="b-name">${esc(b.name)}<span class="b-state ${b.live ? 'live' : ''}">${esc(b.state)}</span></div>
        <p class="b-desc">${esc(b.desc)}</p></div></div>`).join('')}</div>
    <div class="learn"><span class="build-lbl">Learning</span>${LEARNING.map(l => `<span class="learn-item">${esc(l)}</span>`).join('')}</div>`;
  document.getElementById('buildPanel').style.setProperty('--i', SKILLS.length);
})();
