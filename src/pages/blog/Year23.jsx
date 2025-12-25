import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Year23 = () => {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Link
            to="/past-seasons"
            className="inline-flex items-center text-primary hover:text-secondary transition-colors"
          >
            <i className="bi bi-arrow-left mr-2"></i>
            Back to Past Seasons
          </Link>
        </div>
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          2022-2023 Season
        </h1>

        {/* Vehicles */}
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6 text-center">Our 2023 Season Vehicles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="block bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Pictures/Blogs/VehicleIcon_ShipHappens.png"
                alt="Ship Happens"
                className="w-full h-64 object-contain p-8"
              />
              <div className="p-6">
                <h5 className="text-2xl font-bold text-primary mb-3">Ship Happens</h5>
                <p className="text-text">
                  <em>Ship Happens</em> is the autonomous surface vehicle (ASV) Arcturus has designed for the RoboBoat 2023 competition and the Njord Challenge.
                </p>
              </div>
            </div>

            <div className="block bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Pictures/Blogs/VehicleIcon_Athena.png"
                alt="Athena"
                className="w-full h-64 object-contain p-8"
              />
              <div className="p-6">
                <h5 className="text-2xl font-bold text-primary mb-3">Athena</h5>
                <p className="text-text">
                  <em>Athena</em> is a smaller test boat we developed to serve as a testing platform while <em>Ship Happens</em> was being repaired.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Video */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Team Video</h2>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/zwJfxIwSBhE?si=8woHClpOl1DDdOOy"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>

        {/* Technical Design Report */}
        <div className="max-w-4xl mx-auto mb-8">
          <button
            onClick={() => toggleSection('tech-report')}
            className="w-full flex justify-between items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-heading font-bold text-primary">
              Technical Design Report 2023
            </h2>
            <span className="text-2xl text-primary">
              {openSection === 'tech-report' ? '−' : '+'}
            </span>
          </button>
          {openSection === 'tech-report' && (
            <div className="mt-4 bg-white p-6 rounded-lg shadow-lg">
              <iframe
                src="https://robonation.org/app/uploads/sites/3/2023/02/TDR_MITArcturus_RB2023.pdf"
                className="w-full h-screen"
                title="Technical Design Report 2023"
              />
            </div>
          )}
        </div>

        {/* Navigation Team Blog */}
        <div className="max-w-4xl mx-auto mb-8">
          <button
            onClick={() => toggleSection('nav-blog')}
            className="w-full flex justify-between items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-heading font-bold text-primary">
              Navigation Team Blog
            </h2>
            <span className="text-2xl text-primary">
              {openSection === 'nav-blog' ? '−' : '+'}
            </span>
          </button>
          {openSection === 'nav-blog' && (
            <div className="mt-4 bg-white p-6 rounded-lg shadow-lg space-y-8">
              {/* Buoy Detection */}
              <article className="border-b pb-8">
                <img
                  src="/Pictures/Blogs/navigation_11.png"
                  alt="Buoy Detection"
                  className="w-full max-w-md mx-auto mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-bold text-primary mb-2">Buoy Detection</h3>
                <p className="text-sm text-gray-600 mb-4">January 29, 2022</p>
                <div className="space-y-4 text-text">
                  <p>
                    One of the first tasks our team worked on was buoy detection. Most of the navigation courses in Roboboat
                    require us to identify buoys and then figure out how to navigate them. Using a ZED camera, we developed the
                    following algorithmic steps to properly identify buoys on the course:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Performs erosion with a segmentation kernel</li>
                    <li>Performs dilation with the same segmentation kernel</li>
                    <li>Converts the image to HSV</li>
                    <li>Gets the mask for each color range we are looking at (red, green, yellow)</li>
                    <li>Generates a bounding box for each disjoint blob in the color range mask</li>
                  </ul>
                </div>
              </article>

              {/* Path Planning */}
              <article>
                <img
                  src="/Pictures/Blogs/navigation_1.png"
                  alt="Path Planning"
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-bold text-primary mb-2">Path Planning</h3>
                <p className="text-sm text-gray-600 mb-4">March 18, 2022</p>
                <div className="space-y-4 text-text">
                  <p>
                    Our controller is a Pixhawk 4 running Ardupilot. It takes in GPS waypoint coordinates and headings and
                    handles the motor commands to achieve the desired position and heading. For the two main navigation tasks,
                    we plan to first identify them and head to the position shown in each of the above figures on the left. Then, we
                    will run through pre-planned paths that are adjusted in realtime by a local planner for obstacle avoidance. The
                    preplanned paths are shown visualized in RVIZ in the above figures on the right.
                  </p>
                </div>
              </article>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Year23
