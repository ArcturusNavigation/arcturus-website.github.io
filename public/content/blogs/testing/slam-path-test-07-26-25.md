# 07/26/25 Follow the Path Test to Validate SLAM w/ 360 Camera

## Test Objectives
- Attempt follow the path with waypoint detection plus navigation with no grid map. 
- Validate 360 camera and SLAM with GPS, IMU, unlabeled detections, and whether we can get RTK fix. 
- Check that camera FoV gaps / blindspots don’t break tracking and how they affect far buoy perception.

## Summary
We ran several follow the path tests. 
- During some manual tests, we found back left right thruster assignment in code did not match labeled hardware, and we flipped it in code. This likely got changed a while ago and persisted through the new EE system integration. 
- On the water we spent a long time on setup moving sensor mast components and doing rewiring. We also debugged thrusters, the back right thruster was unplugged initially and after plugging it back in we confirmed the code versus hardware mismatch and corrected it. 
- During follow the path attempts SLAM worked some of the time but we frequently failed to identify red buoys, possibly a YOLO problem. Early on there were at least two instances where the ASV reoriented toward a buoy pair and then drove in a straight line, but we could not replicate it later and it only seemed to work for the first pair. We need to validate the navigation server and PID controller behavior, because going to a single waypoint didn't work.

## Results

- 360 cameras work. SLAM mostly works and we think we got RTK fix. Blindspots did not seem like a big problem but it was hard to tell. 
- The main blockers were YOLO/HSV matching issues with detecting red buoys and unclear behavior in the navigation server when it does not have a waypoint and it goes straight. Going to a single waypoint needs PID tuning and the x-coefficient was probably inverted because it went backwards when it should be going forwards. Transition to the second pair failed because of detection issues. 
- Follow the path outcomes were mixed. One run seemed to work on the first pair then went left outside channel of the red buoy and ran into the third green buoy. Later we passed through the first pair, went wide of the second, then restarting from the first pair at an angle we successfully passed through the second and third pair. Testing from the opposite direction failed. 

## Key Takeaways
- We need navigation server and PID controller validation, and to flip signs that were introduced by older hotfixes so everything should be positive, including PID joystick and XDrive side. 
- We should validate buoy path detection and improve robustness using the rosbags, and do SLAM final validation using the follow the path rosbags to rule out bugs. 
- Operational lessons learned include needing an obvious indicator when the control battery is close to dead, adding more RViz readouts, and checking thruster assignment in the test tank to save time on the water. 
- On EE side, the controller had a lot of latency that seemed to get worse over time and was fixed by a complete power cycle, and CAN comms sometimes got stuck. 
