import { Link } from 'react-router-dom'

const Year22Hullelectronics = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          Hullelectronics Team Blog
        </h1>

        <div className="flex justify-center mb-8">
          <Link
            to="/blog/year-22"
            className="px-6 py-3 text-text hover:text-primary transition-colors"
          >
            Back to 2022-2023 Season
          </Link>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Entry 1 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="/Pictures/Blogs/hullectronics_1.png"
              alt="Hullelectronics"
              className="w-full mb-6 rounded-lg"
            />
            <h2 className="text-3xl font-bold text-primary mb-3">Hullelectronics</h2>
            <p className="text-sm text-gray-600 mb-6">January 23, 2022</p>
            <div className="space-y-4 text-text">
              <h3 className="font-bold text-xl">Current Status</h3>
              <p>
                For those who are unfamiliar with the structure of MIT Arcturus, we split up into subteams to complete tasks
                and work on our competition boat in an efficient manner. One of such subteams solely focuses on the boat itself
                and in doing so, plays an integral role in creating a foundational structure to support the work being done by
                the other subteams. As the primary focus of this team is the hardware of the vessel itself, like the hull and
                the integrated electronics that allow it to function, we have merged these two elements into the wonderful field
                of engineering known to us as Hullectronics.
              </p>
              <p>
                So far, we have fully assembled the frame of our test boat (coined CatamaROV) and are starting to install
                azimuthal thrusters, which we usually will call azipods. The design of this thruster implementation has been an
                entire subteam effort. We have each been taking on separate tasks as well as one component of the azipod design,
                which we hope to test ASAP on CatamaROV.
              </p>
              <p>
                Val and Sebastian have been working through the kinks on our azipod-to-hull mount this week among other things.
                While doing that, Val has been looking ahead and ordering parts we will soon be needing to finalize CatamaROV and
                Sebastian has been preparing our waterproof "dry boxes" which house all of the electronics for the boat. Penelope
                finished fabricating the bearing attachments for the azipods, which are responsible for transferring all the thrust
                from the azipod to the boat itself. Meanwhile, Ansel finished mapping all of the controls with the Ardupilot and
                wired up all the components in the dry boxes that Sebastian helped to solder.
              </p>
              <h3 className="font-bold text-xl mt-6">Next Steps</h3>
              <p>
                With most of CatamaROV coming together, we have to coordinate with our Navigations subteam to determine a testing
                schedule so that we can test some of the experimental elements of our design while also making sure they have the
                most useful testing platform possible so that we can start focusing on the design and fabrication of our final boat.
              </p>
            </div>
          </article>

          {/* Entry 2 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="/Pictures/Blogs/hullectronics_2.png"
              alt="Hullelectronics"
              className="w-full mb-6 rounded-lg"
            />
            <h2 className="text-3xl font-bold text-primary mb-3">Hullelectronics</h2>
            <p className="text-sm text-gray-600 mb-6">April 17, 2022</p>
            <div className="space-y-4 text-text">
              <h3 className="font-bold text-xl">Recent Developments</h3>
              <p>
                We just completed our first field test with CatamaROV this week! This was one of the first times we were able
                to get it out on the water to test its speed and maneuverability. Testing in our two tanks are great for some
                aspects, but out on the Charles we confirmed that our three azipod layout would indeed give us the flexibility
                we need to make complex maneuvers like tight turns at both low and high speeds. We also confirmed what we already
                knew about our preliminary azipod design, that we are going to need to increase its supporting substructure for
                our scaled up final hull. Overall, the tests were a success!
              </p>
              <h3 className="font-bold text-xl mt-6">Next Steps</h3>
              <p>
                Moving forward, we can start applying what we verified in our testing to the design of the final hull. Time
                permitting (on both the Hullectronics and Navigations side of things), we will fabricate and install three
                azipods into our final hull after a redesign to compensate for our larger final vessel. We already have some
                ideas for the new azipod design and after some conversations between subteams (and some calculations we ran
                around buoyancy to ensure we can reuse this boat for future projects) we have decided fully on a catamaran
                structure going forward.
              </p>
            </div>
          </article>

          {/* Entry 3 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="/Pictures/Blogs/hullectronics_3.png"
              alt="Hullelectronics"
              className="w-full mb-6 rounded-lg"
            />
            <h2 className="text-3xl font-bold text-primary mb-3">Hullelectronics</h2>
            <p className="text-sm text-gray-600 mb-6">May 15, 2022</p>
            <div className="space-y-4 text-text">
              <h3 className="font-bold text-xl">Current Status</h3>
              <p>
                After successful trials with our test boat (CatamaROV), we are finalizing our designs and are looking to
                fabricate our final hull. With sustainability in mind, we will try and repurpose a foam-fiberglass hull
                that we had built previously to meet our design specifications.
              </p>
              <h3 className="font-bold text-xl mt-6">Recent Developments</h3>
              <p>
                Our new catamaran hulls have been cut down to size and are now in the process of getting the epoxy and
                fiberglass lay-up done. Sebastian and Yasin have been working on the aluminum frame of the boat that will
                hold the two hulls together and Ansel has been procuring materials for the deck that will hold all of the
                electronics on the vessel.
              </p>
              <p>
                Jessica is working on adapting our azimuth thruster design to these new catamaran hulls. Adding several
                layers of structural support to these thruster elements will ensure this vital component is as secure as
                possible without sacrificing functionality. While the azipod thrusters will take some time to finish, it
                is imperative that we complete the hull and deck fabrication in a timely manner to allow our Navigations
                subteam the necessary time to mount the sensor suite for calibration.
              </p>
              <h3 className="font-bold text-xl mt-6">Goals and Timeline</h3>
              <p>
                After finalizing our azipod thrusters and finishing the hull retrofit, we will start to look at finishing
                the fabrication of the deck between our hulls at the start of next week. We will be modifying this bridge
                heavily in the coming weeks as we go in order to suit the specific challenges of this competition and
                provide a strong structural foundation for the Navigations and Task Force subteams' components.
              </p>
            </div>
          </article>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/blog/year-22"
            className="px-6 py-3 text-text hover:text-primary transition-colors"
          >
            Back to 2022-2023 Season
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Year22Hullelectronics
