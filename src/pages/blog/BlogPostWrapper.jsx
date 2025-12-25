import { useParams, Navigate } from 'react-router-dom'
import BlogPost from '../../components/BlogPost'
import { blogPosts } from '../../config/blogPosts'

const BlogPostWrapper = () => {
  const { category, slug } = useParams()
  const postKey = `${category}/${slug}`
  const postConfig = blogPosts[postKey]

  if (!postConfig) {
    return <Navigate to="/404" replace />
  }

  return <BlogPost markdownPath={postConfig.markdownPath} category={postConfig.category} />
}

export default BlogPostWrapper
