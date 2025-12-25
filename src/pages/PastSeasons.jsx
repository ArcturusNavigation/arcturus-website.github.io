import React from 'react'
import { Link } from 'react-router-dom'

const PastSeasons = () => {
  const seasons = [
    {
      title: '2021-2022 Season',
      image: '/Pictures/comp_grouppic_2022.jpg',
      link: '/blog/year-22',
      year: '2021-2022'
    },
    {
      title: '2022-2023 Season',
      image: '/Pictures/roboboat2023_team.jpg',
      link: '/blog/year-23',
      year: '2022-2023'
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
              <div className="p-8">
                <div className="relative w-full aspect-[3/2] overflow-hidden bg-gray-50">

                  <img
                    src={season.image}
                    alt={season.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </div> 

              <div className="px-6 pb-6">
                <h2 className="text-2xl font-heading font-bold text-primary mb-3 text-center">
                  {season.year}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PastSeasons
