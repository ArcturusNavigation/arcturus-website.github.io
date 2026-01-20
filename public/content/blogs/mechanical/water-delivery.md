## Water Delivery

## Design Overview

### System Function
Shoot a continuous stream of water from the boat to a target up to 5 meters away.

### Design Requirements:
- The stream of water is able to reach a target 5 meters away.
- Minimum static head of 0.1 meter due to the deck's elevation from water.
- Minimum tube length of 1.64 meters due to distance water needs to travel from the back to the front of the boat where it’s launched.
    - To ensure water can be launched from the front of the boat while being drawn from the back of the boat), the tube must span the minimum length of deck (48” or 1.23m) with extra length for wrapping around other features on the boat deck.
    - To ensure pipe entrance is fully submerged in water, length of tube off deck must be at least ½ of hull height (7.74” or 0.197m).
    - 48” (1.23m) + 4” (0.102m) + 12” (0.305 m) of extra tubing = 64” (1.637m)

### Constraints
Not willing to spend more than $100 on a pump.

## Calculating Minimum Exit Velocity
To analyze the projectile motion of a continuous stream of water traveling a range of 5 m, it was modeled as a single spherical water droplet of 2mm diameter traveling through air.

### Conservative assumptions that simplified first analysis:
- Stream of water travels as individual spherical droplets, which have an approximate Coefficient of Drag (COD) of 0.5.
    - IRL: Water is traveling in uncertain wind conditions as a continuous stream with an unknown COD that heavily depends on the shape and flow conditions (specifically, the Reynolds number) of the object moving through the fluid.
- Water droplet modeled as sphere with 2mm diameter based on published data on average raindrop size.
    - IRL: Water leaving nozzle initially travels as a continuous stream and only breaks apart into droplets after some time.

Implemented iterative solving in Microsoft Excel to solve for the force of drag at each 1 ms time step using the following drag equation:

$$
F_D = -\frac{1}{2} \rho v^2 C_D A
$$

![Calcs for drag on a water droplet](/content/blogs/mechanical/water-delivery/WaterDropletsDragCalcs.png)
<figcaption> Fig 1. Screen shot of excel spreadsheet used to perform initial drag caluclations based on estimated water droplet size. </figcaption>

The behavior of the stream of water was modeled as a spherical projectile exiting the nozzle at 30 degrees.

Calculations supported that a minimum exit velocity of 15 m/s was necessary. This was a very conservative estimate arrived at by assuming a laminar boundary flow drag coefficient, $C_{D}$ of 0.5 and droplet diameter of 14 mm.

## Pipe Flow Analysis
To match pump specs to the desired output velocity we performed pipe flow analysis of the system.

### Sketch of the System
A high level sketch of the pipe flow system is shown in Fig. 2. In addition to the minor head losses we also included frictional head loss in our calculations, though it was quickly apparent that nearly all head losses in such a short pipe-flow network were negligible compared to velocity/kinetic energy head loss. We did not include any head losses associated with curves in the tubing since these were (a) not geometries we could clearely define before putting the system on the boat and (2) since there were no rigid constraints on the bend radii of the tube, these could be maximized for negligible impact on the flow.

![Sketch of pipeflow network](/content/blogs/mechanical/water-delivery/PipeFlowSketch.jpg)
<figcaption> Fig 2. Sketch of our pipeflow system. </figcaption>

### Calcs
Since including frictional head loss required an interative solution we performed our pipe flow analsysis calcs in a spreadsheet. You can find the spreadsheet linked below:
[Pipe Flow + Drag Calcs](https://mitprod-my.sharepoint.com/:x:/g/personal/andrew8_mit_edu/IQBlI4OMBM1SQZxKdNwY3jD0Aa6ztyDfwfQB3yxB9OKd6t0 "Pipe Flow + Drag Calcs, Arcturus 2026")

## Calibration against Empirical Results
The preliminary calculations showed that the system requirements were heavily dependent on required exit velocity of the stream. To help reduce the uncertainty of the overall system we decided to conduct a test with our existing pump, a TruePower 12V DC Marine Utility Pump, 23ft head, 200 GPH flow rate, to calibrate the drag model.

![Testing our existing pump](/content/blogs/mechanical/water-delivery/PumpTest.jpeg)
<figurecaption> Fig 3. Testing the range and flow rate of our pump </figcaption>.

Since the full performance curve of our pump wasn't available, we decided to measure the time it took to pump out 1L and the maximum range achieved. With these two measurements we were able to estimate the exit velocity of the stream, calibrate the drag model, and validate our pipe flow calculations.

## Testing Results
During the test the pump achieved an average volume flow rate of 191GPH or $2e-4 m^3/s$. Given the nozzle size this translated to an exit velocity of 6.3 m/s. We used our model to bacalculate the required pump specs to supply this velocity and flow rate and found that a pump with a head of 18ft and 196 GPH flow rate wwas required corresponding closely with the 18 ft head and 200 GPH flow rate advertised for the TruePower pump we were testing. The slightly hire listed vs calculated specs were likely due to inefficiencies in the real system--on our first test we found the pump rotor had locked-up due to calcification and disuse.

The measured exit velocity of 6.3 m/s did not, however, match up with the required exit velocity calculated by our drag model. Our mdoel estimated 15 m/s exit velocity was required to reach a 5 m range while the test showed that a 6.3 m/s velocity was sufficient to achieve $\sim 7$ m range. After taking a second pass at the drag model we found that drag on the flow was essentially negligible. We ultimately chose to reuse the 2025 system since it more than exceeded our design requirements and cost nothing.

## Design Specs
- Nozzle: resin-printed, 0.635cm diameter
- Tubing: 1.5m tubing, 1.27 cm diameter
- 12V DC water pump
- 7.5 A for start-up
- 200 gallons per hour, max 23 ft. Lift
- Self-priming
- Footprint: 5.75"L x 2.5"W x 5"H

![SLA Printed Nozzle](/content/blogs/mechanical/water-delivery/Nozzle.png)
<figurecaption> Fig 4. A 1/4" ID SLA printed nozzle was used to step up flow exit velocity for the desired range of 5 m. In reality we achieved a range of ~7m. </figcaption>.




