import React from 'react'
import { Link } from 'react-router-dom'

const Electrical = () => {
  const subsystems = [
    {
      title: 'Battery Management System',
      image: '/Pictures/Blogs/bms.png',
      description: 'Power distribution and battery monitoring system',
      link: '/blog/electrical/bms'
    },
    {
      title: 'Buck Board',
      image: '/Pictures/Blogs/buckboard.jpg',
      description: 'Voltage regulation for electronic components',
      link: '/blog/electrical/buckboard'
    },
    {
      title: 'E-Stop',
      image: '/Pictures/Blogs/estop.png',
      description: 'Emergency stop system for safety',
      link: '/blog/electrical/estop'
    }
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">
            Electrical Engineering
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subsystems.map((subsystem, index) => (
            <Link
              key={index}
              to={subsystem.link}
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

        <div className="flex justify-between items-center mt-12 max-w-6xl mx-auto">
          <Link
            to="/blog/autonomy"
            className="px-6 py-3 text-text hover:text-primary transition-colors"
          >
            ← Autonomy
          </Link>
          <Link
            to="/technical-work"
            className="px-6 py-3 text-text hover:text-primary transition-colors"
          >
            Back to Technical Work
          </Link>
          <Link
            to="/blog/mechanical"
            className="px-6 py-3 text-text hover:text-primary transition-colors"
          >
            Mechanical →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Electrical
