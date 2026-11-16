/* =====================================================
   JOURNEY — EDIT THE DATA BELOW (newest first)
   type: 'work' | 'leadership' | 'learning' | 'design' | 'education'
   Set now:true on whatever you're doing right now (glowing dot).
   New types appear as new filter buttons automatically.
===================================================== */
const JOURNEY = [
  { when:'2026 – 2027', type:'leadership', now:true, title:'Secretary', place:'Association ASPYRA OF AIDS',
    story:'Leading the team and keeping the association’s files and records organised.', tags:['Leadership','Team management'] },

  { when:'Jul 2026', type:'learning', title:'Quantium Data Analytics Job Simulation', place:'Forage · Virtual',
    story:'Studied loyalty transaction data from three trial stores and recommended whether the sales trial should roll out.',
    cert:'assets/certificates/quantium.pdf', tags:['Retail analytics','Pyramid Principle'] },

  { when:'Jun 2026', type:'work', title:'Data Analyst Intern', place:'Zetheta Algorithms Pvt Ltd · Virtual',
    story:'Analysed securitisation and financial risk data and built dashboards to share risk insights.' ,
    cert:'assets/certificates/Zethata_Certificate.pdf', tags:['Financial risk','Dashboards']},

  { when:'2026', type:'work', title:'Data Analytics Intern', place:'CodeAlpha · Virtual',
    story:'Scraped job listings from Naukri, cleaned the data and turned it into Python visualisations.',
    cert:'assets/certificates/codealpha.pdf', tags:['Web scraping','Python'] },

  { when:'2025 – 2026', type:'leadership', title:'Joint Secretary – Correspondence', place:'Rotaract Club VCET',
    story:'Handled all club communication, coordinated event logistics, and led and mentored the design team.', tags:['Communication','Events','Mentoring'] },

  { when:'2025', type:'work', title:'Data Analytics Intern', place:'Brainery Spot Technology, Coimbatore',
    story:'A 15-day intensive internship with hands-on practice in data analytics tools and workflows.',
    cert:'assets/certificates/Brainery_spot_technology.png', tags:['Analytics tools'] },

  { when:'2024 – 2026', type:'design', title:'Graphic Designer', place:'Rotaract Club VCET',
    story:'Designed 30+ posters and promotional pieces that helped boost engagement at club events.', 
    link:'https://drive.google.com/drive/u/3/folders/13soiztDIvNw5bvWmwxG2HHIlnHD7DgjU', linkText:'View Designs ↗', tags:['Posters','Canva','Visual design'] },

  { when:'2023 – 2027', type:'education', title:'B.Tech — Artificial Intelligence & Data Science', place:'Velalar College of Engineering and Technology, Tiruppur',
    story:'Final year. Coursework in Data Analytics, Machine Learning, Database Management and Statistical Analysis.', tags:['AI & DS'] }
];

/* "What I'm working towards" (edit freely) */
const GOALS = [
  'Land an internship and grow into a full-time data role',
  'Build a portfolio of meaningful, real-world projects',
  'Reach industry-level skill in analytics and BI',
  'Build products and a brand of my own'
];

/* Quick facts */
const FACTS = [
  { k:'Languages',     v:'English (Professional) · Tamil (Native)' },
  { k:'Available for', v:'Internships · Freelance · Full-time' },
  { k:'Domains',       v:'Data Analysis · BI · Product · Graphic Design' }
];

/* ---------- render (no need to edit below) ---------- */
(() => {
  const { esc } = UI;
  const LABELS = { work:'Work', leadership:'Leadership', learning:'Learning', design:'Design', education:'Education' };
  const filters = document.getElementById('jFilters');
  const tl = document.getElementById('timeline');
  let active = 'all';

  function draw() {
    const types = [...new Set(JOURNEY.map(j => j.type))];
    filters.innerHTML = ['all', ...types].map(t => {
      const n = t === 'all' ? JOURNEY.length : JOURNEY.filter(j => j.type === t).length;
      return `<button class="j-filter ${t === active ? 'on' : ''}" data-t="${t}">${t === 'all' ? 'All' : (LABELS[t] || t)}<small>${n}</small></button>`;
    }).join('');

    tl.innerHTML = JOURNEY.filter(j => active === 'all' || j.type === active).map((j, i) => `
      <div class="tl-item ${j.now ? 'now' : ''} reveal" style="--i:${i}">
        <span class="tl-dot"></span>
        <article class="tl-card glass">
          <div class="tl-top"><span class="tl-when">${esc(j.when)}</span><span class="tl-type ${esc(j.type)}">${esc(LABELS[j.type] || j.type)}</span></div>
          <h3 class="tl-role">${esc(j.title)}</h3>
          <p class="tl-where">${esc(j.place)}</p>
          <p class="tl-story">${esc(j.story)}</p>
          ${j.cert ? `<a class="tl-cert" href="${esc(j.cert)}" target="_blank" rel="noopener">View certificate ↗</a>` : ''}
          ${j.link ? `<a class="tl-cert" href="${esc(j.link)}" target="_blank" rel="noopener">${esc(j.linkText || 'View ↗')}</a>` : ''}


          ${j.tags?.length ? `<div class="tl-tags">${j.tags.map(t => `<span class="chip">${esc(t)}</span>`).join('')}</div>` : ''}
          

        </article>
      </div>`).join('');
  }
  filters.addEventListener('click', e => {
    const b = e.target.closest('.j-filter'); if (!b) return;
    active = b.dataset.t; draw();
  });
  draw();

  document.getElementById('jBottom').innerHTML = `
    <div class="j-box glass"><h4>Working towards</h4><ul class="j-goals">${GOALS.map(g => `<li>${esc(g)}</li>`).join('')}</ul></div>
    <div class="j-box glass"><h4>Quick facts</h4>${FACTS.map(f => `<div class="j-fact"><b>${esc(f.k)}</b>${esc(f.v)}</div>`).join('')}</div>`;
})();
