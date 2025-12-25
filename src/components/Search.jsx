import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Fuse from 'fuse.js'
import { Search as SearchIcon, X } from 'lucide-react'
import { categoryBlogs } from '../config/blogPosts'

const Search = ({ mobile = false }) => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [searchIndex, setSearchIndex] = useState([])
  const searchRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const fuse = useRef(null)

  // Build dynamic search index from blog posts and markdown content
  useEffect(() => {
    const buildSearchIndex = async () => {
      const index = []

      // Add main static pages
      index.push(
        {
          title: 'Home',
          path: '/',
          category: 'Main',
          content: 'Arcturus MIT autonomous robotics team autonomous surface vehicles ASV Fish N Ships catamaran design process autonomy electrical mechanical',
          keywords: ['home', 'arcturus', 'mit', 'robotics', 'asv', 'autonomous']
        },
        {
          title: 'About Us',
          path: '/about',
          category: 'Main',
          content: 'About Arcturus MIT autonomous robotics team history mission vision',
          keywords: ['about', 'team', 'mission', 'vision', 'history']
        },
        {
          title: 'Team Members',
          path: '/team',
          category: 'Main',
          content: 'Team members students engineers developers autonomy electrical mechanical leadership',
          keywords: ['team', 'members', 'students', 'people']
        },
        {
          title: 'Sponsors',
          path: '/sponsors',
          category: 'Main',
          content: 'Sponsors partners supporters funding donations companies organizations',
          keywords: ['sponsors', 'partners', 'funding', 'support']
        },
        {
          title: 'Past Seasons',
          path: '/past-seasons',
          category: 'Main',
          content: 'Past seasons competition history development challenges achievements',
          keywords: ['past', 'seasons', 'history', 'competition']
        }
      )

      // Add category pages
      index.push(
        {
          title: 'Autonomy',
          path: '/blog/autonomy',
          category: 'Technical Work',
          content: 'Autonomy navigation perception localization path planning controller computer vision sensors algorithms',
          keywords: ['autonomy', 'navigation', 'ai', 'sensors', 'perception', 'localization', 'path planning']
        },
        {
          title: 'Mechanical',
          path: '/blog/mechanical',
          category: 'Technical Work',
          content: 'Mechanical design manufacturing hulls propulsion mechanisms CAD prototyping machining',
          keywords: ['mechanical', 'design', 'manufacturing', 'hulls', 'propulsion', 'cad']
        },
        {
          title: 'Electrical',
          path: '/blog/electrical',
          category: 'Technical Work',
          content: 'Electrical electronics PCB circuit boards wiring power systems battery management',
          keywords: ['electrical', 'electronics', 'pcb', 'circuits', 'power', 'battery']
        },
        {
          title: 'Outreach',
          path: '/blog/outreach',
          category: 'Outreach',
          content: 'Outreach community events education demonstrations workshops science festivals',
          keywords: ['outreach', 'community', 'events', 'education', 'demos']
        },
        {
          title: 'Fish N Ships',
          path: '/technical-work',
          category: 'Vessels',
          content: 'Fish N Ships competition vessel catamaran x-drive thrusters design build',
          keywords: ['fish n ships', 'vessel', 'catamaran', 'boat', 'competition']
        }
      )

      // Fetch and parse markdown content for each blog post
      for (const [categoryName, posts] of Object.entries(categoryBlogs)) {
        for (const post of posts) {
          try {
            const response = await fetch(post.markdownPath)
            if (response.ok) {
              const markdown = await response.text()

              // Extract text content from markdown (remove markdown syntax)
              const textContent = markdown
                .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
                .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Remove links but keep text
                .replace(/#{1,6}\s/g, '') // Remove headers
                .replace(/[*_~`]/g, '') // Remove formatting
                .replace(/\n+/g, ' ') // Replace newlines with spaces
                .trim()

              // Generate keywords from title and description
              const keywords = [
                post.title.toLowerCase(),
                ...(post.description || '').toLowerCase().split(' '),
                categoryName
              ].filter(k => k.length > 2)

              index.push({
                title: post.title,
                path: post.link || post.url,
                category: categoryName.charAt(0).toUpperCase() + categoryName.slice(1),
                content: `${post.title} ${post.description || ''} ${textContent.slice(0, 500)}`,
                keywords: keywords
              })
            }
          } catch (error) {
            // If markdown fetch fails, still add basic info
            console.warn(`Failed to fetch markdown for ${post.title}:`, error)
            const keywords = [
              post.title.toLowerCase(),
              ...(post.description || '').toLowerCase().split(' '),
              categoryName
            ].filter(k => k.length > 2)

            index.push({
              title: post.title,
              path: post.link || post.url,
              category: categoryName.charAt(0).toUpperCase() + categoryName.slice(1),
              content: `${post.title} ${post.description || ''}`,
              keywords: keywords
            })
          }
        }
      }

      setSearchIndex(index)
    }

    buildSearchIndex()
  }, [])

  // Initialize Fuse.js when search index is ready
  useEffect(() => {
    if (searchIndex.length > 0) {
      fuse.current = new Fuse(searchIndex, {
        keys: [
          { name: 'title', weight: 2 },
          { name: 'content', weight: 1 },
          { name: 'keywords', weight: 1.5 },
          { name: 'category', weight: 0.5 }
        ],
        threshold: 0.4,
        includeScore: true,
        minMatchCharLength: 2
      })
    }
  }, [searchIndex])

  // Handle search input
  useEffect(() => {
    if (query.trim().length >= 2 && fuse.current) {
      const searchResults = fuse.current.search(query)
      setResults(searchResults.slice(0, 8)) // Limit to 8 results
      setIsOpen(true)
      setSelectedIndex(0)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query, searchIndex])

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false)
        setIsExpanded(false)
        setQuery('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen || results.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % results.length)
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length)
        break
      case 'Enter':
        e.preventDefault()
        if (results[selectedIndex]) {
          handleResultClick(results[selectedIndex].item.path)
        }
        break
      case 'Escape':
        setIsOpen(false)
        inputRef.current?.blur()
        break
      default:
        break
    }
  }

  // Handle result click
  const handleResultClick = (path) => {
    navigate(path)
    setQuery('')
    setResults([])
    setIsOpen(false)
    setIsExpanded(false)
    inputRef.current?.blur()
  }

  // Handle search icon click
  const handleSearchIconClick = () => {
    setIsExpanded(true)
    // Focus input after expansion
    setTimeout(() => inputRef.current?.focus(), 100)
  }

  // Get category badge color
  const getCategoryColor = (category) => {
    const colors = {
      'Main': 'bg-blue-100 text-blue-800',
      'Technical Work': 'bg-green-100 text-green-800',
      'Autonomy': 'bg-purple-100 text-purple-800',
      'Electrical': 'bg-yellow-100 text-yellow-800',
      'Mechanical': 'bg-red-100 text-red-800',
      'Past Seasons': 'bg-gray-100 text-gray-800',
      'Outreach': 'bg-pink-100 text-pink-800',
      'Vessels': 'bg-indigo-100 text-indigo-800'
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  // For mobile, always show expanded input
  const shouldShowInput = mobile || isExpanded

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Icon Button (collapsed state) - desktop only */}
      {!mobile && !isExpanded && (
        <button
          onClick={handleSearchIconClick}
          className="mr-2 h-10 w-10 flex items-center justify-center text-white hover:text-primary-light transition-colors"
          aria-label="Open search"
        >
          <SearchIcon size={20} />
        </button>
      )}

      {/* Search Input (expanded state or mobile) */}
      {shouldShowInput && (
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => query.trim().length >= 2 && setIsOpen(true)}
            placeholder="Search..."
            className="w-full lg:w-64 px-4 py-2 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900"
          />
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          {!mobile && (
            <button
              onClick={() => {
                setQuery('')
                setResults([])
                setIsOpen(false)
                setIsExpanded(false)
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Close search"
            >
              <X size={18} />
            </button>
          )}
        </div>
      )}

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 max-h-96 overflow-y-auto z-50">
          {results.map((result, index) => (
            <button
              key={result.item.path}
              onClick={() => handleResultClick(result.item.path)}
              onMouseEnter={() => setSelectedIndex(index)}
              className={`w-full text-left px-4 py-3 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors ${
                index === selectedIndex ? 'bg-gray-50' : ''
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-gray-900 truncate">
                    {result.item.title}
                  </div>
                  <div className="text-sm text-gray-600 truncate">
                    {result.item.path}
                  </div>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${getCategoryColor(
                    result.item.category
                  )}`}
                >
                  {result.item.category}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* No Results Message */}
      {isOpen && query.trim().length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 z-50">
          <div className="text-center text-gray-500">
            <SearchIcon className="mx-auto mb-2" size={24} />
            <p>No results found for "{query}"</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
