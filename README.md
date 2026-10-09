# N_project

A bilingual corporate website for ACTS UAE, built with React, TypeScript, and Vite. The site promotes renovation, refurbishment, swimming pool, and landscaping services for residential and commercial projects across the UAE.

## Overview

This project is a modern marketing and lead-generation website featuring:

- English and Arabic bilingual content
- Responsive landing pages and service sections
- Project portfolio and service detail pages
- Contact and RFQ inquiry flows
- SEO metadata and structured data support
- Media gallery and lightbox experience
- Vite-based fast frontend workflow

## Stack

- React 18
- TypeScript
- Vite
- React Router
- i18next for localization
- ESLint for code quality

## Project structure

```text
.
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── media/
├── scripts/
│   └── generate-seo-files.mjs
├── src/
│   ├── components/
│   ├── config/
│   ├── data/
│   ├── hooks/
│   ├── i18n/
│   ├── pages/
│   ├── utils/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── start-project.bat
├── stop-project.bat
└── README.md
```

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the local Vite URL in your browser (typically `http://localhost:5173`).

## Available scripts

```bash
npm run dev         # start the development server
npm run build       # build the production bundle
npm run preview     # preview the production build locally
npm run lint        # run ESLint
npm run type-check  # run TypeScript type checking
```

The build process also runs a prebuild script:

```bash
node scripts/generate-seo-files.mjs
```

This prepares SEO-related files before production deployment.

## Environment variables

Optional environment variables can be defined in a `.env` file:

```env
VITE_SITE_DOMAIN=https://acts.ae
VITE_GA4_MEASUREMENT_ID=your_measurement_id
```

If not provided, the app falls back to the default domain configured in the site settings.

## Deployment notes

- This project is designed to be deployed as a static frontend site.
- The production build is generated with Vite.
- SEO output files are generated before build and should be included in the deployment output.
- Confirm the WhatsApp, phone, e-mail, and service content before publishing to production.

## Key app pages

- `/` — home page with hero, trust indicators, services, media, FAQs
- `/about` — company profile and credentials
- `/services` — service listing
- `/services/:slug` — individual service details
- `/projects` — portfolio and completed work
- `/contact` — contact and inquiry page

## Notes

This repository contains a branded ACTS website and is intended for business marketing and lead capture. Content and contact details should be verified before public release to ensure accuracy and compliance.

## License

This project does not include a license file. Please confirm the intended distribution terms with the project owner before public reuse or publishing.
