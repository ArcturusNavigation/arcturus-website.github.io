import { Link } from 'react-router-dom'

const Year22 = () => {
  const subteams = [
    {
      title: 'Navigation',
      image: '/Pictures/Blogs/navigation_11.png',
      description: 'Perception and path planning systems for autonomous navigation.',
      link: '/blog/year-22/navigation'
    },
    {
      title: 'Hullelectronics',
      image: '/Pictures/Blogs/hullectronics_1.png',
      description: 'Hull design, assembly, and electronics integration.',
      link: '/blog/year-22/hullelectronics'
    },
    {
      title: 'Task Force',
      image: '/Pictures/Blogs/taskforce_1.png',
      description: 'Competition task mechanisms and prototypes.',
      link: '/blog/year-22/taskforce'
    }
  ]

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-10">
          2021-2022 Season Technical Documentation
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Z9oIGivSWJs?si=olRVuL1-FLjRvn6y"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
          <div className="space-y-6 text-center">
            <p className="text-lg text-text">
              <em>CatamaROV</em> was the autonomous surface vehicle (ASV) Arcturus designed for the 2022 RoboBoat
              competition. This was one of our first iterations featuring a catamaran hull with azimuthal thrusters
              (azipods) for enhanced maneuverability and control during navigation tasks.
            </p>
            <a
              href="https://robonation.org/app/uploads/sites/3/2022/05/RB22_MIT-Arcturus_TDR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-semibold hover:bg-primary-light transition-colors"
            >
              RoboBoat 2022 Technical Design Report
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
      </div>
    </div>
  )
}

export default Year22
