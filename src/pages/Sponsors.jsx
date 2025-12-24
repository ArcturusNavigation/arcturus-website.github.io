import React from 'react'

const Sponsors = () => {
  const sponsors = [
    {
      name: 'Edgerton Center',
      logo: '/Pictures/Sponsors/edgerton-logo-new.png',
      url: 'https://edgerton.mit.edu/'
    },
    {
      name: 'MIT MechE',
      logo: '/Pictures/Sponsors/mit-meche-logo.jpg',
      url: 'https://meche.mit.edu/'
    },
    // {
    //   name: 'MIT EECS',
    //   logo: '/Pictures/Sponsors/eecslogo.png',
    //   url: 'https://www.eecs.mit.edu/'
    // },
    {
      name: 'Saronic',
      logo: '/Pictures/Sponsors/saronic.jpg',
      url: 'https://www.saronic.com/'
    },
    {
      name: 'Cadence',
      logo: '/Pictures/Sponsors/cadence-logo.png',
      url: 'https://www.cadence.com/en_US/home.html'
    },
    {
      name: 'Anduril',
      logo: '/Pictures/Sponsors/anduril.png',
      url: 'https://www.anduril.com/'
    },
    {
      name: 'Gordon-MIT Engineering Leadership',
      logo: '/Pictures/Sponsors/gel.jpg',
      url: 'https://gel.mit.edu/'
    },
    {
      name: 'Sea Grant',
      logo: '/Pictures/Sponsors/seagrant.png',
      url: 'https://seagrant.noaa.gov/'
    },
    {
      name: 'Ansys',
      logo: '/Pictures/Sponsors/ansys.png',
      url: 'https://www.ansys.com/'
    },
    // {
    //   name: 'MIT Coop',
    //   logo: '/Pictures/Sponsors/mit-coop-logo.png',
    //   url: 'https://www.thecoop.com/coopstore/estore_home.jsp'
    // },
    {
      name: 'Formlabs',
      logo: '/Pictures/Sponsors/formlabs-logo.png',
      url: 'https://formlabs.com/'
    },
    {
      name: 'PTC',
      logo: '/Pictures/Sponsors/ptc.png',
      url: 'https://www.ptc.com/en/'
    },
    // {
    //   name: 'MIT OME',
    //   logo: '/Pictures/Sponsors/mit-ome-logo.jpg',
    //   url: 'https://ome.mit.edu/'
    // }
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Thank You Section */}
        <section className="bg-bg-light py-16 -mx-4 px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-primary text-center mb-12">
              Thank you to our sponsors!
            </h2>

            {/* Sponsor Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-24 object-contain"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Sponsor Section */}
        <section className="max-w-4xl mx-auto">
          <hr className="border-t-4 border-primary mb-8" />
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">
            Interested in becoming a sponsor?
          </h2>

          <div className="text-lg text-text space-y-4 mb-8">
            <p>
              As a new team, we are looking for donations, partnerships, mentorships, and more.
              We are actively seeking donations ranging from $500 to $8,000 and beyond, with
              greater donations bringing greater benefits. All donations are tax deductible.
            </p>

            <p className="font-semibold">We are also looking for:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Parts or professional services</li>
              <li>Stock materials such as aluminum or plastics</li>
              <li>Use of industrial tools</li>
              <li>Professional advice</li>
            </ul>

            <p>
              If you are interested in sponsoring the team, please reach out at{' '}
              <a
                href="mailto:arcturusfinance@mit.edu"
                className="text-primary hover:text-primary-light font-semibold underline"
              >
                arcturusfinance@mit.edu
              </a>{' '}
              to learn more! Or if you're interested in making a charitable donation to the team
              as an individual, please visit{' '}
              <a
                href="https://giving.mit.edu/form?fundId=2530184&source=WBMPP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light underline"
              >
                this link
              </a>{' '}
              to make a gift.
            </p>
          </div>

          {/* Donation Tiers Image */}
          <div className="flex justify-center mt-12">
            <img
              src="/Pictures/donation-tier.png"
              alt="Donation Tiers"
              className="max-w-full md:max-w-md lg:max-w-lg rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default Sponsors
