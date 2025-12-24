import React from 'react'

const Sponsors = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          Our Sponsors
        </h1>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-text mb-8">
            We are grateful for the generous support of our sponsors who make our work possible.
            If you would like to support Arcturus, please contact us at{' '}
            <a href="mailto:arcturus-logistics@mit.edu" className="text-primary hover:text-primary-light">
              arcturus-logistics@mit.edu
            </a>
          </p>
          <div className="mb-8">
            <img
              src="/Pictures/donation-tier.png"
              alt="Donation Tiers"
              className="w-full max-w-2xl mx-auto"
            />
          </div>
          {/* TODO: Add sponsor logos and information */}
        </div>
      </div>
    </div>
  )
}

export default Sponsors
