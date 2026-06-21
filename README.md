# feej — AI Cinema Homepage

A Vite + React + Tailwind project containing the `feej` homepage.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

This creates a `dist/` folder with the static site — this is what gets deployed.

## Deploy to Vercel + connect your GoDaddy domain

1. **Push this folder to GitHub.**
   - Create a new repo on github.com (any name, e.g. `feej-site`).
   - From inside this folder: `git init`, `git add .`, `git commit -m "initial"`,
     then follow GitHub's instructions to push.

2. **Import into Vercel.**
   - Go to vercel.com → sign up/log in (GitHub login is easiest) → "Add New Project".
   - Select your `feej-site` repo. Vercel auto-detects Vite — leave settings as default.
   - Click Deploy. In ~1 minute you'll get a live URL like `feej-site.vercel.app`.

3. **Add your domain in Vercel.**
   - In the Vercel project → Settings → Domains → enter your domain (e.g. `feej.com`)
     and the `www` version if you want both.
   - Vercel will show you DNS records to add — usually:
     - An **A record** for the root domain pointing to `76.76.21.21`
     - A **CNAME record** for `www` pointing to `cname.vercel-dns.com`

4. **Add those records in GoDaddy.**
   - Log into GoDaddy → My Products → find your domain → DNS / Manage DNS.
   - Add/edit the A record and CNAME record to match exactly what Vercel showed you.
   - Save. DNS changes can take a few minutes up to a few hours to go live.

5. **Done.** Once DNS propagates, your domain will show the site, and Vercel
   automatically issues a free SSL certificate (https) for it.

No server, no manual builds going forward — every time you push to GitHub,
Vercel rebuilds and redeploys automatically.
