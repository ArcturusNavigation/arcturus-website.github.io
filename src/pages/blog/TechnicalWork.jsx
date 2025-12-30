import React from 'react'
import { Link } from 'react-router-dom'

const TechnicalWork = () => {
  const subteams = [
    {
      title: 'Autonomy',
      image: '/Pictures/testing_fall2024.jpg',
      description: 'Perception, localization, and planning systems for our ASV.',
      link: '/blog/autonomy'
    },
    {
      title: 'Electrical',
      image: '/Pictures/Blogs/bms.png',
      description: 'Power distribution, sensing, and onboard electronics.',
      link: '/blog/electrical'
    },
    {
      title: 'Mechanical',
      image: '/Pictures/boat_cad.jpg',
      description: 'Hull design, propulsion integration, and mechanical systems.',
      link: '/blog/mechanical'
    },
    {
      title: 'Testing',
      image: '/Pictures/testing.png',
      description: 'System integration, testing procedures, and validation.',
      link: '/blog/testing'
    }
  ]

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-10">
          Current Technical Work
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <img
              src="/Pictures/fishnships_florida.jpg"
              className="w-full max-w-2xl rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6 text-center">
            <p className="text-lg text-text">
              <i>Fish 'N Ships</i> is the autonomous surface vehicle (ASV) Arcturus is competing with for the 2026 Roboboat
              competition. In parallel, Arcturus is currently developing a new autonomous surface vehicle for Roboboat 2027!
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h1 className="text-4xl font-heading font-bold text-primary text-center mb-10">
            Subteam Technical Blogs
          </h1>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subteams.map((subteam) => (
            <Link
              key={subteam.title}
              to={subteam.link}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden block group"
            >
              <div className="p-8 flex justify-center items-center bg-white" style={{ minHeight: '200px' }}>
                <img
                  src={subteam.image}
                  alt={subteam.title}
                  className="max-w-full h-auto object-contain"
                  style={{ maxHeight: '180px' }}
                />
              </div>
              <div className="px-6 pb-6">
                <h4 className="text-xl font-heading font-bold text-primary mb-3 text-center">
                  {subteam.title}
                </h4>
                <p className="text-text text-center">
                  {subteam.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechnicalWork
