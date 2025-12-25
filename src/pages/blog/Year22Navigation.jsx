import { Link } from 'react-router-dom'

const Year22Navigation = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          Navigation Team Blog
        </h1>

        <div className="flex justify-center mb-8">
          <Link
            to="/blog/year-22"
            className="px-6 py-3 text-text hover:text-primary transition-colors"
          >
            Back to 2021-2022 Season
          </Link>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Buoy Detection */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="/Pictures/Blogs/navigation_11.png"
              alt="Buoy Detection"
              className="w-full max-w-md mx-auto mb-6 rounded-lg"
            />
            <h2 className="text-3xl font-bold text-primary mb-3">Buoy Detection</h2>
            <p className="text-sm text-gray-600 mb-6">January 29, 2022</p>
            <div className="space-y-4 text-text">
              <p>
                One of the first tasks our team worked on was buoy detection. Most of the navigation courses in Roboboat
                require us to identify buoys and then figure out how to navigate them. Using a ZED camera, we developed the
                following algorithmic steps to properly identify buoys on the course:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Performs erosion with a segmentation kernel</li>
                <li>Performs dilation with the same segmentation kernel</li>
                <li>Converts the image to HSV</li>
                <li>Gets the mask for each color range we are looking at (red, green, yellow)</li>
                <li>Generates a bounding box for each disjoint blob in the color range mask</li>
              </ul>
            </div>
          </article>

          {/* Path Planning */}
          <article className="bg-white p-8 rounded-lg shadow-lg">
            <img
              src="/Pictures/Blogs/navigation_1.png"
              alt="Path Planning"
              className="w-full mb-6 rounded-lg"
            />
            <h2 className="text-3xl font-bold text-primary mb-3">Path Planning</h2>
            <p className="text-sm text-gray-600 mb-6">March 18, 2022</p>
            <div className="space-y-4 text-text">
              <p>
                Our controller is a Pixhawk 4 running Ardupilot. It takes in GPS waypoint coordinates and headings and
                handles the motor commands to achieve the desired position and heading. For the two main navigation tasks,
                we plan to first identify them and head to the position shown in each of the above figures on the left. Then, we
                will run through pre-planned paths that are adjusted in realtime by a local planner for obstacle avoidance. The
                preplanned paths are shown visualized in RVIZ in the above figures on the right.
              </p>
            </div>
          </article>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/blog/year-22"
            className="px-6 py-3 text-text hover:text-primary transition-colors"
          >
            Back to 2021-2022 Season
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Year22Navigation
