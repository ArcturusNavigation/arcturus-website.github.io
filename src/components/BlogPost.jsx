import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

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
      'electrical': { name: 'Electrical', link: '/blog/electrical' },
      'mechanical': { name: 'Mechanical', link: '/blog/mechanical' },
      'outreach': { name: 'Outreach', link: '/blog/outreach' }
    }

    const info = categoryMap[category.toLowerCase()] || null

    // If current URL contains /year-25/, adjust the back link to include it
    if (info && location.pathname.includes('/year-25/')) {
      return { ...info, link: `/blog/year-25/${category}` }
    }

    return info
  }

  const categoryInfo = getCategoryInfo()

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

  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeRaw]}
              components={{
                img: ({node, ...props}) => (
                  <img
                    {...props}
                    className="mx-auto my-8 rounded-lg max-w-full h-auto"
                    style={{maxWidth: '70%'}}
                  />
                ),
                p: ({node, children, ...props}) => {
                  const child = children?.[0]
                  if (typeof child === 'string' && child.startsWith('Fig ') || (typeof child === 'string' && child.startsWith('*Fig '))) {
                    return <p className="text-center text-sm text-gray-600 mt-2 mb-8 italic" {...props}>{children}</p>
                  }
                  return <p className="mb-4 text-gray-700 leading-relaxed" {...props}>{children}</p>
                },
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
              }}
            >
              {content}
            </ReactMarkdown>
          </div>
        </div>

        {/* Back button at bottom */}
        <div className="mt-8 flex justify-center">
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
        </div>
      </div>
    </div>
  )
}

export default BlogPost
