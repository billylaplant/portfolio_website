# Next step: build the portfolio site (Step 2 of plans/01_portfolio_site.md)

## Context
Picking up from a previous session. Step 1 of the approved plan is done: `portfolio_website/` exists on branch `initial_build` with `CLAUDE.md`, `PROMPTS.md`, `plans/01_portfolio_site.md`, Node installed via nvm, and the Vite React starter installed (react 19, vite 8, oxlint). Nothing is committed yet. `README.md` is still the Vite template text, and `react-router-dom` is not installed yet.

## First, housekeeping
1. Log this session's prompt in `PROMPTS.md` with the late-logging note (plan mode blocked writing it).
2. Confirm branch is `initial_build`, not `main`.

## Step 2: build the site
- `npm install react-router-dom` (only new package; needed for `/` and `/projects`).
- Remove starter files: `src/App.css`, `src/assets/vite.svg`, `src/assets/react.svg`, `src/assets/hero.png`, `public/icons.svg`.
- `src/data/portfolio_data.js`: all personal content (name, headline, bio, projects, awards, skills, email, socials) as clearly marked placeholders. No invented details.
- Components in `src/components/`: `Header`, `Hero`, `Skills`, `Contact`, `ProjectCard`, `Footer`.
- Pages in `src/pages/`: `HomePage` (Hero + Skills + Contact), `ProjectsPage` (projects and awards grid).
- `src/App.jsx`: router with the two routes; `src/main.jsx` wraps in `BrowserRouter`.
- `src/index.css`: CSS variables for colors, spacing, type; mobile-first with tablet/desktop breakpoints.
- `index.html`: title, meta description, Open Graph tags.
- Rewrite `README.md`: install, run, build, where to edit content.

## Then (later steps, not now)
- Step 3: `Dockerfile` (node build → nginx), `nginx.conf` (port 8080, SPA fallback), `.dockerignore`.
- Step 4: user commits/pushes, creates GitHub repo and PR, sets up Cloud Run continuous deploy (`portfolio-website`, `us-central1`, port 8080).
- User supplies real content: name, bio, projects/awards, skills, contact links.

## Verification
- `npm run build` and `npm run lint` pass.
- `npm run dev`: both routes render, nav works, layout checked at phone/tablet/desktop widths.
