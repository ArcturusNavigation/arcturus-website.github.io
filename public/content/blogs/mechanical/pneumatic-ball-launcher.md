## Pneumatic Ball Launcher

Driving considerations for the ball launcher design were range, volume, and weight. We chose to implement a vertical flywheel design this year to resolve issues last year's launcher had with meeting updated range and volume requirements.

### Range: <= 5m

Maximum range was determined by the maximum distance at which our perception stack could reliably detect a target. Water tests showed that improvements to the YOLO model enabled detection at 5 m, a 2 m increase over last year's 3 m target. In addition to the range constraint, we also constrained the maximum height of the ball's trajectory to be $\leq 0.5$m to avoid the possibility of overshooting targets at short range.

Unfortunately, projectile motion analysis of the 2025 ball launcher, a fixed-elevation-angle, counter-rotating flywheel design which achieved exit velocities $\sim 7.15$ m/s, showed that it could not achieve a 5 m range without overshooting a 0.5 m target.

![Projectile motion analysis of allowable ball launch conditions](/content/blogs/mechanical/pneumatic-launcher/BallLauncherProjectileMotionVisualizer.png)<figcaption> Fig 1. Projectile motion analysis of the ball showed that to achieve a 5m range without overshooting 0.5m tall targets required an exit velocity higher than 7.15 m/s.</figcaption>


### Volume
Since a pneumatic ball launcher would not require the bulkiest components of the 2025 flywheel launcher, including the flywheels, motors, and lead screw, we hoped it would result in a considerably smaller volume.

### Initial Concept
The initial design called for using bike tire inflation CO2 cartridges and a high pressure regulator to feed gas into a chamber at a predictable pressure. As the gas expands it launches the ball.

![Gas storage system](/content/blogs/mechanical/pneumatic-launcher/gas_storage.jpeg)<figcaption> Fig 2. The original design called for CO2 cartridges and a 4 way manifold to route gas to the barrel. </figcaption>

![Projectile motion analysis of allowable ball launch conditions](/content/blogs/mechanical/pneumatic-launcher/Barrel.jpeg)<figcaption> Fig 3. Sketch of the original barrel design. </figcaption>

### Proof of Concept Testing
Since the team didn't have much prior experience with pneumatics we decided to make and test a proof of concept barrel as soon as the initial design was finalized. In the process of testing the first iteration of the proof-of-concept barrel we discovered that adding a hotglue rim to the open end of the barrel significantly improved range and exit velocity. We hypothesized this was because the restraining force provided by the hot glue rim compressing the ball allowed a larger pressure to build up behind the ball, resulting in higher muzzle velocity and longer range.

This discovery made it clear to us that we needed a better physical understanding of our system than parameter sweeps could give us. To achieve this we decided to build an idealized physical model of the system and calibrate free parameters against real world test results.

To build this model we assumed:
1. The CO2 acts like an ideal gas.
2. The ball creates a perfect seal with the edges of the barrel, i.e., mass of gas behind the sphere remains constant throughout the launch process.
3. Volume flow rate into the barrel is sufficiently small compared to rapidty of the launch that flow rate into the barrel can be neglected.
4. Besides linear friction and coulombic friction losses there are no additional losses in the idealized version of the system.
5. The gas fed into the barrel has attained ambient temperature, $T_{atm}$.
6. The expansion process occurs very rapidly and can therefore be modeled as adiabatic.

From these assumptions we were able to arrive at a state space model of the dynamics of our system:
![Derivation of dynamical model](/content/blogs/mechanical/pneumatic-launcher/StateSpacePneumtic.jpg)<figcaption> Fig 4. Derivation of the state space model of the system. </figcaption>

By integrating the system using Matlab ode45 we were able to plot ball range as a function of barrel pressure and barrel length. The state space model presented in Fig 4. contained two free parameters: $\eta$, an overall efficiency, and $c$, the linear friction coefficient. We tuned these two parameters by test firing with both a 152.40 mm long barrel and a much shorter 76.20 mm long barrel. A gasket was added to the system to provide a restraining force for retaining the ball until adequate pressure builds in the chamber. To determine the pressure in the barrel at the onset of adiabatic expansion we gradually turned up the regulator--finding that max barrel pressure occurred at about 50 PSI.

During the test we observed that the launcher fired ~18 ft or 5.5 m with the short, 76.2 mm barrel, but only 5 ft, or 1.5 m, with the long, 152.4 mm barrel. By back solving from range for exit velocity using projectile motion, we were able to tune $\eta$ and $c$ to meet the observed performance. The results of that tuning are presented in Fig 5.

![Parameter sweep of efficiency and barrel pressure](/content/blogs/mechanical/pneumatic-launcher/PneumaticBallLauncherCalibration.png)<figcaption> Fig 5. The free parameters of the derived state space model, namely overall efficiency $\eta$ and linear friction, $c$, were validated using physical testing. </figcaption>

Using the empirical results, we established that the system operates with an efficiency close to $\sim 0.1$ and linear friction coefficient $c \approx 10$. Since we target an exit velocity of 10 m/s (Fig 1), this model motivated buying a stiffer gasket and slightly decreasing barrel length.

### Final Design
The final design uses the same deck mounting system as the vertical flywheel launcher for maximum reusability. The design also features a gravity run servo-and-gate system for loading balls. Finally the upstream components of the launcher include a solenoid, low-pressure regulator, resevoir, high pressure regulator and the cartridges themselves. All components up to the high pressure regulator are rated to several thousand PSI, well over expected cartridge pressure. The high pressure regulator steps down flow pressure to 130 PSI, where it enters the reservoir (rated to 180 PSI) and then the low pressure regulator (100 PSI, rated to 120 PSI) and solenoid valve. In addition to the multishotted reloading design we also developed a single-shot design to fit in an even smaller volume and weight footprint.

![Pneumatic ball launcher CAD](/content/blogs/mechanical/pneumatic-launcher/PneumaticLauncherCAD.png)<figcaption> Fig 6. the completed pneumatic launcher system features a gravity fed servo + gate system for reloading and a fully interchangeable turret system for easy swaps between our vertical flywheel and pneumatic launchers. </figcaption>
