## 11/19/25 and 11/24/25 System Tests

### Test Objectives

- Validate localization/SLAM optimizations
- Speed Challenge testing with gates 
- More trials with Follow the Path using the new fixes. 

### Results

**Localization/SLAM Optimization:**
- Worked very well, almost no duplicates. when they appeared seems to be caused by GPS teleporting. 
- Also works much better when rviz is closed

**Controller:**
- Kp_theta turned up till boat heading is just a little bit unstable but mostly works

**Speed:**
- Couple 100% successful runs going between gates around buoy and back thru gates
- Generally much better performance when probe ends such that boat only needs to semi-circle buoy vs full circle (e.g., if has to cross its own wake to round the buoy it adds a bunch of extra spins)
- Weird behavior where after being fed first waypoint boat waits for like 2 sec before following it

**Follow the Path:**
- Having a hard time w/ waypoint tolerancesâ€”boat navigates v slowly and collides w/ lots of buoys
- Generally, waypoints donâ€™t really provide any incentive for the boat to actually go through the buoys. It just sort of meanders over (not necessarily in the channel)
- Similar problem w/ speed on the way back was fixed by moving original waypoint behind (shore pov) the gate and adding an intermediate waypoint sufficiently far away in front of the gate
- On the way back boat bypassed first two pairs and just navigated through the thirdâ€”not sure if this is related to above or a different issue

<video src="/pictures/Blogs/testing-11-19-25-combined.mp4" autoplay muted loop playsinline style="width: 70%; max-width: 70%; max-height: 70%; display: block; margin: 0 auto 30px;"></video>
<figcaption>Fig 1. A run of the Debris Clearance task. The vehicle successfully navigates through the transit channel and around the color indicator (currently just a regular buoy while the color indicator is being built), but it doesn't go through the transit channel on the way back.</figcaption>

<video src="/pictures/Blogs/testing-11-19-25-speed.mp4" autoplay muted loop playsinline style="width: 70%; max-width: 70%; max-height: 70%; display: block; margin: 0 auto 30px;"></video>
<figcaption>Fig 2. A successful run of the vehicle completing the Emergency Response Sprint / Speed Challenge.</figcaption>

### Takeaways and Next Steps
This is our last outdoor test of the season. Next, we'll focus on adapting our stack to work indoors (RF2O) and continuing to test the tasks. We'll also work on constructing the buoy beacons and mechanisms, which will be useful to our remaining testing. 

