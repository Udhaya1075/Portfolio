/* =====================================================
   UI — shared helpers + page-to-page sliding
   Scroll / touchpad / swipe / arrow keys move between pages,
   and each page slides in and out. You normally never edit this file.
===================================================== */
const ORDER = ['index', 'skills', 'projects', 'journey', 'creative', 'contact'];
const file = (location.pathname.split('/').pop() || 'index.html').replace('.html', '') || 'index';
let cur = Math.max(0, ORDER.indexOf(file));
const page = document.querySelector('.page');
const loadedAt = Date.now();
let busy = false;

const store = {
  get() { try { const v = sessionStorage.getItem('slideDir'); sessionStorage.removeItem('slideDir'); return v; } catch (e) { const v = window.name; window.name = ''; return v; } },
  set(v) { try { sessionStorage.setItem('slideDir', v); } catch (e) { window.name = v; } }
};

function navigate(i) {
  if (i < 0 || i >= ORDER.length || i === cur || busy || !page) return;
  busy = true;
  const next = i > cur;
  store.set(next ? 'next' : 'prev');
  page.style.transition = 'transform .35s ease-in, opacity .35s ease-in';
  page.style.transform = 'translateY(' + (next ? '-' : '') + '100vh)';
  page.style.opacity = '0';
  setTimeout(() => { location.href = ORDER[i] + '.html'; }, 350);
}

window.UI = {
  esc: s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),
  goTo: i => navigate(i)
};

/* INTRO: start the page hidden, then switch it on — this slides it in
   AND replays every animation on the page (skills rings, titles, cards) */
(() => {
  if (!page) return;
  const dir = store.get();
  page.classList.remove('active');
  page.classList.toggle('past', dir === 'prev');          // comes in from the top when going back
  page.style.transition = 'transform .55s cubic-bezier(.22,.8,.3,1), opacity .55s ease-out';
  void page.offsetHeight;
  requestAnimationFrame(() => requestAnimationFrame(() => {
    page.classList.remove('past');
    page.classList.add('active');
    setTimeout(() => { page.style.transition = ''; }, 700);
  }));
})();

/* coming back with the browser Back button */
addEventListener('pageshow', e => {
  if (e.persisted && page) { busy = false; page.removeAttribute('style'); page.classList.add('active'); }
});

/* can the area under the pointer still scroll? */
function scrollState(el) {
  while (el && el !== document.body && el.nodeType === 1) {
    const oy = getComputedStyle(el).overflowY;
    if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight + 2) {
      return { up: el.scrollTop > 2, down: el.scrollTop + el.clientHeight < el.scrollHeight - 2 };
    }
    el = el.parentElement;
  }
  return { up: false, down: false };
}

/* mouse wheel + touchpad: add up small scroll steps (touchpads send many tiny ones) */
let acc = 0, accT = 0;
addEventListener('wheel', e => {
  if (busy || Date.now() - loadedAt < 700) return;
  let dy = e.deltaY;
  if (e.deltaMode === 1) dy *= 33;                  // Firefox sends "lines"
  else if (e.deltaMode === 2) dy *= innerHeight;
  const s = scrollState(e.target);
  if (dy > 0 ? s.down : s.up) { acc = 0; return; }  // let the page scroll inside first
  const now = Date.now();
  if (now - accT > 250) acc = 0;
  accT = now;
  acc += dy;
  if (Math.abs(acc) >= 40) { const d = acc > 0 ? 1 : -1; acc = 0; navigate(cur + d); }
}, { passive: true });

/* phone swipe up / down */
let ty = 0, tx = 0, tState = { up: false, down: false };
addEventListener('touchstart', e => {
  ty = e.touches[0].clientY; tx = e.touches[0].clientX; tState = scrollState(e.target);
}, { passive: true });
addEventListener('touchend', e => {
  const dy = ty - e.changedTouches[0].clientY, dx = tx - e.changedTouches[0].clientX;
  if (Math.abs(dy) < 60 || Math.abs(dy) < Math.abs(dx)) return;
  if (dy > 0 ? tState.down : tState.up) return;
  navigate(cur + (dy > 0 ? 1 : -1));
}, { passive: true });

/* arrow keys / Page Up / Page Down */
document.addEventListener('keydown', e => {
  if (/INPUT|TEXTAREA|SELECT/.test((e.target && e.target.tagName) || '')) return;
  if (e.key === 'ArrowDown' || e.key === 'PageDown') navigate(cur + 1);
  if (e.key === 'ArrowUp' || e.key === 'PageUp') navigate(cur - 1);
});

/* right-side lines also slide */
document.querySelectorAll('.dot').forEach(a => a.addEventListener('click', e => {
  e.preventDefault();
  navigate(ORDER.indexOf((a.getAttribute('href') || '').replace('.html', '')));
}));
