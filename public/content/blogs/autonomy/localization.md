# Localization and Mapping

Precise robot pose estimation and environmental mapping are critical for effective navigation. During the competition and outdoor tests, robot localization is achieved using global GPS data from the ZED-F9P Real-Time Kinematic (RTK) system. This system delivers centimeter-level accuracy through error correction via a stationary onshore base station. For robot orientation measurements, we are using an external M10 compass connected to the Pixhawk 6X, reducing interference from the robot's electronic components, especially the ESCs. The Pixhawk also provides us with velocity estimates, by fusing the acceleration measurements from its internal IMU with the GPS and compass data using an internal EKF.

However, using raw GPS & compass data is not sufficient. The GPS can experience drift at certain times, due to environmental conditions (e.g., multipath propagation), and it only provides measurements at 5Hz. To that end, we decided to reduce our reliance on the GPS's accuracy by using the course objects themselves as a useful source of information to localize the robot, as per the Simultaneous Localization And Mapping (SLAM) paradigm.

![Our perception, localization, and mapping pipeline](/pictures/Blogs/perception.png)
*Fig 1. Our perception, localization, and mapping pipeline.*

Thus, we implemented a custom Extended Kalman Filter based algorithm, that takes in the velocity estimates from the Pixhawk to perform fast predictions on the robot's pose, and uses the GPS measurements and buoy/banner detections in the robot's frame to update its belief on both the robot's position as well as the positions of the course objects. This way, even though the uncertainty on the robot's pose increases as it integrates new velocity estimates, it abruptly decreases with new GPS measurements and object detections, also reducing the uncertainty on the positions of the course objects.  This mitigates the noise from all sensor measurements, and greatly reduces the duplicate obstacles that are observed in the global map that we keep track of, enabling robust task execution.

<figure>
    <table width="100%">
    <tr>
        <td align="center">
        <img src="/pictures/Blogs/uncertainties_slam.png" width="100%" />
        </td>
        <td align="center">
        <img src="/pictures/Blogs/landmarks_slam.png" width="100%" />
        </td>
    </tr>
    </table>
</figure>

*Fig 2. The progression of the uncertainties on the robot pose and the course objects' positions, and the way object detections are used in the form of range and bearing measurements to reduce that uncertainty.*

Indoor tests pose challenges due to the absence of GPS signals. However, using our SLAM algorithm, we are not completely reliant on them, thus we can utilize the course structure, as well as odometry estimates provided by the fusion of [RF2O](https://cvg.cit.tum.de/_media/spezial/bib/jaimez2016icra.pdf) LiDAR-based velocity estimates and the IMU's acceleration measurements, to achieve robust localization and mapping indoors. This proves our non-reliance on GPS and supports its usefullness for testing both outdoors and indoors.
