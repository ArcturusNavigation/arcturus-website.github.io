# Hull Design and CFD Simulation

During the 2024 Arcturus Competition, our hull design did not create a clean flow field around the catamaran and often pushed water onto our deck. Therefore, this year, we decided to redesign the hull design to prevent this from occurring. This project was split up into sections of redesigning the hull in CAD, printing/assembling the hull, creating a multiphase CFD simulation with mesh refinement study for the hull, and redesigning/CFD testing a 2nd hull design.

## Redesigning the Hull in CAD

We chose catamaran hulls because they are widely recognized in marine engineering for their high metacentric height, which provides excellent roll and pitch stability, even though they exhibit relatively low angle stability compared to monohulls. Their dual-hull configuration reduces drag and allows for efficient, stable movement in both calm and turbulent waters, making them ideal for autonomous robotic boat applications.

However, in order to design future catamaran hull designs on top of this one, we went for a modular attachment system with a homogenous center. Therefore, for future applications, we could substitute another aft and stern to essentially test another boat while saving on resources. For the top of the boat, we designed acrylic lids and natural rubber gaskets to seal them to the hull.

![Catamaran Hull Design](/content/blogs/mechanical/hull-design-simulation/catamaran-hull-design.png)
*Fig 1. Catamaran hull design with modular sections and acrylic lids*

In order to attach these modules together, we used 3-7 M3 screws that were attached as follows. The justification for this design was from an MIT study done in 2020 that attempted to create a similar modular hull design.

![Modular Attachment Method](/content/blogs/mechanical/hull-design-simulation/modular-attachment-method.png)
*Fig 2. Modular attachment method showing M3 screw placement*

## Printing/Assembling Hull

We printed the boat in resin and applied silicone sealing to prevent flooding and fabricated the acrylic lids through laser cutting to enclose the hull tops. To support hydrodynamic analysis, we also developed a fully integrated data-acquisition system. An MPU 6050 accelerometer connected to an Arduino logged motion data locally on the boat, and a DigiXBee radio module, which can transmit up to 1100 meters, broadcasted the sensor stream in real time for remote monitoring.

For testing, we attached the modular boat to a tow tank arm through a universal joint. The tow tank, a controlled water channel, allows for real-world evaluation of hull performance under conditions where Navier Stokes simulations alone are insufficient to capture fluid air interactions and turbulence effects. We tested these hulls up to Froude numbers of 0.7.

<div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">

<div style="flex: 1; min-width: 200px; max-width: 40%;">

![Model Catamaran Assembled 1](/content/blogs/mechanical/hull-design-simulation/model-catamaran-assembled-1.png)

</div>

<div style="flex: 1; min-width: 200px; max-width: 50%;">

![Model Catamaran Assembled 2](/content/blogs/mechanical/hull-design-simulation/model-catamaran-assembled-2.png)

</div>

</div>

## Multiphase CFD Simulation/Mesh Refinement

Tow tank experiments and empirical testing remain the gold standard for evaluating boat hull performance, providing highly accurate, real-world data. However, there are situations where designers require preliminary simulations to validate concepts or optimize designs before committing to full-scale production and testing.

For boat hull optimization, we ran both steady-state CFD and multiphase CFD simulations. In steady-state analyses, we accurately modeled the boat hull to evaluate flow characteristics, drag, and lift forces under consistent operating conditions. For multiphase CFD, we developed a simulation capable of capturing interactions between water and air around the hull. In order to achieve the highest accuracy, we ran a mesh refinement study. Below are pictures from 3 of the mesh iterations.

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; margin: 5px 0;">

<div>

![Mesh Iteration 1](/content/blogs/mechanical/hull-design-simulation/mesh-iteration-1.png)

</div>

<div>

![Mesh Iteration 2](/content/blogs/mechanical/hull-design-simulation/mesh-iteration-2.png)

</div>

<div>

![Mesh Iteration 3](/content/blogs/mechanical/hull-design-simulation/mesh-iteration-3.png)

</div>

</div>

The multiphase CFD simulations successfully captured the water-air interface around the hull, showing how the hull interacts with the water surface at various speeds. The simulation results provided valuable insights into flow separation, wake formation, and wave patterns.

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0;">

<div>

![Multiphase CFD Simulation](/content/blogs/mechanical/hull-design-simulation/multiphase-cfd-simulation-1.png)
*Fig 3. Multiphase CFD simulation showing water surface and hull*

</div>

<div>

![Multiphase CFD Simulation 2](/content/blogs/mechanical/hull-design-simulation/multiphase-cfd-simulation-2.png)
*Fig 4. Multiphase CFD simulation cross-section view*

</div>

<div>

![Multiphase CFD Flow Vectors](/content/blogs/mechanical/hull-design-simulation/multiphase-cfd-flow-vectors.png)
*Fig 5. Flow vectors and mesh detail around the hull*

</div>

<div>

![Multiphase CFD Velocity](/content/blogs/mechanical/hull-design-simulation/multiphase-cfd-velocity.png)
*Fig 6. Velocity distribution showing turbulent wake*

</div>

</div>

## 2nd Hull Design Iteration CFD Simulation

During Tow Tank testing, the first redesign still did not have a clean wake and constant forces detected against the boat, therefore we redesigned the boat hull and tested it in CFD to validate the design before empirically testing it. Below are pictures of and videos of the CFD results.

![Hull Design V2](/content/blogs/mechanical/hull-design-simulation/hull-design-v2.png)
*Fig 7. Second iteration hull design with improved geometry*

The second iteration focused on optimizing the hull shape to reduce wake turbulence and minimize forces acting on the hull. The CFD simulations of this new design showed significant improvements in flow characteristics.

<div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">

<div style="flex: 1; min-width: 200px; max-width: 45%;">

![Hull V2 CFD Velocity](/content/blogs/mechanical/hull-design-simulation/hull-v2-cfd-velocity.png)
*Fig 8. Second iteration CFD showing improved velocity distribution*

</div>

<div style="flex: 1; min-width: 200px; max-width: 45%;">

![Hull V2 CFD Side View](/content/blogs/mechanical/hull-design-simulation/hull-v2-cfd-side-view.png)
*Fig 9. Side view of second iteration CFD simulation*

</div>

</div>

The iterative design process, combining empirical tow tank testing with CFD validation, allowed us to rapidly optimize the hull geometry while minimizing material costs and fabrication time. The second iteration demonstrated cleaner wake patterns and more consistent hydrodynamic forces, validating our approach for future hull designs.
