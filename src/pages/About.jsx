import React from 'react'

const About = () => {
  return (
    <div className="py-4">
      <div className="mx-auto max-w-6xl px-4">
        {/* What is Arcturus Section */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="/pictures/team_1_2024.jpg"
                alt="Arcturus Team 2024"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div className="text-center">
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                What is Arcturus?
              </h2>
              <p className="text-lg text-text">
                Arcturus is the Massachusetts Institute of Technology&apos;s autonomous robotics team!
                Founded in 2021 by a group of passionate individuals, our team specializes in
                creating autonomous surface vehicles (ASVs). ASVs have a variety of purposes from
                marine research to and surveying. This is our fourth competition season, and we are
                will be competing with our flagship, Fish &apos;N Ships! We&apos;re excited to make a splash in the
                RoboBoat 2026 competition. Check out our{' '}
                <a href="/technical-work" className="text-primary hover:text-primary-light underline">
                  blog series
                </a>{' '}
                to see what we&apos;re up to!
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* What We Do Section */}
      <section className="py-16 bg-background-light">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center order-2 md:order-1">
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                What We Do
              </h2>
              <p className="text-lg text-text">
                Learning about dynamics and controls in class is one thing, but working together
                and actually seeing your ideas come to life is something else. Arcturus provides
                an incredible opportunity for students to learn the fundamentals of applied
                engineering, including computer aided design, printed circuit board design, laser
                cutting, drilling, milling, rapid prototyping, and programming. It is very
                important to us that students understand how their work relates to the entire
                system, and that each subteam learns to clearly communicate their technical
                progress, since those are key skills for engineers. These kinds of skills would
                be very difficult to learn or teach in a classroom environment, so we believe
                this is an incredibly enriching and rewarding experience for our members.
              </p>
            </div>

            <div className="order-1 md:order-2 flex justify-center">
              <img
                src="/pictures/testing2_fall2024.jpg"
                alt="Testing Fall 2024"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        {/* Our Mission Section */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* image column (placeholder) */}
            <div className="flex justify-center">
              <img
                src="/pictures/boat_cad.jpg"
                alt="Mission placeholder"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* header + text column */}
            <div className="text-center">
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                Our Mission
              </h2>
              <ul className="space-y-4 text-lg text-text">
                <li className="flex items-start justify-center">
                  {/* <span className="text-primary mr-3 mt-1">●</span> */}
                  <span>
                    Give undergraduates hands-on experience leading teams and applying their
                    knowledge by building and programming autonomous vehicles.
                  </span>
                </li>
                <li className="flex items-start justify-center">
                  {/* <span className="text-primary mr-3 mt-1">●</span> */}
                  <span>
                    Share our love of robots with the community through a series of outreach
                    events including lab tours, demos, classes, and mentorship.
                  </span>
                </li>
                <li className="flex items-start justify-center">
                  {/* <span className="text-primary mr-3 mt-1">●</span> */}
                  <span>
                    Create technology that we believe will positively impact the environment
                    and coastal communities.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Competitions Section */}
      <section className="py-16 bg-background-light">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* header + text column */}
            <div className="text-center order-2 md:order-1">
              <h2 className="text-4xl font-heading font-bold text-primary mb-6">
                About RoboBoat
              </h2>
              <p className="text-lg text-text">
                RoboBoat is an annual international competition where undergraduate students
                design and build a small Autonomous Surface Vehicle (ASV) to complete a variety
                of tasks that mimic real-world challenges facing the maritime industry. The
                competition also tasks us with raising team funds, documenting our progress, and
                organizing outreach. In this way, we hope to take what we learn and give back to
                our community. The competition will be held in Sarasota, Florida, early March in
                2025. If you&apos;d like to learn more about the Roboboat competition, please visit{' '}
                <a
                  href="https://roboboat.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-light underline"
                >
                  RoboBoat
                </a>
                .
              </p>
            </div>

            {/* image column */}
            <div className="order-1 md:order-2 flex justify-center">
              <img
                src="/pictures/RoboBoat25/roboboat25_7.jpg"
                alt="RoboBoat 2025"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        {/* Team Videos Section */}
        <section className="py-16">
          <h2 className="text-4xl font-heading font-bold text-primary text-center mb-12">
            Team Videos
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                RoboBoat 2023
              </h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/zwJfxIwSBhE?si=8woHClpOl1DDdOOy"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                RoboBoat 2025
              </h3>
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/m9dcG-rZwSk?si=CLfSJ6qwxsFVXq5-"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
