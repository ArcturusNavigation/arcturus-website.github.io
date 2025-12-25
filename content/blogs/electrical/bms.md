# Battery Management System (BMS)

Our previous vehicle used a commercially-available BMS that was bulky and difficult to interface with. To resolve this we designed a custom board that performs current, cell voltage, and thermal measurements. It is also able to cut off battery power with a transistor in the case of an emergency, functionality which was previously implemented by a separate device.

The BMS uses the builtin 10-bit ADC of an ATmega328PB to measure cell voltages through a series of voltage dividers. We use an external 12-bit ADC and current sense amplifier to measure total battery voltage and the output current, and a thermocouple to monitor the temperature inside the battery box. Combined with the cell voltage information, this gives us enough data to detect safety concerns. This data is then accessible to the rest of the system over an I2C bus.

Initial revisions of the board faced a few challenges:

Between the current sense resistor and the shutoff transistor, the board needs to be able to dissipate a significant amount of heat. The transistor, a Vishay SiJA22DP has an R_DS(on) of 700 mΩ, and the current sense resistor has a resistance of 500 mΩ. At 40 A, this leads to a power dissipation of about 2 W. To manage this, both devices are connected to large copper pours, and heatsinks were added in later revisions.

![BMS board](/Pictures/Blogs/bmsreal.jpg)
*Fig 1. BMS board.*

Also, early versions of the board would sometimes be destroyed when connecting power. We discovered that there was so little damping in the connection between the BMS and battery that flipping the switch would induce a step response, temporarily doubling the voltage seen by the board. To protect against this issue, we added TVS clamping diodes that prevent the power rail from exceeding device limits.

To test the board, we verified that shutoff worked and that the temperature did not rise close to the maximum operating temperature of the shutoff transistor up to 70 A, which is well in excess of our expected operating current of 40A. Even in the case of a control failure, the gate of the transistor is pulled down so that power to the thrusters will be cut off.
