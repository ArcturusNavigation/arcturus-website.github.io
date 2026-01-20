## 08/20/25 DiscOE Shock + Vibe Test

### Test Objectives

- Teach MechE to set Fish 'n Ships up for manual control so that more people can drive the boat
- Pull up an RVIZ window showing LiDAR + ZED overlay.

### Summary

Manual Control:
- Experienced some issues with ports being incorrect etc.
Turns out BMS need to be conducted so that CAN bus has
appropriate terminal impedance.
- Noah wrote some scripts to make getting boat running very
easy for the MechEs. They are in the doe dir.
- Boat was run manually at Parsons.
RVIZ:
- Brendon wrote some scripts to help with this. They are in the
DOE dir.
- Experienced some problems with transforms being messed
up? Brendon fixed.

### Results

Manual Control:
- Boat ran with minimal issues.
- Quite a bit of water got into starboard battery box — maybe
.5".
- Sensor mast broke off at the base. It has since been repaired with
epoxy, but we should respec and come up with a more robust
design.
RVIZ:
- LiDAR view worked but I think the camera overlay didn't?

### Key Takeaways

- Should set whichever laptop is SSHed into the Jetson to not
fall asleep.
- Need to redesign LiDAR mast
- Battery Boxes are definitely flooding under positive pressure, it's
not condensation.
