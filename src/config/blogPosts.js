// Centralized blog post configuration
// Category pages import from this file to avoid duplication

export const categoryBlogs = {
  autonomy: [
    {
      title: 'Perception',
      image: '/Pictures/Blogs/buoydetection.png',
      description: 'Computer vision and sensor fusion for object detection and environment understanding',
      link: '/blog/autonomy/perception',
      markdownPath: '/content/blogs/autonomy/perception.md',
      category: 'autonomy'
    },
    {
      title: 'Localization',
      image: '/Pictures/Blogs/lidar.jpg',
      description: 'GPS, IMU, and sensor integration for accurate position tracking',
      link: '/blog/autonomy/localization',
      markdownPath: '/content/blogs/autonomy/localization.md',
      category: 'autonomy'
    },
    {
      title: 'Path Planning',
      image: '/Pictures/Blogs/pathplanning.png',
      description: 'Algorithms for generating optimal routes and avoiding obstacles',
      link: '/blog/autonomy/pathplanning',
      markdownPath: '/content/blogs/autonomy/pathplanning.md',
      category: 'autonomy'
    },
    {
      title: 'Controller',
      image: '/Pictures/Blogs/gazebo.jpg',
      description: 'Low-level controllers for precise navigation and maneuvering',
      link: '/blog/autonomy/controller',
      markdownPath: '/content/blogs/autonomy/controller.md',
      category: 'autonomy'
    }
  ],
  mechanical: [
    {
      title: 'Hulls',
      image: '/Pictures/Blogs/hulls2.png',
      description: 'Foundation of our boat',
      link: '/blog/mechanical/hulls',
      markdownPath: '/content/blogs/mechanical/hulls.md',
      category: 'mechanical'
    },
    {
      title: 'Propulsion/Thruster Cages',
      image: '/Pictures/Blogs/propulsion.png',
      description: 'Driving force of our boat',
      link: '/blog/mechanical/propulsion',
      markdownPath: '/content/blogs/mechanical/propulsion.md',
      category: 'mechanical'
    },
    {
      title: 'EE Box',
      image: '/Pictures/Blogs/eebox3.png',
      description: 'Electronics protector',
      link: '/blog/mechanical/eebox',
      markdownPath: '/content/blogs/mechanical/eebox.md',
      category: 'mechanical'
    },
    {
      title: 'Sensor Mast',
      image: '/Pictures/Blogs/sensormast2.png',
      description: 'Mounting point for sensors',
      link: '/blog/mechanical/sensormast',
      markdownPath: '/content/blogs/mechanical/sensormast.md',
      category: 'mechanical'
    },
    {
      title: 'Mechanisms',
      image: '/Pictures/Blogs/mechanism.jpg',
      description: 'Allow for robotic functions',
      link: '/blog/mechanical/mechanisms',
      markdownPath: '/content/blogs/mechanical/mechanisms.md',
      category: 'mechanical'
    }
  ],
  electrical: [
    {
      title: 'Battery Management System (BMS)',
      image: '/Pictures/Blogs/bms.png',
      description: 'Power distribution and battery monitoring system',
      link: '/blog/electrical/bms',
      markdownPath: '/content/blogs/electrical/bms.md',
      category: 'electrical'
    },
    {
      title: 'Buck Board',
      image: '/Pictures/Blogs/buckboard.jpg',
      description: 'Voltage regulation for electronic components',
      link: '/blog/electrical/buckboard',
      markdownPath: '/content/blogs/electrical/buckboard.md',
      category: 'electrical'
    },
    {
      title: 'E-Stop',
      image: '/Pictures/Blogs/estop.png',
      description: 'Emergency stop system for safety',
      link: '/blog/electrical/estop',
      markdownPath: '/content/blogs/electrical/estop.md',
      category: 'electrical'
    }
  ],
  testing: [
    {
      title: '04/18/25 System Test',
      date: '2025-04-18',
      description: 'System integration and validation testing',
      link: '/blog/testing/system-test-04-18-25',
      markdownPath: '/content/blogs/testing/system-test-04-18-25.md',
      category: 'testing'
    },
    {
      title: '05/02/25 System Test',
      date: '2025-05-02',
      description: 'System integration and validation testing',
      link: '/blog/testing/system-test-05-02-25',
      markdownPath: '/content/blogs/testing/system-test-05-02-25.md',
      category: 'testing'
    },
    {
      title: '07/22/25 Sensor Cart Pre-Test Debugging/Validation',
      date: '2025-07-22',
      description: 'Sensor cart debugging and validation procedures',
      link: '/blog/testing/sensor-cart-pre-test-07-22-25',
      markdownPath: '/content/blogs/testing/sensor-cart-pre-test-07-22-25.md',
      category: 'testing'
    },
    {
      title: '07/26/25 Follow the Path Test to Validate SLAM w/ 360 Camera',
      date: '2025-07-26',
      description: 'Path following test with SLAM and 360 camera validation',
      link: '/blog/testing/slam-path-test-07-26-25',
      markdownPath: '/content/blogs/testing/slam-path-test-07-26-25.md',
      category: 'testing'
    },
    {
      title: '07/27/25 Post-test ROSBag Analysis & Debugging',
      date: '2025-07-27',
      description: 'Analysis of ROSBag data and post-test debugging',
      link: '/blog/testing/rosbag-analysis-07-27-25',
      markdownPath: '/content/blogs/testing/rosbag-analysis-07-27-25.md',
      category: 'testing'
    },
    {
      title: '08/20/25 DiscOE Shock + Vibe Test',
      date: '2025-08-20',
      description: 'Shock and vibration testing for DiscOE program',
      link: '/blog/testing/discoe-shock-vibe-08-20-25',
      markdownPath: '/content/blogs/testing/discoe-shock-vibe-08-20-25.md',
      category: 'testing'
    },
    {
      title: '09/20/25 System Test',
      date: '2025-09-20',
      description: 'System integration and validation testing',
      link: '/blog/testing/system-test-09-20-25',
      markdownPath: '/content/blogs/testing/system-test-09-20-25.md',
      category: 'testing'
    },
    {
      title: '10/01/25 Thruster Latency Test',
      date: '2025-10-01',
      description: 'Testing and measurement of thruster response latency',
      link: '/blog/testing/thruster-latency-10-01-25',
      markdownPath: '/content/blogs/testing/thruster-latency-10-01-25.md',
      category: 'testing'
    },
    {
      title: '10/04/25 System Test',
      date: '2025-10-04',
      description: 'System integration and validation testing',
      link: '/blog/testing/system-test-10-04-25',
      markdownPath: '/content/blogs/testing/system-test-10-04-25.md',
      category: 'testing'
    },
    {
      title: '10/18/25 System Test',
      date: '2025-10-18',
      description: 'System integration and validation testing',
      link: '/blog/testing/system-test-10-18-25',
      markdownPath: '/content/blogs/testing/system-test-10-18-25.md',
      category: 'testing'
    },
    {
      title: '11/08/25 System Test',
      date: '2025-11-08',
      description: 'System integration and validation testing',
      link: '/blog/testing/system-test-11-08-25',
      markdownPath: '/content/blogs/testing/system-test-11-08-25.md',
      category: 'testing'
    },
    {
      title: '11/11/25 and 11/15/25 System Test',
      date: '2025-11-15',
      description: 'System integration and validation testing',
      link: '/blog/testing/system-test-11-11-25',
      markdownPath: '/content/blogs/testing/system-test-11-11-25.md',
      category: 'testing'
    },
    {
      title: '11/19/25 System Test',
      date: '2025-11-19',
      description: 'System integration and validation testing',
      link: '/blog/testing/system-test-11-19-25',
      markdownPath: '/content/blogs/testing/system-test-11-19-25.md',
      category: 'testing'
    },
    {
      title: '11/24/25 System Test',
      date: '2025-11-24',
      description: 'System integration and validation testing',
      link: '/blog/testing/system-test-11-24-25',
      markdownPath: '/content/blogs/testing/system-test-11-24-25.md',
      category: 'testing'
    },
  ],
  outreach: [
    {
      title: "Cambridge Science Festival 2024",
      url: "/blog/outreach/cambridgesciencefestival2024",
      image: "/Pictures/Blogs/csf2024.jpg",
      markdownPath: "/content/blogs/outreach/cambridgesciencefestival2024.md",
      category: 'outreach'
    },
    {
      title: "Discover Ocean Engineering Program for MIT Freshman 2023",
      url: "/blog/outreach/discoveroceanengineering",
      image: "/Pictures/Blogs/outreach-8-22-23-pic3.png",
      markdownPath: "/content/blogs/outreach/discoveroceanengineering.md",
      category: 'outreach'
    },
    {
      title: "MIT-Portugal Marine Robotics Summer School in the Azores",
      url: "/blog/outreach/azores",
      image: "/Pictures/Blogs/outreach-7-10-23-pic1.png",
      markdownPath: "/content/blogs/outreach/azores.md",
      category: 'outreach'
    },
    {
      title: "OCEANS 2023",
      url: "/blog/outreach/oceans2023",
      image: "/Pictures/Blogs/outreach-6-5-23-pic4.PNG",
      markdownPath: "/content/blogs/outreach/oceans2023.md",
      category: 'outreach'
    },
    {
      title: "MIT MechE Health of the Planet Showcase",
      url: "/blog/outreach/healthoftheplanet",
      image: "/Pictures/Blogs/outreach-4-19-23-pic1.png",
      markdownPath: "/content/blogs/outreach/healthoftheplanet.md",
      category: 'outreach'
    },
    {
      title: "Campus Preview Weekend (CPW)",
      url: "/blog/outreach/cpw",
      image: "/Pictures/Blogs/outreach-4-15-23-pic2.jpg",
      markdownPath: "/content/blogs/outreach/cpw.md",
      category: 'outreach'
    },
    {
      title: "Edgerton Center Showcase",
      url: "/blog/outreach/edgertoncentershowcase",
      image: "/Pictures/Blogs/outreach-4-11-23-pic04.jpg",
      markdownPath: "/content/blogs/outreach/edgertoncentershowcase.md",
      category: 'outreach'
    },
    {
      title: "Spark",
      url: "/blog/outreach/spark2023",
      image: "/Pictures/Blogs/outreach-3-18-23-pic3.jpg",
      markdownPath: "/content/blogs/outreach/spark2023.md",
      category: 'outreach'
    },
    {
      title: "WeCode Harvard Conference",
      url: "/blog/outreach/wecodeharvardconference",
      image: "/Pictures/Blogs/wecode.png",
      markdownPath: "/content/blogs/outreach/wecodeharvardconference.md",
      category: 'outreach'
    },
    {
      title: "Blue Innovations Symposium",
      url: "/blog/outreach/blueinnovationssymposium",
      image: "/Pictures/Blogs/outreach-1-24-23-pic1.jpg",
      markdownPath: "/content/blogs/outreach/blueinnovationssymposium.md",
      category: 'outreach'
    },
    {
      title: "HS Robotics Team, the Aluminum Cobblers, came to visit!",
      url: "/blog/outreach/aluminumcobblers",
      image: "/Pictures/Blogs/outreach-11-6-22-pic2.jpg",
      markdownPath: "/content/blogs/outreach/aluminumcobblers.md",
      category: 'outreach'
    },
    {
      title: "Cambridge Science Festival 2022",
      url: "/blog/outreach/cambridgesciencefestival2022",
      image: "/Pictures/Blogs/outreach-10-9-22-pic1.jpg",
      markdownPath: "/content/blogs/outreach/cambridgesciencefestival2022.md",
      category: 'outreach'
    },
    {
      title: "Boat Demo for the MIT Corporation",
      url: "/blog/outreach/mitcorp",
      image: "/Pictures/Blogs/ship-happens-10-31-22-EE-pic5.jpg",
      markdownPath: "/content/blogs/outreach/mitcorp.md",
      category: 'outreach'
    }
  ]
}

// Build lookup map for router
export const blogPosts = {}
Object.entries(categoryBlogs).forEach(([category, posts]) => {
  posts.forEach(post => {
    const slug = (post.link || post.url).split('/').pop()
    blogPosts[`${category}/${slug}`] = {
      markdownPath: post.markdownPath,
      category: category
    }
  })
})
