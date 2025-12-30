import { useParams, Navigate, useLocation } from 'react-router-dom'
import BlogPost from '../../components/BlogPost'
import { blogPosts } from '../../config/blogPosts'

const BlogPostWrapper = () => {
  const { category, slug } = useParams()
  const location = useLocation()

  // For year-prefixed routes like /blog/year-25/:category/:slug,
  // the lookup key should still be category/slug (ignoring the year prefix)
  const postKey = `${category}/${slug}`
  const postConfig = blogPosts[postKey]

  if (!postConfig) {
    return <Navigate to="/404" replace />
  }

  return <BlogPost markdownPath={postConfig.markdownPath} category={postConfig.category} />
}

export default BlogPostWrapper
