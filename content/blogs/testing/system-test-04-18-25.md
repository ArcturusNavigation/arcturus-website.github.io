## 04/18/25 System Test

### Test Objectives

- Figure out how to setup the course more reliably (buoy anchoring)
- Test out fallback approaches for Follow the Path and Speed Challenge for scenarios with unreliable GPS

### Results

- Anchoring the buoys worked out pretty well; we just need to throw the buoy weights which is not ideal.
- We encountered some communication issues. The central hub wouldn't communicate with Jetson. The E-stop was working fine, but the Jetson couldn't read the status of the E-stop, so we could not operate the boat.
- Possibly the cause is that solder balls are getting knocked loose. We will clean boards better, solder, and bring back-up boards to future tests.
- We don't expect this to be an issue with the EE system redesign because we will no longer be using I2C due to it being unreliable. Because I2C relies on pull-up resistors for logic-high levels and only actively drives the line low, it has weak high-level drive strength, making it susceptible to faults where even relatively high-resistance shorts or noise can prevent proper communication. CAN is more robust.
