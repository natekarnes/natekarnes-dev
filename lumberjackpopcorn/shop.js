const grid = document.getElementById('products');
const itemsField = document.getElementById('order-items');

const isOnline = (p) => Boolean(ONLINE_CHECKOUT && p.squareVariationId && !p.comingSoon);
const anyOnline = PRODUCTS.some(isOnline);
const money = (n) => `$${n.toFixed(2)}`;

// ---------- Cart (used once ONLINE_CHECKOUT is on) ----------
// Stored as { squareVariationId: quantity } in this browser only.
const CART_KEY = 'ljp-cart';
const MAX_QTY = 20;
let cart = {};
try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch (e) { cart = {}; }

const byId = new Map(PRODUCTS.filter(isOnline).map((p) => [p.squareVariationId, p]));
// Drop anything left over from products that were removed or changed.
Object.keys(cart).forEach((id) => { if (!byId.has(id) || !(cart[id] > 0)) delete cart[id]; });

const cartDialog = document.getElementById('cart');
const cartBtn = document.querySelector('.cart-btn');
const cartList = cartDialog.querySelector('.cart-items');
const checkoutBtn = document.getElementById('checkout');
const checkoutError = document.getElementById('checkout-error');

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* storage unavailable */ }
  renderCart();
}

function setQty(id, qty) {
  if (qty > 0) cart[id] = Math.min(qty, MAX_QTY);
  else delete cart[id];
  saveCart();
}

function renderCart() {
  const entries = Object.entries(cart);
  document.getElementById('cart-count').textContent = entries.reduce((n, [, q]) => n + q, 0);

  cartList.innerHTML = '';
  let subtotal = 0;
  entries.forEach(([id, qty]) => {
    const p = byId.get(id);
    subtotal += (p.price || 0) * qty;

    const li = document.createElement('li');
    li.className = 'cart-item';
    li.innerHTML = `
      <div>
        <p class="cart-item-name"></p>
        <p class="cart-item-price">${p.price != null ? money(p.price) : ''}</p>
      </div>
      <div class="qty">
        <button type="button" data-d="-1" aria-label="Remove one">&minus;</button>
        <span aria-live="polite">${qty}</span>
        <button type="button" data-d="1" aria-label="Add one">+</button>
      </div>`;
    li.querySelector('.cart-item-name').textContent = p.name;
    li.querySelectorAll('.qty button').forEach((b) => {
      b.addEventListener('click', () => setQty(id, qty + Number(b.dataset.d)));
    });
    cartList.appendChild(li);
  });

  document.getElementById('cart-subtotal').textContent = money(subtotal);
  cartDialog.classList.toggle('is-empty', entries.length === 0);
}

// Sends the cart to our Netlify function, which asks Square for a secure checkout page.
async function startCheckout() {
  const items = Object.entries(cart).map(([id, qty]) => ({ id, qty }));
  if (!items.length) return;
  checkoutError.hidden = true;
  checkoutBtn.disabled = true;
  checkoutBtn.textContent = 'Opening secure checkout…';
  try {
    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data.url) throw new Error(data.error || 'Checkout is unavailable right now.');
    window.location.href = data.url;
  } catch (err) {
    checkoutError.textContent = err.message;
    checkoutError.hidden = false;
    checkoutBtn.disabled = false;
    checkoutBtn.textContent = 'Checkout';
  }
}

checkoutBtn.addEventListener('click', startCheckout);
cartBtn.addEventListener('click', () => cartDialog.showModal());
cartDialog.querySelector('.cart-close').addEventListener('click', () => cartDialog.close());
// Close when clicking the backdrop.
cartDialog.addEventListener('click', (e) => { if (e.target === cartDialog) cartDialog.close(); });

// ---------- Order request form (used while online checkout is off) ----------
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
  else if (isOnline(p)) label = 'Add to cart';

  card.innerHTML = `
    <div class="product-media">${media}</div>
    <div class="product-body">
      <p class="product-cat"></p>
      <h3></h3>
      <p class="product-desc"></p>
      <div class="product-foot">${price}<button class="btn btn-block" type="button">${label}</button></div>
    </div>`;
  card.querySelector('.product-cat').textContent = p.category;
  card.querySelector('h3').textContent = p.name;
  card.querySelector('.product-desc').textContent = p.description;

  const btn = card.querySelector('.product-foot .btn');
  if (p.comingSoon) {
    btn.disabled = true;
  } else if (isOnline(p)) {
    btn.addEventListener('click', () => {
      setQty(p.squareVariationId, (cart[p.squareVariationId] || 0) + 1);
      flash(btn, 'Added ✓');
    });
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
cartBtn.hidden = !anyOnline;
itemsField.required = !anyOnline;
if (anyOnline) renderCart();
