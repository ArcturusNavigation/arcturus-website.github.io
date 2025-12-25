import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Fuse from 'fuse.js'
import { searchIndex } from '../searchIndex'

const Search = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const searchRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  // Initialize Fuse.js with search options
  const fuse = useRef(
    new Fuse(searchIndex, {
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
  )

  // Handle search input
  useEffect(() => {
    if (query.trim().length >= 2) {
      const searchResults = fuse.current.search(query)
      setResults(searchResults.slice(0, 8)) // Limit to 8 results
      setIsOpen(true)
      setSelectedIndex(0)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

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

  return (
    <div className="relative" ref={searchRef}>
      {/* Search Icon Button (collapsed state) */}
      {!isExpanded && (
        <button
          onClick={handleSearchIconClick}
          className="text-white hover:text-primary-light transition-colors text-xl"
          aria-label="Open search"
        >
          <i className="bi bi-search"></i>
        </button>
      )}

      {/* Search Input (expanded state) */}
      {isExpanded && (
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
          <i className="bi bi-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
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
            <i className="bi bi-x-lg"></i>
          </button>
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
            <i className="bi bi-search text-2xl mb-2"></i>
            <p>No results found for "{query}"</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
