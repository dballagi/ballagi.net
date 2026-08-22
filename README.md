# ballagi.net

Personal website built with [Astro](https://astro.build).

## Why Astro

The site is entirely static — no server-side logic, no authentication, no dynamic data. Astro's static output mode compiles everything to plain HTML and a single CSS file at build time, resulting in a fast, zero-JS site. Content collections let the source files stay as plain Markdown while Astro handles frontmatter validation, type safety, and slug generation. The dev experience is good and the output is exactly what a static host needs.

## Goals

- **Home** — a brief professional profile with experience timeline and education
- **Tinkering** — write-ups on small engineering problems I found interesting enough to document (home automation, self-hosted infrastructure, etc.)
- **Books** — chapter-by-chapter summaries of books I've read, so I can pick up a series after a long break without re-reading everything

## Project Structure

```
src/
  content/
    books/        # Book summaries as Markdown, organised by author → series
    profile/      # Home page content (experience, education)
    tinkering/    # Tinkering article Markdown files
  layouts/
    Layout.astro  # Shared shell: nav, theme toggle, footer
  pages/
    index.astro         # Home / profile
    books/index.astro   # Books listing with series accordions
    books/[...slug].astro  # Individual book detail page
    tinkering/index.astro  # Tinkering listing
    tinkering/[slug].astro # Individual tinkering article
  styles/
    global.css    # All styles (single file, no framework)
public/
  img/            # Static images (avatar, favicon, tinkering SVGs)
.env.example      # Required environment variables
```

## Setup

Copy `.env.example` to `.env.local` and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `ASTRO_SITE` | Full URL of the deployed site (e.g. `https://example.com`) |
| `ASTRO_OUT_DIR` | Build output directory (defaults to `dist`) |

Install dependencies:

```bash
npm install
```

## Adding books

`src/lib/bookCover.ts` exports `fetchCover(title, author)` which queries the Open Library search API and returns a cover URL in the form `https://covers.openlibrary.org/b/id/{id}-M.jpg`. Use it in an import script when creating a new book entry to populate the `cover` frontmatter field. Once the URL is stored in the markdown file it is never fetched again at build time.

## Build

```bash
npm run build
```

Output goes to `ASTRO_OUT_DIR` (or `dist/` by default). Serve the output folder with any static file server — the site has no server-side requirements.

## Dev server

```bash
npm run dev
```
