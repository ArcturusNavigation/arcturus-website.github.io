const Year22TaskForce = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          Task Force Team Blog - 2022 Season
        </h1>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Entry 1 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="/Pictures/Blogs/taskforce_1.png"
              alt="Task Force"
              className="w-full mb-6 rounded-lg"
            />
            <h2 className="text-3xl font-bold text-primary mb-3">Task Force</h2>
            <p className="text-sm text-gray-600 mb-6">January 5, 2022</p>
            <div className="space-y-4 text-text">
              <h3 className="font-bold text-xl">Let's Get This Drone to Fly</h3>
              <p>
                This week welcomed a new member of Drone Zone, Erin! At the beginning of this week we had our drone physically
                assembled, but it needed a lot of work to get the electronics finished. Ita and Audrey created some monster wires
                to send consistent and equal power to all four of the motors. Once that was done, Erin was immediately working on
                the computer. Our drone was set up with a Pixhawk autopilot, but for unknown reasons we did not pass half of the
                flight checks to get the motors to start spinning. We turned all of them off, and one by one turned the checks
                back on, troubleshooting until we got the drone to fly consistently.
              </p>
              <p>
                At the same time, the Landing Gear team was just finishing up their prototype to allow the drone to land on the
                boat. They had a series of mag jigs connected together by a timing belt to turn the magnets "on" and "off" at once.
                With their new design, the drone should be able to land consistently, but we will have to switch our landing gear
                from regular legs to a thin metal ring.
              </p>
              <p>
                Currently on track with our timeline, we should have the two parts working together by the end of the month. We
                will be handing off the two prototypes to navigation so they can start programming them autonomously.
              </p>
              <h3 className="font-bold text-xl mt-6">Change of plans</h3>
              <p>
                We have just discovered there is no drone in this year's competition. To accommodate these changes, Drone Zone
                and Landing Gear will be merging teams into Task Force. Task Force will be working on the water gun and skeeball
                portions of the competition. We will be focusing the upcoming week on creating a new timeline, and deciding how
                we want to approach the new tasks.
              </p>
            </div>
          </article>

          {/* Entry 2 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="/Pictures/Blogs/taskforce_2.png"
              alt="Task Force"
              className="w-full mb-6 rounded-lg"
            />
            <h2 className="text-3xl font-bold text-primary mb-3">Task Force</h2>
            <p className="text-sm text-gray-600 mb-6">April 12, 2022</p>
            <div className="space-y-4 text-text">
              <h3 className="font-bold text-xl">Prototypes Prototypes Prototypes</h3>
              <p>
                After finishing our prototype session for the water gun and deciding on an aiming system, we are looking forward
                to the skeeball shooter. Since we do not yet know the exact dimensions for the skeeball shooter, we want to be a
                module as possible for the design. We are splitting Task Force into 3 teams, one will work on a flywheel (Audrey,
                Isa), one will work on an extending arm (Jessica, Richard), and the final will be working on a crossbow design
                (Erin, Via).
              </p>
              <p>
                Flywheel: The flywheel will be a wheel attached to the motor, close to a solid wall. As a ball is fed through,
                it will be shot ahead by the wheels. We like this idea because there are lots of examples of it from FTC, and
                it's pretty easy to build.
              </p>
              <p>
                Crossbow: The crossbow design uses a spring to shoot the ball. The ball will be loaded in, and the spring slowly
                cranked backwards until it's ready to shoot. This idea looks good because it should be very consistent with every
                throw, and we have a lot of modularity with a single design by changing the size of the barrel, and the spring.
              </p>
              <p>
                Extending Arm: The extending arm would be paired with one of the other two designs. It will extend beyond the
                initial measurements of the boat to accurately deliver the balls.
              </p>
              <p>
                All of these designs need to be compatible with the hull, in terms of power consumed as well as size.
              </p>
              <h3 className="font-bold text-xl mt-6">Upcoming Goals</h3>
              <p>
                We need to finish up these prototypes as soon as possible. A finished product will be given to the Navigation
                team so they can begin to plan for and program the aiming system. This week we plan to have a CAD model for
                each of the designs, and order any required materials.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Year22TaskForce
