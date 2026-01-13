# Vertical Flywheel Ball Launcher

Driving considerations for the ball launcher design were range, volume, and weight. We chose to implement a vertical flywheel design this year to resolve issues last year's launcher had with meeting updated range and volume requirements.

![Ball Trajectories for Optimal Angles to Hit Targets](/content/blogs/mechanical/vertical-flywheel-ball-launcher/ball-trajectories.png)
*Fig 1. Ball Trajectories for Optimal Angles to Hit Targets*

## Range: <= 5m

Maximum range was determined by the maximum distance at which our perception stack could reliably detect a target. Water tests showed that improvements to the YOLO model enabled detection at 5 m – a 2 m increase over last year's 3 m target. Unfortunately, analysis showed that a fixed-elevation-angle ball launcher could not reach a 5 m target without overshooting. To sidestep this problem we chose to switch to vertical flywheel this year. This architecture allows us to launch with backspin – producing different trajectories based on estimated target distance without compromising the simplicity of a fixed-elevation-angle design.

## Volume

Last year's design was slightly too tall and blocked the LiDAR's FOV from certain angles. To avoid that problem this year we moved the leadscrew to be in plane with, instead of above, the ball. Decreasing vertical footprint by 46 mm.

## Initial Concept

![Initial Concept Sketch](/content/blogs/mechanical/vertical-flywheel-ball-launcher/initial-concept.png)
*Fig 2. Initial concept sketch showing motors, lead screw, and flywheel arrangement*

### Do we have enough stored momentum?

We wanted to use PLA to 3D print the flywheels. So, first, we checked what wheel thickness allows for storing enough energy to launch the ball at an exit speed of 8 m/s. To do this, we used the following energy conservation formula:

<div align="center">

$$\frac{1}{2}MR^2\omega^2 = \frac{1}{2}mv^2$$

</div>

Where M is the mass of the flywheels, assuming the density of PLA to be 1240 kg/m^3, R is the radius of the flywheels that is constrained by the camera mount on the boat, $\omega$ and is the rotational speed of the flywheels, m is the mass of the ball, and v is its exit speed.

<div align="center">

$$v^2 = \frac{MR\omega^2}{m} = \frac{\rho\pi R^4 d\omega^2}{m} \approx 165385d$$

</div>

Therefore, to get an 8 m/s exit speed, the thickness needs to be 0.0386 cm, and for a 16 m/s exit speed, the thickness is 0.15479 cm. We can store enough momentum in the flywheels to launch the ball from about 6 meter distance from the target.

### Can we create this momentum in a reasonable amount of time? Can we transfer this momentum to the ball, given reasonable contact time?

To check this, we geometrically found an expression for θ the angle between the vertical and the point of first contact between the ball and the flywheels.

![Geometric Analysis](/content/blogs/mechanical/vertical-flywheel-ball-launcher/geometric-analysis.png)
*Fig 3. Geometric analysis showing angle θ between vertical and point of first contact*

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
*Fig 4. Graph showing contact time vs compression of the ball, with intersection point at (0.00413392, 0.01)*

However, the equation used here ($t = \frac{\theta}{\omega}$) assumes no slip. Due to the inaccuracy of this assumption, we instead chose a reasonable time and found the minimum required compression distance from there:

<div align="center">

$$x = 0.004 \, m$$

$$t = 0.01 \, s$$

</div>

The value for k, the spring constant of the ball, was obtained first experimentally, then verified using an Instron:

<div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">

<div style="flex: 1; min-width: 200px; max-width: 45%;">

![Experimental Setup](/content/blogs/mechanical/vertical-flywheel-ball-launcher/experimental-setup-1.png)
*Fig 5. Experimental setup for measuring ball compression*

</div>

<div style="flex: 1; min-width: 200px; max-width: 45%;">

![Instron Test](/content/blogs/mechanical/vertical-flywheel-ball-launcher/instron-test.png)
*Fig 6. Instron machine testing ball compression*

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

## Spin-Up Time

After finding the wheel speed after launching one ball, we used the change of angular momentum equation to calculate the time needed to reach $\omega_{final}$, sufficient speed to be able to launch the next ball:

<div align="center">

$$\tau_{motor} = \Delta L_{one \, wheel} = I\omega_{final} - I\omega_{initial}$$

</div>

Based on this formula, the time to spin back up is 0.13 s, which is a reasonable time to be ready to shoot again.

## CAD

![CAD Assembly](/content/blogs/mechanical/vertical-flywheel-ball-launcher/cad-assembly.png)
*Fig 7. CAD model showing complete ball launcher assembly with labeled components: Motors, Ball chamber, Lead screw mechanism, Turret, and Boat mount*
