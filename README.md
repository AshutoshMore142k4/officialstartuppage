# 11startups.tech - AI Consulting Landing Page

## Project info

A modern landing page for AI consulting services built with React, TypeScript, and Tailwind CSS.

## How can I edit this code?

**Use your preferred IDE**

Clone this repo and push changes to deploy your updates.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

You can deploy this project using various hosting platforms:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply build the project with `npm run build` and deploy the `dist` folder.

## SEO, AEO and prerendering

Production pages are prerendered to static HTML so search engines and AI crawlers (most of which don't run JavaScript) get full content, per-page metadata and structured data.

- `npm run build` = client build + SSR build (`src/entry-server.tsx`) + `scripts/prerender.mjs`, which writes `dist/<route>/index.html`, `dist/404.html` and `dist/sitemap.xml`, and **fails the build** if a page lacks a title, description, canonical, `<h1>`, valid JSON-LD, or has FAQ markup where no FAQ is visible.
- Per-page `<title>`, description, Open Graph and JSON-LD come from `SEOHead` (`src/components/SEOHead.tsx`); schema builders live in `src/lib/seo.ts`.
- **Adding a route:** add the `<Route>` in `src/App.tsx` **and** an entry in `ROUTES` in `src/lib/seo.ts` (this drives prerendering and the sitemap). Give the page a `SEOHead`.
- Keep `public/llms.txt` and `public/llms-full.txt` in sync when products, docs, pricing or FAQs change.
- Don't read browser-only values (`navigator`, `localStorage`, `window`) during the first render: the client hydrates the prerendered HTML, so the first render must match the server's. Set them in an effect instead (see `PricingSection`).
- Hosting (`vercel.json`) serves the prerendered files with clean URLs and a real 404 page for unknown URLs.
