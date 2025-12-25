import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Year22 = () => {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          2021-2022 Season
        </h1>

        {/* Team Video */}
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-heading font-bold text-primary mb-6">Team Video</h2>
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/Z9oIGivSWJs?si=olRVuL1-FLjRvn6y"
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
              Technical Design Report 2022
            </h2>
            <span className="text-2xl text-primary">
              {openSection === 'tech-report' ? '−' : '+'}
            </span>
          </button>
          {openSection === 'tech-report' && (
            <div className="mt-4 bg-white p-6 rounded-lg shadow-lg">
              <iframe
                src="https://robonation.org/app/uploads/sites/3/2022/05/RB22_MIT-Arcturus_TDR.pdf"
                className="w-full h-screen"
                title="Technical Design Report 2022"
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

        {/* Hullelectronics Team Blog */}
        <div className="max-w-4xl mx-auto mb-8">
          <button
            onClick={() => toggleSection('hull-blog')}
            className="w-full flex justify-between items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-heading font-bold text-primary">
              Hullelectronics Team Blog
            </h2>
            <span className="text-2xl text-primary">
              {openSection === 'hull-blog' ? '−' : '+'}
            </span>
          </button>
          {openSection === 'hull-blog' && (
            <div className="mt-4 bg-white p-6 rounded-lg shadow-lg space-y-8">
              {/* Entry 1 */}
              <article className="border-b pb-8">
                <img
                  src="/Pictures/Blogs/hullectronics_1.png"
                  alt="Hullelectronics"
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-bold text-primary mb-2">Hullelectronics</h3>
                <p className="text-sm text-gray-600 mb-4">January 23, 2022</p>
                <div className="space-y-4 text-text">
                  <h4 className="font-bold text-lg">Current Status</h4>
                  <p>
                    For those who are unfamiliar with the structure of MIT Arcturus, we split up into subteams to complete tasks
                    and work on our competition boat in an efficient manner. One of such subteams solely focuses on the boat itself
                    and in doing so, plays an integral role in creating a foundational structure to support the work being done by
                    the other subteams.
                  </p>
                  <p>
                    So far, we have fully assembled the frame of our test boat (coined CatamaROV) and are starting to install
                    azimuthal thrusters, which we usually will call azipods.
                  </p>
                </div>
              </article>

              {/* Entry 2 */}
              <article className="border-b pb-8">
                <img
                  src="/Pictures/Blogs/hullectronics_2.png"
                  alt="Hullelectronics"
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-bold text-primary mb-2">Hullelectronics</h3>
                <p className="text-sm text-gray-600 mb-4">April 17, 2022</p>
                <div className="space-y-4 text-text">
                  <h4 className="font-bold text-lg">Recent Developments</h4>
                  <p>
                    We just completed our first field test with CatamaROV this week! This was one of the first times we were able
                    to get it out on the water to test its speed and maneuverability.
                  </p>
                </div>
              </article>

              {/* Entry 3 */}
              <article>
                <img
                  src="/Pictures/Blogs/hullectronics_3.png"
                  alt="Hullelectronics"
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-bold text-primary mb-2">Hullelectronics</h3>
                <p className="text-sm text-gray-600 mb-4">May 15, 2022</p>
                <div className="space-y-4 text-text">
                  <h4 className="font-bold text-lg">Current Status</h4>
                  <p>
                    After successful trials with our test boat (CatamaROV), we are finalizing our designs and are looking to
                    fabricate our final hull.
                  </p>
                </div>
              </article>
            </div>
          )}
        </div>

        {/* Task Force Team Blog */}
        <div className="max-w-4xl mx-auto mb-8">
          <button
            onClick={() => toggleSection('taskforce-blog')}
            className="w-full flex justify-between items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-heading font-bold text-primary">
              Task Force Team Blog
            </h2>
            <span className="text-2xl text-primary">
              {openSection === 'taskforce-blog' ? '−' : '+'}
            </span>
          </button>
          {openSection === 'taskforce-blog' && (
            <div className="mt-4 bg-white p-6 rounded-lg shadow-lg space-y-8">
              {/* Entry 1 */}
              <article className="border-b pb-8">
                <img
                  src="/Pictures/Blogs/taskforce_1.png"
                  alt="Task Force"
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-bold text-primary mb-2">Task Force</h3>
                <p className="text-sm text-gray-600 mb-4">January 5, 2022</p>
                <div className="space-y-4 text-text">
                  <h4 className="font-bold text-lg">Let's Get This Drone to Fly</h4>
                  <p>
                    This week welcomed a new member of Drone Zone, Erin! At the beginning of this week we had our drone physically
                    assembled, but it needed a lot of work to get the electronics finished.
                  </p>
                  <h4 className="font-bold text-lg">Change of plans</h4>
                  <p>
                    We have just discovered there is no drone in this year's competition. To accommodate these changes, Drone Zone
                    and Landing Gear will be merging teams into Task Force.
                  </p>
                </div>
              </article>

              {/* Entry 2 */}
              <article>
                <img
                  src="/Pictures/Blogs/taskforce_2.png"
                  alt="Task Force"
                  className="w-full mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-bold text-primary mb-2">Task Force</h3>
                <p className="text-sm text-gray-600 mb-4">April 12, 2022</p>
                <div className="space-y-4 text-text">
                  <h4 className="font-bold text-lg">Prototypes Prototypes Prototypes</h4>
                  <p>
                    After finishing our prototype session for the water gun and deciding on an aiming system, we are looking forward
                    to the skeeball shooter.
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

export default Year22
