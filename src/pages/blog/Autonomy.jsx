import React from 'react'
import { Link } from 'react-router-dom'

const Autonomy = () => {
  const subsystems = [
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
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-heading font-bold text-primary mb-4">
            Autonomy
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

export default Autonomy
