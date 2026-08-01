// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Mobile nav (hamburger)
document.addEventListener('click', e => {
  const toggle = e.target.closest('.nav-toggle');
  if (toggle) {
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    return;
  }
  if (document.body.classList.contains('nav-open') && e.target.closest('.site-nav a')) {
    document.body.classList.remove('nav-open');
    document.querySelector('.nav-toggle')?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
    document.body.classList.remove('nav-open');
    document.querySelector('.nav-toggle')?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
});
