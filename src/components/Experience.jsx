import React from 'react'

const Experience = () => {
  const experiences = [
    {
      period: '2023 — 2026 (Graduated)',
      organization: 'Rwanda Coding Academy (RCA)',
      role: 'Software Engineering Graduate & Systems Developer',
      location: 'Nyabihu / Kigali, Rwanda',
      type: 'Academic & Applied Engineering',
      description: 'Completed rigorous, elite technical education specializing in software engineering, embedded systems, cybersecurity, and distributed architectures.',
      achievements: [
        'Architected end-to-end distributed applications using Java 21, Spring Boot, and Apache Kafka.',
        'Engineered persistent data stores spanning relational (PostgreSQL), in-memory cache (Redis), and graph models (Neo4j).',
        'Implemented enterprise testing standards with JUnit 5 and Mockito, ensuring high coverage and regression resilience.',
        'Collaborated in agile development sprints adopting trunk-based Git workflows and peer PR reviews.'
      ],
      skills: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Flutter', 'Data Structures', 'Git']
    },
    {
      period: '2024 — Present',
      organization: 'Ideation & Prototyping Program',
      role: 'Volunteer Engineering Mentor',
      location: 'Rwanda Coding Academy',
      type: 'Technical Leadership & Mentorship',
      description: 'Selected as a student mentor to guide Year 1 engineering students through the end-to-end software product lifecycle.',
      achievements: [
        'Trained students in design thinking, problem framing, and architectural prototyping methodologies.',
        'Conducted hands-on technical workshops covering Git fundamentals, REST API integration, and UI component design.',
        'Facilitated weekly code reviews and debugging clinics to help students overcome technical roadblocks.',
        'Mentored student teams in shipping their first functional prototypes presented to faculty panels.'
      ],
      skills: ['Technical Mentoring', 'Architecture Design', 'Code Reviews', 'Agile Facilitation', 'Leadership']
    }
  ]

  return (
    <section id="experience" className="section experience-section">
      <div className="section-header">
        <span className="section-eyebrow">// TRACK RECORD &amp; MILESTONES</span>
        <h2>Experience &amp; Leadership</h2>
        <p className="section-desc">
          Rigorous engineering background at Rwanda's premier coding academy combined with technical mentorship leadership.
        </p>
      </div>

      <div className="timeline-machine">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-node">
            
            {/* Left timeline track with node circle */}
            <div className="timeline-indicator">
              <div className="node-glow-circle">
                <span className="node-inner-dot"></span>
              </div>
              {index < experiences.length - 1 && <div className="timeline-connector-line"></div>}
            </div>

            {/* Right content card */}
            <div className="timeline-card">
              <div className="timeline-card__top">
                <span className="timeline-period">{exp.period}</span>
                <span className="timeline-badge">{exp.type}</span>
              </div>

              <h3 className="timeline-role">{exp.role}</h3>
              <div className="timeline-org-row">
                <span className="timeline-org">{exp.organization}</span>
                <span className="timeline-dot">•</span>
                <span className="timeline-loc">{exp.location}</span>
              </div>

              <p className="timeline-summary">{exp.description}</p>

              <div className="timeline-achievements">
                <span className="achievements-heading">Key Highlights &amp; Scope:</span>
                <ul>
                  {exp.achievements.map((item, idx) => (
                    <li key={idx}>
                      <span className="highlight-bullet">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="timeline-skills">
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="timeline-skill-pill">{skill}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
