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

## Managing the shop (Shopify)

The shop page keeps its own design and cart; checkout, payment, shipping, and
taxes happen on Shopify using cart links
(`https://STORE.myshopify.com/cart/VARIANT:QTY,...`).

1. Create the products in Shopify (any plan that includes online checkout),
   set their prices and shipping rates there.
2. In `products.js`, set `SHOPIFY_STORE` to your `something.myshopify.com`
   address.
3. For each product, set `shopifyVariantId`. To find it, open
   `https://STORE.myshopify.com/products/PRODUCT-HANDLE.js` in a browser and
   copy the `id` inside `variants` (for a product with several variants, such
   as flavors or shirt sizes, each variant has its own ID). You can also open
   the variant in the Shopify admin; the ID is the number at the end of the URL.
4. Keep `price` in `products.js` matching Shopify. The site uses it for the
   cart subtotal, but Shopify's price is what customers pay.

Once a store is set, those products get **Add to cart** and a cart button
appears in the header. Products without a variant ID still use the order
request form, and `comingSoon: true` shows a product without letting people
buy it. Keep `lumberjackpopcorn.com` pointed at Netlify; Shopify checkout runs
on the myshopify.com address (or a subdomain like `shop.lumberjackpopcorn.com`
if you connect one in Shopify).

## Things to customize

- Prices in `products.js` (popcorn is $12 and stickers $4, taken from the
  trailer menu board; seasonings have no price yet).
- Product photos: seasonings and merch use icon placeholders.
- Photos in `images/` were cropped from Instagram screenshots; the original
  full-resolution photos will look sharper.
- The header/favicon uses a simple popcorn icon; replace it with the real
  lumberjack logo (SVG or PNG).
