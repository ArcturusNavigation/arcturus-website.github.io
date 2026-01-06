# 07/27/25 Post-test ROSBag Analysis & Debugging

## Objective
- Figure out what exactly went wrong during the last test & how to fix it.

## Summary
- Checked the odometry orientation alignment with the LiDAR data & GPS positions
- Improved SLAM performance when odometry is slow, then tested follow the path, navigation server, and controller server behavior and transitions by running the rosbag with the task-specific launch file and visualizing the results.

## Results
- Pixhawk orientation was wrong (possible that the Pixhawk initializes its orientation in a non-consistent way)
- Odometry was really slow because the Pixhawk rate was low (should always run the mavros sys command setting it to 30Hz) causing SLAM to be suboptimal (figured out a way to have better SLAM even with slow odometry)
- Frames were wrong in follow_buoy_path (using odom instead of map)
- The position of the waypoint that was sent when the next buoy pair was not detected was not scaled and oriented properly, and the navigation server and controller server were crashing some times because of some small errors that were fixed. 
- Now all of the above aspects work as expected in the rosbag, and should work well in person too (assuming the Pixhawk orientation is correct and the PID values align with the thruster orientation, which has not been tested properly yet).

## Key Takeaways
We need to find a consistent (semi-automatic probably) way to verify the Pixhawk odometry & heading alignment with the GPS coordinates and the LiDAR data before every test run, and also have everything that needs to be run before a test run concentrated in one place instead of individual launch files and commands.

## Idea
Make an interactive GUI interface (like an Arcturus Control Panel / Mission Center) that runs all the time and checks and reports failures in individual subsystems (also reports on topics being published and everything), and can also run pre-run checks with the ability to enable specific launch files/nodes in each launch file and set basic things/parameters (frames, GPS datum, PID values, thruster orientation & assignments etc.). It should definitely include chmod, mavros & central hub port & comms check, camera/lidar check, imu orientation & odometry/gps alignment check, setting mavros frequency, and more, and it will save a huge amount of time debugging during tests.
