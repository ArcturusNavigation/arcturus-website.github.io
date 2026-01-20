## 10/01/25 Thruster Latency Test

We experienced some issues with the latency of thruster commands during a previous test. When commanded to run, some thrusters would turn on later than others, making it impossible to control the boat.

### Tests
The tests we ran are detailed [here](https://docs.google.com/spreadsheets/d/1trHxmUWaFAwcMSeE_783U_Qzyl77MBwXEPcswjoZLk0/edit?usp=sharing).

### Conclusions
- Seems like thrusters not turning on/persisting is the same problem--behavior is problematic thruster is unresponsive and off for a while and then turns on and persists
- Seems like this is a software problem. Attempted changing hardware connections with no effect on results. Issue appears to follow the channel in software (see diff between first and fourth tests).
- Unsure if boat is drivable for next test. We may try getting RC stuff working but not sure if can be done before test
