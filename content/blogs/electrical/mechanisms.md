# Mechanisms Control Board

![Mechanisms Board](/content/blogs/electrical/mechanisms/mechanisms-board.png)

This year, we built a mechanisms testing board, allowing for the mechanical team to test mechanisms easily without the overhead of the autonomy stack. This board can control servos, steppers, and DC motors, and can be configured using potentiometers or through a simple UI. This board connects to the mechanisms power boards, allowing ground testing to be performed with the same power supplies as the boat. From there, a translation to the boat mechanisms board is simple, only requiring firmware to interface with the CAN system.

The ground testing board features:

- STM32F103 microcontroller
- Two A4988 stepper motor drivers
- Two DRV8701 H-Bridge drivers powered by the mechanisms power board (allowing us to power these with the same exactly supply going on the boat)
- Four servo motor connectors
- Buck converters provide 12V for the stepper motor supply, and 5V for the servo motor supply
