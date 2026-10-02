const grid = document.getElementById('products');
const itemsField = document.getElementById('order-items');

const STORE_URL = SQUARE_STORE_URL.trim();
const isOnline = (p) => Boolean(p.squareUrl && !p.comingSoon);
const anyOnline = PRODUCTS.some(isOnline);
const money = (n) => `$${n.toFixed(2)}`;

// ---------- Order request form (fallback when a product isn't on Square yet) ----------
// Keeps a running "2 × Name" list in the order form's Items field.
function addToOrder(name) {
  const lines = itemsField.value.split('\n').filter(Boolean);
  const re = new RegExp(`^(\\d+) × ${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`);
  const i = lines.findIndex((l) => re.test(l));
  if (i >= 0) {
    lines[i] = `${Number(lines[i].match(re)[1]) + 1} × ${name}`;
  } else {
    lines.push(`1 × ${name}`);
  }
  itemsField.value = lines.join('\n');
}

// ---------- Product grid ----------
function flash(btn, text) {
  const original = btn.textContent;
  btn.textContent = text;
  setTimeout(() => { btn.textContent = original; }, 1500);
}

function productCard(p) {
  const card = document.createElement('article');
  card.className = 'product';
  card.dataset.category = p.category;

  const media = p.image
    ? `<img src="${p.image}" alt=""${p.illustration ? ' class="is-illustration"' : ''} loading="lazy">`
    : `<div class="product-placeholder" aria-hidden="true">${p.icon || '🍿'}</div>`;
  const price = p.price != null ? `<span class="price">${money(p.price)}</span>` : '';

  let label = 'Add to order';
  if (p.comingSoon) label = 'Coming soon';
  else if (isOnline(p)) label = 'Buy';

  card.innerHTML = `
    <div class="product-media">${media}</div>
    <div class="product-body">
      <p class="product-cat"></p>
      <h3></h3>
      <p class="product-desc"></p>
      <div class="product-foot">${price}${isOnline(p)
        ? `<a class="btn btn-block" href="${p.squareUrl}">${label}</a>`
        : `<button class="btn btn-block" type="button">${label}</button>`}</div>
    </div>`;
  card.querySelector('.product-cat').textContent = p.category;
  card.querySelector('h3').textContent = p.name;
  card.querySelector('.product-desc').textContent = p.description;

  const btn = card.querySelector('.product-foot .btn');
  if (p.comingSoon) {
    btn.disabled = true;
  } else if (isOnline(p)) {
    // Plain link to the Square product page; nothing to wire up.
  } else {
    btn.addEventListener('click', () => {
      addToOrder(p.name);
      flash(btn, 'Added ✓');
    });
  }
  return card;
}

PRODUCTS.forEach((p) => grid.appendChild(productCard(p)));

document.querySelectorAll('.filter').forEach((btn) => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    document.querySelectorAll('.filter').forEach((b) => {
      b.classList.toggle('is-active', b === btn);
      b.setAttribute('aria-pressed', b === btn);
    });
    grid.querySelectorAll('.product').forEach((card) => {
      card.hidden = f !== 'all' && card.dataset.category !== f;
    });
  });
});

// ---------- Online vs. offline page copy ----------
const mode = anyOnline ? 'online' : 'offline';
document.querySelectorAll('[data-when]').forEach((el) => { el.hidden = el.dataset.when !== mode; });
const cartLink = document.querySelector('.cart-btn');
if (cartLink && STORE_URL) { cartLink.href = STORE_URL; cartLink.hidden = false; }
itemsField.required = !anyOnline;
