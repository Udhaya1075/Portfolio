/* =====================================================
   PROJECTS — EDIT THE DATA BELOW
   Add as many as you like: pages and the right-side dots
   are created automatically (6 per page on desktop).
   Copy a { ... } block, paste it at the TOP to show newest first.
===================================================== */
const PROJECTS = [
  { icon:'📊', title:'Data Analyst Intern', meta:'Zetheta Algorithms Pvt Ltd · Virtual · Completed 19 Jun 2026',
    tags:['Data Analytics','Financial Risk','Dashboards'],
    desc:'Analysed securitisation and financial risk data to support risk assessment and reporting. Built dashboards and structured presentations to explain the findings to stakeholders.',
    link:'https://github.com/Udhaya1075/securitisation-analytics' },

  { icon:'🛒', title:'Quantium Data Analytics Job Simulation', meta:'Forage · Completed 4 Jul 2026',
    tags:['Retail Analytics','Data Analysis'],
    desc:'Analysed loyalty transaction data across three trial stores, evaluated a sales trial to recommend rollout decisions, and presented the insights using the Pyramid Principle.',
    link:'https://github.com/Udhaya1075/quantium-retail-analytics' },

  { icon:'🔎', title:'Data Analytics Intern', meta:'CodeAlpha · Virtual Internship',
    tags:['Python','ParseHub','Web Scraping','Visualization'],
    desc:'Scraped Naukri job listings with ParseHub, cleaned and processed the dataset, and created visualisations in Python.',
    link:'https://github.com/Udhaya1075/codealpha_tasks' },

  { icon:'🏬', title:'Retail Shop Dashboard', meta:'Personal project',
    tags:['Power BI','Excel'],
    desc:'End-to-end analysis: generated a dataset with ChatGPT and Excel, then built Power BI visuals showing sales trends, product performance and customer insights.',
    link:'https://github.com/Udhaya1075/Retail_Shop_Dashboard' },

  { icon:'📈', title:'E-Commerce Sales Analysis', meta:'Personal project',
    tags:['Python','Matplotlib','Excel'],
    desc:'Finance dashboard tracking income, expenses and savings, with data cleaning, extraction and Matplotlib visualisations in Python and Excel.',
    link:'https://github.com/Udhaya1075/E-Commerce_Sales_Analysis' },

  { img:'assets/projects/focbee-icon.jpeg', title:'FocBee', meta:'Android app · Personal project',
    tags:['Flutter','Kotlin','Supabase','Android'],
    desc:'An Android app that limits time on distracting apps, tracks daily goals and has an AI companion that keeps you focused. I designed the screens, planned the features and built it with AI tools.',
    links:[
      { text:'Watch demo ↗',  url:'https://drive.google.com/file/d/1YJGe3aK-Wx9ddBg7WC6SQKYDr0M5_Ig4/view?usp=sharing' },
      { text:'Screenshots ↗', url:'https://drive.google.com/drive/folders/1eD2QEGqc6BOMUwc2fMGuXYPnsOI2GC2a?usp=sharing' },
      { text:'Try the app ↗', url:'https://drive.google.com/file/d/1JsXJYY64BoaUovdwryQ6vJ_X91nJFLDX/view?usp=sharing' }
    ] },

  /* ---- TEMPLATE: copy this, remove the comment marks, and add a comma after the block above ----
  ,{ icon:'✨', title:'Project name', meta:'Where / when',
    tags:['Tag 1','Tag 2'],
    desc:'One or two sentences about what you did and what it showed.',
    link:'https://github.com/…' }
  ------------------------------------------------------------------------------------------------ */
];

/* ---------- render (no need to edit below) ---------- */
(() => {
  const { esc } = UI;
  const grid = document.getElementById('projGrid');
  const pager = document.getElementById('projPager');
  let page = 0, firstIndex = 0;

  const perPage = () => innerWidth > 1024 ? 6 : innerWidth > 600 ? 4 : 3;

  function render(animate = true) {
    const pp = perPage(), pages = Math.max(1, Math.ceil(PROJECTS.length / pp));
    page = Math.min(Math.floor(firstIndex / pp), pages - 1);
    const items = PROJECTS.slice(page * pp, page * pp + pp);

    grid.innerHTML = items.map((p, i) => `
      <article class="p-card glass ${animate ? 'reveal' : ''}" style="--i:${i}">
        <div class="p-card-head">
          <div class="p-icon ${p.img ? 'has-img' : ''}" aria-hidden="true">${p.img ? `<img src="${esc(p.img)}" alt="" class="p-img">` : (p.icon || '📁')}</div>
          <div class="p-tags">${(p.tags || []).map(t => `<span class="chip">${esc(t)}</span>`).join('')}</div>
        </div>
        <h3 class="p-title">${esc(p.title)}</h3>
        ${p.meta ? `<p class="p-meta">${esc(p.meta)}</p>` : ''}
        <p class="p-desc">${esc(p.desc)}</p>
        <div class="p-links">${(p.links || (p.link ? [{ text:'View on GitHub ↗', url:p.link }] : [])).map(l => `<a class="p-link" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.text)}</a>`).join('')}</div>      </article>`).join('');

    pager.style.display = pages > 1 ? '' : 'none';
    pager.innerHTML = `
      <button class="pg-btn" id="pgPrev" aria-label="Previous projects" ${page === 0 ? 'disabled' : ''}>←<span>Prev</span></button>
      <div class="pg-dots">${Array.from({ length: pages }, (_, i) =>
        `<button class="pg-dot ${i === page ? 'on' : ''}" data-p="${i}" aria-label="Projects page ${i + 1}"></button>`).join('')}</div>
      <span class="pg-count">${page + 1} / ${pages}</span>
      <button class="pg-btn" id="pgNext" aria-label="Next projects" ${page === pages - 1 ? 'disabled' : ''}><span>Next</span>→</button>`;
  }
  function setPage(n) {
    const pp = perPage(), pages = Math.ceil(PROJECTS.length / pp);
    if (n < 0 || n >= pages) return;
    grid.className = 'proj-grid ' + (n > page ? 'dir-next' : 'dir-prev'); firstIndex = n * pp; render();
  }

  pager.addEventListener('click', e => {
    const dot = e.target.closest('.pg-dot'); if (dot) return setPage(+dot.dataset.p);
    if (e.target.closest('#pgPrev')) setPage(page - 1);
    if (e.target.closest('#pgNext')) setPage(page + 1);
  });

  /* swipe left/right on the grid, or ← → keys while on this page */
  let sx = 0;
  grid.addEventListener('touchstart', e => (sx = e.touches[0].clientX), { passive: true });
  grid.addEventListener('touchend', e => {
    const dx = sx - e.changedTouches[0].clientX;
    if (Math.abs(dx) > 60) setPage(page + (dx > 0 ? 1 : -1));
  }, { passive: true });
  addEventListener('keydown', e => {
    if (!document.getElementById('p3').classList.contains('active')) return;
    if (e.key === 'ArrowRight') setPage(page + 1);
    if (e.key === 'ArrowLeft') setPage(page - 1);
  });

  let rt; addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => render(false), 150); });
  render();
})();
