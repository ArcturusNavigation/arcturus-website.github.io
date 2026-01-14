# Controller

After computing a collision-free path for the robot to follow, we need to compute the desired velocities to make sure that the robot follows it as closely as possible.

One of the surprising difficulties was deciding when to transition from point-following to one point on the trajectory to the next point – our old algorithm, which relied on distance to points, would accelerate and decelerate too much to land exactly on the points when the distance threshold was set low. But when the distance threshold was increased, the boat wouldn’t even follow the trajectory anymore. Our solution was a more adaptive algorithm, that tracks the closest point on the optimal trajectory. 

Instead of going straight towards that point, it computes a velocity vector using three subvelocities: a PID controller in the direction of the optimal trajectory, another PID controller perpendicular to the optimal trajectory, and an obstacle-avoidance potential field. While the first controller follows the general direction of the path, the second controller keeps us on the path.

The third controller, the potential field, is our last line of defense against crashes. Based on the distance to obstacles, the boat receives a “repulsive force” away from those same obstacles computed with the inverse square law, preventing crashes.

$$
\begin{gathered}
U(\textbf{q}) = \frac{1}{2}k\sum_{\textbf{q}_\text{obs}|d(\textbf{q},\textbf{q}_\text{obs}) \leq d_0}(\frac{1}{d(\textbf{q},\textbf{q}_\text{obs})}-\frac{1}{d_0})^2\\\\
v_r = -\nabla U(\textbf{q})|_{\textbf{q}=\textbf{q}_\text{robot}}
\end{gathered}
$$

<figure>
    <table width="100%" style="border:0; border-collapse:collapse; border-spacing:0;">
    <tr style="border:0;">
        <td align="center" width="60%" style="border:0; padding:0; margin:0;">
        <img src="/pictures/Blogs/new_controls.png" width="100%" style="display:block;" />
        </td>
        <td align="center" width="40%" style="border:0; padding:0; margin:0;">
        <img src="/pictures/Blogs/potential_field.png" width="100%" style="display:block;" />
        </td>
    </tr>
    </table>
</figure>

*Fig 2. Our low-level control strategy: the path-following PID controller on the left, and a visualization of the potential field method used for avoiding obstacles on the right.*

The x-drive configuration of our thrusters allow Fish 'N Ships to strafe and maneuver with ease.

In order to convert the desired velocities to thruster values, we are computing the minimum norm solution of the linearized system that describes the physics of the boat and constrains its velocity to the desired one.

$$
\begin{gathered}
u^\star=\underset{u \in \mathbb{R}^4}{\mathrm{argmin}}\lVert u\rVert\\
\text{s.t. } u\in[-1,1],\quad Bu=Cv^2\text{, where:}\\\\
B=\begin{bmatrix}
b_{fr}\sin\theta & b_{bl}\sin\theta & b_{fl}\sin\theta & b_{br}\sin\theta \\
b_{fr}\cos\theta & b_{bl}\cos\theta & -b_{fl}\cos\theta & -b_{br}\cos\theta \\
b_{fr}r_{fr}\sin(\theta+\phi_{fr}) & -b_{bl}r_{bl}\sin(\theta+\phi_{bl}) & -b_{fl}r_{fl}\sin(\theta+\phi_{fl}) & b_{br}r_{br}\sin(\theta+\phi_{br})
\end{bmatrix}\\\\

u=\begin{bmatrix}u_{fr} & u_{bl} & u_{fl} & u_{br}\end{bmatrix}^T\\

v=\begin{bmatrix}v_x & v_y & \omega_z\end{bmatrix}^T\\\\

C=\begin{bmatrix}
C_x & 0 & 0 \\
0 & C_y & 0 \\
0 & 0 & C_z
\end{bmatrix}
\end{gathered}
$$

where $b_T, T\in\set{\text{fl}, \text{fr}, \text{bl}, \text{br}}$ are the maximum forces that the thrusters can exert (approximately 40N for the Blue Robotics T200 thrusters that we are using), $r_T$ are the distances of the thrusters from the boat’s center of mass, and $C_x, C_y, C_z$ are the drag coefficients, which are empirically determined.

To read more about how we calculate the robot's dynamics with this configuration, please visit our [GitHub wiki](https://github.com/ArcturusNavigation/all_seaing_vehicle/wiki/X%E2%80%90Drive-Controller) for our detailed documentation of the controller.

<img src="/pictures/Blogs/controller.jpg" width="50%" style="display:block;" />

*Fig 3. Robot Dynamics Model.*
