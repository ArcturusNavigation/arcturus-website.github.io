const Year23Electronics = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          Electronics Team Blog - 2023 Season
        </h1>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Entry 1 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">May Update: Electronics</h2>
            <p className="text-sm text-gray-600 mb-6">May 26, 2023</p>
            <div className="space-y-4 text-text">
              <p>
                The electronics team has been working on implementing our circuit redesign for the Njord boat. Members on our team
                implemented an LED tower that provides visual cues for onlookers to know what is happening on the boat. The LED tower
                features three lights: the green light indicates that the boat is in Guided (autonomous) mode, the yellow light indicates
                that the boat is in Manual (remote control) mode, and the red light indicates that the thrusters have been E-stopped.
              </p>
              <p>
                To send voltage to the LED tower in all three cases, two protoboards were designed and soldered, one to control the
                yellow and green lights, and one for the red light. Other members worked on designing and protoboarding a circuit that
                allows us to have an E-stop on the remote controller for the thrusters. The circuit interprets a PWM signal from the RC
                receiver in the electronics box and transforms it into a DC signal that regulates a relay. This circuit is at the core
                of our safety system as it ensures that the high current contactors that control power going to our thrusters default to
                an open circuit when we decide to estop remotely or when communication with the emergency transmitter is lost.
              </p>
            </div>
          </article>

          {/* Entry 2 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">Modifications since Roboboat: Electronics</h2>
            <p className="text-sm text-gray-600 mb-6">April 1, 2023</p>
            <div className="space-y-4 text-text">
              <p>
                The electrical team has been focused on making sure that Ship Happens meets the electronic safety requirements for the
                Njord Challenge. We started out by prototyping the safety equipment, and have all hands on deck working on getting our
                battery management system, LED tower, and remote emergency stop system working and ready to pass the Njord Challenge's
                safety inspections. We also wired up the test boat, Athena, with a new electrical box, to allow the autonomy team to do
                testing for Njord while the electronics and mechanical teams make their final adjustments to the Ship Happens.
              </p>
            </div>
          </article>

          {/* Entry 3 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">Modifications up to Roboboat: Electronics</h2>
            <p className="text-sm text-gray-600 mb-6">April 1, 2023</p>
            <div className="space-y-4 text-text">
              <p>
                The electrical team worked tirelessly to get the electronics on Ship Happens ready for the boat to compete. New for this
                year, we are putting all the electronics in one box, and so the team spent a lot of time working on getting everything in
                that box properly placed and wired up. We also ensured that Mission Planner was properly interacting with the thrusters
                so that the boat can autonomously perform the navigation tasks that it needs to on the water. We also worked with the
                mechanical team to get all of the modules for Ocean Cleanup and Feed the Fish integrated and mounted.
              </p>
            </div>
          </article>

          {/* Entry 4 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">Electronic Box Installation</h2>
            <p className="text-sm text-gray-600 mb-6">March 3, 2023</p>
            <p className="text-sm text-gray-600 mb-6">Authors: Ansel Garcia-Langley, Sebastian Monsalvo, Erin Menezes, Shruti Garg, Makar Kuznietsov, Elaine Jutamulia, Kai Van Brunt, Maaya Prasad</p>
            <div className="space-y-4 text-text">
              <p>
                The process of installing electronics into the box is taking longer than we initially expected. Our team has mostly
                finished connecting the internal components of the box to each other, but there are a lot of cables from the outside that
                have to come into the box. We want to allow the box to be able to be removed from the boat, and the inside base plate to
                come out of the box too. This means that the connectors cannot be pass-throughs, but instead should be plug-in connectors,
                so that cables can be unplugged from the outside and inside of the box. Next steps will be to decide where connectors will
                be placed on the box for the thruster cables, battery cable, water gun servos and pump power cable, ball shooter motors,
                ball collector motors, and all the cables for the sensor mast.
              </p>
            </div>
          </article>

          {/* Entry 5 - IAP Project Reviews */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">IAP Project Reviews: Electronics</h2>
            <p className="text-sm text-gray-600 mb-6">January 8-31, 2023</p>
            <div className="space-y-6 text-text">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Team Updates</h3>
                <p>
                  We have onboarded 11 new recruits onto the team. In order to make sure those with less experience have guidance, we've split up our existing members onto separate project teams and assigned 3 to 4 new members to help. This project format will ensure that there is enough work to go around and that each team has an expected deliverable to work on for January. By the end of the month, we had a design review to go over all their progress and give feedback on their design decisions. Let's see what these project teams did!
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Electronics Box</h3>

                <div className="space-y-6 text-text">
                  <p className="text-sm text-gray-600 mb-4">Ansel Garcia-Langley, Ivy Liu, Erin Menezes, Maaya Prasad, Shruti Garg, Makar Kuznietsov, Dylan Gaillard, Sera Hamilton</p>
                  <p>
                    Last semester, our electronics team redesigned our circuit to include many new components such as optoisolators and overcurrent protection that will prevent important and expensive components from being damaged. Because we have a lot of new parts to include in our electronics box, the team also spent time last semester creating a CAD layout of the new electronics box, making sure that everything fit in one watertight box.
                  </p>
                  <p>
                    This IAP, we started ordering the components that we needed, and fitting them into the box. During this process we realized that the base of the box, which has holes for easy part adjustments, did not have large enough holes for our parts. This meant that we had to CAD and laser cut a new base with large enough holes and slots so that all parts could be adjusted slightly to fit into the base. Because of the large amount of components that will be in the box, we also created a second layer in the shape of an L that fits around our computer and is mounted above the first layer with nylon spacers. We plan to replace the entire second level of the box with a large PCB so that we can avoid having messy wires and breadboards that may shift and unplug on the water.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 place-items-center">
                    <img src="/Pictures/Blogs/ship-happens-1-8-23-EE-pic1.jpg" alt="Electronics box assembly 1" className="object-contain" />
                    <img src="/Pictures/Blogs/ship-happens-1-8-23-EE-pic2.jpg" alt="Electronics box assembly 2" className="object-contain" />
                  </div>
                  <p>
                    Another member of our team focused on making sure all the motors and motor drivers worked by creating Arduino code that ran all the motors at the same time using an Arduino Mega and an Adafruit Motor Shield V2. This code also confirmed that the Arduino Mega and motor shield could power all three types of motors at the same time. We discovered that when running the servos on digital I/O pins, they only want to respond to angles between 10 and 174, and do not move when given commands beyond that range.
                  </p>
                  <p>
                    We have also started thinking about the types of connectors we need to route the external wires for the sensor mast and motors to the inside of the box. Because the box needs to be waterproof, good quality connectors and air tight holes are very important. We also want to limit the number of holes on the side of the box to avoid mistakes that need to be taped over, so planning is necessary. Another design choice that we decided to make this year is to make the box removable from the boat. This means that the box connectors will not be passthroughs, and will all be plug in connectors. This will enable us to unplug everything on the exterior of the box, so that we can pick up the box and move it away from the boat to debug the inside, rather than having to work on the boat.
                  </p>
                  <p>
                    There is still plenty to be done for the electronics box. Now that we know the parts for the second level work (motor driver, Arduino Mega, optoisolators, etc.), we can start designing the second level PCB board that will attach to all of these parts. We also need to organize the location of the connectors, order the connectors, wire the inside and outside of the box, and install all the connectors.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">Thermal Management</h3>
                <p className="text-sm text-gray-600 mb-4">Amy Shi, Karen Guo, Mateo Pisinger</p>
                <p>
                  The goal of the Thermal Management team is to effectively cool the electronic components that are installed on our boat, Ship Happens. Last year we had issues where the electronics box would overheat due to lack of ventilation and the heat from the sun reaching the electronics. Our solution to the latter was to mount a reflective plate on the clear top of the box, however the need for an active cooling system remained.
                </p>

                <h4 className="text-xl font-semibold text-primary mt-6 mb-3">Why Air Cooling?</h4>
                <p>
                  We thought of a few ways to cool the electronics (liquid cooling, heat pipes, and air cooling), and decided to go with the air-cooled system for a few different reasons.
                </p>

                <div className="mt-4">
                  <p className="font-semibold mb-2">1. Simplicity</p>
                  <p className="mb-3">
                    Liquid-cooled systems are large loops of some fluid (not necessarily water) that is used to pull heat away from electronics and dump that heat into the environment, effectively cooling a system. Although liquid-cooling provides the best cooling performance, it requires specialized components and mounting equipment that would increase the cost, difficulty of manufacturing, and possible points of failure of the entire system. A failure in a liquid-cooled system results in leaks that are difficult to clean up, and can result in permanent damage to the components.
                  </p>
                  <p className="mb-3">
                    Heat pipes are sealed metallic tubes (usually copper) that are filled with a fluid that quickly transfers heat from the warm end of the tube to the cold end. Although they are technically a form of liquid-cooling, they do not need pumps to move the fluid around due to their design, so they are considered their own cooling technique. These would also require specialized mounting equipment for all components that needed to be cooled, as every component that needs to be cooled must come in direct contact with the heat pipes. Although, if built correctly, a heat pipe cooling system can have no moving parts.
                  </p>
                  <p className="mb-3">
                    An air cooled system blows cool air over the components in order to pull heat away and cool them down. Most of the heat-generating components already had heatsinks attached to them that are specifically designed to work with moving air, which meant that we did not have to manufacture a lot of the important cooling hardware as that was already attached. Some important components, like the electronic speed controllers, did not come with heatsinks out of the box so we had to machine heatsinks for those. Besides the heatsinks, the only other component that is needed for an air cooled system is a fan (or two!) to bring cool air to the electronics and/or to pull hot air away from them. In this case, we would only need to design mounting hardware for two components: the fans and the heatsinks. This is the least effective cooling method, but if it's good enough (with some room to cushion any particularly hot days out on the water) then it is one of the most reliable cooling methods.
                  </p>
                  <p>
                    You can mix and match these forms of cooling, for example computers use heat pipes to move heat to a heatsink that has fans attached. But the interfaces between these systems add a lot of complexity to a design. And simpler designs are easier to fix in the case a part breaks.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="font-semibold mb-2">2. Time</p>
                  <p>
                    A more complicated system takes a long time to design and build. And we are on a serious time constraint for the cooling system as it needs to be completed by February. With a simpler design we could meet the deadline without overworking ourselves and burning out while still providing the necessary cooling to the electronics box.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="font-semibold mb-2">3. Risk</p>
                  <p className="mb-3">
                    In thinking about risk we have to ask ourselves one question: what would happen if our components failed at the most important moment in a competition? Ideally, you would have multiple systems that all work towards cooling the components independently. That way, if one fails your electronics are still cool and functioning. However, if you had to pick a single system then you want to pick the one that is least likely to fail, and if it does fail the least likely to cause significant amounts of damage.
                  </p>
                  <p className="mb-3">
                    If a water cooled system fails (for example a joint between pipes was not properly sealed), components do not get cooled and the possibility exists of a leak forming that causes permanent damage to the electronics.
                  </p>
                  <p className="mb-3">
                    If a heat pipe fails (for example a crack forms and the fluid within them evaporates), the components do not get cooled. Due to geometry, the remaining portions of the pipes and their hardware are not very effective at pulling away heat from the electronics. If an air system fails (for example a fan burns out), the components do not get forced air through them, but the heatsinks are still capable of pulling heat away from the electronics. So your cooling is reduced, but some cooling still happens.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-primary mt-6 mb-3">First Prototypes</h4>
                <p>
                  With our approach selected, we started working on a system that would fit with the rest of the boat. As of this moment, we have built and tested our first prototype of the fan mounts that we plan on using to supply and exhaust the air in the electronics box. We have also machined the heatsinks that will be attached to the electronics that need them.
                </p>
                <div className="flex justify-center my-6">
                  <img src="/Pictures/Blogs/ship-happens-1-8-23-EE-pic3.jpg" alt="Fan mount prototype" className="max-w-2xl w-full" />
                </div>
                <div className="space-y-6 text-text">
                  <p>
                    Because we are using a fan we have to cut a hole into the electronics box, which means we must do everything we can to prevent water from reaching the electronics. This is the job of the fan assembly, which is composed of two different sections: the mount and the casing. The mount is made up of two acrylic mounting plates, a silicone gasket, and a 12V fan. These are attached together onto the wall of the electronics box with a set of 12 screws and some locknuts that won't come undone with the natural vibrations of the boat. The gasket is sandwiched between the outer wall of the electronics box and the outer mounting plate, and then compressed down to create a waterproof ring surrounding the hole. This way if there are any water droplets on the outer surface of the electronics box they will not reach the hole.
                  </p>
                  <p>
                    The casing is a 3D printed cylinder and cover that is there to prevent any liquid water from reaching the fan and opening in the electronics box. It will be glued onto the outer surface of the electronics box, and it has a special lid where we attach some 2" PVC piping which lets us control where the air moved by the fan comes from. This piping will have 90° bends along the way in order to catch any water droplets that might have somehow fallen into the pipe. This way we cut the risk of getting water into the electronics box while still having the flow of air to keep everything cool.
                  </p>
                </div>
                <div className="flex justify-center my-6">
                  <img src="/Pictures/Blogs/ship-happens-1-8-23-EE-pic4.jpg" alt="Fan assembly details" className="max-w-xl w-full" />
                </div>

                <h4 className="text-xl font-semibold text-primary mt-6 mb-3">First Test</h4>
                <div className="space-y-6 text-text">
                  <p>
                    Our first test was completed recently and we used it to get an idea on the performance of the fan assembly if we changed the size of the inlet hole on the lid of the casing. As we increased the size of the inlet, the volumetric flow rate of the air (the amount of air we moved) increased as well. With an inlet 33mm in diameter we got a flow rate of 7000 [cm³/s]; while with an inlet 60mm in diameter we got a flow rate of 18000 [cm³/s]. Higher flow rate of air tends to mean better cooling for electronics with heat sinks, which means that we will want to go with an inlet size that is as large as possible.
                  </p>
                  <p>
                    The limiting factor to the size of the inlet is actually the distance between the electronics box and the battery box. The PVC and respective fittings we decided to use for the tubes are of a standardized size, which means we cannot change their dimensions. These fittings can get fairly large, and the space we have on the deck of the boat is limited so we had to go with the largest fittings that we could while still making sure everything fit on the boat. Luckily, the flow rate we got for a 60mm diameter inlet was fairly close to the flow rate of a fan that is not constrained in any way, which was what ultimately led to our decision for the size of the inlet as it did fit within the given space.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-primary mt-6 mb-3">Next Steps</h4>
                <p>
                  For now the next steps are some small corrections to the main parts of the fan assembly, along with a single major design that needs to be made in order to attach the lid to the fan casing. We had some issues with getting the mounting plates aligned with one another, and some of the gaskets we cast were not of a uniform thickness. These are things that need to be addressed in order to have a complete system, and from there we can move on to testing and integrating the thermal management system into the rest of the boat.
                </p>
              </div>
            </div>
          </article>

          {/* Entry 6 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">Electronics Box Layout</h2>
            <p className="text-sm text-gray-600 mb-6">December 15, 2022</p>
            <div className="space-y-4 text-text">
              <p>
                A CAD layout of the electronics box has been created to make sure that everything will fit in the box. We plan to have two
                layers to maximize space usage, but this will also mean that the box will get very hot, especially in Sarasota, Florida.
                For this reason, we have recruited another member to work on thermal management in the box starting in January. We have
                also designed PCBs for our optoisolator components in the circuit.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 my-6">
                <img
                  src="/Pictures/Blogs/ship-happens-12-15-22-EE-pic1.jpg"
                  className="w-full h-full object-contain"
                />

                <div className="grid grid-rows-2 gap-4">
                  <img
                    src="/Pictures/Blogs/ship-happens-12-15-22-EE-pic2.png"
                    className="w-full h-full object-contain"
                  />
                  <img
                    src="/Pictures/Blogs/ship-happens-12-15-22-EE-pic3.png"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </article>

          {/* Entry 6 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">Heat Sinks and Boat Test!</h2>
            <p className="text-sm text-gray-600 mb-6">October 31, 2022</p>
            <div className="space-y-4 text-text">
              <p>
                We have integrated the overcurrent protection into our circuit, and have milled heat sinks for our ESCs since they melted
                through their plastic protectors in our test last Friday. 
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <img src="/Pictures/Blogs/ship-happens-10-31-22-EE-pic1.jpg" alt="Heat sinks" className="w-full" />
                <img src="/Pictures/Blogs/ship-happens-10-31-22-EE-pic2.jpg" alt="Circuit integration" className="w-full" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <img src="/Pictures/Blogs/ship-happens-10-31-22-EE-pic3.jpg" alt="Boat test 1" className="w-full" />
                <img src="/Pictures/Blogs/ship-happens-10-31-22-EE-pic4.jpg" alt="Boat test 2" className="w-full" />
              </div>
              <p>
                We had our first in-the-water test last Friday on the Charles
                River from Magazine Beach. We determined that our measured max speed is about 1 meter per second.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <img src="/Pictures/Blogs/ship-happens-10-31-22-EE-pic5.jpg" alt="Boat test 3" className="w-full" />
                <img src="/Pictures/Blogs/ship-happens-10-31-22-EE-pic6.jpg" alt="Boat test 4" className="w-full" />
              </div>
            </div>
          </article>

          {/* Entry 7 */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-3">New Electronics Diagram</h2>
            <p className="text-sm text-gray-600 mb-6">October 2, 2022</p>
            <div className="space-y-4 text-text">
              <p>
                A new wiring diagram has been made to include new additions to our electronic system. These include overcurrent protection,
                LED monitors for visual cues on what is happening on board, optoisolator boards, and PCB integration. We are presenting our
                diagram to mentors next week to get feedback.
              </p>
              <div className="flex justify-center mt-6">
                <img src="/Pictures/Blogs/ship-happens-10-2-22-EE-pic1.png" alt="Electronics wiring diagram" className="max-w-4xl w-full" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Year23Electronics
