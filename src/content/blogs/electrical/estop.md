# Emergency Stop System

In previous competitions, the vehicle experienced communication problems when using WiFi. For its long range and noise immunity, we switched to LoRa to communicate both E-Stop and manual drive signals. This is the bare minimum needed to be able to shut off the boat in and emergency and recover it without a person entering the water, which is why we placed this functionality in a system separate from the other communications.

To test the range of the board, we walked the transmitter and receiver in opposite directions on a long, straight road. Initially, we accomplished a range of 0.75 km. This was much shorter than expected, so we switched from using a chip antenna to an external whip antenna. This brought us to a range of 1.25 km, but would likely be higher if we were to test it in a longer line of sight path.

![E-Stop board](/pictures/Blogs/estopreal.jpg)
*Fig 1. E-Stop board.*
