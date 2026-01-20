## Onboarding Labs

The hardest thing to navigate as a new autonomy member is the huge codebase and the large number of tools that have become routine for other members.

To get new autonomy members familiar with the autonomy tech stack, the autonomy team has developed a 2-part onboarding lab. This lab teaches important ROS and other robotic concepts by progressively introducing new topics.

The first lab guides people to cover the fundamentals of ROS 2. Upon starting the tutorial, new members will first learn how to run a simplified, lightweight simulation environment fully encapsulated in a ROS 2 node. The simplified testing environment allows members to get familiar with ROS commands (running nodes, publishing to topics) without having to deal with external simulation software such as Gazebo. Next, the tutorial guides members move the boat (represented by a pose) in the simulation by creating their own waypoint follower node. Finally, the first part concludes with a small project: using the waypoint follower node they've created to navigate a buoy course.  

![Navigating a custom buoy course in simulation](/content/blogs/autonomy/onboardinglab1.png)
<figcaption>Fig 1. Navigating a custom buoy course in simulation.</figcaption>

Once the members learned basic ROS 2 workflows, they can start the second part of the lab. This lab introduces members to Arcturus-specific sensor interfaces as well as navigation software interfaces in ROS 2. The previous part of the lab directly gives the position of the vehicle as well as obstacles in a ROS 2 message, which is made more realistic in this second part by instead providing positional interfaces underpinned by sensor input.

![Augmenting the simulation with sensor inputs](/content/blogs/autonomy/onboardinglab2.png)
<figcaption>Fig 2. Augmenting the simulation with sensor inputs in the second half of the lab.</figcaption>

This second part also introduces members to more advanced ROS 2 topics, such as action servers. This is key, especially as action servers are extensively used in the Autonomy code base.

Overall, this onboarding lab proved to be a valuable resource this RoboBoat season, allowing us to ramp up new autonomy members in a smaller timeframe.
