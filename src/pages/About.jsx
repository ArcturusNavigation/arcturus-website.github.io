import React from 'react'

const About = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-primary text-center mb-8">
          About Us
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-text mb-6">
            Arcturus is the Massachusetts Institute of Technology's autonomous robotics team,
            specializing in creating autonomous surface vehicles (ASVs). Founded in 2021 by
            a group of passionate individuals, we compete in national and international
            competitions while pushing the boundaries of autonomous navigation.
          </p>
          <p className="text-lg text-text mb-6">
            Our team brings together students from diverse backgrounds including mechanical
            engineering, electrical engineering, computer science, and more. Together, we
            design, build, and program autonomous boats that can navigate complex waterways,
            identify objects, and complete mission tasks without human intervention.
          </p>
          {/* TODO: Add more detailed about content */}
        </div>
      </div>
    </div>
  )
}

export default About
