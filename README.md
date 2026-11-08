# Billy LaPlant — Portfolio website

A personal portfolio site built with React and Vite. It has two pages:

- `/`: landing section, skills and contact information
- `/projects`: projects and awards showcase

## Requirements

- Node.js (current LTS), installed with [nvm](https://github.com/nvm-sh/nvm)
- npm (comes with Node.js)

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open the address Vite prints, usually http://localhost:5173.

## Build and preview

```bash
npm run build     # outputs static files to dist/
npm run preview   # serves dist/ locally to check the build
```

## Lint

```bash
npm run lint
```

## Editing content

All personal content (name, bio, skills, projects, awards, email and social links) is in
[`src/data/portfolio_data.js`](src/data/portfolio_data.js).

- **Skill levels:** set each skill's `level` to `Familiar`, `Proficient` or `Expert`, which shows as a 1–3 segment bar. Leave it as `''` to show the skill with no bar.
- **Project images (optional):** put the file in `public/images/projects/`, then set the project's `image` to `/images/projects/<file name>` and `imageAlt` to a short description. Leave both as `''` for no image.
- **Profile photo:** `public/images/billy_profile.jpg`, shown as a circle beside the introduction on the home page (above it on phones). To change it, replace the file and keep the same name; a roughly square headshot works best. To hide it, set `photo` in `profile` to `''`.
- **Resume:** the PDF is `public/billy_laplant_resume.pdf`, linked from the home page button and the header menu (it opens in a new tab). To update it, replace the file and keep the same name. To hide it, set `resume` in `profile` to `''`.
The page title and link preview text are in [`index.html`](index.html).

Colors, spacing and font sizes are CSS variables at the top of [`src/index.css`](src/index.css).

## Project layout

```
src/
  data/portfolio_data.js   all site content
  components/              Header, Hero, Skills, Contact, ProjectCard, Footer
  pages/                   HomePage, ProjectsPage
  App.jsx                  routes
  index.css                styles
plans/                     approved plan documents
PROMPTS.md                 prompt log
CLAUDE.md                  project rules for Claude Code
```

## Deployment (Google Cloud Run)

The site is packaged as a container:

- [`Dockerfile`](Dockerfile): Node builds the site, then nginx serves the files in `dist/`.
- [`nginx.conf`](nginx.conf): listens on port 8080 and sends unknown paths (like `/projects`) to `index.html`, so refreshing any page works.

Cloud Run deploys continuously from GitHub: each merge to `main` triggers Cloud Build, which builds the `Dockerfile` and deploys it. Docker is not needed locally.

One-time setup in the Google Cloud console:

1. Go to Cloud Run and choose to deploy continuously from a repository.
2. Connect GitHub through Cloud Build and give it access to this repository.
3. Set the branch to `^main$` and the build type to Dockerfile, at `/Dockerfile`.
4. Name the service `portfolio-website` (Cloud Run doesn't allow underscores).
5. Set the region to `us-central1` and allow public access. Under **Containers, Networking, Security**, check the container port is `8080` (the default) and leave everything else at its defaults. Optionally, set minimum instances to `0` and maximum instances to `2` or `3` to keep costs low.
6. Create the service, then open the URL Cloud Run shows.
