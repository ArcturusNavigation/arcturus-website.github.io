# 10/18/25 System Test

## Test Objectives
- Test follow path approach in more varied environments (eg. straight vs. curved path, high vs. low speed)
- Begin testing speed challenge. Aim is to have the vehicle successfully navigate around the buoy but without any speed constraints at the moment.  

## Results

**Follow the Path**

We tested follow the path in four different scenarios, varying the speed of the boat, as well as the whether the path to follow was curved or straight. 

| Path Type     | Low Speed (0.5 m/s) | High Speed (1.5 m/s) |
|---------------|---------------------|----------------------|
| Straight Path | Consistent          | Pretty good consistency; failures caused by being in convex hull of "obstacle" |
| Curved        | Somewhat Consistent | Errors believed to be caused by: <br> 1. Misdetection of a dark spot on the wall as a green buoy <br> 2. Generating waypoints between diagonal pairs |

<video src="/Pictures/Blogs/testing-10-18-25.mov" autoplay muted loop playsinline style="width: 70%; max-width: 70%; max-height: 70%; display: block; margin: 0 auto 30px;"></video>
*Fig 1. At higher speeds, our approach to Follow the Path is less consistent.*

**Speed Challenge**
- Was generally able to get from starting position to some point close to buoy—would occasionally swerve weirdly as it got to the buoy
    - Errors attributed to localization problems w/ GPS

## Takeaways and Next Steps
- Resolve compass issues. They usually occur when the boat is being driven. Sometimes at other points too but at a lesser extent because SLAM can adapt to slow and small deviations. Also can't use GPS as a result (not earth-aligned, which affects speed testing because only one buoy & sometimes not seen because it's too far). To resolve, we can try to use the external compass (the one we have if compatible with + can find a connector to work with the new Pixhawk, or get a new one)
- Local map is sometimes slow because of a bottleneck in the perception pipeline, usually one of the YOLO topics. With synchronization, the rate ends up being 2-3 Hz (mostly an issue at the beginning of the test). It's possible that the Jetson is slower when it's hot because the other topics are also slower, so maybe we should try to cool it better/evaluate how much of an issue that is. Maybe Jetson resource management is also an issue because restarting the nodes/Jetson usually helps make things faster. Possible solutions to explore more: can we overclock the Jetson without burning it? Should we make the YOLO nodes get and publish three feeds instead of running 3 YOLO nodes? Will that help or is it the same performance?
- YOLO doesn't detect yellow buoys usually (at normal lighting conditions), and sometimes picks up part of the background/water at places where it's dark/has shade -> this causes buoys being placed there in global map
- When follow path picks a diagonal waypoint, it doesn't always fix it by making it the perpendicular one, and the next waypoint is not the respective perpendicular one either, causing the robot to go forward in a sideways direction after going to the waypoint (trying to find the next one), going out of the path -> make it pick diagonal (wrt previous -> should also pick same buoy as previous pair if beneficial) as the next pair of beneficial, same way as it should currently fix diagonals (should also make it be able to pick same buoy if beneficial there too)
- Currently obstacle map uses convex hull to represent objects, thus when we are inside a non-convex shape (e.g. dock or next to connected objects like boats next to a dock) there is a huge cluster that overlaps the robot's (or potential goal points') position, causing A* to fail (also regarding this, sometimes follow buoy path doesn't retry after it gets an 'unusual response' and then we need to restart -> a flag is being set wrong there causing it to think the path succeeded). To resolve, ignore clusters that overlap the robot (bc something definitely wrong, though can also be obstacles that are nearby that we want to ignore), filter PointCloud by essentially doing erosion on point cloud (is there a PCL function for that? basically for each point if there is not a certain number of points within some radius remove, separating things more and dealing with the boats issue), otherwise split obstacles into convex shapes -> triangulate?
- For speed: make it use the adaptive waypoint (to actually go around the buoy, and account for drift in localization, will also help with problem mentioned below) + retrying for navigation server logic as follow path, make forward "probing" distance a parameter (different for sim & for real, 30 vs 10), also make it detect the green and red buoys both initially and on the way back (+adaptive) to make sure we go through them both times
- Follow path + speed (new task): implement dynamic obstacle avoidance, to account for drift in global map that might cause us to crash into buoys -> same (hopefully) potential fields method, using LiDAR point cloud, as for docking (WIP), should add it with a coefficient to the controller server PID output
- Especially important for speed bc we are going faster + less buoy detections to correct in SLAM using those: mavros data might be laggy sometimes, essentially dead-reckoning with wrong data and causing the boat to think it's behind the buoy while it has passed it, also combined with the compass issues making it go to a random direction full speed -> may need to go slower (at least for now) + should optimize the whole perception pipeline (faster detections can account for slow odometry), see if there can be lag in mavros odometry
- Add mavros rate thing to the mavros launch file (with a delay? certainly after the node itself is launched)
- May need to make follow path skip more waypoints if slow -> if too fast might have issues as in speed tho
- Camera synchronization timeout to make sure we don't have slow data at random times bc YOLO/camera slow (kinda inconsistent)
- Try to optimize the whole thing to have more consistently fast rates, mitigate SLAM issues when fast (GPS also laggy when fast so can't help too much, but useful for when not having many buoys)