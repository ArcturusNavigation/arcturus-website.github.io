import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const TechnicalWork = () => {
  const [activeTab, setActiveTab] = useState('autonomy')

  const subsystemsByTab = {
    autonomy: [
      {
        title: 'Perception',
        image: '/Pictures/Blogs/buoydetection.png',
        description: 'Computer vision and sensor fusion for object detection and environment understanding',
        link: '/blog/autonomy/perception'
      },
      {
        title: 'Localization',
        image: '/Pictures/Blogs/lidar.jpg',
        description: 'GPS, IMU, and sensor integration for accurate position tracking',
        link: '/blog/autonomy/localization'
      },
      {
        title: 'Path Planning',
        image: '/Pictures/Blogs/pathplanning.png',
        description: 'Algorithms for generating optimal routes and avoiding obstacles',
        link: '/blog/autonomy/pathplanning'
      },
      {
        title: 'Controller',
        image: '/Pictures/Blogs/gazebo.jpg',
        description: 'Low-level controllers for precise navigation and maneuvering',
        link: '/blog/autonomy/controller'
      }
    ],
    electrical: [
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
    ],
    mechanical: [
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
  }

  const tabTitles = {
    autonomy: 'Autonomy',
    electrical: 'Electrical Engineering',
    mechanical: 'Mechanical Engineering'
  }

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

        {/* Technical Subsystems Section with Tabs */}
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-center border-b border-gray-200">
              <button
                onClick={() => setActiveTab('autonomy')}
                className={`px-6 py-3 transition-colors border-b-2 ${
                  activeTab === 'autonomy'
                    ? 'text-primary font-semibold border-primary'
                    : 'text-text border-transparent hover:text-primary hover:border-primary'
                }`}
              >
                Autonomy
              </button>
              <button
                onClick={() => setActiveTab('electrical')}
                className={`px-6 py-3 transition-colors border-b-2 ${
                  activeTab === 'electrical'
                    ? 'text-primary font-semibold border-primary'
                    : 'text-text border-transparent hover:text-primary hover:border-primary'
                }`}
              >
                Electrical
              </button>
              <button
                onClick={() => setActiveTab('mechanical')}
                className={`px-6 py-3 transition-colors border-b-2 ${
                  activeTab === 'mechanical'
                    ? 'text-primary font-semibold border-primary'
                    : 'text-text border-transparent hover:text-primary hover:border-primary'
                }`}
              >
                Mechanical
              </button>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">
              {tabTitles[activeTab]}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsystemsByTab[activeTab].map((subsystem, index) => (
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
    </div>
  )
}

export default TechnicalWork
