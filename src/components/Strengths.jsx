import React, { useState } from 'react'

const strengthsData = [
  {
    id: 'problem-solving',
    name: 'Problem-Solving',
    icon: '⚡',
    metric: '98%',
    level: 'Core Competency',
    summary: 'Algorithmic decomposition, clean domain-driven architecture, and systematically designing scalable distributed systems to eliminate systemic bottlenecks.',
    tags: ['Algorithms', 'Systems Design', 'Root Cause']
  },
  {
    id: 'debugging',
    name: 'Debugging',
    icon: '🔍',
    metric: '96%',
    level: 'Advanced Diagnostic',
    summary: 'Distributed tracing, JVM memory profiling, network packet inspection, asynchronous bug reproduction, and rigorous fault isolation.',
    tags: ['JVM Profiling', 'Distributed Tracing', 'Fault Isolation']
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    icon: '🤝',
    metric: '99%',
    level: 'Agile & Collaborative',
    summary: 'Active contributor in agile sprint planning, trunk-based Git workflows, constructive PR reviews, and cross-functional sync between frontend and backend teams.',
    tags: ['Agile Sprints', 'Code Reviews', 'RCA Squads']
  },
  {
    id: 'communication',
    name: 'Communication',
    icon: '📡',
    metric: '95%',
    level: 'Clear & Technical',
    summary: 'Authoring concise OpenAPI/Swagger documentation, architecture RFCs, and mentoring junior engineers with empathetic, structured guidance.',
    tags: ['API Contracts', 'Mentorship', 'Tech RFCs']
  },
  {
    id: 'adaptability',
    name: 'Adaptability',
    icon: '🔄',
    metric: '97%',
    level: 'Polyglot Agility',
    summary: 'Effortlessly navigating polyglot stacks—switching between Java Spring Boot backends, Dart Flutter mobile frontends, and Python FastAPI microservices.',
    tags: ['Polyglot Dev', 'Cross-Stack', 'Fast Ramp-Up']
  },
  {
    id: 'time-management',
    name: 'Time Management',
    icon: '⏱️',
    metric: '94%',
    level: 'Milestone Delivery',
    summary: 'Disciplined time allocation, milestone tracking, priority triage, and maintaining high release velocity without compromising quality.',
    tags: ['Sprint Cadence', 'Velocity', 'On-Time Shipping']
  },
  {
    id: 'independent-learning',
    name: 'Independent Learning',
    icon: '🚀',
    metric: '99%',
    level: 'Self-Driven Growth',
    summary: 'Rapid mastery of complex distributed tools like Apache Kafka, Neo4j graph databases, Redis caching layers, and state-of-the-art frameworks.',
    tags: ['Kafka Streaming', 'Neo4j Graph', 'Continuous Upskilling']
  },
  {
    id: 'attention-to-detail',
    name: 'Attention to Detail',
    icon: '🎯',
    metric: '98%',
    level: 'High Fidelity',
    summary: 'Comprehensive test coverage via JUnit 5 and Mockito, edge-case validation, strict schema types, and pixel-precise, responsive UI engineering.',
    tags: ['JUnit 5 & Mockito', 'Edge-Cases', 'Defensive Coding']
  }
]

const Strengths = () => {
  const [activeStrength, setActiveStrength] = useState(null)

  return (
    <section id="strengths" className="section strengths-section">
      <div className="section-header">
        <span className="section-eyebrow">// ENGINEERING MINDSET &amp; RIGOR</span>
        <h2>Core Strengths</h2>
        <p className="section-desc">
          Technical execution, systemic problem-solving, and collaborative engineering principles that drive quality across every release.
        </p>
      </div>

      <div className="strengths-grid">
        {strengthsData.map((s) => (
          <div 
            key={s.id} 
            className={`strength-card ${activeStrength === s.id ? 'strength-card--focused' : ''}`}
            onMouseEnter={() => setActiveStrength(s.id)}
            onMouseLeave={() => setActiveStrength(null)}
          >
            <div className="strength-card__header">
              <div className="strength-icon-box">
                <span className="strength-icon">{s.icon}</span>
              </div>
              <div className="strength-telemetry">
                <span className="strength-metric">{s.metric}</span>
                <span className="strength-level">{s.level}</span>
              </div>
            </div>

            <h3 className="strength-name">{s.name}</h3>
            <p className="strength-summary">{s.summary}</p>

            {/* Visual telemetry progress meter */}
            <div className="strength-meter-bar">
              <div 
                className="strength-meter-fill" 
                style={{ width: s.metric }}
              ></div>
            </div>

            <div className="strength-tags">
              {s.tags.map((tag, idx) => (
                <span key={idx} className="strength-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Machine Reliability Banner */}
      <div className="machine-banner">
        <div className="machine-banner__icon">⚙️</div>
        <div className="machine-banner__content">
          <h4>Engineering Discipline in Every Line of Code</h4>
          <p>
            Combining algorithmic thinking, automated testing, and human empathy to engineer resilient software that operates like a finely tuned machine.
          </p>
        </div>
        <a href="#contact" className="btn primary">
          Collaborate With Nadine
        </a>
      </div>
    </section>
  )
}

export default Strengths
