import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeRaw from 'rehype-raw'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'
import { categoryBlogs } from '../config/blogPosts'

const BlogPost = ({ markdownPath, category }) => {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Determine category display name and link
  const getCategoryInfo = () => {
    if (!category) return null

    const categoryMap = {
      'autonomy': { name: 'Autonomy', link: '/blog/autonomy' },
      'autonomy25': { name: 'Autonomy', link: '/blog/year-25/autonomy' },
      'electrical': { name: 'Electrical', link: '/blog/electrical' },
      'electrical25': { name: 'Electrical', link: '/blog/year-25/electrical' },
      'mechanical': { name: 'Mechanical', link: '/blog/mechanical' },
      'mechanical25': { name: 'Mechanical', link: '/blog/year-25/mechanical' },
      'outreach': { name: 'Outreach', link: '/blog/outreach' },
      'testing': { name: 'Testing', link: '/blog/testing' }
    }

    const info = categoryMap[category.toLowerCase()] || null

    // If user navigated from a category page, use that as the back link
    if (location.state?.from) {
      return { ...info, link: location.state.from }
    }

    // Otherwise, if current URL contains /year-25/, adjust the back link to include it
    // (for non-25 suffixed categories that are accessed via year-25 routes)
    if (info && !category.includes('25') && location.pathname.includes('/year-25/')) {
      const baseCategory = category.toLowerCase()
      return { ...info, link: `/blog/year-25/${baseCategory}` }
    }

    return info
  }

  const categoryInfo = getCategoryInfo()

  // Get prev/next navigation for testing category
  const getAdjacentPosts = () => {
    if (category !== 'testing') return { prev: null, next: null }

    const posts = categoryBlogs.testing
    const currentIndex = posts.findIndex(post => post.markdownPath === markdownPath)

    if (currentIndex === -1) return { prev: null, next: null }

    return {
      prev: currentIndex > 0 ? posts[currentIndex - 1] : null,
      next: currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null
    }
  }

  const { prev, next } = getAdjacentPosts()

  useEffect(() => {
    setLoading(true)
    fetch(markdownPath)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load content')
        return res.text()
      })
      .then(text => {
        setContent(text)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error loading markdown:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [markdownPath])

  if (loading) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-center text-gray-500">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-center text-red-500">Error loading content: {error}</p>
          </div>
        </div>
      </div>
    )
  }

  // Get display name for category title
  const getCategoryTitle = () => {
    if (!category) return null

    const titleMap = {
      'autonomy': 'Autonomy Blog',
      'autonomy25': 'Autonomy Blog',
      'electrical': 'Electrical Blog',
      'electrical25': 'Electrical Blog',
      'mechanical': 'Mechanical Blog',
      'mechanical25': 'Mechanical Blog',
      'outreach': 'Outreach Blog',
      'testing': 'Testing Blog'
    }

    return titleMap[category.toLowerCase()] || null
  }

  const categoryTitle = getCategoryTitle()

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Category title header */}
        {categoryTitle && categoryInfo && (
          <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
            <Link
              to={categoryInfo.link}
              className="hover:text-secondary transition-colors"
            >
              {categoryTitle}
            </Link>
          </h1>
        )}

        <div className="bg-white rounded-lg shadow-md pt-1 px-8 pb-4">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm, remarkMath]}
              rehypePlugins={[rehypeRaw, rehypeKatex]}
              components={{
                img: ({node, ...props}) => (
                  <img
                    {...props}
                    className="mx-auto my-8 rounded-lg max-w-full h-auto"
                    style={{maxWidth: '70%'}}
                  />
                ),
                p: ({node, children, ...props}) => {
                  return <p className="mb-4 text-gray-700 leading-relaxed" {...props}>{children}</p>
                },
                figcaption: ({node, ...props}) => (
                  <figcaption className="text-center text-sm text-gray-600 mt-2 mb-8 italic" {...props} />
                ),
                h1: ({node, ...props}) => (
                  <h1 className="text-4xl font-heading font-bold text-primary mb-6" {...props} />
                ),
                h2: ({node, ...props}) => (
                  <h2 className="text-3xl font-heading font-bold text-primary mt-8 mb-4" {...props} />
                ),
                h3: ({node, ...props}) => (
                  <h3 className="text-2xl font-heading font-bold text-primary mt-6 mb-3" {...props} />
                ),
                a: ({node, ...props}) => (
                  <a className="text-secondary hover:text-primary underline" target="_blank" rel="noopener noreferrer" {...props} />
                ),
                ul: ({node, ...props}) => (
                  <ul className="list-disc list-outside ml-6 mb-4 space-y-2" {...props} />
                ),
                ol: ({node, ...props}) => (
                  <ol className="list-decimal list-outside ml-6 mb-4 space-y-2" {...props} />
                ),
                li: ({node, ...props}) => (
                  <li className="text-gray-700 leading-relaxed" {...props} />
                ),
                video: ({node, ...props}) => (
                  <video
                    {...props}
                    className="mx-auto my-8 rounded-lg"
                    style={{maxWidth: '70%'}}
                  />
                ),
                table: ({node, ...props}) => (
                  <table className="min-w-full border-collapse border border-gray-300 my-6" {...props} />
                ),
                thead: ({node, ...props}) => (
                  <thead className="bg-gray-100" {...props} />
                ),
                tbody: ({node, ...props}) => (
                  <tbody {...props} />
                ),
                tr: ({node, ...props}) => (
                  <tr className="border-b border-gray-300" {...props} />
                ),
                th: ({node, ...props}) => (
                  <th className="border border-gray-300 px-4 py-2 text-left font-semibold" {...props} />
                ),
                td: ({node, ...props}) => (
                  <td className="border border-gray-300 px-4 py-2" {...props} />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Navigation buttons at bottom */}
        <div className="mt-8 flex justify-between items-center">
          {/* Previous button */}
          {prev ? (
            <Link
              to={prev.link}
              className="px-6 py-3 text-text hover:text-primary transition-colors"
            >
              ← Previous
            </Link>
          ) : (
            <div className="px-6 py-3 invisible">← Previous</div>
          )}

          {/* Back button */}
          {categoryInfo ? (
            <Link
              to={categoryInfo.link}
              className="px-6 py-3 text-text hover:text-primary transition-colors"
            >
              Back to {categoryInfo.name}
            </Link>
          ) : (
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-3 text-text hover:text-primary transition-colors"
            >
              Back
            </button>
          )}

          {/* Next button */}
          {next ? (
            <Link
              to={next.link}
              className="px-6 py-3 text-text hover:text-primary transition-colors"
            >
              Next →
            </Link>
          ) : (
            <div className="px-6 py-3 invisible">Next →</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogPost
