// Generate sitemap.xml and robots.txt into ./dist for the current site
// Inputs via env:
// - SITE_URL (required): Absolute site URL, e.g. https://example.com
// - STRAPI_API_TOKEN (optional): If provided, used as Bearer token
// - strapi_url (optional): Overrides config value
// - strapi_site_slug (optional): Overrides config value
// - CONFIG_PATH (optional): Path to config.json; defaults to ./public/config.json

import fs from 'node:fs'
import path from 'node:path'

// Helpers to read env safely
const env = (key) => process.env[key] || ''

const SITE_URL = env('SITE_URL')
if (!SITE_URL) {
  console.error('[generate-sitemap] Missing required env SITE_URL')
  process.exit(1)
}

const CONFIG_PATH = env('CONFIG_PATH') || path.resolve('./public/config.json')
const STRAPI_API_TOKEN = env('STRAPI_API_TOKEN') || ''

function readJsonSafe(filePath) {
  try {
    if (!fs.existsSync(filePath)) return null
    const txt = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(txt)
  } catch (e) {
    console.warn(`[generate-sitemap] Failed to read JSON from ${filePath}:`, e?.message)
    return null
  }
}

function pickStrapiUrl(cfg) {
  // precedence: env -> cfg.apiEndpoints.strapi_url -> cfg.strapi.strapi_url -> fallback
  const fromEnv = env('strapi_url')
  if (fromEnv) return fromEnv
  const fromApi = cfg?.apiEndpoints?.strapi_url
  if (fromApi) return fromApi
  const fromStrapi = cfg?.strapi?.strapi_url
  if (fromStrapi) return fromStrapi
  return 'https://2amcreations.com' // same fallback as src/lib/strapi.ts
}

function pickSiteSlug(cfg) {
  // precedence: env -> cfg.apiEndpoints.strapi_site_slug -> cfg.strapi.strapi_site_slug -> fallback
  const fromEnv = env('strapi_site_slug')
  if (fromEnv) return fromEnv
  const fromApi = cfg?.apiEndpoints?.strapi_site_slug
  if (fromApi) return fromApi
  const fromStrapi = cfg?.strapi?.strapi_site_slug
  if (fromStrapi) return fromStrapi
  return 'xmyxyswkj' // same fallback as src/lib/strapi.ts
}

const cfg = readJsonSafe(CONFIG_PATH)
const STRAPI_URL = pickStrapiUrl(cfg)
const SITE_SLUG = pickSiteSlug(cfg)

const DIST_DIR = path.resolve('./dist')
if (!fs.existsSync(DIST_DIR)) fs.mkdirSync(DIST_DIR, { recursive: true })

function buildUrl(base, p) {
  return `${base}${p}`
}

function normalizeField(item, key) {
  // Support Strapi v4 (attributes) and v5 (flattened)
  return item?.[key] ?? item?.attributes?.[key] ?? null
}

async function fetchBlogPage(page, pageSize = 100) {
  const params = new URLSearchParams()
  params.set('filters[site][slug][$eq]', SITE_SLUG)
  params.set('fields[0]', 'slug')
  params.set('fields[1]', 'updatedAt')
  params.set('fields[2]', 'publishedAt')
  params.set('sort', 'updatedAt:desc')
  params.set('pagination[page]', String(page))
  params.set('pagination[pageSize]', String(pageSize))
  const url = buildUrl(STRAPI_URL, `/api/blog-posts?${params.toString()}`)

  const headers = STRAPI_API_TOKEN ? { Authorization: `Bearer ${STRAPI_API_TOKEN}` } : {}
  const res = await fetch(url, { headers })
  if (!res.ok) throw new Error(`Failed to fetch blog posts: ${res.status} ${res.statusText}`)
  const json = await res.json()
  const data = Array.isArray(json?.data) ? json.data : []
  const meta = json?.meta || json?.pagination || {}
  return {
    items: data.map((it) => ({
      slug: normalizeField(it, 'slug'),
      updatedAt: normalizeField(it, 'updatedAt') || normalizeField(it, 'publishedAt') || null,
    })),
    page: meta?.pagination?.page ?? meta?.page ?? page,
    pageCount: meta?.pagination?.pageCount ?? meta?.pageCount ?? 1,
  }
}

async function fetchAllBlogItems() {
  const all = []
  let page = 1
  while (true) {
    const { items, pageCount } = await fetchBlogPage(page)
    all.push(...items)
    if (page >= pageCount) break
    page += 1
  }
  return all
}

function escapeXml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function toIso(dateStr) {
  if (!dateStr) return null
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return null
    return d.toISOString()
  } catch {
    return null
  }
}

function buildSitemapXml(siteUrl, routes) {
  const urls = routes.map(({ loc, lastmod }) => {
    const lastmodTag = lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : ''
    return `  <url>\n    <loc>${escapeXml(loc)}</loc>${lastmodTag}\n  </url>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

function buildRobotsTxt(siteUrl) {
  return `User-agent: *\nAllow: /\nSitemap: ${siteUrl.replace(/\/$/, '')}/sitemap.xml\n`
}

async function main() {
  console.log('[generate-sitemap] Using config:', { SITE_URL, STRAPI_URL, SITE_SLUG, CONFIG_PATH: path.relative(process.cwd(), CONFIG_PATH) })

  // Static routes based on src/pages/
  const staticPaths = ['/', '/about', '/contact', '/features', '/pricing', '/resources', '/blog', '/login', '/signup']
  const staticRoutes = staticPaths.map((p) => ({ loc: `${SITE_URL.replace(/\/$/, '')}${p === '/' ? '' : p}` }))

  // Dynamic blog routes
  let blogRoutes = []
  try {
    const items = await fetchAllBlogItems()
    blogRoutes = items
      .filter((it) => it.slug)
      .map((it) => ({
        loc: `${SITE_URL.replace(/\/$/, '')}/blog/${it.slug}`,
        lastmod: toIso(it.updatedAt),
      }))
  } catch (e) {
    console.warn('[generate-sitemap] Failed to fetch blog posts, proceeding with static routes only:', e?.message)
  }

  const routes = [...staticRoutes, ...blogRoutes]
  const sitemapXml = buildSitemapXml(SITE_URL, routes)
  const robotsTxt = buildRobotsTxt(SITE_URL)

  fs.writeFileSync(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml)
  fs.writeFileSync(path.join(DIST_DIR, 'robots.txt'), robotsTxt)

  console.log(`[generate-sitemap] Wrote ${routes.length} routes to ./dist/sitemap.xml`)
  console.log(`[generate-sitemap] Wrote robots.txt to ./dist/robots.txt`)
}

main().catch((e) => {
  console.error('[generate-sitemap] Fatal error:', e)
  process.exit(1)
})