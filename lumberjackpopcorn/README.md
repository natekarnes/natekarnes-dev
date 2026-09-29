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
- `shop.html`: popcorn, seasonings, stickers, and merch
- `thanks.html`: shown after either form is submitted

Both forms (`corporate-quote` and `shop-order`) use Netlify Forms. Turn on
email notifications under **Forms** in the Netlify dashboard.

## Managing the shop

All products live in `products.js`. Each one has a name, category, price,
photo, and an optional `buyUrl`.

- With no `buyUrl`, the button says **Add to order** and adds the item to the
  order request form. You follow up by email to take payment.
- Paste a checkout link into `buyUrl` (a Square online checkout link, Stripe
  Payment Link, or Shopify Buy Button link) and the button becomes **Buy now**.
- Set `comingSoon: true` to show a product without letting people order it.

## Things to customize

- Prices in `products.js` (popcorn is $12 and stickers $4, taken from the
  trailer menu board; seasonings have no price yet).
- Product photos: seasonings and merch use icon placeholders.
- Photos in `images/` were cropped from Instagram screenshots; the original
  full-resolution photos will look sharper.
- The header/favicon uses a simple popcorn icon; replace it with the real
  lumberjack logo (SVG or PNG).
