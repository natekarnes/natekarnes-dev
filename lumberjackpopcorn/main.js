// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');

function setMenu(open) {
  links.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

if (toggle && links) {
  toggle.addEventListener('click', () => setMenu(!links.classList.contains('open')));
  links.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') setMenu(false);
  });
}

// Frosted header while it sits over the painted hero; solid green once scrolled past it.
const header = document.querySelector('.site-header');
const hero = document.querySelector('.hero, .page-hero');
if (header && hero) {
  const update = () => {
    const overHero = hero.getBoundingClientRect().bottom > header.offsetHeight;
    header.classList.toggle('is-over-hero', overHero && !links.classList.contains('open'));
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  if (toggle) toggle.addEventListener('click', update);
}

// "Book the trailer" style links pre-select the matching option in the quote form.
document.querySelectorAll('[data-order-type]').forEach((link) => {
  link.addEventListener('click', () => {
    const select = document.querySelector('select[name="order-type"]');
    if (select) select.value = link.dataset.orderType;
  });
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
