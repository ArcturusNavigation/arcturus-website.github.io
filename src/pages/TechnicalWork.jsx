import React from 'react'
import { Link } from 'react-router-dom'

const TechnicalWork = () => {
  const technicalPages = [
    {
      title: 'Autonomy',
      image: '/Pictures/Blogs/buoydetection.png',
      description: 'Explore our autonomy subsystems including perception, localization, path planning, and control',
      link: '/blog/autonomy'
    },
    {
      title: 'Mechanical',
      image: '/Pictures/Blogs/VehicleIcon_ShipHappens_1-1r.png',
      description: 'Learn about our mechanical systems including hulls, propulsion, sensor mast, and mechanisms',
      link: '/blog/mechanical'
    },
    {
      title: 'Electrical',
      image: '/Pictures/Blogs/electrical.jpg',
      description: 'Discover our electrical systems including BMS, buck boards, and e-stop mechanisms',
      link: '/blog/electrical'
    }
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">
            Technical Work
          </h1>
          <p className="text-xl text-text max-w-3xl mx-auto">
            Explore our technical systems and read our comprehensive design documentation.
          </p>
        </div>

        {/* Technical Design Report Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4 text-center">
              Technical Design Report 2023
            </h2>
            <p className="text-text text-center mb-6">
              Read our comprehensive technical design report submitted for RoboBoat 2023.
            </p>
            <div className="flex justify-center">
              <a
                href="https://robonation.org/app/uploads/sites/3/2023/02/TDR_MITArcturus_RB2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-light transition-colors font-semibold"
              >
                View Technical Design Report
              </a>
            </div>
          </div>
        </div>

        {/* Technical Subsystems Section */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8 text-center">
            Technical Subsystems
          </h2>
          <p className="text-lg text-text text-center mb-12">
            Click on the cards below to explore our technical subsystems in detail.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalPages.map((page, index) => (
              <Link
                key={index}
                to={page.link}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden block group"
              >
                <div className="p-8 flex justify-center items-center bg-white" style={{ minHeight: '200px' }}>
                  <img
                    src={page.image}
                    alt={page.title}
                    className="max-w-full h-auto object-contain"
                    style={{ maxHeight: '180px' }}
                  />
                </div>
                <div className="px-6 pb-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-3 text-center">
                    {page.title}
                  </h3>
                  <p className="text-text text-center">
                    {page.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechnicalWork
