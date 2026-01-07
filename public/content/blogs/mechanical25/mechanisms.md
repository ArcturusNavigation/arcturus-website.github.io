# Mechanisms

In order to complete task 5 (in Roboboat) and properly deliver water and balls to the correct vessels around the course, our team decided to create a mechanism for aiming and launching. We decided to integrate launching both water and balls into one mechanism with a dedicated camera to make the system as simple as possible on both the hardware and software sides. This mechanism was split into three parts - the ball launcher, the water gun, and the turret. Many aspects of the mechanism were inspired by our previous mechanisms that we competed with in Roboboat 2023 for shooting balls and water.

**Ball Launcher:** The ball launcher is designed to launch balls with a high velocity as straight as possible to simplify the requirements of the aiming system. The launcher consists of two inverted curved edge wheels rotating in opposite directions, powered by a motors spinning at ~2000 rpm. The wheels slightly compress the balls to maximize contact area and launch them in a straight path without spin. A lead screw mechanism feeds the balls into the wheels, which launches them when the dedicated camera shows that the launcher is properly aimed at a vessel.

![Ball Launcher](/pictures/Blogs/mechanism.jpg)
*Fig 1. Ball Launcher.*

**Water Gun:** The water delivery system features a pump that pulls water from below the boat and directs it through tubing that runs underneath the ball launcher. This ensures that the water is delivered at the same angle and incline as the launcher, meaning that the two assemblies can use the same aiming system. The pump delivers a flow rate of 271.2 cm3/s with a 1.27cm outlet diameter. Using this information, a resin-printed, replaceable nozzle with a reduced outlet diameter of 0.635cm was designed. This nozzle allows the water stream to travel up to 7.5m without manually altering the turret's angle.

**Turret:** The objective for this year's turret was to create a lightweight, precise assembly that could withstand both the weight of the ball launcher and water gun, allowing the mechanisms to freely rotate in the x-y plane. For the mechanism that we used in 2023, a belt-driven turn-table riding on ball bearings was used for rotation. However, testing showed that the bearings would get stuck, so the bearings and belt were removed, and acrylic gears were used to drive the rotation.
