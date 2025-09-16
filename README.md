# DemonHacks — UPE Hackathon Website

Work in Progress...


## Stack

- Astro 
- React 
- Deploy: Vercel
- Forms: form provider (Google Forms or Tally) — link or embed
- Assets: `public/` (served), `brand/` (editable/source)
- Project management: GitHub Projects (Product Launch template), Issues, PRs

## Requirements

- Node.js 20+
- Git
- npm (or pnpm/yarn)

## Tech stack (Approval Pending)

- Framework: Astro (static-first)
- Styling: Tailwind CSS
- Interactivity: Optional small React islands only if needed
- Forms: Tally (embed on `/register`) — [tally.so/r/mORqVR](https://tally.so/r/mORqVR)
- Content: `.astro` pages; can add Markdown/JSON later
- Workflow: PRs to `main` with 1 review when available

Why: fast by default (0 JS unless needed), simple pages with great SEO, and no backend to manage since Tally handles registration.

## Getting started

If this repo is empty and you’re initializing the site:

```bash
# from repo root after cloning
npm create astro@latest -- --template basics
cd .
npx astro add tailwind
npx astro add react

# run locally
npm install
npm run dev
```

Common scripts (after setup):
```bash
npm run dev     # start dev server
npm run build   # production build
npm run preview # preview built site
```

## Project structure



## Content and updates

- Registration link: keep in `src/data/site.ts` (or `.json`) and reuse across pages.
- FAQs/Schedule: markdown in `src/content/` or simple JSON in `src/data/`.
- Assets (logos, PDFs): put in `public/`. Source design files go in `brand/`.

## Contributing

- Use issue templates (User story / Task / Bug).
- Branch naming: `feat/<issue#>-short-name`, `fix/<issue#>-short-name`, `chore/...`
- Open PRs against `main` and fill the PR template.
- Link issues in PRs: `Closes #123`.

Definition of Done:
- Acceptance criteria met
- Mobile + desktop checked
- A11y basics (labels, focus, contrast) pass
- Screenshots for UI changes added to PR

## Labels & milestones

Labels (create in GitHub → Settings → Labels):
- story
- task
- bug
- priority:high
- priority:medium
- priority:low

## Project board

- GitHub Project: Product Launch board for planning, backlog, sprints.
- Auto-add new issues to Backlog; use Status to track progress.

## Deployment

- Vercel: connect this repo; set Production branch to `main`.
- Every PR gets a preview URL for review.

## Security & privacy

- Do not commit secrets.
- Store tokens/keys in Vercel project settings if needed.
- Registration handled by an external form provider; site stores no sensitive data.

## License

MIT

## Contact

- UPE Board: [deltaupe@cdm.depaul.edu]]
- Web: [https://upe.cdm.depaul.edu/]