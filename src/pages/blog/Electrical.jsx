import React from 'react'
import { Link } from 'react-router-dom'
import { categoryBlogs } from '../../config/blogPosts'

const Electrical = () => {
  const subsystems = categoryBlogs.electrical

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-10">
          Electrical Systems
        </h1>

        <div className="max-w-4xl mx-auto mb-12 text-center">
          <p className="text-lg text-text mb-6">
            Our electrical systems handle power distribution, sensing, and all onboard electronics for our autonomous surface vehicle.
          </p>
        </div>

        {subsystems && subsystems.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subsystems.map((subsystem) => (
                <Link
                  key={subsystem.slug}
                  to={subsystem.link.replace('/blog/', '/blog/year-25/')}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden block group"
                >
                  <div className="p-8 flex justify-center items-center bg-white" style={{ minHeight: '200px' }}>
                    <img
                      src={subsystem.image}
                      alt={subsystem.title}
                      className="max-w-full h-auto object-contain"
                      style={{ maxHeight: '180px' }}
                    />
                  </div>
                  <div className="px-6 pb-6">
                    <h4 className="text-xl font-heading font-bold text-primary mb-3 text-center">
                      {subsystem.title}
                    </h4>
                    <p className="text-text text-center">
                      {subsystem.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
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

export default Electrical
