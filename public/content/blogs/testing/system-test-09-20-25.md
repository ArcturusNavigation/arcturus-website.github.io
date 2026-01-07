# 09/20/25 System Test

## Test Objectives
- Test follow the path with our new SLAM implementation

## Results
- Fusion worked pretty well. There were not really any background-picking issues with the point clouds
- No Pixhawk frame issues during the test (verified with the rosbag)
- SLAM helps a lot, and can deal with GPS drift when it's not extremely bad. If we have significant GPS drift, then SLAM can give good localization with disabled GPS as long as we don't have abrupt weird maneuvers that cause drastic odometry drift in a really short timespan.
- There were issues with thruster latency where certain thrusters would start moving later than others (~1s), making controlling the boat not possible. 

## Takeaways and Next Steps
- Red buoys are detected as yellow sometimes (reasonable given the saturated image, see Fig. 1), but no red/green colorblindness
- EE box is detected by the side-facing cameras, adding a random obstacle (blue buoy) in the side of the boat at some times
- Large GPS drift when the boat goes away from the wall at the sailing pavillion, possibly due to satellite visibility issues at that point -> disabling GPS when that happens helps in SLAM. Not using SLAM is impossible in this situation because of duplicates & messed up map. Perhaps GPS is useful only with really high uncertainty (but no GPS might be bad for SLAM if the robot suddenly changes direction, like at some point in the previous test in the rosbag, although that was also because Pixhawk was not set to 30Hz)
- Lag between detections & processing/pixhawk lag during fast turns puts objects in the wrong place -> green over red and red over green is sometimes caused by that
- Duplicate YOLO detections (one object has two bounding boxes) when confidence threshold is low

![A red buoy is detected as yellow due to high saturation.](/pictures/Blogs/testing-09-20-25-yellow.png)
*Fig 1. A red buoy is detected as yellow due to high saturation.*
