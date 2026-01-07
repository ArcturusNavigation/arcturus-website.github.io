import { Link } from 'react-router-dom'

const Year23Mechanics = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          Mechanics Team Blog
        </h1>

        <div className="flex justify-center mb-8">
          <Link
            to="/blog/year-23"
            className="px-6 py-3 text-text hover:text-primary transition-colors"
          >
            Back to 2022-2023 Season
          </Link>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Entry 1 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">May Update: Mechanics</h2>
            <p className="text-sm text-gray-600 mb-6">May 26, 2023</p>
            <div className="space-y-4 text-text">
              <p>
                The MechE team, despite being shorthanded, got the boat mechanically complete! We finished mounting the new deck on the
                Njord Vessel, making it wider to add more stability as we look to navigate the waves of Norway. Additionally, we worked
                with the Autonomy team to make adjustments to the sensor mast to accommodate the new, slightly larger LiDAR. Finally, we
                prototyped and tested a few methods of crane lifting the bolt with eyebolts, and arrived at the concept that we plan to use
                for deploying and retrieving the vessel during the Njord challenge. We're really excited to pass the boat to the Autonomy
                team to get the boat tested and competition ready before we have to begin the shipping process for Norway in a few weeks.
              </p>
            </div>
          </article>

          {/* Entry 2 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">Modifications since Roboboat: Mechanics</h2>
            <p className="text-sm text-gray-600 mb-6">April 1, 2023</p>
            <div className="space-y-4 text-text">
              <p>
                The mechanical team is gearing up for the Njord Challenge! Some mechanical members switched to help the electrical team
                since they are going to be the most swamped getting Ship Happens ready to test before going to Norway, but there are still
                plenty of mechanical tasks that need to get done as well. We bought eye bolts to attach ropes to and mounted them on the
                structural parts of the boat, since Njord requires the boat to be deployed into the water with a crane. Additionally, we
                worked on getting the azipods repaired and ready to go for our first test after some damage that they sustained during
                Roboboat. We also worked with the electrical team to make some adjustments to Athena to prepare it for testing as we, along
                with the electrical team, finish up the final hardware adjustments to Ship Happens as we approach the Njord Challenge.
              </p>
            </div>
          </article>

          {/* Entry 3 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">Modifications up to Roboboat: Mechanics</h2>
            <p className="text-sm text-gray-600 mb-6">April 1, 2023</p>
            <div className="space-y-4 text-text">
              <p>
                The mechanical team was working extremely hard to get the mechanisms on the boat ready to bring to competition. The ball
                launcher, designed to accurately shoot balls for the Feed the Fish challenge, was mounted to the boat, and is able to shoot
                very consistently. The water gun mechanism was being adjusted and tested by the autonomy team, and the aiming system seems
                to mechanically work really well. Jared worked on the ball collection mechanism for the Ocean Cleanup task, and got it
                mechanically complete in approximately a week. Between our tests of the motor that deployed the mechanism, the effectiveness
                of the tape flaps that pulled the balls in, and the creative way that it hands off to the ball launcher, we were relatively
                confident that it would be an extremely viable mechanism for Ocean Cleanup.
              </p>
              <p>
                Meanwhile, Julianne and Jessica designed, manufactured, and mounted a new rack and pinion mechanism run by a continuous servo
                motor to lower the hydrophone into the water for Ocean Cleanup as well. We need this mechanism because we wanted to reduce drag
                while we move through the water, but the hydrophone needs to be in the water for it to function properly. This rack and pinion
                mechanism allows the hydrophone to be strongly mounted while maintaining the ability to move it in and out of the water.
              </p>
            </div>
          </article>

          {/* Entry 4 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">Cradle Design</h2>
            <p className="text-sm text-gray-600 mb-6">March 23, 2023</p>
            <p className="text-sm text-gray-600 mb-6">Author: Tamilore Fashae</p>
            <div className="space-y-4 text-text">
              <p>
                In order to efficiently transport the Roboboat and maintain level ground for a suitable workspace, the cradle was redesigned
                with accessibility and storage in mind. Eventually fabricated out of laser cut marine plywood, the Cradle v3 design includes a
                detachable bridge that holds the legs together. The detachable bridge allows for the separation of the cradle legs, optimizing
                storage space. In addition to that, while not incorporated in the final assembly due to time constraints, slots in the legs
                allow for the insertion of two parallel arms. The arms enable users to lift and transport the cradle without moving the
                Roboboat. In future competitions, the more robust design will allow for reliable transportation and efficient disassembly and
                storage.
              </p>
              <div className="flex justify-center mt-6">
                <img src="/pictures/Blogs/ship-happens-3-2-23-ME-pic2.png" alt="Cradle design" className="max-w-md w-full" />
              </div>
            </div>
          </article>

          {/* Entry 5 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">Thermal Management</h2>
            <p className="text-sm text-gray-600 mb-6">March 3, 2023</p>
            <p className="text-sm text-gray-600 mb-6">Authors: Mateo Pisinger, Amy Shi, Karen Guo</p>
            <div className="space-y-4 text-text">
              <p>
                In order to efficiently keep the electronic box cool, we have designed custom heat sinks made out of aluminum for the solid
                state relays. The current heat sinks are not efficient because they block the airflow of the fan that will be placed next to
                them. By designing heat sinks that have fins parallel to the fan outside the electronic box, air will be able to move through
                the heat sinks beneath the relays and cool down the entire system. The custom heat sinks will be milled in the International
                Design Center of MIT.
              </p>
              <div className="flex justify-center mt-6">
                <img src="/pictures/Blogs/ship-happens-3-23-23-ME-pic1.png" alt="Heat sink design" className="max-w-md w-full" />
              </div>
            </div>
          </article>

          {/* Entry 7 - IAP Project Reviews */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">IAP Project Reviews: Mechanics</h2>
            <p className="text-sm text-gray-600 mb-6">January 8-31, 2023</p>
            <div className="space-y-6 text-text">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Team Updates</h3>
                <p>
                  We have onboarded 11 new recruits onto the team. In order to make sure those with less experience have guidance, we've split up our existing members onto separate project teams and assigned 3 to 4 new members to help. This project format will ensure that there is enough work to go around and that each team has an expected deliverable to work on for January. By the end of the month, we had a design review to go over all their progress and give feedback on their design decisions. Let's see what these project teams did!
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Azipods: Jessica Lam, Toya Takahashi, Tamilore Fashae, Kat Jimenez</h3>
                <p>
                  One problem we wanted to tackle this season was the lack of maneuverability of our competition boat, Ship Happens. In the previous season, our boat struggled to make small maneuvers to prevent it from drifting into obstacles since the thrusters were locked in place. Ship Happens was able to rotate by spinning one thruster in one direction and the other in the opposite direction. While this simple strategy worked for large rotations to point the robot in a general direction, it was difficult to make precise movements since it took around 2.5 seconds to rotate 90 degrees.
                </p>
                <p>
                  Another smaller issue with our previous thrusters was that they needed to be screwed on and off the 8020s they were attached to every time our robot was deployed. This made the process of deploying Ship Happens inefficient, and prompted us to develop a more modular design for placing the thrusters and efficiently deploying our robot.
                </p>
                <p>
                  To increase our maneuverability and modularity, we designed a thruster pod in OnShape to rotate our thrusters in place. In this new design, a servo is connected on one side of a 1.7" diameter, 20" length PVC pipe, and a thruster is connected on the other, allowing the servo to rotate the entire subsystem. This subsystem is mounted inside a larger 2.4" diameter PVC pipe with Delrin bushings so the thrusters can easily rotate and be lifted into the hull during transport.
                </p>
                <p>
                  Currently, we are in the process of assembling the design we have in CAD. Most of the pieces of the assembly were 3D printed using the Ultimaker we have in our lab and we've been testing fits and tolerance and approaching the end of assembling the azimuth thruster pods.
                </p>
                <p>
                  What ended up being more time-consuming than expected was the process of drilling out the hulls. Since the thruster pods penetrate the hulls, we needed to drill out a large 2.5" diameter though each hull of our catamaran using a large forstner bit. Initially we attempted to do still the hold outside with a hands drill. The forstner bit worked well to cut the fiberglass and foam, but it was difficult to cut straight down so we switched to the drill press.
                </p>
                <div className="flex justify-center my-6">
                  <video src="/pictures/Blogs/ship-happens-1-8-23-ME-vid1.mp4" controls className="max-w-2xl w-full" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <img src="/pictures/Blogs/ship-happens-1-8-23-ME-pic1.jpg" alt="Azipod assembly 1" className="w-full" />
                  <img src="/pictures/Blogs/ship-happens-1-8-23-ME-pic2.jpg" alt="Azipod assembly 2" className="w-full" />
                </div>
                <p>
                  Once the holes were cut, we did a layup process on the newly exposed foam. For this, we added a few layers of fiberglass and epoxy to reinforce the foam and water proof everything. The first layer of fiberglass saturated in epoxy did not attach well to the foam so we used push pins to hold it in place.
                </p>
                <div className="flex justify-center my-6">
                  <img src="/pictures/Blogs/ship-happens-1-8-23-ME-pic3.jpg" alt="Fiberglass layup" className="max-w-md w-full" />
                </div>
                <p>
                  We are very excited to integrate our thruster pod into <em>Ship Happens</em> and test out the new design as soon as the last aspects of assembling are completed!
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Ball Launcher: Jared, Julianne, Haris, Ruth, Bella, Josh</h3>
                <p>
                  One of the roboboat challenges, called Feed the Fish, is like a game of skeeball played from the boat. Our vehicle must be able to launch rubber balls (~2" diameter) at a skeeball-like target. To accomplish this task, we decided to make a ball launcher that could aim without rotating the entire boat.
                </p>
                <p>
                  Our launcher consists of a circular platform that stores the balls. This platform has holes that are sized to the rubber balls. As the platform rotated on a servo, the balls fall through another hole and land in the shooter. The shooter is mounted to a large gear, which we can rotate with a servo. This allows us to precisely control the aim of the shooter, as the whole shooter can rotate on its own.
                </p>
                <p>
                  Finally, the ball lands in the shooter which consists of a high-speed motor that spins flywheels. When spun at the right speed, the wheels can launch the ball to the target.
                </p>
                <p>
                  Most of the first iteration of the launcher is finished, and we learned a lot about the design through the fabrication of the shooter. First, we learned that the current method for connecting the shooter to the turret is not the most stable. These two mechanisms are currently connected by acrylic laser cut tabs that attach to the shooter's side panels and hang from the gear. However, when we assembled this we discovered that the brackets did not provide a lot of stability for the shooter. We plan to stabilize this connection by using an L-bracket or axle to minimize movement between the shooter and turret.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <img src="/pictures/Blogs/ship-happens-1-8-23-ME-pic4.jpg" alt="Ball launcher 1" className="w-full" />
                  <img src="/pictures/Blogs/ship-happens-1-8-23-ME-pic5.jpg" alt="Ball launcher 2" className="w-full" />
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Remaking Boat Deck: Ansel, Erin, Makar</h3>
                <p>
                  The goal of this sub-project is to redo the deck of our autonomous surface vehicle, <em>Ship Happens</em>. The deck of the boat provides a flat and strong working surface for other sub teams to attach their modules to, and provides a barrier between the water splashing up between the hulls to the mechanical and electrical components that sit on the deck.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <img src="/pictures/Blogs/ship-happens-1-8-23-ME-pic6.jpg" alt="Boat deck 1" className="w-full" />
                  <img src="/pictures/Blogs/ship-happens-1-8-23-ME-pic7.JPG" alt="Boat deck 2" className="w-full" />
                </div>
                <p>
                  Because the boat is estimated to be very close to our max weight for the RoboBoat competition in March, we wanted to decrease the weight of the deck while we planned out what parts we needed to buy. We decided to replace our aluminum 8020 beams with carbon fiber beams, which we found in our lab, MIT Sea Grant. We also decided that since we were able to cut a lot of weight by using carbon fiber instead of aluminum, we wanted to add an additional beam along the length of the boat that will provide support below the wood planks that sit on top. This is important since the wood slightly warped last year, and we wanted to ensure that this deck would survive both the RoboBoat competition in March and the Njord Challenge which we plan to compete in in the Fall. We used strips of aluminum that were vertically oriented to support the wood, and bent the ends so that we could connect them to the carbon fiber tubes that run horizontally along the boat.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <img src="/pictures/Blogs/ship-happens-1-8-23-ME-pic8.jpg" alt="Deck assembly 1" className="w-full" />
                  <img src="/pictures/Blogs/ship-happens-1-8-23-ME-pic9.jpg" alt="Deck assembly 2" className="w-full" />
                </div>
                <p>
                  Currently, we are working on preparing the marine plywood for the top of the deck. This wood will need to be cut to size, holes that fit the new azipods will need to be measured and drilled, and screw holes will need to be drilled to attach to our support beams underneath. We also need to attach our support beams, and then finally assemble the deck and test it with weights.
                </p>
                <div className="flex justify-center my-6">
                  <video src="/pictures/Blogs/ship-happens-1-8-23-ME-vid1.mp4" controls className="max-w-2xl w-full" />
                </div>
              </div>
            </div>
          </article>

          {/* Entry 6 - CAD Time */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">Mechanics: CAD Time!</h2>
            <p className="text-sm text-gray-600 mb-6">December 15, 2022</p>
            <div className="space-y-6 text-text">
              <p>
                We have mostly finished CADding the boat! This includes designs for our ball scooper, ball launcher, and thruster azipods (rotating thrusters that will make our turning radius smaller in the water). Manufacturing has started for the ball launcher and will continue when we come back in January.
              </p>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Subteam 1: Task-Ponce de Leon / Fountain of Youth</h3>
                <p>
                  No mechanical changes have been made to this mechanism. Last season, we simply did not get to this task in competition, but from our testing we believe that the mechanism we set out to spray water last season should work again.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Subteam 2: Task- Feed the fish</h3>
                <p>
                  We finished the finalized the first version of the ball launcher. The system is divided into three main subsections: the revolver, the turret, the shooter. The revolver holds all the balls and controls when they are deposited into the shooter. The turret allows the shooter to rotate so we can aim independent of the boat's positions and the shooter is the flywheel system that launches the balls.
                </p>
                <p>
                  The revolver/ball deposit system is modeled after the ball drop arcade game. There are slots for the balls to sit in and a servo rotates a plate to move the balls until one eventually falls through the hole to the shooter. We went with this system because it utilizes only one moving part and we can reliably ensure that only one ball goes into the shooter at a time. All the balls are also stored horizontally which is an additional benefit because we want to minimize obstruction to the lidar. We also included a 3D printed dome to prevent balls deposited from the ball collection system from staying in the center of the plate or falling and damaging the servo.
                </p>
                <div className="flex justify-center my-6">
                  <img src="/pictures/Blogs/ship-happens-12-15-22-ME-pic1.png" alt="Revolver system" className="max-w-md w-full" />
                </div>
                <p>
                  The turret is controlled by a 180 degree servo. A small gear attached to the servo controls a larger ring gear that is connected to the rest of the system. The gears are laser cut out of ⅛" aluminum and stacked for a final height of ¼". Originally we planned for the pieces to be made of acrylic because they could easily be cut for exact sizes, but after meeting with Chandler Griffin of iSensys recommended we go with metal because acrylic tends to crack easily. The turret is attached to the underside of the revolver so that the pivot point of the turret is concentric to where the balls drop.
                </p>
                <div className="flex justify-center my-6">
                  <img src="/pictures/Blogs/ship-happens-12-15-22-ME-pic2.png" alt="Turret system" className="max-w-md w-full" />
                </div>
                <p>
                  The shooter is powered by a 6,000 rpm goBilda yellow jacket series motor. We haven't found the ideal speed the flywheels should rotate at, but we decided to go with the fastest motor in the GoBilda series because the flywheel speed is more of a concern than the amount of torque. The motor is belted to the flywheel with the ability to easily change the gearing ratio. We also went with a belted drive so the motor could be placed such that the center of mass is as symmetrical as possible. The flywheel has a rubber tread which provides grip and compression to help launch the racquetballs. Once the ball drops into through the hole in the revolver the ball makes contact with the flywheel and is compressed between the flywheel and the ramp to gain rotational speed before being launched out. The shooter connects to the turret through two tabs that go into the ring gear. The shooter also has a delrin plastic bottom to support the weight of the shooter instead of the tabs and to increase the friction between the shooter and the deck.
                </p>
                <div className="flex justify-center my-6">
                  <img src="/pictures/Blogs/ship-happens-12-15-22-ME-pic3.png" alt="Shooter system" className="max-w-md w-full" />
                </div>
                <p className="font-semibold">Final CAD of all three systems:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <img src="/pictures/Blogs/ship-happens-12-15-22-ME-pic4.png" alt="Ball launcher CAD 1" className="w-full" />
                  <img src="/pictures/Blogs/ship-happens-12-15-22-ME-pic5.png" alt="Ball launcher CAD 2" className="w-full" />
                </div>
                <p>
                  Next steps: Over IAP (January) we should begin the prototyping, fabricating, and assembly process.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Subteam 3: Task-Ocean Clean up</h3>
                <p>
                  At the last team time, we learned that the boat cannot drive into the enclosure with the balls so we moved forwards with the arm and elevator system. A spring loaded PVC arm with a sliding L piece is spring loaded and released when the boat approaches the task. The boat drives around the perimeter of the enclosure collecting balls. Once all the balls have been collected the L arm is reeled in with a winch to collect all the balls into one location. An elevator mechanism on the side of the boat will then pick up all the balls and deposit them into the revolver on the ball launcher.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-4 my-6 place-items-center">
                  <img src="/pictures/Blogs/ship-happens-12-15-22-ME-pic6.png" alt="Ocean cleanup arm 1" className="object-contain" />
                  <img src="/pictures/Blogs/ship-happens-12-15-22-ME-pic7.png" alt="Ocean cleanup arm 2" className="object-contain" />
                </div>
                <p>
                  Next Steps: At the moment, we are unsure if we have the manpower to implement this design so it is currently on hold for further development.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Subteam 4: Azimuth Thrusters</h3>
                <p>
                  In our azimuth thruster design, a servo is connected on one side of a 1.7" diameter, PVC pipe, and a thruster is connected on the other, allowing the servo to rotate the entire subsystem. This subsystem is mounted inside a larger 2.4" diameter PVC pipe with Delrin bushings so the thrusters can easily rotate and be lifted into the hull during transport.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 place-items-center">
                  <img src="/pictures/Blogs/ship-happens-12-15-22-ME-pic8.png" alt="Azimuth thruster design 1" className="object-contain" />
                  <img src="/pictures/Blogs/ship-happens-12-15-22-ME-pic9.png" alt="Azimuth thruster design 2" className="object-contain" />
                </div>
                <p>
                  A 2.5" in hole will be drilled 6" inches from the top for the larger pvc to be mounted to and a 5" inch hole will be drilled 5" inches from the bottom to create a channel for the thruster to rest when the system is retracted.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 place-items-center">
                  <img src="/pictures/Blogs/ship-happens-12-15-22-ME-pic10.png" alt="Azimuth thruster drilling 1" className="object-contain" />
                  <img src="/pictures/Blogs/ship-happens-12-15-22-ME-pic11.png" alt="Azimuth thruster drilling 2" className="object-contain" />
                </div>
              </div>
            </div>
          </article>


          {/* Entry 8 - Subteams Created and more Brainstorming */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">Mechanics: Subteams Created and more Brainstorming</h2>
            <p className="text-sm text-gray-600 mb-6">October 31, 2022</p>
            <div className="space-y-6 text-text">
              <p>
                From the tasks, it looks like we need to be able to collect balls from the water after detecting their location from a pinger, shoot balls into a skeeball board, and shoot water into a target. The last two tasks are the same as last year, so we plan to use the experience we gain through building and testing to make necessary improvements.
              </p>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Subteam 1: Task-Ponce de Leon / Fountain of Youth</h3>
                <p>
                  This task is very similar to the water gun task from last year with the main difference being the location of the target point. We decided to use the same mechanism from last year to complete this task. For this, we have a pump that continuously draws in water from the lake so we have a virtually infinite supply of water and two servos to control aiming. The pump we purchased last year has the specs to shoot water at the height required for the aiming system (figure below) which is compact, light, and works fairly well.
                </p>
                <p>
                  Next steps: Hand Mechanism to navigation to begin programming and testing.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Subteam 2: Task- Feed the fish</h3>
                <p>
                  This task is almost exactly the same as the skeeball task. Last year we used a linear slide mechanism to deposit the balls into the buckets. After building and testing we realized that the bulkiness and weight of having an arm extend out two feet was not worth the additional accuracy provided. The racquetballs are relatively small compared to the bucket with a fair amount of room for error. Thus this year we decided to move forward with a flywheel ball launching mechanism. A flywheel will rotate quickly compressing the racquetball against a 3D printed ramp and launch the ball. A turret will be implemented to give control of the x,y position of the ball and the speed of the flywheel can be adjusted to control the height the ball is launched. We will begin a CAD design of this soon.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Subteam 3: Task-Ocean Clean up</h3>
                <p>
                  Ocean Clean up is a completely new task introduced this year so we immediately went into brainstorming to find potential mechanisms. We were initially deciding between a net that would mount inside the area between the hulls to collect delivery balls and an arm that extends outwards to collect the balls.
                </p>
                <p>
                  The net is mounted between the hulls; one side is free to pivot and the other side is attached to a winch to control the height. The net will be lowered and the boat will drive through the area with the balls and once the balls are collected the net will be raised. The net would be well-supported by both hulls and any actuators required to move the balls can be mounted to top of the boat. The downside to the water well mechanism is we are unsure if we will be able to go inside the region where the balls are located.
                </p>
                <div className="flex justify-center my-6">
                  <img src="/pictures/Blogs/ship-happens-10-31-22-ME-pic1.jpg" alt="Net design concept" className="max-w-md w-full" />
                </div>
                <p>
                  The alternative method we discussed was an arm that reaches into the enclosure to collect the balls. A PVC arm is spring loaded to the side of the boat and will be released when we approach the region with the balls. The boat will drive around the perimeter collecting balls. A sliding L PVC piece is attached to the arm and can be pulled in with a winch system. The L PVC piece will ensure all the balls end up in a corner near the side of the hull. There will be a separate elevator on the side of the hull that takes the collected balls to the ball launcher. Because the pvc extends beyond the boat we are going to add pool noodles on the L slides so that it's supported by the buoyancy force. We also wanted to test how well the pvc would work at herding the balls so we did a couple of tests (video and photo shown below). The downside to this mechanism is that there are significantly more moving parts and therefore a higher risk for failure.
                </p>
                <div className="space-y-4 my-6">
                  <div className="flex justify-center">
                    <img src="/pictures/Blogs/ship-happens-10-31-22-ME-pic7.jpg" alt="Arm design testing" className="max-w-2xl w-full" />
                  </div>
                  <div className="flex justify-center">
                    <video src="/pictures/Blogs/ship-happens-10-31-22-ME-vid1.MOV" controls className="max-w-2xl w-full" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">Subteam 4: Azimuth Thrusters</h3>
                <p>
                  One problem we wanted to tackle this season was the lack of maneuverability of our competition boat, Ship Happens. In the previous season, our boat struggled to make small maneuvers to prevent it from drifting into obstacles since the thrusters were locked in place. Ship Happens was able to rotate by powering one thruster in one direction and the other in the opposite direction. While this simple strategy worked for large rotations to point the robot in a general direction, it was difficult to make precise movements since it took around 2.5 seconds to rotate 90 degrees and since our thruster layout did not allow any form of strafing.
                </p>
                <p>
                  Another smaller issue with our previous thrusters was that they needed to be screwed on and off the 8020s they were attached to every time our robot was deployed. This made the process of deploying Ship Happens inefficient, and prompted us to develop a more modular design for placing the thrusters and efficiently deploying our robot.
                </p>
                <p>
                  This year we are planning to implement a retractable azimuth thruster to provide additional maneuverability for alignment tasks. Retracting the thruster into the hull of the boat for transport would help protect the thrusters and simplify the deploying and retrieval process. A servo controls a pvc strut attached to a thruster, thus rotating it in place and changing the angle of thrust force relative to the boat.
                </p>
                <div className="flex justify-center my-6">
                  <img src="/pictures/Blogs/ship-happens-10-31-22-ME-pic2.jpg" alt="Azimuth thruster concept" className="max-w-md w-full" />
                </div>
                <p>
                  Next Steps: Begin CAD model
                </p>
              </div>
            </div>
          </article>

          {/* Entry 9 - Initial Planning */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">Mechanics: Initial Planning for New RoboBoat Tasks</h2>
            <p className="text-sm text-gray-600 mb-6">October 2, 2022</p>
            <div className="space-y-4 text-text">
              <p>
                First draft of the RoboBoat 2023 tasks is out. We are working on brainstorming new ideas or adapting our old modules to accomplish these new tasks.
              </p>
            </div>
          </article>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/blog/year-23"
            className="px-6 py-3 text-text hover:text-primary transition-colors"
          >
            Back to 2022-2023 Season
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Year23Mechanics
