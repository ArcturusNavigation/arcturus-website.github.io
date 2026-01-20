## Power Distribution System

<figure>
    <table width="100%" style="border:0; border-collapse:collapse; border-spacing:0;">
    <tr style="border:0;">
        <td align="center" style="border:0; padding:0; margin:0; width:50%;">
        <img src="/content/blogs/electrical/power/power-board-1.png" width="100%" style="display:block;" />
        </td>
        <td align="center" style="border:0; padding:0; margin:0; width:50%;">
        <img src="/content/blogs/electrical/power/power-board-2.png" width="100%" style="display:block;" />
        </td>
    </tr>
    </table>
</figure>

<figcaption>Fig 1. Main Power Board (left) and Mechanisms Power Board (right).</figcaption>

The boat is powered by three batteries: a 6-series (6s) battery for electronics, and two 4-series (4s) batteries for thrusters and high power mechanisms. The main power board contains buck converters that take the voltage from the electronics battery and convert it into 3.3V, 5V, 12V, 19V. The current of each of these rails is sent over CAN. The two mechanisms power boards feature a single DC-DC converter (using the TI LM251772 controller) that takes the voltage from a thruster battery and converts it to any voltage from 3.3V to 36V, with a max current of 25A. These converters feature adjustable voltage and current limits, as well as output current monitoring, all over the CAN bus.

The converters on the main power board use the TI LV14540, rated for 5A of continuous output. The current on each is measured with a shunt resistor, with the INA180A2IDBVR current sense amplifier. The mechanisms power contains the TI LM251772 4-Switch Buck-Boost Controller, which can be configured by an STM32. The STM32 can set the voltage and current limit, as well as read output current and fault status.
