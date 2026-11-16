/* ---------- contact form ---------- */
(() => {
  const form = document.getElementById('cf'), status = document.getElementById('cfStatus'), btn = document.getElementById('cfBtn');
  const name = document.getElementById('cf-name'), email = document.getElementById('cf-email'), msg = document.getElementById('cf-msg');
  const say = (t, cls = '') => { status.textContent = t; status.className = 'cf-status ' + cls; };
  [name, email, msg].forEach(f => f.addEventListener('input', () => f.classList.remove('bad')));

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const n = name.value.trim(), m = email.value.trim(), t = msg.value.trim();
    const okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m);
    name.classList.toggle('bad', !n); email.classList.toggle('bad', !okEmail); msg.classList.toggle('bad', !t);
    if (!n || !okEmail || !t) return say('Please fill in your name, a valid email and a message.', 'err');

    btn.disabled = true; say('Sending…');
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error();
      form.reset(); say('Thank you! Your message was sent.', 'ok');
    } catch {
      say('Could not send. Please try again or email me directly.', 'err');
    } finally {
      btn.disabled = false;
    }
  });
})();
