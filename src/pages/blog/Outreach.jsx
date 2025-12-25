import React from 'react'
import { Link } from 'react-router-dom'

const Outreach = () => {
  const outreachEvents = [
    {
      title: "Cambridge Science Festival 2024",
      url: "/blog/outreach/cambridgesciencefestival2024",
      image: "/pictures/Blogs/csf2024.jpg"
    },
    {
      title: "Discover Ocean Engineering Program for MIT Freshman 2023",
      url: "/blog/outreach/discoveroceanengineering",
      image: "/pictures/Blogs/outreach-8-22-23-pic3.png"
    },
    {
      title: "MIT-Portugal Marine Robotics Summer School in the Azores",
      url: "/blog/outreach/azores",
      image: "/pictures/Blogs/outreach-7-10-23-pic1.PNG"
    },
    {
      title: "OCEANS 2023",
      url: "/blog/outreach/oceans2023",
      image: "/pictures/Blogs/outreach-6-5-23-pic4.PNG"
    },
    {
      title: "MIT MechE Health of the Planet Showcase",
      url: "/blog/outreach/healthoftheplanet",
      image: "/pictures/Blogs/outreach-4-19-23-pic1.png"
    },
    {
      title: "Campus Preview Weekend (CPW)",
      url: "/blog/outreach/cpw",
      image: "/pictures/Blogs/outreach-4-15-23-pic2.jpg"
    },
    {
      title: "Edgerton Center Showcase",
      url: "/blog/outreach/edgertoncentersh owcase",
      image: "/pictures/Blogs/outreach-4-11-23-pic04.jpg"
    },
    {
      title: "Spark",
      url: "/blog/outreach/spark2023",
      image: "/pictures/Blogs/outreach-3-18-23-pic3.jpg"
    },
    {
      title: "WeCode Harvard Conference",
      url: "/blog/outreach/wecodeharvardconference",
      image: "/pictures/Blogs/wecode.png"
    },
    {
      title: "Blue Innovations Symposium",
      url: "/blog/outreach/blueinnovationssymposium",
      image: "/pictures/Blogs/outreach-1-24-23-pic1.jpg"
    },
    {
      title: "HS Robotics Team, the Aluminum Cobblers, came to visit!",
      url: "/blog/outreach/aluminumcobblers",
      image: "/pictures/Blogs/outreach-11-6-22-pic2.jpg"
    },
    {
      title: "Cambridge Science Festival 2022",
      url: "/blog/outreach/cambridgesciencefestival2022",
      image: "/pictures/Blogs/outreach-10-9-22-pic1.jpg"
    },
    {
      title: "Boat Demo for the MIT Corporation",
      url: "/blog/outreach/mitcorp",
      image: "/pictures/Blogs/ship-happens-10-31-22-EE-pic5.jpg"
    }
  ]

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          Outreach
        </h1>
        <div className="max-w-6xl mx-auto">
          <p className="text-lg text-text mb-8 text-center max-w-4xl mx-auto">
            We love autonomous robots here at Arcturus, and we want to share
            our tech with our community! Autonomy is a concept that may be
            unfamiliar to people without an engineering background, so we make
            a concerted effort to accommodate various levels of knowledge
            during our outreach events. Here are some examples of events we
            have run or attended!
          </p>

          <img
            src="/pictures/Blogs/outreach-11-6-22-pic3.jpg"
            alt="Outreach event"
            className="w-full max-w-4xl mx-auto mb-12 rounded-lg shadow-lg"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outreachEvents.map((event, index) => (
              <Link
                key={index}
                to={event.url}
                className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-primary hover:text-accent transition-colors">
                    {event.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Outreach
