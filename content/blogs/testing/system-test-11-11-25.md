## 11/11/25 and 11/15/25 System Test

### Test Objectives

Continue to make progress on our level 0 and 1 priorities. 

### Results

#### Follow the Path (baseline, addition 1, addition 2 â€”> core)

**Tested: navigate through three pairs of buoys + circle yellow buoy (simulates buoy w/ beacon)**

- missing: debris field (core), beacons (advanced), reporting (disruptive)
- consistently navigate thru channel, circle yellow buoy + return through at least two pairs of buoys
- occasionally manage this without crashing into anythingâ€”suspect this is not a dynamic obstacle avoidance thing though

#### Speed (baseline + addition â€”> core)

**Tested: navigate through red-green gate, circle yellow buoy, return through red green gate**

- missing: beacon based circling direction (advanced), reporting (disruptive)
- consistently navigates thru channel, and circles yellow buoy at slow speeds
- determined: pure GPS â‰¥ SLAM w/ low GPS uncertainty > LIO (for now)
- occasionally returns through gates â€” not always correct gate (but suspect this is quirk of testing with all the follow the path buoys still in the water)

#### Docking + Mechanisms (baseline)

**Tested: detection of shore mounted banners w/ boat in water â€”>** 

- missing:
- failed to detect bannersâ€”not sure cause right now, but could be low light + backlit

| Task / Capability | Priority | 11/15 Test | 11/11 Test |
|------------------|----------|------------|------------|
| [follow path] baseline: fixes discussed from the last test | 0 | B+ | B+ |
| [follow path] addition: go through path forward, spin, return through path backward | 1 | B+ | B+ |
| [follow path] addition 2: go through path forward, spin around a buoy, return through path backward | 2 | B+ | C (general dir + spins) |
| [speed] baseline: go around a buoy. fixes discussed from last test | 0 | B (works, slow) | C (localization errors) |
| [speed] addition: go around a buoy on the left or right | 1 | â€” | â€” |
| [speed] necessary addition: start/end at red/green gate | 1 | B (picked diagonal) | B (fails on the way back) |
| [delivery] baseline: mechanism navigation | 2 | F (no detect) | â€” |
| [dock] fallback approach | 1 | â€” | â€” |
| [dock] dynamic obstacle avoidance | 2 | â€” | â€” |
| [dock] waypoint approach | 1 | â€” | â€” |

### Takeaways and Next Steps

#### SLAM (err @high velocities â€”> latency w/ odometry messages)

**problem: SLAM is supposed to rectify GPS drift but currently performs worse than raw GPS at high velocities**

- **Mismatched SLAM + Odometry Messages:** Latency in detections means odometry messages from queue donâ€™t â€œmatchâ€ pose used when generating map?
    - seems like thereâ€™s no  great solution to this
- **Latency in Odometry publisher itself:** same overall mechanism as above, diff source
    - unlikely given is only combining Pixhawk/IMU/Compass data w/ GPS to estimate pose
    - EKF will fix this
- **RVIZ slows stuff down:** affects message traffic within the jetson or something
    - unlikely
    - if is problem, switching to different ros middleware might solve

#### GPS (Localization â€”> significant drift?)
- Seems to have large GPS drift when going away from/towards the wall -> multipath propagation? drift happens mostly along that direction, & causes issues when doing speed challenge (usually on the way back from the yellow buoy) -> also when merged detections are not fast enough this problem isn't mitigated properly (but if unlabeled detections are better & we relax the association threshold again to 0.01-0.03 we can probably work around the drift, also will probably not have that much drift in competition bc better satellite visibility + possibly RTK if we try hard enough so we should be fine)
- If we encounter GPS issues again we'll be shifting to indoor testing and using RF2O instead. We should also be able to use RF2O outdoors to address this

#### Perception
- Sensor fusion sometimes picks up background or the dock points & causes buoy misplacements
- Need to resolve YOLO issues (red being detected as yellow)
- Unlabeled detections due to parts of the dock cause buoy positions to be shifted towards the inside of the dock -> need to filter out the dock from the point cloud before doing unlabeled detections -> everything inside a large cluster (ignoring Z direction, only for this logic not for clustering) is also part of the cluster

#### Tasks
- Speed Challenge: hould relax xytheta threshold for speed challenge waypoints (we want to go fast even if not that accurate as long as we don't crash) & make the boat actually stop (send a zero velocity command) at the end of follow path even if is_stationary is not true, because many times it starts spinning/moving using the previous velocity
- Follow Path: Follow path & coming back works fine (not that many buoy crashes honestly, last time it seemed to be worse for some reason), didn't fine-tune point fields bc too cold and wanted to test other stuff (can also do that indoors) so we just disabled it
- Speed circling + gates are fine (except from the localization issues on the way back), follow path beacon circling needs improvement (smaller turn offset + kinda relaxed thresholds?
- At the beginning of Follow the Path, when the path is being created and the waypoint is found, the navigation server says that follow path is completed but follow path doesn't do anything to switch to the next pair. This is probably because the xy threshold for the navigation server is larger than the one used in follow path to check if we passed the pair. We should either use the navigation server output in follow path to check if we reached the waypoint, or increase the threshold to be at least the one used for navigation server.

