## Vertical Flywheel Ball Launcher

Driving considerations for the ball launcher design were range, volume, and weight. We chose to implement a vertical flywheel design this year to resolve issues last year's launcher had with meeting updated range and volume requirements.

![Ball Trajectories for Optimal Angles to Hit Targets](/content/blogs/mechanical/vertical-flywheel-ball-launcher/ball-trajectories.png)
<figcaption>Fig 1. Ball Trajectories for Optimal Angles to Hit Targets</figcaption>

### Range: <= 5m

Maximum range was determined by the maximum distance at which our perception stack could reliably detect a target. Water tests showed that improvements to the YOLO model enabled detection at 5 m — a 2 m increase over last year's 3 m target. Unfortunately, analysis showed that a fixed-elevation-angle ball launcher could not reach a 5 m target without overshooting. To sidestep this problem we chose to switch to vertical flywheel this year. This architecture allows us to launch with backspin — producing different trajectories based on estimated target distance without compromising the simplicity of a fixed-elevation-angle design.

### Volume

Last year's design was slightly too tall and blocked the LiDAR's FOV from certain angles. To avoid that problem this year we moved the leadscrew to be in plane with, instead of above, the ball. Decreasing vertical footprint by 46 mm.

### Initial Concept

![Initial Concept Sketch](/content/blogs/mechanical/vertical-flywheel-ball-launcher/initial-concept.png)
<figcaption>Fig 2. Initial concept sketch showing motors, lead screw, and flywheel arrangement</figcaption>

#### Do we have enough stored momentum?

We wanted to use PLA to 3D print the flywheels. So, first, we checked what wheel thickness allows for storing enough energy to launch the ball at an exit speed of 8 m/s. To do this, we used the following energy conservation formula:

<div align="center">

$$\frac{1}{2}MR^2\omega^2 = \frac{1}{2}mv^2$$

</div>

Where M is the mass of the flywheels, assuming the density of PLA to be 1240 kg/m^3, R is the radius of the flywheels that is constrained by the camera mount on the boat, $\omega$ and is the rotational speed of the flywheels, m is the mass of the ball, and v is its exit speed.

<div align="center">

$$v^2 = \frac{MR\omega^2}{m} = \frac{\rho\pi R^4 d\omega^2}{m} \approx 165385d$$

</div>

Therefore, to get an 8 m/s exit speed, the thickness needs to be 0.0386 cm, and for a 16 m/s exit speed, the thickness is 0.15479 cm. We can store enough momentum in the flywheels to launch the ball from about 6 meter distance from the target.

#### Can we create this momentum in a reasonable amount of time? Can we transfer this momentum to the ball, given reasonable contact time?

To check this, we geometrically found an expression for θ the angle between the vertical and the point of first contact between the ball and the flywheels.

![Geometric Analysis](/content/blogs/mechanical/vertical-flywheel-ball-launcher/geometric-analysis.png)
<figcaption>Fig 3. Geometric analysis showing angle θ between vertical and point of first contact</figcaption>

<div align="center">

$$\theta = arccos(\frac{R+\frac{D-0.00835}{2}}{R+r})$$

</div>

From there, we were able to find the equation for t, the time of contact between the ball and the flywheels, in terms of x, the compression of the ball, assuming no slip:

<div align="center">

$$t = \frac{2 \, arccos(\frac{0.0373+\frac{0.054-x}{2}}{0.0373+\frac{0.054}{2}})}{\omega}$$

</div>

As well as an equation for x, the compression of the ball, in terms of t, the contact time:

<div align="center">

$$F = \frac{mv}{t}$$

$$x = \frac{\frac{0.05*8}{2t} - \mu mg}{\mu k}$$

</div>

By plotting these equations, we were able to find the intersection — the optimal compression distance as well as the contact time:

![Contact Time and Compression Analysis](/content/blogs/mechanical/vertical-flywheel-ball-launcher/contact-time-compression.png)
<figcaption>Fig 4. Graph showing contact time vs compression of the ball, with intersection point at (0.00413392, 0.01)</figcaption>

However, the equation used here ($t = \frac{\theta}{\omega}$) assumes no slip. Due to the inaccuracy of this assumption, we instead chose a reasonable time and found the minimum required compression distance from there:

<div align="center">

$$x = 0.004 \, m$$

$$t = 0.01 \, s$$

</div>

The value for k, the spring constant of the ball, was obtained first experimentally, then verified using an Instron:

<div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">

<div style="flex: 1; min-width: 200px; max-width: 45%;">

![Experimental Setup](/content/blogs/mechanical/vertical-flywheel-ball-launcher/experimental-setup-1.png)
<figcaption>Fig 5. Experimental setup for measuring ball compression</figcaption>

</div>

<div style="flex: 1; min-width: 200px; max-width: 45%;">

![Instron Test](/content/blogs/mechanical/vertical-flywheel-ball-launcher/instron-test.png)
<figcaption>Fig 6. Instron machine testing ball compression</figcaption>

</div>

</div>

We acquired the following plots by varying compression distance and speed:

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0;">

<div>

![Stiffness Test 1](/content/blogs/mechanical/vertical-flywheel-ball-launcher/stiffness-test-1.png)

</div>

<div>

![Stiffness Test 2](/content/blogs/mechanical/vertical-flywheel-ball-launcher/stiffness-test-2.png)

</div>

<div>

![Stiffness Test 3](/content/blogs/mechanical/vertical-flywheel-ball-launcher/stiffness-test-3.png)

</div>

<div>

![Stiffness Test 4](/content/blogs/mechanical/vertical-flywheel-ball-launcher/stiffness-test-4.png)

</div>

<div>

![Stiffness Test 5](/content/blogs/mechanical/vertical-flywheel-ball-launcher/stiffness-test-5.png)

</div>

<div>

![Stiffness Test 6](/content/blogs/mechanical/vertical-flywheel-ball-launcher/stiffness-test-6.png)

</div>

</div>

In the calculation above, we used a k value of 6784.19 N/m. We concluded that we can generate the necessary momentum in a reasonable time and transfer it to the ball with sufficient contact time.

#### Can we generate this momentum in a reasonable spin-up time?

After finding the wheel speed after launching one ball, we used the change of angular momentum equation to calculate the time needed to reach $\omega_{final}$, sufficient speed to be able to launch the next ball:

<div align="center">

$$\tau_{motor} = \Delta L_{one \, wheel} = I\omega_{final} - I\omega_{initial}$$

</div>

Based on this formula, the time to spin back up is 0.13 s, which is a reasonable time to be ready to shoot again.

### Design Analysis: Second Pass
Once we completed the first pass design analysis to roughly size all system components, we decided to do a second pass, higher fidelity analysis to visualize specific engineering trade-offs like compression, flywheel RPM, and ball spin.

The majority of this analysis is based on the following state space model of the system:
$$
\mathbf{x} =
\begin{bmatrix}
x \\ v \\ \Omega \\ \omega_1 \\ \omega_2
\end{bmatrix}, \quad
\dot{\mathbf{x}} =
\begin{bmatrix}
\dot{x} \\ \dot{v} \\ \dot{\Omega} \\ \dot{\omega}_1 \\ \dot{\omega}_2
\end{bmatrix}
=
\begin{bmatrix}
v \\
\frac{F_1(x,v,\Omega,\omega_1) + F_2(x,v,\Omega,\omega_2)}{m} \\
\frac{r_b \left[ F_1(x,v,\Omega,\omega_1) - F_2(x,v,\Omega,\omega_2) \right]}{I_b} \\
-\frac{R_w F_1(x,v,\Omega,\omega_1)}{I_w} \\
-\frac{R_w F_2(x,v,\Omega,\omega_2)}{I_w}
\end{bmatrix}
$$

where $x, v, F_{1}, \Omega, \omega_{1}, F_{2}, \omega_{2}, R_{w}, and r_{b}$ are defined in Fig 7.

![Flywheel variable definition](/content/blogs/mechanical/vertical-flywheel-ball-launcher/FlywheelGeometryModelSketch.jpg)<figcaption> Fig 7. defines key geometric and dynamic variables of the model. </figcaption>

Forces $F_{1}$ and $F_{2}$ acting on the ball are defined as functions of compression, $\delta(x)$,

$$
\begin{aligned}
F_1(\delta,v,\Omega,\omega_1) &= \mu \, N(\delta) \,
    \tanh\left(\frac{R_w \, \omega_1 - (v + r_b \, \Omega)}{v_0}\right) \\[1mm]
F_2(\delta,v,\Omega,\omega_2) &= \mu \, N(\delta) \,
    \tanh\left(\frac{R_w \, \omega_2 - (v - r_b \, \Omega)}{v_0}\right) \\[1mm]
N(\delta) &= K \, \delta(x) \\[1mm]
\delta(x) &= 2 \cdot \left(R_{w} + r_{b} - \sqrt{\left(R_{w} + r_{b} - \frac{\delta_{\text{max}}}{2}\right)^2 + x^2}\right)
\end{aligned}
$$

and K is the average stiffness found during instron tests. Since contact is assumed to occur over a relatively small arc length we calculate acceleration directly from the contact forces without trig.

#### Validating + Calibrating the Model
This model leaves one free parameter: $\mu$ or the viscous friction coefficient between the flywheels and the ball. To tune this parameter, and validate the model, we compared predicted results to the performance of last year's horizontal flywheel launcher which reached exit velocities of 7.15 m/s without spin.

Based on these empirical results we determined $\mu \approx 0.37$ (see Fig. 8), which seemed quite reasonable and made us more confident in our model.

![Flywheel model calibration](/content/blogs/mechanical/vertical-flywheel-ball-launcher/FlywheelLauncherCalibration.png)<figcaption> Fig 8. By sweeping our model through the relationship between $\mu$ and exit velocity given the dimensions of last year's launcher, we were able to determine an expected friction coefficient between the ball and flywheels of $\mu \approx 0.37$. </figcaption>

The next step was to use our tuned model to determine the optimal compression, $\delta$, and differential flywheel speed (i.e., spin), $\Delta RPM$, to apply to the ball. To do this we conducted a feasibility sweep across $\delta$ and $\Delta RPM$ and recorded pairs that satisfied the 5 m range and 0.5 m max trajectory height at one or more launch angles, $\theta$. The results of the feasibility study are presented in Fig. 9 and motivated operating at a $\Delta RPM \approx 6000$ and $\delta \approx 18$ mm. We chose these values because it is desirable to minimize compression of the ball, $\delta$, to decrease loads on the system.

![Flywheel feasibility sweep](/content/blogs/mechanical/vertical-flywheel-ball-launcher/FlywheelFeasibilityMap.png)<figcaption> Fig 9. By sweeping through various compressions, $\delta_{\text{max}}$, and spin rates, $\Delta \text{RPM}$, between the two flywheels, we were able to visualize the region of possible designs that met our trajectory height and max range requirements at some launch angle.</figcaption>

Before finalizing the design we wanted to visualize the engineering trade-offs made by selecting these operating conditions. To do this we visualized the total fractional buffer, fractional excess range, and fractional height buffer of our design operating with the prescribed compression of 18 mm but variable $\Delta \text{RPM}$ and launch angle $\theta$. The results of these sweeps are presented in Fig. 9. In this case, fractional "buffer" was used as a performance metric because we wanted to maximize range but minimize trajectory height; buffer is used to label the amount of excess we had in the desired direction (excess range; difference between target height and max trajectory height). Fractional buffer values are used for normalizations and more accurate comparison of trade-offs.

![Flywheel design trade-offs visualization](/content/blogs/mechanical/vertical-flywheel-ball-launcher/MarginsVisualizationFlywheels.png)<figcaption> Fig 10. By sweeping our model through various launch angles and backspin we were able to confidently select operating conditions $\delta = 18mm, \Delta RPM = 6000, \theta = 18.5^\circ$. Though these conditions cost us excess range but ensured we never overshot the target. </figcaption>

Visualizing the trade-offs between excess range and height buffer were important because we cared far more about not overshooting the target than we did about maximizing range. While decreased range has an easy solution (move closer), overshooting the target does not. In fact, overshooting, for a fixed-angle launcher, can only be countered through  careful station keeping from the target that we were not yet confident our autonomy system could do.

### CAD

![CAD Assembly](/content/blogs/mechanical/vertical-flywheel-ball-launcher/cad-assembly.png)
<figcaption>Fig 11. CAD model showing complete ball launcher assembly with labeled components: Motors, Ball chamber, Lead screw mechanism, Turret, and Boat mount</figcaption>
