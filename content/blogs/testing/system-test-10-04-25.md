## 10/04/25 System Test

This system test focused on validating the integration and functionality of our autonomous surface vehicle's key subsystems.

### Test Objectives

- **Follow path perception**: manually drive and check buoy detection
    - start w/ polarizing film + fine tuned YOLO model â€”> old YOLO model no polarizing film â€”> fine tuned YOLO no polarizing film 
- **Follow path controls**: set waypoint/increasingly complicated paths, can boat get to it
- Collect ROSbags for docking task with the dock we made
- Obtain thruster data for MechE

### Changes Since Last Test
- Polarizing film
- Re-finetuned YOLO model
- Modify follow path logic to take convex hull of red+yellow, right from that and left from the path of green
- Filtering EE box out of camera FOV (to prevent EE box detected as blue buoy)
- Set up buoys so not in shadow of wall â€”> hopefully limits exposure effects

### Results
- **Follow path perception**:
    - Fine tuned yolo model worked better
    - pixhawk compass shifts 90 degrees â€” were able to get runs where this didnâ€™t happen
    - waypoint picking was good â€” picked two waypoints, went to first, but didnâ€™t go to second waypoint
    - parameters were retuned and things work in sim again â€” some sort of scaling diff bebtween sim and real life
        - distances are larger in sim (we skip every 5 in sim and it works, but canâ€™t do this in real life)
        - Solution: make sure parameters work on small scale
- **Follow path controls**:
    - Worked barring pixhawk compass problems
    - 30 Hz update rate for pixhawk was the issue
- obtained ROSbag data for docking and thruster data

### Next Steps
- Fix waypoint skipping/downsampling to always have the goal point -> make it start from the end and then reverse
- Reducing the xy_threshold sent from follow_buoy_path, boat doesn't try to go to waypoint (and in combination to not having the next waypoint bc of the above issue)
- Possibly reduce goal_tolerance to not pick a waypoint that's too far away from the goal, even tho not confirmed that was an issue -> not an issue, it was 0.5
- Calibrate Pixhawk's compass, it shifts orientation by 90 degrees at random points, not ruining the test bc as long as it's consistent during one run and we don't use GPS for position updates that's fine but it can't work for full-course runs and also usually shifts during a single run
- YOLO is really good at detecting occluded objects, which is kind of a problem for sensor fusion because calibration is not perfect and we also try to pick a cluster that's close to the robot (to not pick up the background) so that makes it have a duplicate detection with different color each, which messes up the global map a bit -> easier to just filter out detections with great overlap for the buoy with smaller area (not IoU, because that's usually not too big in those cases) by just removing the buoy with the smaller area
