const cfg: any = typeof window !== 'undefined' ? (window as any).APP_CONFIG : null
const API_URL_FALLBACK = 'https://2amcreations.com'
const SITE_SLUG_FALLBACK = 'xmyxyswkj'
export const API_URL = (
  cfg?.apiEndpoints?.strapi_url ||
  cfg?.strapi?.strapi_url ||
  API_URL_FALLBACK
)
export const SITE_SLUG = (
  cfg?.apiEndpoints?.strapi_site_slug ||
  cfg?.strapi?.strapi_site_slug ||
  SITE_SLUG_FALLBACK
)

export function buildUrl(path: string): string {
  return `${API_URL}${path}`
}

function normalizeImage(media: any): string | null {
  if (!media) return null
  if (media.url) return buildUrl(media.url) // Strapi v5 flattened media
  const url = media?.data?.attributes?.url // Strapi v4 nested media
  return url ? buildUrl(url) : null
}

function normalizeField(item: any, key: string): any {
  return item?.[key] ?? item?.attributes?.[key] ?? null
}

export interface BlogPostSummary {
  id: number
  slug: string | null
  title: string | null
  createdAt: string | null
  coverImageUrl: string | null
  excerpt: string | null
}

export interface BlogPostDetail {
  id: number
  slug: string | null
  title: string | null
  createdAt: string | null
  contentMarkdown: string
  coverImageUrl: string | null
}

export async function fetchBlogPosts(): Promise<BlogPostSummary[]> {
  const query = `/api/blog-posts?populate=coverImage&filters[site][slug][$eq]=${SITE_SLUG}&sort=createdAt:desc`
  const res = await fetch(buildUrl(query))
  if (!res.ok) throw new Error('Failed to fetch blog posts')
  const json = await res.json()
  return (json.data || []).map((item: any) => ({
    id: item.id,
    slug: normalizeField(item, 'slug'),
    title: normalizeField(item, 'title'),
    createdAt: normalizeField(item, 'createdAt'),
    coverImageUrl: normalizeImage(normalizeField(item, 'coverImage')),
    excerpt: normalizeField(item, 'excerpt'),
  }))
}

export async function fetchBlogBySlug(slug: string): Promise<BlogPostDetail | null> {
  const query = `/api/blog-posts?populate=*&filters[slug][$eq]=${slug}&filters[site][slug][$eq]=${SITE_SLUG}`
  const res = await fetch(buildUrl(query))
  if (!res.ok) throw new Error('Failed to fetch blog detail')
  const json = await res.json()
  const item = json.data?.[0]
  if (!item) return null
  return {
    id: item.id,
    slug: normalizeField(item, 'slug'),
    title: normalizeField(item, 'title'),
    createdAt: normalizeField(item, 'publishedAt') || normalizeField(item, 'createdAt'),
    contentMarkdown: normalizeField(item, 'contentMarkdown') || '',
    coverImageUrl: normalizeImage(normalizeField(item, 'coverImage')),
  }
}