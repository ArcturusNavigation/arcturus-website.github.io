## Path Planning

In order to complete the tasks, the boat must be able to safely and efficiently navigate to any GPS waypoint. We use path planning to compute how the boat can travel to a designated waypoint without hitting any obstacles.

We use the A* algorithm and an occupancy grid of obstacles to efficiently find a safe and optimal path from the boat's current position to the designated waypoint. At each step, the algorithm evaluates the next closest point with the lowest total cost, calculated as g(x)+h(x). Here, g(x) represents the cost incurred from the starting position to the current point x, while h(x) is the heuristic function, which provides an underestimated cost from x to the goal. This balance between actual and estimated costs ensures A* remains both effective and computationally efficient in guiding the boat to its destination.

We chose to use the A* algorithm for its speed and optimality. The A* algorithm leverages the heuristic function to bias the search toward the goal, which improves efficiency by reducing the search space significantly, especially in an obstacle sparse environment. Additionally, the resulting path is still optimal, even though we have a reduced search space, because our heuristic is an underestimate of the true cost of reaching the goal.

<video src="/pictures/Blogs/path_map.mp4" autoplay muted loop playsinline style="width: 70%; max-width: 70%; max-height: 70%; display: block; margin: 0 auto 30px;"></video>
<figcaption>Fig 1. Our path planning algorithm visualized in RViz.</figcaption>
