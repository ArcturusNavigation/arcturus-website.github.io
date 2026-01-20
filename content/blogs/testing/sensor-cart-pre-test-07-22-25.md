## 07/22/25 Sensor Cart Pre-Test Debugging/Validation

### Test Objectives
- Make sure that everything works as expected after various SLAM iterations on roboboat rosbags
- Debug any last-minute issues that arise
- Try to improve SLAM with labeled detections
- Test RTK GPS helping with the above

### Summary

- Ran into some Pixhawk and GPS config issues, causing SLAM to fail
- Recorded a rosbag with two green buoys and a red one with the new configs,
- Debugged SLAM with just labeled detections using that rosbag
- Set up base station and checked how DGNSS performs
- Checked odometry is right


### Results
- GPS-Pixhawk configs are now good
- DGNSS GPS verified to be nice and usable and there is not a lot of drift
- 3-camera verified to be working nicely once more
- SLAM in close distance, with just labeled detections & GPS positions & fused velocities, working nicely and smoother than previous sensor cart tests (no abrupt jumps, similar to using unlabeled which is nice)

### Key Takeaways
- Don't mess with configs too much unexpected things happen
- Also set mavros to 30Hz every time bc it might reset
- May need to reflash GPS config during test
- Pay attention to GPS->local conversion in case the hotfix needs to be reverted (dx dy not swapped)
- SLAM likes detection uncertainty especially for slow labeled detections


