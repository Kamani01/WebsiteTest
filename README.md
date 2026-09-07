# JS Driving School

Independent driving school site for Featherstone, West Yorkshire.

**Live preview:** [https://kamani01.github.io/WebsiteTest/](https://kamani01.github.io/WebsiteTest/)

GitHub Pages is the temporary address until a real domain is bought (for example `jsdrivingschool.co.uk`).

## Edit the business details

Open `config.js` and fill in:

- `phone` — show Call buttons
- `email` — booking form sends a mailto
- `whatsapp` — booking form opens WhatsApp
- `prices` — hourly and block rates
- `areas` — pickup towns

Until phone or email is set, the booking form copies the request so it can be sent on.

## Get found on Google

A website alone is not enough for Google Maps. After the site is live:

1. Create a [Google Business Profile](https://www.google.com/business/) for **JS Driving School**, Featherstone, WF7.
2. Add the GitHub Pages URL now, then switch it to your domain later.
3. Keep name, town and phone identical on the site and the profile.
4. Ask passed pupils for Google reviews.

## Point a domain later

1. Buy a domain (Namecheap, Cloudflare, or Google Domains equivalent).
2. In the repo: **Settings → Pages → Custom domain**.
3. Add a `CNAME` file with that domain, and update `siteUrl` in `config.js` plus the canonical tags and sitemap.
