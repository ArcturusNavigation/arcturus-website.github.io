import React from 'react'
import { Link } from 'react-router-dom'

const PastSeasons = () => {
  const seasons = [
    {
      title: '2022-2023 Season',
      image: '/Pictures/Blogs/VehicleIcon_ShipHappens.png',
      description: 'Ship Happens competed in RoboBoat 2023 and the Njord Challenge. Features our ASV and test boat Athena.',
      link: '/blog/year-23',
      year: '2022-2023'
    },
    {
      title: '2021-2022 Season',
      image: '/Pictures/Blogs/hullectronics_2.png',
      description: 'CatamaROV competed in RoboBoat 2022. First season with our catamaran design and azimuthal thrusters.',
      link: '/blog/year-22',
      year: '2021-2022'
    }
  ]

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-4">
          Past Seasons
        </h1>
        <p className="text-lg text-text text-center max-w-3xl mx-auto mb-12">
          Explore our journey through previous RoboBoat competition seasons. Each year brought new challenges, innovations, and learning experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {seasons.map((season, index) => (
            <Link
              key={index}
              to={season.link}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden block group"
            >
              <div className="p-8 flex justify-center items-center bg-white" style={{ minHeight: '250px' }}>
                <img
                  src={season.image}
                  alt={season.title}
                  className="max-w-full h-auto object-contain"
                  style={{ maxHeight: '220px' }}
                />
              </div>
              <div className="px-6 pb-6">
                <h2 className="text-2xl font-heading font-bold text-primary mb-3 text-center">
                  {season.year}
                </h2>
                <p className="text-text text-center">
                  {season.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PastSeasons
