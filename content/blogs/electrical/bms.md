# Battery Management System (BMS)

![BMS Board](/content/blogs/electrical/bms/bms-board.png)

The BMS monitors battery health and performs battery shutoff. It protects against undervoltage, overcurrent, and cell imbalance. Last year, we implemented these functions with a microcontroller, leading to noisy measurements and unreliable performance. This year, we switched to the TI BQ76942, a battery monitor and protector for 3s-10s batteries. This chip provides many useful features:

- A built-in charge pump allows for a high side NFET, meaning communication with the rest of the system doesn't need to be isolated like the previous BMS
- For our transistor, we use the Vishay SiJA22DP with an R_DS(on) of 700 mΩ and current rating of over 200A
- The DFETOFF pin can be directly attached to the ESTOP line, reducing the chance buggy firmware would fail to turn off the FET in case of ESTOP
- Various quantities, including stack voltage, cell voltages, current, and FET state can be accessed over I2C from a microcontroller unit, which then sends these values over CAN to the rest of the system

We have dealt with various issues with these boards. The goal is to have a single PCB that can be used with all batteries. On the first boards, the cell connections were not easily switchable between the 4s and 6s batteries. Additionally, sometimes the BMS would cycle when turning on. This was especially an issue with ESTOP, as we cannot have the risk of an indefinite cycle when turning off ESTOP mode. To overcome this, a revision fixed these cell connectors and added predischarge functionality, allowing us to reduce the transient on turn on and hopefully fix the cycling issue. However, a further revision is needed to change the direction of the current sense resistor, and add a missing decoupling capacitor on the BMS IC.
