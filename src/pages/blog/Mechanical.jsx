import React from 'react'
import { Link } from 'react-router-dom'

const Mechanical = () => {
  const subsystems = [
    {
      title: 'Hulls',
      image: '/Pictures/Blogs/hulls2.png',
      description: 'Foundation of our boat',
      link: '/blog/mechanical/hulls'
    },
    {
      title: 'Propulsion/Thruster Cages',
      image: '/Pictures/Blogs/propulsion.png',
      description: 'Driving force of our boat',
      link: '/blog/mechanical/propulsion'
    },
    {
      title: 'EE Box',
      image: '/Pictures/Blogs/eebox3.png',
      description: 'Electronics protector',
      link: '/blog/mechanical/eebox'
    },
    {
      title: 'Sensor Mast',
      image: '/Pictures/Blogs/sensormast2.png',
      description: 'Mounting point for sensors',
      link: '/blog/mechanical/sensormast'
    },
    {
      title: 'Mechanisms',
      image: '/Pictures/Blogs/mechanism.jpg',
      description: 'Allow for robotic functions',
      link: '/blog/mechanical/mechanisms'
    }
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link
            to="/blog/fish-n-ships"
            className="inline-flex items-center text-primary hover:text-secondary transition-colors"
          >
            <i className="bi bi-arrow-left mr-2"></i>
            Back to Technical Work
          </Link>
        </div>
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">
            Mechanical Engineering
          </h1>
          <h4 className="text-xl text-text mb-12">
            Click on the cards below to read more about our subsystems on <em>Fish 'N Ships</em>.
          </h4>
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
      </div>
    </div>
  )
}

export default Mechanical
