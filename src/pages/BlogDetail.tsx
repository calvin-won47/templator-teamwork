import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { fetchBlogBySlug, BlogPostDetail } from '../lib/strapi'

export default function BlogDetail() {
  const { slug } = useParams()
  const [post, setPost] = useState<BlogPostDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true
    if (!slug) {
      setError('Invalid blog slug')
      setLoading(false)
      return
    }
    fetchBlogBySlug(slug)
      .then((data) => {
        if (mounted) setPost(data)
      })
      .catch((e) => {
        if (mounted) setError(e.message || 'Error loading blog')
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })
    return () => {
      mounted = false
    }
  }, [slug])

  const formatDate = (value: string | null): string => {
    if (!value) return ''
    const iso = String(value)
    const datePart = iso.includes('T') ? iso.split('T')[0] : iso.slice(0, 10)
    return datePart
  }

  if (loading) return <p className="p-6">Loading...</p>
  if (error) return <p className="p-6 text-red-600">{error}</p>
  if (!post) return <p className="p-6">Not found</p>

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
      <small className="text-gray-500">{formatDate(post.createdAt)}</small>
      <div className="prose max-w-none mt-6">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.contentMarkdown}</ReactMarkdown>
      </div>
    </article>
  )
}