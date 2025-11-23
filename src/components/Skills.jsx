import React from 'react'

const Skills = () => {
  const skills = [
    'TypeScript',
    'React',
    'Node.js',
    'Python',
    'PostgreSQL',
    'Docker',
    'CI/CD',
    'Figma to Code',
    'Mentoring',
    'Team Leadership'
  ]

  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <ul className="chips" aria-label="Skills list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  )
}

export default Skills

