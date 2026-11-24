/* =====================================================
   CREATIVE CORNER — EDIT THE DATA BELOW
   • Add a photo: put the image in assets/crochet/ (or assets/drawings/)
     and set img:'assets/crochet/your-file.jpg' on that piece.
   • Add a new piece: copy one { ... } line into its category.
   • Show / hide a whole category with  show:true / show:false
     (Drawing is OFF until you have photos — switch it on then.)
===================================================== */
const CREATIVE = [
  { id:'crochet', label:'Crochet', show:true,
    intro:'I crochet small handmade pieces: keychains, pouches and little desk things. Every piece is made stitch by stitch, and I’m slowly turning it into a small brand of my own.',
    items:[
      { name:'Nazar chain',        img:'assets/crochet/nazar.png', note:'' },
      { name:'Pencil stand',      img:'assets/crochet/pstand.png', note:'' },
      { name:'Bow keychain',      img:'assets/crochet/bow.png', note:'' },
      { name:'Spiderman keychain',emoji:'🕷️', img:'', note:'' },
      { name:'Coin pouch',        img:'assets/crochet/pouch.png', note:'' },
      { name:'Stress ball',       img:'assets/crochet/ball.png', note:'' },
      { name:'Hair band',         img:'assets/crochet/band.png', note:'' }
    ] },

];

const CUSTOM_ORDER_CTA = true;   // shows “Interested in a custom piece? Say hi” under the gallery

/* ---------- render (no need to edit below) ---------- */
(() => {
  const { esc } = UI;
  const cats = CREATIVE.filter(c => c.show && c.items.length);
  const tabs = document.getElementById('cTabs'), grid = document.getElementById('cGrid');
  const intro = document.getElementById('cIntro'), cta = document.getElementById('cCta');
  const lb = document.getElementById('lightbox');
  let cur = cats[0]?.id;

  function draw() {
    const c = cats.find(x => x.id === cur) || cats[0]; if (!c) return;
    tabs.style.display = cats.length > 1 ? '' : 'none';
    tabs.innerHTML = cats.map(x => `<button class="c-tab ${x.id === c.id ? 'on' : ''}" data-id="${x.id}">${esc(x.label)}</button>`).join('');
    intro.textContent = c.intro || '';
    grid.innerHTML = c.items.map((it, i) => `
      <button class="c-card glass reveal ${it.img ? 'has-img' : ''}" style="--i:${i}" data-i="${i}" ${it.img ? '' : 'tabindex="-1"'}>
        <div class="c-media">
   
          ${it.img ? `<img src="${esc(it.img)}" alt="${esc(it.name)}" loading="lazy" onerror="this.remove()"/>` : '<span class="c-soon">Photo coming soon</span>'}
        </div>
        <div class="c-info"><div class="c-name">${esc(it.name)}</div>${it.note ? `<div class="c-note">${esc(it.note)}</div>` : ''}</div>
      </button>`).join('');
    cta.innerHTML = CUSTOM_ORDER_CTA ? `Interested in a custom piece? <button type="button" id="cCtaBtn">Say hello</button>` : '';
  }

  tabs.addEventListener('click', e => { const b = e.target.closest('.c-tab'); if (b) { cur = b.dataset.id; draw(); } });
  cta.addEventListener('click', e => { if (e.target.id === 'cCtaBtn') UI.goTo(5); });

  grid.addEventListener('click', e => {
    const card = e.target.closest('.c-card'); if (!card) return;
    const it = cats.find(x => x.id === cur).items[+card.dataset.i];
    if (!it.img) return;
    lb.querySelector('img').src = it.img; lb.querySelector('img').alt = it.name; lb.querySelector('p').textContent = it.name;
    lb.classList.add('on');
  });
  lb.addEventListener('click', () => lb.classList.remove('on'));
  addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('on'); });
  draw();
})();
