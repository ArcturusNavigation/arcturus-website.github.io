import React from 'react'

const Team = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          Team Members
        </h1>
        <div className="text-center">
          <img
            src="/Pictures/team_spring2025.jpg"
            alt="Arcturus Team Spring 2025"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg mb-8"
          />
          <p className="text-lg text-text max-w-3xl mx-auto">
            Our team is composed of passionate MIT students from various disciplines,
            working together to build cutting-edge autonomous surface vehicles.
          </p>
        </div>
        {/* TODO: Add individual team member profiles */}
      </div>
    </div>
  )
}

export default Team
