# Controller

After computing a collision-free path for the robot to follow, we need to compute the desired velocities to make sure that the robot follows it as closely as possible.

One of the surprising difficulties was deciding when to transition from point-following to one point on the trajectory to the next point – our old algorithm, which relied on distance to points, would accelerate and decelerate too much to land exactly on the points when the distance threshold was set low. But when the distance threshold was increased, the boat wouldn’t even follow the trajectory anymore. Our solution was a more adaptive algorithm, that tracks the closest point on the optimal trajectory. 

Instead of going straight towards that point, it computes a velocity vector using three subvelocities: a PID controller in the direction of the optimal trajectory, another PID controller perpendicular to the optimal trajectory, and an obstacle-avoidance potential field. While the first controller follows the general direction of the path, the second controller keeps us on the path. The third controller, the potential field, is our last line of defense against crashes. Based on the distance to obstacles, the boat receives a “repulsive force” away from those same obstacles computed with the inverse square law, preventing crashes.

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

The x-drive configuration of our thrusters allow Fish 'N Ships to strafe and maneuver with ease. To read more about how we calculate the robot's dynamics with this configuration, please visit our [GitHub wiki](https://github.com/ArcturusNavigation/all_seaing_vehicle/wiki/X%E2%80%90Drive-Controller) for our detailed documentation of the controller.

![Robot Dynamics Model](/pictures/Blogs/controller.jpg)
*Fig 3. Robot Dynamics Model.*
