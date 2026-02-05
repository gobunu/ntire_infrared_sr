# NTIRE 2026 — Remote Sensing Infrared Image Super-Resolution Challenge (Website)

A lightweight, **static** website (pure HTML/CSS/JS) intended for **GitHub Pages** deployment.

## What’s included

- `index.html` — single-page site (English content)
- `styles.css` — responsive styling
- `script.js` — tiny helper (smooth scrolling + current year)
- `assets/cover.jpg` — hero background image
- `assets/wechat-qr.jpg` — QR code image (WeChat group)

## Quick start (local)

Just open `index.html` in a browser.

If you prefer a local server:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new GitHub repo, e.g. `ntire2026-ir-sr`.
2. Upload all files from this folder to the repo root.
3. In GitHub: **Settings → Pages**
   - **Build and deployment**: Deploy from a branch
   - **Branch**: `main` (or `master`) / **root**
4. Wait a moment for GitHub Pages to publish your site.

## Update content

Edit `index.html`. Everything is intentionally simple.

## Links used on the page

- CodaBench competition: https://www.codabench.org/competitions/13508/
- NTIRE 2026: https://cvlai.net/ntire/2026/
