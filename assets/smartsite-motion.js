/* SmartSite Motion Pack v1 — no dependency, safe progressive enhancement */
(() => {
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const revealNodes = [...document.querySelectorAll('.ss-reveal, .ss-reveal-item')];

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealNodes.forEach((el) => el.classList.add('ss-in'));
    return;
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('ss-in');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });

  revealNodes.forEach((el) => revealObserver.observe(el));

  const counters = [...document.querySelectorAll('[data-ss-count]')];
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.35 });
  counters.forEach((el) => counterObserver.observe(el));

  function animateCounter(el) {
    const target = Number(el.dataset.ssCount || 0);
    if (!Number.isFinite(target)) return;
    const duration = Math.min(1800, Math.max(700, Number(el.dataset.ssDuration || 1100)));
    const prefix = el.dataset.ssPrefix || '';
    const suffix = el.dataset.ssSuffix || '';
    const start = performance.now();
    const initial = Number(el.dataset.ssStart || 0);
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    requestAnimationFrame(function tick(now) {
      const t = Math.min(1, (now - start) / duration);
      const value = Math.round(initial + (target - initial) * ease(t));
      el.textContent = `${prefix}${value.toLocaleString()}${suffix}`;
      if (t < 1) requestAnimationFrame(tick);
    });
  }
})();
