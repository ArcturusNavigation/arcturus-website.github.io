import { useParams, Navigate, useLocation } from 'react-router-dom'
import BlogPost from '../../components/BlogPost'
import { blogPosts } from '../../config/blogPosts'

const BlogPostWrapper = () => {
  const { category, slug } = useParams()
  const location = useLocation()

  // Determine if this is a year-25 route
  const isYear25 = location.pathname.startsWith('/blog/year-25/')

  // For year-25 routes, append '25' to the category name for lookup
  const lookupCategory = isYear25 ? `${category}25` : category
  const postKey = `${lookupCategory}/${slug}`
  const postConfig = blogPosts[postKey]

  if (!postConfig) {
    return <Navigate to="/404" replace />
  }

  return <BlogPost markdownPath={postConfig.markdownPath} category={postConfig.category} />
}

export default BlogPostWrapper
