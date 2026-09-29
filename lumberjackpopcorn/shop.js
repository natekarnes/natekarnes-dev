const grid = document.getElementById('products');
const itemsField = document.getElementById('order-items');

function productCard(p) {
  const card = document.createElement('article');
  card.className = 'product';
  card.dataset.category = p.category;

  const media = p.image
    ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
    : `<div class="product-placeholder" aria-hidden="true">${p.icon || '🍿'}</div>`;
  const price = p.price != null ? `<span class="price">$${p.price.toFixed(2)}</span>` : '';

  let action;
  if (p.comingSoon) {
    action = '<button class="btn btn-block" disabled>Coming soon</button>';
  } else if (p.buyUrl) {
    action = `<a class="btn btn-block" href="${p.buyUrl}">Buy now</a>`;
  } else {
    action = '<button class="btn btn-block add-to-order" type="button">Add to order</button>';
  }

  card.innerHTML = `
    <div class="product-media">${media}</div>
    <div class="product-body">
      <p class="product-cat">${p.category}</p>
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <div class="product-foot">${price}${action}</div>
    </div>`;

  const add = card.querySelector('.add-to-order');
  if (add) {
    add.addEventListener('click', () => {
      addToOrder(p.name);
      add.textContent = 'Added ✓';
      setTimeout(() => { add.textContent = 'Add to order'; }, 1500);
    });
  }
  return card;
}

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
