import React from 'react'
import { Link } from 'react-router-dom'
import { categoryBlogs } from '../../config/blogPosts'

const Testing = () => {
  const tests = categoryBlogs.testing

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-10">
          Testing
        </h1>

        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-lg text-text mb-6">
            Our testing procedures ensure system integration, validate performance, and verify reliability of our autonomous surface vehicle.
          </p>
        </div>

        {tests && tests.length > 0 && (
          <div className="max-w-4xl mx-auto space-y-4">
            {tests.map((test) => (
              <Link
                key={test.link}
                to={test.link}
                className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-primary group-hover:text-accent transition-colors">
                      {test.title}
                    </h3>
                  </div>
                  <div className="text-sm text-gray-500 whitespace-nowrap">
                    {(() => {
                      const [year, month, day] = test.date.split('-')
                      const date = new Date(year, month - 1, day)
                      return date.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })
                    })()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/technical-work"
            className="px-6 py-3 text-text hover:text-primary transition-colors"
          >
            Back to Technical Work
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Testing
