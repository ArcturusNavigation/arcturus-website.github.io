## 11/08/25 System Test

### Test Objectives



Based on the new tasks that were released and the limited time we have remaining to test outdoors, we've compiled a prioritized list of capabilities that we want to achieve over the tests during the next month. 

For this test, we focused on Priority 0 tasks, as well as confirming that our external compass works. 

| Task / Capability | Priority |
|------------------|----------|
| [follow path] baseline: fixes discussed from the last test | 0 |
| [follow path] addition: go through path forward, spin, return through path backward | 1 |
| [follow path] addition 2: go through path forward, spin around a buoy, return through path backward | 2 |
| [speed] baseline: go around a buoy, fixes discussed from last test | 0 |
| [speed] addition: go around a buoy on the left or right | 1 |
| [speed] necessary addition: start/end at red/green gate | 1 |
| [delivery] baseline: mechanism navigation | 2 |
| [dock] fallback approach | 1 |
| [dock] dynamic obstacle avoidance | 2 |
| [dock] waypoint approach | 1 |


### Results

#### Follow the Path (Baseline, Addition 1)

**Tested: navigate through channel, turn around, come back. No obstacles, no beacons.** 

- Navigated through, turned around, navigated back
- Collided with buoys both ways, currently believe this will fix itself (gates more widely spaced at comp)
- Showed clear â€œintentâ€ to follow path


#### Speed (Baseline)

**Tested: place buoy within field of view, navigate to buoy, circle it, return to starting position.**

- consistently navigated to buoy (when autoâ€™d w/ buoy in view), generally circled it, consistently returned to home
- Errors attributed to problems with the retry logic â€”> failed to navigate to probe point + failed to generate path to first (& sometimes second) base point (results in incorrect turning behavior)


| Task / Capability | Priority | 11/8 Test Results |
|------------------|----------|-------------------|
| [follow path] baseline: fixes discussed from the last test | 0 | B |
| [follow path] addition: go through path forward, spin, return through path backward | 1 | B |
| [follow path] addition 2: go through path forward, spin around a buoy, return through path backward | 2 | â€” |
| [speed] baseline: go around a buoy. fixes discussed from last test | 0 | C (logic errors) |
| [speed] addition: go around a buoy on the left or right | 1 | â€” |
| [speed] necessary addition: start/end at red/green gate | 1 | â€” |
| [delivery] baseline: mechanism navigation | 2 | â€” |
| [dock] fallback approach | 1 | â€” |
| [dock] dynamic obstacle avoidance | 2 | â€” |
| [dock] waypoint approach | 1 | â€” |


### Takeaways and Next Steps

**BMS**
- Both BMSes failed during the test â€”> outputed < 1/2 the voltage of the batteries
- Worked at the beginning of the test and failed at different times

**Follow the Path**
- *No further testing until beacons, debris field, or dynamic obstacle avoidance are set-up*
- Dynamic Obstacle avoidance
- Beacon detection

**Speed**
- Fix retry logic â€”> check if this fixes selection of base points in sim. If not, fix base point selection
- Next test, add in gates and possibly circling direction

**YOLO**
- Misdetection of dark spots as green buoys
- Misdetection of red buoys as yellow buoys
- Failure to detect yellow buoys?
