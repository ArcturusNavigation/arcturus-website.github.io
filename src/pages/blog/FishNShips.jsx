import React from 'react'

const FishNShips = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          Fish 'N Ships
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-text mb-6">
            Fish 'N Ships is our new competition vessel. It features a catamaran design with four thrusters
            in an x-drive configuration to allow for precision and control.
          </p>

          <div className="mt-8">
            <img
              src="/Pictures/fishnships_florida.jpg"
              alt="Fish N Ships in Florida"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* TODO: Add detailed Fish N Ships content from original HTML */}
        </div>
      </div>
    </div>
  )
}

export default FishNShips
