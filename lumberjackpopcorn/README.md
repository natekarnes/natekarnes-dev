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

## Things to customize

- Flavor names and descriptions in the `#flavors` section of `index.html`
- The "Our Story" text
- Market/event locations in `#find-us`
- Add social links, phone, or photos as you have them
