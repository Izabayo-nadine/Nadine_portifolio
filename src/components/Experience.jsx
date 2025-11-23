import React from 'react'

const Experience = () => {
  const experiences = [
    {
      time: 'Rwanda Coding Academy',
      role: 'Software Engineering Student',
      meta: 'Focus: Systems, Web, Algorithms'
    },
    {
      time: 'Ideation & Prototyping Program',
      role: 'Volunteer Mentor',
      meta: 'Trained Year 1 students in ideation and prototyping methodologies'
    }
  ]

  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline__item">
            <span className="time">{exp.time}</span>
            <span className="role">{exp.role}</span>
            <span className="meta">{exp.meta}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

