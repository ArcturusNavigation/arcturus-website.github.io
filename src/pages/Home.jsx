import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../components/Carousel'

const Home = () => {
  const fishNShipsImages = [
    { src: '/Pictures/fishnships_florida.jpg', alt: 'Fish N Ships in Florida' },
    { src: '/Pictures/fishnships_pool.jpg', alt: 'Fish N Ships in Pool' },
    { src: '/Pictures/fishnships_splash.jpg', alt: 'Fish N Ships Splash' },
    { src: '/Pictures/fishnships1.jpg', alt: 'Fish N Ships 1' },
    { src: '/Pictures/fishnships2.jpg', alt: 'Fish N Ships 2' },
    { src: '/Pictures/fishnships3.jpg', alt: 'Fish N Ships 3' }
  ]

  return (
    <div>
      {/* Hero Section with Video */}
      <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
        <video
          src="/Pictures/flour-vid-24-25-crop.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </section>

      {/* What is Arcturus Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
              What is Arcturus?
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-around gap-8">
              <div className="lg:w-1/2">
                <div className="video-container">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/m9dcG-rZwSk?si=CLfSJ6qwxsFVXq5-"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="lg:w-5/12 text-center lg:text-left">
                <p className="text-lg mb-6">
                  Arcturus is the Massachusetts Institute of Technology's
                  autonomous robotics team! Founded in 2021 by a group of
                  passionate individuals, our team specializes in creating
                  autonomous surface vehicles (ASVs).
                </p>
                <Link
                  to="/about"
                  className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded text-lg transition-colors"
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Fish 'N Ships Section */}
      <section className="py-12 bg-background-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
              Meet Fish 'N Ships
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
              <div className="lg:w-5/12 text-center lg:text-left order-2 lg:order-1">
                <p className="text-lg mb-6">
                  Fish 'N Ships is our new competition vessel. It features a catamaran design with four thrusters
                  in an x-drive configuration to allow for precision and control.
                </p>
                <Link
                  to="/blog/fish-n-ships"
                  className="inline-block bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded text-lg transition-colors"
                >
                  Learn More
                </Link>
              </div>
              <div className="lg:w-5/12 order-1 lg:order-2">
                <Carousel images={fishNShipsImages} autoPlayInterval={4000} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Design Process Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">
            Our Design Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Autonomy Card */}
            <Link to="/blog/autonomy" className="block group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full">
                <div className="p-8 flex justify-center">
                  <img
                    src="/Pictures/testing_fall2024.jpg"
                    alt="Autonomy"
                    className="max-w-full h-auto"
                  />
                </div>
                <div className="px-6 pb-6">
                  <h4 className="text-xl font-heading font-bold text-primary mb-3">Autonomy</h4>
                  <p className="text-text">
                    The autonomy team is responsible for the implementation of autonomous functions on our vessel.
                    Some of the target tasks include navigating through gates, docking, and delivering objects
                    to other vessels.
                  </p>
                </div>
              </div>
            </Link>

            {/* Electrical Card */}
            <Link to="/blog/electrical" className="block group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full">
                <div className="p-8 flex justify-center">
                  <img
                    src="/Pictures/Blogs/bms.png"
                    alt="Electrical"
                    className="max-w-full h-auto"
                  />
                </div>
                <div className="px-6 pb-6">
                  <h4 className="text-xl font-heading font-bold text-primary mb-3">Electrical</h4>
                  <p className="text-text">
                    The electrical team is responsible for the electrical system of the boat. This includes
                    designing printed circuit boards, wiring all of the components, and integrating the mechanical
                    system with the sensors.
                  </p>
                </div>
              </div>
            </Link>

            {/* Mechanical Card */}
            <Link to="/blog/mechanical" className="block group">
              <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden h-full">
                <div className="p-8 flex justify-center">
                  <img
                    src="/Pictures/boat_cad.jpg"
                    alt="Mechanical"
                    className="max-w-full h-auto"
                  />
                </div>
                <div className="px-6 pb-6">
                  <h4 className="text-xl font-heading font-bold text-primary mb-3">Mechanical</h4>
                  <p className="text-text">
                    The mechanical team design, prototype, and build all of the physical aspects of the vessel.
                    This includes tasks such as manufacturing the hulls, creating robotic mechanisms (ex. ball launcher),
                    and machining customized parts.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
