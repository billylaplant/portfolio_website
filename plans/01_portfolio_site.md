# Personal portfolio website

## Context
Assignment: build a personal portfolio website, push it to a GitHub repository and deploy it to Google Cloud Run.

Required site components: home/landing page, projects/awards showcase page, skills section, contact information, responsive design, and a professional polished look.

Required repository files: `CLAUDE.md` rules file, the original plan document (this file), and a prompt log from this chat.

## Decisions
- **Stack:** React + Vite. The site is mostly fixed content, so it builds to static files served by nginx.
- **Location:** new folder `/home/billylaplant/projects/portfolio_website` with its own GitHub repo. `hello_api` is not changed.
- **Pages:** two routes. `/` holds the landing section, skills and contact. `/projects` holds the projects and awards showcase.
- **Packages:** `react`, `react-dom`, `react-router-dom` (needed for the two routes) and Vite. Plain CSS, no UI framework.
- **Contact:** `mailto:` and social links, so no backend or form service is needed.

## Steps

### 1. First steps: create the project and install Node
**Do this step only, then stop and wait for the user's next prompt.** Claude runs these commands, because the user does no coding. `hello_api` stays unchanged.

1. Create `portfolio_website/` with a `plans/` folder, and start Git on a branch named `initial_build`, so no work lands on `main`.
2. Add `PROMPTS.md` with every prompt from this chat, word for word, including the first one and the plan feedback. Use the `hello_api` note style for entries logged late, since plan mode blocked writing them and exact times weren't recorded.
3. Add `CLAUDE.md`: the same rules as `hello_api`, with the Python/Poetry line replaced by React + Vite managed with npm.
4. Add `plans/01_portfolio_site.md`, a copy of this plan.
5. Install nvm, then the current Node.js LTS. Docker is not needed. nvm adds a few lines to `~/.bashrc`.
6. Add the Vite React template to the folder, keeping the files above, and run `npm install`.
7. Confirm `npm run dev` serves the starter page, then stop the server.
8. Confirm `git -C ../hello_api status --short` shows no changes.

### 2. Build the site
- Keep all personal content in one file, `src/data/portfolio_data.js`, so it is easy to edit.
- Use clearly marked placeholders until real content is provided. Do not invent projects, awards or contact details.
- Components: `Header`, `Hero`, `Skills`, `Contact`, `ProjectCard`, `Footer`; pages: `HomePage`, `ProjectsPage`.
- Define colors, spacing and type as CSS variables. Build mobile-first, with layouts for phone, tablet and desktop.
- Add a page title, meta description and link preview tags to `index.html`.

### 3. Prepare for Cloud Run
- `Dockerfile`: two stages, Node builds the site and nginx serves `dist/`.
- `nginx.conf`: listen on port 8080, and send unknown paths to `index.html` so `/projects` works on refresh.
- `.dockerignore` and `.gitignore`: leave out `node_modules`, `dist` and any `.env` files.
- `README.md`: how to install, run locally, build and deploy.

### 4. Connect GitHub and Cloud Run
This follows how `hello_api` is deployed: a Cloud Build trigger on GitHub pushes to `^main$`, deploying to Cloud Run in `us-central1`, in project `cool-archery-485616-s6`. The one difference is that the portfolio builds from its `Dockerfile`. The user does all commits, pushes, merges and pull requests.

**GitHub (user runs these)**
```bash
git add CLAUDE.md && git commit -m "Add project rules"
git branch main
git add . && git commit -m "Build portfolio site"
gh repo create billylaplant/portfolio_website --public --source=. --remote=origin
git push -u origin main initial_build
gh pr create --base main --head initial_build --fill
```
Then merge the pull request on GitHub. As in `hello_api`, the rules file is the first commit on `main`, and the site arrives through a pull request.

**Cloud Run (user does this in the Google Cloud console)**
1. Go to Cloud Run and choose to deploy continuously from a repository.
2. Connect GitHub through Cloud Build and give it access to `billylaplant/portfolio_website`.
3. Set the branch to `^main$` and the build type to Dockerfile, at `/Dockerfile`.
4. Name the service `portfolio-website`. Cloud Run doesn't allow underscores in service names, so this is a forced exception to the underscore rule.
5. Set the region to `us-central1`, allow public access, and set the container port to 8080.
6. Create the service. Each later merge to `main` then redeploys the site.

## Inputs needed from the user
- Name, headline and short bio
- Projects and awards, with links and any images
- Skills list
- Contact email and social links

## Verification
- `npm run build` finishes with no errors, and `npm run dev` shows both routes.
- Check the layout at phone, tablet and desktop widths.
- Refresh on `/projects` in the deployed site to confirm the nginx fallback works.
- Open the Cloud Run URL and test every link, including `mailto:`.
- Confirm the repo contains `CLAUDE.md`, `plans/01_portfolio_site.md` and `PROMPTS.md`, and no secrets.
