/* global process */

import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const domain = (process.env.VITE_SITE_DOMAIN || 'https://acts.ae').replace(/\/+$/, '')
const servicesSource = readFileSync(resolve(root, 'src/data/services.ts'), 'utf8')
const serviceSlugs = [...servicesSource.matchAll(/slug:\s*'([^']+)'/g)].map((match) => match[1])
const routes = ['/', '/about', '/services', ...serviceSlugs.map((slug) => `/services/${slug}`), '/projects', '/contact']
const uniqueRoutes = [...new Set(routes)]
const lastmod = new Date().toISOString().slice(0, 10)

const urlEntries = uniqueRoutes
  .map((route) => `  <url>\n    <loc>${domain}${route === '/' ? '/' : route}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`)
  .join('\n')

writeFileSync(
  resolve(root, 'public/sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`,
)

writeFileSync(
  resolve(root, 'public/robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${domain}/sitemap.xml\n`,
)
