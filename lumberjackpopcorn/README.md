# Lumberjack Popcorn — lumberjackpopcorn.com

A standalone static site (plain HTML/CSS/JS, no build step), separate from the
React app in the rest of this repo.

## Preview locally

```sh
cd lumberjackpopcorn
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy on Netlify

1. In Netlify, **Add new site → Import an existing project** and pick this repo.
2. Set **Base directory** to `lumberjackpopcorn`, leave **Build command** empty,
   and set **Publish directory** to `lumberjackpopcorn`.
3. Under **Domain management**, add `lumberjackpopcorn.com` as a custom domain
   and follow Netlify's DNS instructions at your domain registrar.

The contact form uses Netlify Forms, so submissions appear under **Forms** in the
Netlify dashboard (turn on email notifications there).

## Pages

- `index.html`: corporate landing page (services, "trusted by", quote form)
- `about.html`: about us and the founding story (Nate and Greg, 2019)
- `shop.html`: popcorn, seasonings, stickers, and merch
- `thanks.html`: shown after either form is submitted
- `order-thanks.html`: shown after a successful online checkout

Both forms (`corporate-quote` and `shop-order`) use Netlify Forms. Turn on
email notifications under **Forms** in the Netlify dashboard.

## Online checkout (Square)

Shoppers fill a cart on `shop.html`. **Checkout** calls a Netlify Function
(`netlify/functions/checkout.mjs`, served at `/api/checkout`) that asks Square
for a secure checkout page for that cart. The shopper pays and enters a
shipping address on Square's page, then lands back on `order-thanks.html`.
Orders show up in the Square dashboard. Prices always come from the Square
catalog, not the browser.

To switch it on:

1. In the Square Developer Dashboard (developer.squareup.com), create an
   application and copy its **Production access token**. (For a dry run, use
   the Sandbox token and `SQUARE_ENVIRONMENT=sandbox`; note the sandbox has
   its own separate catalog.)
2. In Netlify, under **Site configuration > Environment variables**, add:
   - `SQUARE_ACCESS_TOKEN`: the token (keep it secret; never commit it)
   - `SQUARE_LOCATION_ID`: `4JX3BDE45QNEB`
   - `SHIPPING_FEE_CENTS`: flat shipping per order in cents (`1000` = $10; `0` = free).
     Required: checkout shows an error while it's missing.
   - `SITE_URL`: `https://lumberjackpopcorn.com`
3. In `products.js`, set `ONLINE_CHECKOUT = true` and redeploy.

If you change the shipping fee, update the cart note in `shop.html` too.

While `ONLINE_CHECKOUT` is `false`, every product uses the order request form.
To sell a new product online, add it in Square, put its item variation ID in
`products.js` (`squareVariationId`), and add the same ID to `SELLABLE` in
`netlify/functions/checkout.mjs`. `comingSoon: true` shows a product without
letting people buy it. Keep `price` in `products.js` matching Square.

Taxes: Square applies the item's tax settings (popcorn and seasoning are set
non-taxable; stickers and merch taxable) once a tax rate is added in Square.

## Things to customize

- Prices in `products.js` (popcorn $12, seasonings $8, stickers $4, hat $30,
  mug $12, earrings $10).
- Product photos: the hat still uses an icon placeholder.
- Photos in `images/` were cropped from Instagram screenshots; the original
  full-resolution photos will look sharper.
- `images/logo-white-text.png` (dark backgrounds) and `logo-black-text.png`
  (light backgrounds) are the full-color logo; the badge and favicons use the lumberjack only.
