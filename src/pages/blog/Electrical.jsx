import React from 'react'

const Electrical = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          Electrical Engineering
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-text mb-6">
            The electrical team is responsible for the electrical system of the boat. This includes
            designing printed circuit boards, wiring all of the components, and integrating the mechanical
            system with the sensors.
          </p>

          <div className="mt-8">
            <img
              src="/Pictures/Blogs/bms.png"
              alt="Battery Management System"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* TODO: Add detailed electrical blog content from original HTML */}
        </div>
      </div>
    </div>
  )
}

export default Electrical
