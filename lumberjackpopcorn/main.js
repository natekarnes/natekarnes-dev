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

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
