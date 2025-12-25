# Buck Board

While commercially available buck converters are sufficient to obtain the various voltages needed throughout our electrical system, we found them to be unnecessarily bulky. We designed a board that contained all of the necessary power conversion while dramatically reducing the overall size occupied by buck converters. It has 3 fixed buck converters that output 19V, 12V, and 5V at 5A, which provides power for the majority of the electrical system including the navigation computer, the LiDAR, and all of the peripheral boards. It also has two adjustable buck-boost converters that are able to provide 16.5A, which were included to allow for easy future expansion of the electrical system. Each of these outputs contains overcurrent, overvoltage, and thermal protections. In addition, the board is able to monitor current on each output, providing useful information on which systems are drawing the most power.

![Buck Board](/Pictures/Blogs/buckboard.jpg)
*Fig 1. Buck Board.*

Since the initial revision, we have further reduced the size and improved thermal performance by switching to a 4-layer board. Also we added a TVS clamp diode to protect the board from transients, and we added a resettable fuse to protect against overcurrent and short circuits.
