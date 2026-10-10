// Creates a Square-hosted checkout page for the shop cart and returns its URL.
//
// The browser sends { items: [{ id: <Square item variation ID>, qty: <number> }] }.
// Prices come from the Square catalog, never from the browser, so they can't be tampered with.
//
// Environment variables (set in Netlify > Site configuration > Environment variables):
//   SQUARE_ACCESS_TOKEN   required. From the Square Developer Dashboard. Never commit this.
//   SQUARE_LOCATION_ID    required. The Square location the orders belong to.
//   SQUARE_ENVIRONMENT    "production" (default) or "sandbox" for test payments.
//   SHIPPING_FEE_CENTS    required. Standard shipping charge per order, in cents (e.g. 1000). Use 0
//                         for free shipping. Checkout stays off while it's missing.
//   STICKER_SHIPPING_CENTS optional. Shipping for sticker-only orders, in cents (default 300).
//   FREE_SHIPPING_OVER_CENTS optional. Orders with a subtotal at or above this ship free
//                         (default 5000 = $50). Use 0 to turn free shipping off.
//   SITE_URL              e.g. https://lumberjackpopcorn.com (falls back to Netlify's URL).

// Items that can be bought online, by Square item variation ID, and what kind of item each is
// (stickers ship cheaper). Keep in sync with products.js.
const SELLABLE = new Map([
  ['HFUBU2BIG6XBI67C2CSY4NER', 'popcorn'], // Original Kettle Popcorn
  ['JNMLFY7D7YG5DYABV5NJS4P4', 'popcorn'], // Salted Caramel Popcorn
  ['KZ3BU6NBZB2AKGRX7KAL7QKP', 'popcorn'], // Butter Popcorn
  ['KH54HPWGNDE6DG7MYYWDKSH3', 'popcorn'], // Jalapeño Cheddar Popcorn
  ['AP2JNVKZXUZXBBXRKUGKWVHZ', 'popcorn'], // White Cheddar Popcorn
  ['ZYNSXG2CCQIGI3VIQ2F7LATQ', 'seasoning'], // Signature Seasoning (8 oz)
  ['UIIV2ED67RW5PSMXJGLHSOQD', 'sticker'], // Lumberjack Logo Sticker
  ['B7X63QTUY7WZAZ7B6IACOEAD', 'sticker'], // Original Kettle Bag Sticker
  ['UB3PRJSNTQRB7NLYAODTV54O', 'sticker'], // Salted Caramel Bag Sticker
  ['S6BVKKXLAOQTWCCTFM4OAD2Q', 'sticker'], // Popcorn Trailer Sticker
  ['TLJ3NH23AHCYBIUDWT24JCIS', 'sticker'], // Bigfoot Bag Hug Sticker
  ['3HUYZFF7EPQNJTJLRF3THC2O', 'sticker'], // Bigfoot Cheers Sticker
  ['AXLXG7ZAI3HRPWEH275G5GXX', 'sticker'], // Bigfoot Popcorn Gulp Sticker
  ['XDDUAZBR4BSYG2EF656CAKXY', 'sticker'], // Bigfoot Lumberjack Sticker (Etcetera Collab)
  ['ZSHZXW56ECQUUMBO43LQSUZ7', 'sticker'], // Popcorn Bag Buddy Sticker
  ['ECROV4HQOVVIROF4LLR4LWS7', 'merch'], // Enamel Camp Mug
  ['JME7UDDYPCYYUCALP2GXLDAO', 'merch'], // Popcorn Earrings
]);

const MAX_QTY = 20;
const SQUARE_VERSION = '2024-10-17';

const json = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

export function validateItems(items) {
  if (!Array.isArray(items) || items.length === 0) return 'Your cart is empty.';
  if (items.length > SELLABLE.size) return 'Too many items in cart.';
  const seen = new Set();
  for (const item of items) {
    if (!item || !SELLABLE.has(item.id)) return 'One of the items in your cart is no longer available.';
    if (seen.has(item.id)) return 'Duplicate item in cart.';
    seen.add(item.id);
    if (!Number.isInteger(item.qty) || item.qty < 1 || item.qty > MAX_QTY) {
      return `Quantities must be between 1 and ${MAX_QTY}.`;
    }
  }
  return null;
}

// Free over the threshold; otherwise sticker-only orders get the cheaper rate.
// subtotalCents is null when Square prices couldn't be looked up, which never earns free shipping.
export function shippingFor(items, subtotalCents, { standardCents, stickerCents, freeOverCents }) {
  if (freeOverCents > 0 && subtotalCents != null && subtotalCents >= freeOverCents) return 0;
  if (items.every((i) => SELLABLE.get(i.id) === 'sticker')) return Math.min(stickerCents, standardCents);
  return standardCents;
}

// Subtotal in cents using the prices in the Square catalog (not the browser's), or null on failure.
async function squareSubtotal(items, { base, token }) {
  try {
    const res = await fetch(`${base}/v2/catalog/batch-retrieve`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Square-Version': SQUARE_VERSION,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ object_ids: items.map((i) => i.id) }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) return null;
    const price = new Map((data.objects || []).map((o) => [o.id, o.item_variation_data?.price_money?.amount]));
    let total = 0;
    for (const i of items) {
      const cents = price.get(i.id);
      if (!Number.isInteger(cents)) return null;
      total += cents * i.qty;
    }
    return total;
  } catch {
    return null;
  }
}

export function buildPaymentLinkRequest(items, { locationId, siteUrl, shippingCents, idempotencyKey }) {
  const checkoutOptions = {
    ask_for_shipping_address: true,
    redirect_url: `${siteUrl.replace(/\/+$/, '')}/order-thanks.html`,
    allow_tipping: false,
  };
  if (shippingCents > 0) {
    checkoutOptions.shipping_fee = {
      name: 'Shipping',
      charge: { amount: shippingCents, currency: 'USD' },
    };
  }
  return {
    idempotency_key: idempotencyKey,
    order: {
      location_id: locationId,
      line_items: items.map((i) => ({ catalog_object_id: i.id, quantity: String(i.qty) })),
      pricing_options: { auto_apply_taxes: true },
    },
    checkout_options: checkoutOptions,
    payment_note: 'Online order from lumberjackpopcorn.com',
  };
}

export default async (req) => {
  if (req.method !== 'POST') return json(405, { error: 'Method not allowed.' });

  const env = (k) => (globalThis.Netlify?.env?.get(k) ?? process.env[k] ?? '').trim();
  const token = env('SQUARE_ACCESS_TOKEN');
  const locationId = env('SQUARE_LOCATION_ID');
  const shippingRaw = env('SHIPPING_FEE_CENTS');
  if (!token || !locationId || !/^\d+$/.test(shippingRaw)) {
    return json(503, { error: 'Online checkout is not set up yet. Please use the order form below.' });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return json(400, { error: 'Invalid request.' });
  }
  const problem = validateItems(body?.items);
  if (problem) return json(400, { error: problem });

  const base = env('SQUARE_ENVIRONMENT') === 'sandbox'
    ? 'https://connect.squareupsandbox.com'
    : 'https://connect.squareup.com';
  const siteUrl = env('SITE_URL') || env('URL') || new URL(req.url).origin;
  const cents = (k, fallback) => (/^\d+$/.test(env(k)) ? parseInt(env(k), 10) : fallback);
  const shippingCents = shippingFor(body.items, await squareSubtotal(body.items, { base, token }), {
    standardCents: parseInt(shippingRaw, 10),
    stickerCents: cents('STICKER_SHIPPING_CENTS', 300),
    freeOverCents: cents('FREE_SHIPPING_OVER_CENTS', 5000),
  });

  const payload = buildPaymentLinkRequest(body.items, {
    locationId,
    siteUrl,
    shippingCents,
    idempotencyKey: crypto.randomUUID(),
  });

  try {
    const res = await fetch(`${base}/v2/online-checkout/payment-links`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Square-Version': SQUARE_VERSION,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || !data?.payment_link?.url) {
      console.error('Square checkout error', res.status, JSON.stringify(data?.errors || data));
      return json(502, { error: 'We couldn\'t start checkout. Please try again in a moment.' });
    }
    return json(200, { url: data.payment_link.url });
  } catch (err) {
    console.error('Square checkout request failed', err);
    return json(502, { error: 'We couldn\'t reach our payment provider. Please try again in a moment.' });
  }
};

export const config = { path: '/api/checkout' };
