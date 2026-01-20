## Sensor Mast Tilt Table

### Goal

Design a single-degree-of-freedom tilt table capable of oscillating sensor mast of load ~5kg over a frequency range of 0-54Hz at amplitudes spanning 0 to 30degrees. 

### Rationale
During the sensor mast redesign process, we realized that we did not have a rigorous understanding of how our perception stack’s performance is affected by vibrations. To rectify this we designed a tilt table capable of forcing the sensor mast at controlled frequencies and amplitudes. By measuring the relationship between frequency, amplitude, and detection confidence, we will be able to rigorously define design constraints for the 2027 sensor mast.

Vibration frequencies were determined by the oscillating loads on the boat, namely: T200 thrusters, rotating LiDAR, and wave forcing (i.e., natrual pitching frequency of the hulls).

### Expected Result
The ultimate goal of this project was to arrive at a bode-like plot of acceptable vibrational amplitude at which the YOLO detection confidence meets some minimum threshold across frequencies from 0-54Hz. Using this data, the MechE team can modify the forced response of the 2027 sensor mast to damp out problematic frequencies to an acceptable amplitude threshold. The expected result of this project is a graph like the one sketched in Fig. 1.

![Graph of desired results: Maximum amplitude vs frequency for which YOLO detection meets some acceptable minimum threshold.](/content/blogs/mechanical/tilt-table/ExpectedResults.png)<figurecaption> Fig. 1 The utlimate objective was to produce a graph of maximum allowable amplitude across frequencies 0-54Hz at which some minimum YOLO detection confidence is maintained.</figcaption>

### Design
We include a concept sketch of the tilt table design below. It features a single degree of freedom, $\theta$, measured relative to the horizontal. The table uses a DC motor and offset mass to provide the osicllating force. A counterweight is used to keep the table's equilibrium at $\theta = 0$, for ease of analysis and use. The sensor mast is offset from the center of rotation as it is on the boat. Finally springs allows us to tune the tilt tables forced response. 

![Sketch of the tilt table](/content/blogs/mechanical/tilt-table/TiltTableSketch.png)<figurecaption> Fig. 2 we decided to use a rotating offset mass to force the tilt table at the required amplitudes and frequencies. A counterweight ensures the table's static equilibrium configuration remains parallel to the horizontal. </figcaption>

### Calcs
We used the Euler–Lagrange method to derive the equation of motion from the system’s kinetic and potential energy. The resulting equation was then linearized about the equilibrium point, $\theta = 0$ allowing us to solve it and obtain a transfer function that relates the input forcing to the platform motion.

![Tilt table calcs](/content/blogs/mechanical/tilt-table/TiltTableCalcs.png)<figurecaption> Fig. 3 We used euler-lagrange energy methods to derive the equation of motion of the tilt table.  </figcaption>

The resulting transfer function shows that $\theta$ or the amplitude of angular osccilation is dependent on motor position and offset distance of the rotating mass at frequencies below the table's natural frequency. This motivated constructing a table with a natural frequency higher than 54 Hz so that frequency sweeps for a given amplitude of oscillation could be conducted simply by changing the motors rotation rate without recofniguring the table.

### CAD
A preliminary CAD of the table is included below.
 
![Tilt table CAD](/content/blogs/mechanical/tilt-table/TiltTableCAD.png)<figurecaption> Fig. 4 A preliminary CAD of the tilt table.  </figcaption>