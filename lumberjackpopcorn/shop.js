const grid = document.getElementById('products');
const itemsField = document.getElementById('order-items');

const STORE = SHOPIFY_STORE.trim().replace(/^https?:\/\//, '').replace(/\/+$/, '');
const isOnline = (p) => Boolean(STORE && p.shopifyVariantId && !p.comingSoon);
const anyOnline = PRODUCTS.some(isOnline);
const money = (n) => `$${n.toFixed(2)}`;

// ---------- Cart (only used once Shopify is connected) ----------
// Stored as { variantId: quantity } in this browser only.
const CART_KEY = 'ljp-cart';
let cart = {};
try { cart = JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch (e) { cart = {}; }

const byVariant = new Map(PRODUCTS.filter(isOnline).map((p) => [String(p.shopifyVariantId), p]));
// Drop anything left over from products that were removed or changed.
Object.keys(cart).forEach((id) => { if (!byVariant.has(id) || !(cart[id] > 0)) delete cart[id]; });

const cartDialog = document.getElementById('cart');
const cartBtn = document.querySelector('.cart-btn');
const cartList = cartDialog.querySelector('.cart-items');

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch (e) { /* storage unavailable */ }
  renderCart();
}

function setQty(id, qty) {
  if (qty > 0) cart[id] = Math.min(qty, 99);
  else delete cart[id];
  saveCart();
}

function renderCart() {
  const entries = Object.entries(cart);
  const count = entries.reduce((n, [, q]) => n + q, 0);
  document.getElementById('cart-count').textContent = count;

  cartList.innerHTML = '';
  let subtotal = 0;
  let allPriced = true;
  entries.forEach(([id, qty]) => {
    const p = byVariant.get(id);
    if (p.price != null) subtotal += p.price * qty;
    else allPriced = false;

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

  document.getElementById('cart-subtotal').textContent = allPriced ? money(subtotal) : 'See checkout';
  cartDialog.classList.toggle('is-empty', entries.length === 0);
}

// Shopify cart permalink: https://STORE/cart/VARIANT:QTY,VARIANT:QTY
function checkoutUrl() {
  const lines = Object.entries(cart).map(([id, qty]) => `${id}:${qty}`).join(',');
  return `https://${STORE}/cart/${lines}`;
}

document.getElementById('checkout').addEventListener('click', () => {
  if (Object.keys(cart).length) window.location.href = checkoutUrl();
});
cartBtn.addEventListener('click', () => cartDialog.showModal());
cartDialog.querySelector('.cart-close').addEventListener('click', () => cartDialog.close());
// Close when clicking the backdrop.
cartDialog.addEventListener('click', (e) => { if (e.target === cartDialog) cartDialog.close(); });

// ---------- Order request form (fallback when not on Shopify) ----------
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
    ? `<img src="${p.image}" alt="" loading="lazy">`
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

  const btn = card.querySelector('button');
  if (p.comingSoon) {
    btn.disabled = true;
  } else if (isOnline(p)) {
    btn.addEventListener('click', () => {
      const id = String(p.shopifyVariantId);
      setQty(id, (cart[id] || 0) + 1);
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
