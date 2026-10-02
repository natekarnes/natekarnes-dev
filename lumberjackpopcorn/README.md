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

Both forms (`corporate-quote` and `shop-order`) use Netlify Forms. Turn on
email notifications under **Forms** in the Netlify dashboard.

## Managing the shop (Square)

Products are listed in `products.js`. Checkout, payment, shipping, and taxes
happen in your Square Online store; the website links each product to its
page there.

1. In Square, turn on Square Online, set up payments, shipping rates, and
   taxes, and add the products (or ask Claude to add them through the Square
   connector).
2. In `products.js`, set `SQUARE_STORE_URL` to your Square Online store
   address. A **Cart** button then appears in the shop header.
3. For each product, paste its Square Online product page link into
   `squareUrl`. Its button changes from **Add to order** to **Buy**.
4. Keep `price` in `products.js` matching Square; Square's price is what
   customers pay.

Products without a `squareUrl` still use the order request form, and
`comingSoon: true` shows a product without letting people buy it. Keep
`lumberjackpopcorn.com` pointed at Netlify; the Square store lives at its own
square.site address (or a subdomain like `shop.lumberjackpopcorn.com` if you
connect one in Square).

## Things to customize

- Prices in `products.js` (popcorn $12, seasonings $8, stickers $4, hat $30,
  mug $12, earrings $10).
- Product photos: seasonings and merch use icon placeholders.
- Photos in `images/` were cropped from Instagram screenshots; the original
  full-resolution photos will look sharper.
- `images/logo-white-text.png` (dark backgrounds) and `logo-black-text.png`
  (light backgrounds) are the full-color logo; the badge and favicons use the lumberjack only.
