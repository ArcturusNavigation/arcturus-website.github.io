import { Link } from 'react-router-dom'

const Year23 = () => {
  const subteams = [
    {
      title: 'Mechanics',
      image: '/pictures/Blogs/ship-happens-3-2-23-ME-pic2.png',
      description: 'Hull design, mechanisms, and mechanical systems for Ship Happens.',
      link: '/blog/year-23/mechanics'
    },
    {
      title: 'Electronics',
      image: '/pictures/Blogs/hullectronics_1.png',
      description: 'Power systems, electronics box, and thermal management.',
      link: '/blog/year-23/electronics'
    },
    {
      title: 'Navigation/Autonomy',
      image: '/pictures/Blogs/navigation_11.png',
      description: 'Perception, control systems, and autonomous navigation stack.',
      link: '/blog/year-23/navigation'
    }
  ]

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-10">
          2022-2023 Season Technical Documentation
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="flex justify-center">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/zwJfxIwSBhE?si=8woHClpOl1DDdOOy"
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
              Arcturus continued to develop <em>Ship Happens</em> for the 2023 RoboBoat
              competition and the Njord Challenge. The team also developed <em>Athena</em>, a smaller test boat that
              served as a testing platform while Ship Happens was being repaired.
            </p>
            <div className="flex-col space-y-4 gap-3">
              <a
                href="https://robonation.org/app/uploads/sites/3/2023/02/TDR_MITArcturus_RB2023.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-semibold hover:bg-primary-light transition-colors"
              >
                RoboBoat 2023 Technical Design Report
              </a>
              <a
                href="/documents/Njord_Challenge_2023_TDR.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-white font-semibold hover:bg-primary-light transition-colors"
              >
                Njord Challenge 2023 Technical Design Report
              </a>
            </div>
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
            to="/blog/year-22"
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
          <Link
            to="/blog/year-25"
            className="px-6 py-3 text-text hover:text-primary transition-colors"
            style={{ width: '200px', textAlign: 'right' }}
          >
            Next Season →
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Year23
