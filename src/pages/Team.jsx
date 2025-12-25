import React from 'react'

const Team = () => {
  const officers = [
    {
      name: 'Janelle Cai',
      role: 'Captain',
      email: 'jcai18@mit.edu',
      image: '/Pictures/Headshots/janelle-headshot.jpg'
    },
    {
      name: 'Brendon Jiang',
      role: 'Autonomy Co-Lead',
      email: 'brendonj@mit.edu',
      image: '/Pictures/Headshots/brendon-headshot.jpg'
    },
    {
      name: 'Panagiotis Liampas',
      role: 'Autonomy Co-Lead',
      email: 'pliam005@mit.edu',
      image: '/Pictures/Headshots/panos-headshot.jpg'
    },
    {
      name: 'Noah Haefner',
      role: 'EE Co-Lead',
      email: 'nhaefner@mit.edu',
      image: '/Pictures/Headshots/noah-headshot.jpg'
    },
    {
      name: 'Jack Bolte',
      role: 'EE Co-Lead',
      email: 'jbolte@mit.edu',
      image: '/Pictures/Headshots/jack-headshot.jpg'
    },
    {
      name: 'Ved Ganesh',
      role: 'MechE Co-Lead',
      email: 'vxg@mit.edu',
      image: '/Pictures/Headshots/ved-headshot.jpg'
    },
    {
      name: 'McKinley Pestano-Young',
      role: 'MechE Co-Lead',
      email: 'mpest519@mit.edu',
      image: '/Pictures/Headshots/mckinley-headshot.jpg'
    },
    {
      name: 'Teagan Sullivan',
      role: 'MechE Co-Lead',
      email: 'cteagans@mit.edu',
      image: '/Pictures/Headshots/teagan-headshot.jpg'
    },
    {
      name: 'Angelica Fortuno',
      role: 'Outreach Lead',
      email: 'afortuno@mit.edu',
      image: '/Pictures/Headshots/angelica-headshot.png'
    }
  ]

  const autonomyMembers = [
    'Panagiotis Liampas',
    'Brendon Jiang',
    'Daniel Kim',
    'Brian Xue',
    'Sara Koshi',
    'Jesse Yang',
    'Vincent Zheng',
    'Alex Franks',
    'Nico Bennett',
    'Arthur De Los Santos',
    'Youry Moise',
    'Ashlinn Stoneking',
    'Jason Yang',
    'Tyler Proctor',
    'Toya Takahashi',
    'Jia Li'
  ]

  const electricalMembers = [
    'Jack Bolte',
    'Noah Haefner',
    'Diana Wang',
    'Patrick Chu',
    'Remington Yang'
  ]

  const mechanicalMembers = [
    'Nevin Thinagar',
    'Ved Ganesh',
    'Teagan Sullivan',
    'McKinley Pestano-Young',
    'Tony Tang',
    'Hager Gomaa',
    'Huda Abdelghani',
    'Erika Kwee',
    'Carlos Longoria',
    'Serra Tulu',
    'Taeija-Lee Hall-Watts',
    'Kong Yang',
    'AJ Santa Cruz',
    'Andrew Chen',
    'Mariia Maliar',
    'Katelyn Lam',
  ]

  return (
    <div>
      {/* Team Photo Section */}
      <section className="mb-0">
        <img
          src="/Pictures/team_spring2025.jpg"
          alt="Arcturus Team Spring 2025"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Officers Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            Officers
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {officers.map((officer, index) => (
              <div key={index} className="flex items-start gap-4 mx-auto max-w-md w-full">
                <div className="flex-shrink-0">
                  <img
                    src={officer.image}
                    alt={officer.name}
                    className="w-28 h-32 rounded-lg object-cover object-top"
                  />
                </div>
                <div className="flex-grow">
                  <h4 className="text-lg font-heading font-semibold text-primary mb-1">
                    {officer.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-1">{officer.role}</p>
                  <p className="text-sm text-text">{officer.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autonomy Team Section */}
      <section className="py-12 bg-bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            Autonomy Team
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {autonomyMembers.sort().map((member, index) => (
              <div key={index} className="text-center">
                <p className="text-lg text-text">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Electrical Team Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            Electrical Team
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {electricalMembers.sort().map((member, index) => (
              <div key={index} className="text-center">
                <p className="text-lg text-text">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mechanical Team Section */}
      <section className="py-12 bg-bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-primary text-center mb-12">
            Mechanical Team
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {mechanicalMembers.sort().map((member, index) => (
              <div key={index} className="text-center">
                <p className="text-lg text-text">{member}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team
