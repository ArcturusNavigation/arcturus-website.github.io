import React from 'react'
import { Link } from 'react-router-dom'

const Autonomy = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          Autonomy
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-text mb-6">
            The autonomy team is responsible for the implementation of autonomous functions on our vessel.
            Some of the target tasks include navigating through gates, docking, and delivering objects
            to other vessels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Perception</h3>
              <p className="text-text mb-4">
                Computer vision and sensor fusion for object detection and environment understanding.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Path Planning</h3>
              <p className="text-text mb-4">
                Algorithms for generating optimal routes and avoiding obstacles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Localization</h3>
              <p className="text-text mb-4">
                GPS, IMU, and sensor integration for accurate position tracking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-heading font-bold text-primary mb-3">Control</h3>
              <p className="text-text mb-4">
                Low-level controllers for precise navigation and maneuvering.
              </p>
            </div>
          </div>

          {/* TODO: Add detailed autonomy blog content from original HTML */}
        </div>
      </div>
    </div>
  )
}

export default Autonomy
