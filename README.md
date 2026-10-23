# Subin Bae — personal website

A local, bilingual Next.js App Router portfolio with a restrained editorial design. English and Korean pages cover Home, About, Experience, and Contact. No deployment, analytics, CMS, or unfinished navigation is configured.

## Setup

Use Node.js 20.9+ and pnpm (11 recommended).

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Visit http://localhost:3000/en or http://localhost:3000/ko.

```sh
pnpm lint
pnpm typecheck
pnpm build
pnpm start
```

## Structure

- `app/[locale]/`: shared document layout and localized homepage.
- `app/[locale]/[page]/`: initial About, Experience, and Contact pages; unrecognized pages return 404.
- `components/`: shared header, footer, theme provider, and content components.
- `messages/en.json`, `messages/ko.json`: interface and editorial translations.
- `data/profile.ts`: shared bilingual experience, education, and recognition records.
- `i18n/`: next-intl routing, navigation, and server configuration.
- `proxy.ts`: locale routing; English by default, with remembered explicit Korean selection at `/`.
- `app/globals.css`: responsive design tokens and styles, Tailwind CSS entrypoint.
- `public/og.png`: social sharing image; `og.svg` is the original vector artwork.

## Preferences and accessibility

Locale switches preserve the current page and save the next-intl locale cookie. Explicit locale URLs always take precedence. Theme defaults to the system, saves explicit choices in local storage, and uses next-themes’ prepaint script to avoid a theme flash. Clear the `theme` local-storage key to return to system behavior. Navigation is visible on mobile without a menu dependency. Skip link, focus indicators, semantic landmarks, accessible labels, and reduced-motion support are included.

Typography uses local system sans-serif and Georgia, with native Korean fallbacks. No external font request is needed.

## Editing and future additions

Update translation messages for prose, and the shared profile data for records. Add a dedicated localized route and navigation entry only when a future section is ready. No project, writing, or photography systems are implemented.

Original PDFs/DOCX files and `references/` are ignored by Git and must stay outside `public/`. Never put private source material in website assets.

Social sharing metadata uses `https://subinbae.vercel.app` and a 1200 × 630 PNG image. Update `metadataBase` if the production domain changes.

## Validation

Validated with Node.js from the Codex bundled runtime: ESLint, TypeScript, and the production Webpack build pass. All eight locale/page combinations are prerendered. Desktop dark/light mode, English and Korean mobile homepages, supporting pages, and page-preserving language switching were checked in the browser. Mobile English content matched viewport width without horizontal overflow.

The build script uses Next.js’s supported `--webpack` option because Turbopack worker port binding is restricted in this local environment. Optional dependency build scripts are explicitly disabled in `pnpm-workspace.yaml`; the installed platform binaries support this build without them. Non-blocking Webpack cache snapshot notices may appear in the bundled environment.

