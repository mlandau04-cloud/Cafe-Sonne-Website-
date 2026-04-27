// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('navLinks').classList.remove('open');
}
document.addEventListener('click', (e) => {
  const links = document.getElementById('navLinks');
  if (!e.target.closest('#nav')) links.classList.remove('open');
});

// Menu tabs
function showTab(id, btn) {
  document.querySelectorAll('.menu-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  btn.classList.add('active');
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.section-title, .about-body, .review-card, .menu-item, .info-item, .hours-table, .review-quotes blockquote, .about-stats')
  .forEach(el => { el.classList.add('reveal'); observer.observe(el); });

// Strip duplicate for seamless ticker
const strip = document.querySelector('.strip-inner');
if (strip) {
  strip.innerHTML += strip.innerHTML;
}
