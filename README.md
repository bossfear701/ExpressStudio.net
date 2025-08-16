# Express Studio 2.0 — Static Site (GitHub Pages Ready)

This is a one-page static site scaffold for **Express Studio 2.0**. It's designed to be modern, responsive, and easy to edit.

## What's included
- `index.html` — main site
- `css/style.css` — styles
- `js/main.js` — simple interactivity
- `assets/logo.png` — placeholder logo (replace with your real logo)
- `README.md` — this file

## How to use
1. Replace `assets/logo.png` with your logo (keep same filename).
2. Edit `index.html` to add or tweak content (projects, links, images).
3. Commit to a GitHub repo and enable GitHub Pages from the repository settings (use `main` or `gh-pages` branch).
4. For AI/chat features: **do not** place API keys in client-side code. Create a server or serverless function (e.g., Vercel, Netlify Functions, Render) that stores your API key securely and exposes a `/api/ai` endpoint that proxies requests to the AI provider. The provided `js/main.js` will POST to `/api/ai`.

## AI Notes
- You gave an example OpenRouter code snippet. Good — but do **not** paste secrets here. Use server-side code and environment variables.
- Example server idea (Node.js Express):
```js
// express server pseudo-code
app.post('/api/ai', async (req, res) => {
  const q = req.body.question;
  // call OpenRouter/OpenAI from server with API key in env vars
  // return JSON { answer: '...' }
});
```

## Deployment to GitHub Pages
1. Create a new GitHub repo and push the files.
2. In repo Settings → Pages, choose branch `main` and folder `/` (root).
3. Visit `https://<username>.github.io/<repo>/` or set up `expressstudio.net` custom domain.

## Customize
- Replace text, add images inside `assets/`, and update links.
- For embedding Discord, use this widget:
`https://discord.com/widget?id=YOUR_SERVER_ID&theme=dark` inside an iframe (see Discord docs).

## Legal & Safety
- Don't publish any private API keys in the repo.
- Make backups before making big changes.
