# Perception Stack

Detecting obstacles in the vehicle's surroundings is crucial for many tasks. One of the first tasks our team worked on was buoy detection. Most of the navigation courses in Roboboat require us to identify buoys and then figure out how to navigate them.

Perception plays a vital role in identifying objects in the boat's surroundings and determining their locations. To achieve this, we rely on our sensor suite that includes the HDL-32E Velodyne LiDAR, which provides 3D point clouds, and the ZED 2i Stereo Camera, which captures images.

Camera data is used to identify what the objects in the boat's surroundings are. For this purpose, we are using a fine-tuned YOLO11n model, a real-time image segmentation and object detection model, chosen for its real-time speed and accuracy. Our dataset consists of both existing datasets and newly custom-labeled data. In addition to a [public buoy dataset](https://universe.roboflow.com/mhseals/buoys-4naae) published by MHSeals on Roboflow, we uploaded and annotated images we took at last year’s competition and our own tests.

<figure style="display:flex; gap:0px; align-items:center;">
  <div style="flex:0 0 60%;">
    <img src="/pictures/Blogs/new_yolo_data_1.png" style="width:100%; height:auto;">
  </div>
  <div style="flex:0 0 39%;">
    <img src="/pictures/Blogs/new_yolo_data_2.png" style="width:100%; height:auto;">
  </div>
</figure>


*Fig 1. Training data for the YOLO11n model from Roboboat 2025.*

We trained it to detect the different buoy colors and types, as well as the banners present in the course and the color indicators. This allows us to reliably detect various types of course objects, and their respective colors/shapes, under suboptimal lighting conditions and retrain our model with additional data as issues arise.

![Our perception system detecting red and green buoys](/pictures/Blogs/buoydetection.png)
*Fig 2. Our perception system detecting red and green buoys.*

LiDAR data is used to identify where objects in the boat's surroundings are. We can project the point cloud onto the camera feed using a calibrated extrinsic transformation and the camera's intrinsic matrix, selecting the points that correspond to each object, and filtering them using Euclidean Clustering and a cost-based matching algorithm to reject outliers like the background, partially occluded buoys etc, ensuring robustness under various conditions during testing and competition.

![Computing the buoys' positions using LiDAR-camera fused data.](/pictures/Blogs/local_map.png)
*Fig 3. Computing the buoys' positions using LiDAR-camera fused data.*

We also use the 3D point cloud to generate an occupancy grid. This is a map that highlights locations with obstacles, docks, and other vessels, along with the probability of their presence. The obstacle map is then used by the path planner to efficiently and safely find paths through the buoys without collisions.

![3D point cloud generated occupancy grid](/pictures/Blogs/perception2.png)
*Fig 3. 3D point cloud generated occupancy grid.*