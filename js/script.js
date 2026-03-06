/* ====================================================
   VERTEX CAPITAL — script.js
==================================================== */

// ── SCROLL ANIMATIONS ───────────────────────────────
(() => {
  const els = document.querySelectorAll('[data-anim]');
  if (!els.length) return;

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.10 });

  els.forEach(el => io.observe(el));
})();

// ── TICKER LOGOS — duplicado para loop continuo ──────
(() => {
  const track = document.getElementById('logosTicker');
  if (!track || track.dataset.cloned === 'true') return;

  Array.from(track.children).forEach(item => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    track.appendChild(clone);
  });

  track.dataset.cloned = 'true';
})();