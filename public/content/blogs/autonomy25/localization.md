# Localization

Precise robot pose estimation and environmental mapping are critical for effective navigation. During the competition and outdoor tests, robot localization is achieved using global GPS data from the ZED-F9P dual-antenna Real-Time Kinematic (RTK) system. This system delivers centimeter-level accuracy through error correction via a stationary onshore base station. Although the RTK system is highly accurate, its readings are published at a lower frequency, causing occasional pose jumps. To mitigate this, we fuse the GPS odometry with IMU data from the Pixhawk 6X using an Extended Kalman Filter (EKF). This fusion smooths the robot's odometry and ensures reliable and robust pose estimation, supporting consistent task execution.

Indoor tests pose challenges due to the absence of GPS signals. Instead of relying on GPS for robot localization, we utilize two widely-used localization and mapping packages: [Cartographer](https://github.com/cartographer-project) and [Nav2's Adaptive Monte Carlo Localization (AMCL)](https://github.com/ros-navigation/navigation2/tree/main/nav2_amcl). Cartographer is a real-time Simultaneous Localization and Mapping (SLAM) system that we use to create a 2D map of the environment using the LiDAR's laser scans. Once the environment is mapped, we switch to AMCL and leverage the ZED2i's built-in Visual Inertial Odometry (VIO) to localize the vessel relative to the pre-existing map.

![The GPS system of our boat is at the front of the vehicle](/pictures/Blogs/gps.jpg)
*Fig 1. The GPS system of our boat is at the front of the vehicle.*
