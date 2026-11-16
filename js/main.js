/* =====================================================
   MAIN — page navigation (dots, wheel, swipe, keys, #hash)
   You normally never need to edit this file.
===================================================== */
window.UI = {
  esc: s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),
  goTo: i => go(i)
};

const pages = [...document.querySelectorAll('.page')];
const dots  = [...document.querySelectorAll('.dot')];
const label = document.getElementById('pageLabel');
let cur = 0, lock = false;

function paint() {
  pages.forEach((p, i) => {
    p.classList.toggle('active', i === cur);
    p.classList.toggle('past', i < cur);
  });
  dots.forEach((d, i) => d.classList.toggle('active', i === cur));
  label.textContent = dots[cur].title;
  history.replaceState(null, '', '#' + pages[cur].dataset.name);
}
function go(i) {
  if (i < 0 || i >= pages.length || i === cur || lock) return;
  cur = i; lock = true; paint();
  setTimeout(() => (lock = false), 850);
}

/* Can the element under the pointer still scroll in that direction? */
function scrollState(el) {
  while (el && el !== document.body) {
    const oy = getComputedStyle(el).overflowY;
    if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight + 2) {
      return { up: el.scrollTop > 2, down: el.scrollTop + el.clientHeight < el.scrollHeight - 2 };
    }
    el = el.parentElement;
  }
  return { up: false, down: false };
}

dots.forEach(d => d.addEventListener('click', () => go(+d.dataset.page)));

window.addEventListener('wheel', e => {
  if (Math.abs(e.deltaY) < 25) return;
  const s = scrollState(e.target);
  if (e.deltaY > 0 ? s.down : s.up) return;
  go(cur + (e.deltaY > 0 ? 1 : -1));
}, { passive: true });

let ty = 0, tx = 0, tState = { up: false, down: false };
window.addEventListener('touchstart', e => {
  ty = e.touches[0].clientY; tx = e.touches[0].clientX; tState = scrollState(e.target);
}, { passive: true });
window.addEventListener('touchend', e => {
  const dy = ty - e.changedTouches[0].clientY, dx = tx - e.changedTouches[0].clientX;
  if (Math.abs(dy) < 60 || Math.abs(dy) < Math.abs(dx)) return;
  if (dy > 0 ? tState.down : tState.up) return;
  go(cur + (dy > 0 ? 1 : -1));
}, { passive: true });

window.addEventListener('keydown', e => {
  if (/INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
  if (['ArrowDown', 'PageDown'].includes(e.key)) go(cur + 1);
  if (['ArrowUp', 'PageUp'].includes(e.key)) go(cur - 1);
});

/* open directly on a section, e.g. index.html#contact */
const start = pages.findIndex(p => '#' + p.dataset.name === location.hash);
if (start > 0) { cur = start; paint(); }
