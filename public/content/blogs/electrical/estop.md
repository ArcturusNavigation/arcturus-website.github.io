# Emergency Stop System (ESTOP)

Last year, our ESTOP was implemented solely in the BMS, leaving the system susceptible to a failed short transistor. This year, we have redundant ESTOP mechanisms: a transistor on the BMS or a contactor can shut off the battery power. All PCBs receive the ESTOP signal, which is an active low signal (when the signal is a logic low, the ESTOP is activated). This means that the ESTOP will be triggered in the case of a broken ESTOP wire. Both the remote ESTOP and button on the boat trigger ESTOP by pulling the line low through a transistor, whose gate is pulled up as a failsafe measure. On the shore side, a custom controller sends ESTOP data, as well as manual drive data. If ESTOP is activated on the shore side, or connection is lost, ESTOP is triggered on the boat.

<figure>
    <table width="100%" style="border:0; border-collapse:collapse; border-spacing:0;">
    <tr style="border:0;">
        <td align="center" style="border:0; padding:0; margin:0;">
        <img src="/content/blogs/electrical/estop/estop-board-1.png" width="100%" style="display:block;" />
        </td>
        <td align="center" style="border:0; padding:0; margin:0;">
        <img src="/content/blogs/electrical/estop/estop-board-2.png" width="100%" style="display:block;" />
        </td>
    </tr>
    <tr style="border:0;">
        <td align="center" style="border:0; padding:0; margin:0;">
        <img src="/content/blogs/electrical/estop/estop-board-3.png" width="100%" style="display:block;" />
        </td>
        <td align="center" style="border:0; padding:0; margin:0;">
        <img src="/content/blogs/electrical/estop/estop-board-4.png" width="100%" style="display:block;" />
        </td>
    </tr>
    </table>
</figure>

*Fig 1. ESTOP board designs and implementations.*

We have two methods of sending the ESTOP signal:

- **Primary method**: Digi XBee XR 900 radios on the 915MHz ISM band, which utilize FHSS (Frequency Hopping Spread Spectrum) and feature built-in SAW filters, allowing for a stable connection in noisy RF environments
- **Backup method**: Circuit based on the TI CC1200 and CC1190, allowing us to customize the radio, as well for output powers up to 27 dBm
