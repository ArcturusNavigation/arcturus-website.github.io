# Perception Stack

Detecting obstacles in the vehicle's surroundings is crucial for many tasks. One of the first tasks our team worked on was buoy detection. Most of the navigation courses in Roboboat require us to identify buoys and then figure out how to navigate them.

Perception plays a vital role in identifying objects in the boat's surroundings and determining their locations. To achieve this, we rely on our sensor suite that includes the HDL-32E Velodyne LiDAR, which provides 3D point clouds, and the ZED 2i Stereo Camera, which captures images.

Camera data is used to identify what the objects in the boat's surroundings are. For this purpose, we are using a fine-tuned YOLOv11n model, chosen for its real-time speed and accuracy. We trained it to detect the different buoy colors and types, as well as the banners present in the course and the color indicators. This allows us to reliably detect various types of course objects, and their respective colors/shapes, under suboptimal lighting conditions and retrain our model with additional data as issues arise.

![Our perception system detecting red and green buoys](/Pictures/Blogs/buoydetection.png)
*Fig 1. Our perception system detecting red and green buoys.*

LiDAR data is used to identify where objects in the boat's surroundings are. We can project the point cloud onto the camera feed using a calibrated extrinsic transformation and the camera's intrinsic matrix, selecting the points that correspond to each object, and filtering them using Euclidean Clustering and a cost-based matching algorithm to reject outliers like the background, partially occluded buoys etc, ensuring robustness under various conditions during testing and competition.

![Computing the buoys' positions using LiDAR-camera fused data.](/Pictures/Blogs/local_map.png)
*Fig 2. Computing the buoys' positions using LiDAR-camera fused data.*

We also use the 3D point cloud to generate an occupancy grid. This is a map that highlights locations with obstacles, docks, and other vessels, along with the probability of their presence. The obstacle map is then used by the path planner to efficiently and safely find paths through the buoys without collisions.

![3D point cloud generated occupancy grid](/Pictures/Blogs/perception2.png)
*Fig 3. 3D point cloud generated occupancy grid.*