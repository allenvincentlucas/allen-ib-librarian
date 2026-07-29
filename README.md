# IB Librarian Hub

Portfolio + resource hub for IB librarians. Static site, built for GitHub Pages.

## Structure

```
ib-librarian-hub/
├── index.html              ← Home (§01) — DONE
├── resources.html          ← Resource Library (§02) — NEXT
├── ai-literacy.html        ← §03 — not yet built
├── programme.html          ← §04 — not yet built
├── tools.html              ← §05 — not yet built
├── collaboration.html      ← §06 — not yet built
├── reading-culture.html    ← §07 — not yet built
├── network.html            ← §08 — not yet built
├── impact.html             ← §09 — not yet built
├── about.html              ← About/Privacy/Licensing — not yet built
├── partials/
│   ├── nav.html             ← shared drawer-tab nav, injected via include.js
│   └── footer.html          ← shared footer, injected via include.js
└── assets/
    ├── css/style.css        ← brand tokens + shared component styles
    └── js/include.js        ← loads nav/footer partials, highlights active tab
```

## How the shell works

Every page loads the same nav and footer at runtime via `include.js`, so there's
one nav to maintain instead of nine copies. Each page needs:

```html
<div id="nav-slot"></div>
...page content...
<div id="footer-slot"></div>
<script src="/assets/js/include.js"></script>
```

Set `data-page="..."` on `<body>` (matching a `data-page` value in `nav.html`)
to auto-highlight the current tab.

## Local preview

`fetch()` for the partials won't work opening `index.html` directly from disk
(`file://`) — browsers block that. Run a local server from the project root:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploying

1. Push this folder to a GitHub repo (e.g. `ib-librarian-hub`)
2. Settings → Pages → deploy from `main` branch, root folder
3. Site will be live at `https://<username>.github.io/ib-librarian-hub/`

## Build sequence (from planning)

- [x] Phase 1: shell (nav/footer/CSS) + Home
- [x] Phase 2: Resource Library — built with hardcoded data (assets/js/resources.js),
      filter chips, and 8 placeholder resources. Download links are "#" placeholders —
      swap in real files as they're ready. To upgrade to Airtable later: replace the
      RESOURCES array in resources.js with an async fetch, keeping the same field names.
- [ ] Phase 3: Tools for Librarians → IB Programme → AI Literacy → Impact
- [ ] Phase 4: Network page + newsletter signup (Google Form → Sheet is the
      fastest MVP for both — no backend build required)
- [ ] Phase 5: About/Terms, responsiveness + accessibility pass, SEO
      (meta descriptions, sitemap.xml), soft launch

## Brand tokens (already applied in style.css)

- Paper `#FAF9F6` · Ink `#191B1F` · Index Blue `#2A4B8D` · Stone `#84806F`
- Space Grotesk (display) · Inter (body) · JetBrains Mono (labels/nav)
- Signature motif: "catalog card" — dashed border, punch-hole, mono call-number tab
