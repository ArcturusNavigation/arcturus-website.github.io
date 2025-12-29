import React from 'react'
import { Link } from 'react-router-dom'

const Year25 = () => {
  const subteams = [
    {
      title: 'Autonomy',
      image: '/Pictures/testing_fall2024.jpg',
      description: 'Perception, localization, and planning systems that guide the ASV.',
      link: '/blog/year-25/autonomy'
    },
    {
      title: 'Electrical',
      image: '/Pictures/Blogs/bms.png',
      description: 'Power distribution, sensing, and onboard electronics for our vehicle.',
      link: '/blog/year-25/electrical'
    },
    {
      title: 'Mechanical',
      image: '/Pictures/boat_cad.jpg',
      description: 'Hull design, propulsion integration, and mechanical systems.',
      link: '/blog/year-25/mechanical'
    }
  ]

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-10">
          2023-2025 Season Technical Documentation
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <img
              src="/Pictures/fishnships_pool.jpg"
              alt="Fish N Ships at the pool"
              className="w-full max-w-2xl rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-6 text-center">
            <p className="text-lg text-text">
              <em>Fish 'N Ships</em> is the autonomous surface vehicle (ASV) Arcturus has designed for the 2025 RoboBoat
              competition. The vessel features a catamaran hull with four thrusters in an X-drive configuration for
              precision control and agility.
            </p>
            <a
              href="/Pictures/Blogs/TDR_MITArcturus_RB2025.pdf"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-semibold hover:bg-primary-light transition-colors"
            >
              RoboBoat 2025 Technical Design Report
            </a>
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

        <div className="flex justify-between items-center mt-12 max-w-6xl mx-auto">
          <Link
            to="/blog/year-23"
            className="px-6 py-3 text-text hover:text-primary transition-colors"
            style={{ width: '200px', textAlign: 'left' }}
          >
            ← Previous Season
          </Link>
          <Link
            to="/past-seasons"
            className="px-6 py-3 text-text hover:text-primary transition-colors text-center"
          >
            Back to Past Seasons
          </Link>
          <div style={{ width: '200px' }}></div>
        </div>
      </div>
    </div>
  )
}

export default Year25
