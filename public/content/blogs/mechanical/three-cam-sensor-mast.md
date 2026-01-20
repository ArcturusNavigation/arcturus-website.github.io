## Sensor Mast

## Motivation
The team’s switch to SLAM motivated adding two additional cameras to the sensor mast. Supporting the larger camera payload required a complete redesign of the sensor mast, which allowed us to introduce an additional interfacing subsystem: a test cart.

Key design considerations for the three-camera sensor mast were:
1. Maximizing LiDAR height for Field of View
2. Stably supporting all three cameras
3. Accurate CAD-2-Reality relative positioning of sensors for easy calibration in software
4. Easy swappability between mast and test cart while preserving sensors' relative positions
5. Unobstructed GPS line of sight to the sky, i.e., minimal metal parts

## Design
To support the increased camera payload the team adopted a three-finned sensor mast design. The fins were waterjet out of PVC and PVC welded, i.e. chemically bonded, to a central PVC mast. Mounting points on the mast were milled and sensor mounts were 3D printed to ensure dimensionally accurate positioning of sensors. PVC was used for all structural components to avoid obstructing the GPS's view of the sky. As many sensors as possible were integrated directly into the mast to streamline the process of switching between boat and test cart.

The test cart began life as a furniture dolly. We then milled the hole pattern of the sensor mast base plate into the dolly and installed rivet nuts to enable fastening down the sensor mast blind. The two subsystems which could not be integrated directly into the sensor mast due to exposure risks, were the Jetson and Pixhawk. To enable easy transfer of these subsystems between boat and cart duplicate mounts from the EE Box were added to the Cart--enabling quick and fastnerless transfer. Finally, four Go Builda servos and mecanum wheels were used for movement--this enabled holonomic control in the x-y plane, just as on the boat. The ultimate objective of each of these design features was to ensure cross-applicable testing between the boat and the cart. The full design is presented in Fig. 1.

![Initial three camera design](/content/blogs/mechanical/threecam-sensormast/AnottatedSM_FA.png)<figcaption> Fig 1. The three camera sensor mast was milled out of PVC for accurate sensor placement and featured fins, a base plate, and a test cart. </figcaption>

## Test Cart Constraints
The test cart was subject to three key design constraints:
1. Power budget $\leq$ one thruster battery, or about half the boat's budget
2. Max speed $\geq$ the boat's to ensure ability to test unstable perception and localization behavior observed at high speeds.
3. Tipping stability at high speeds and on slopes

![Test Cart Calcs](/content/blogs/mechanical/threecam-sensormast/TestCartCalcs.jpeg)
<figcaption> Fig 2. The test cart is subject to weight, speed, and tipping stability constraints. After analyzing the dynamics of the system, we determined that four 25-2 Torque GoBilda servos could provide sufficient torque in the required power budget. </figcaption>

The team ultimately selected 25-2 Torque GoBilda servos since analysis showed they could move the cat at a top speed of 4.5 m/s, nearly double the boat's, for more than three hours. 1 oz automotive weight were added to the rim of the cart to improve stability at large accelerations, $\leq$ 2g's and on slopes.

## The Incident
While manually collecting ros bags of our mock-up dock on the Charles, the boat collided with the dock and the sensor mast sheared off. After colliding with the deck the LiDAR mount also snapped. After confirming no water ingress into the LiDAR we developed a model of the impact using Hertz contact modeling and assuming (conservatively) that energy was conserved during impact.

![The Incident](/content/blogs/mechanical/threecam-sensormast/TheIncident.gif)
<figcaption> Fig 3. While testing on the Charles river Fish 'N Ships collided with the dock and the sensor mast snapped off. </figcaption>

Since our impact model predicted shearing along the sensor mast fins (safety factor $\approx 0.11$) at the collision speed observed, 2.8 m/s, we were confident in its usability. The model showed that to avoid shearing the sensor mast with the current design operating speeds had to be kept below 0.1 m/s which was clearly infeasible (Fig. 4). This analysis justified doing a partial redesign of the sensor mast.

![Sensor Mast Calcs](/content/blogs/mechanical/threecam-sensormast/SensorMastCalcs.png)
<figcaption> Fig 4. Impact calcs showed that to prevent the sensor mast from shearing off in the future boat operating velocity would have to be kept below 0.1 m/s, which was clearly infeasible. Therefore redesign was required.  </figcaption>

The updated design (shown in Fig. 5) included an updated LiDAR mount based on a frustum-like geometry that eliminated stress concentrations and improved stress distribution across the cross-section of the mount. In addition, aluminum flanges were added for mounting the fins to the baseplate and deck and 3D printed ribs were added to the fins to prevent fin tearout--a failure mode that had not been encountered yet but was thought possible once the failure mode of fin-base shear was removed.

In addition to these structural changes, the updated sensor mast included an external compass for improved localization and slightly forward-ajusted camera mounts to eliminate blind spots experienced in front of the boat while testing banner-based tasks. The new field of view at the waterplane is shown in Fig. 6.

![Updated Sensor Mast](/content/blogs/mechanical/threecam-sensormast/AnnotatedUpdatedSensorMast.png)
<figcaption> Fig 5. The updated sensor mast used a new LiDAR mount, external compass, forward-facing cameras, aluminum fin-to-base brackets, and additional fin reinforcement. </figcaption>

![Updated Field of View](/content/blogs/mechanical/threecam-sensormast/UpdatedFieldOfView.png)
<figcaption> Fig 6. During the sensor mast redesign, the side camera mounts were angled forward to remove blindspots in front of the boat. </figcaption>

Calcs can be found below:
[Sensor Mast Redesign Calcs](https://docs.google.com/spreadsheets/d/1SNwyPpOrwjSz79dSzFQzooAm3NrJW8ZIm2UbXz4IcZU/edit?usp=sharing "Sensor Mast Redesign Calcs")
