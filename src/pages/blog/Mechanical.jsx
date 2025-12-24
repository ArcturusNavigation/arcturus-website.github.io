import React from 'react'

const Mechanical = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          Mechanical Engineering
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-text mb-6">
            The mechanical team designs, prototypes, and builds all of the physical aspects of the vessel.
            This includes tasks such as manufacturing the hulls, creating robotic mechanisms (ex. ball launcher),
            and machining customized parts.
          </p>

          <div className="mt-8">
            <img
              src="/Pictures/boat_cad.jpg"
              alt="Boat CAD"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* TODO: Add detailed mechanical blog content from original HTML */}
        </div>
      </div>
    </div>
  )
}

export default Mechanical
