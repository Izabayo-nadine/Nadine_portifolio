import React, { useState } from 'react'

// Clean SVG icons for engineering strengths
const icons = {
  problemSolving: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  ),
  debugging: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      <line x1="11" y1="8" x2="11" y2="14"></line>
      <line x1="8" y1="11" x2="14" y2="11"></line>
    </svg>
  ),
  teamwork: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  ),
  communication: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      <line x1="8" y1="9" x2="16" y2="9"></line>
      <line x1="8" y1="13" x2="13" y2="13"></line>
    </svg>
  ),
  adaptability: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 4 23 10 17 10"></polyline>
      <polyline points="1 20 1 14 7 14"></polyline>
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
    </svg>
  ),
  timeManagement: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  independentLearning: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
    </svg>
  ),
  attentionToDetail: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="3"></circle>
      <line x1="22" y1="12" x2="18" y2="12"></line>
      <line x1="6" y1="12" x2="2" y2="12"></line>
      <line x1="12" y1="6" x2="12" y2="2"></line>
      <line x1="12" y1="22" x2="12" y2="18"></line>
    </svg>
  ),
  gear: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  )
}

const strengthsData = [
  {
    id: 'problem-solving',
    name: 'Problem-Solving',
    icon: icons.problemSolving,
    metric: '98%',
    level: 'Core Competency',
    summary: 'Algorithmic decomposition, clean domain-driven architecture, and systematically designing scalable distributed systems to eliminate systemic bottlenecks.',
    tags: ['Algorithms', 'Systems Design', 'Root Cause']
  },
  {
    id: 'debugging',
    name: 'Debugging',
    icon: icons.debugging,
    metric: '96%',
    level: 'Advanced Diagnostic',
    summary: 'Distributed tracing, JVM memory profiling, network packet inspection, asynchronous bug reproduction, and rigorous fault isolation.',
    tags: ['JVM Profiling', 'Distributed Tracing', 'Fault Isolation']
  },
  {
    id: 'teamwork',
    name: 'Teamwork',
    icon: icons.teamwork,
    metric: '99%',
    level: 'Agile & Collaborative',
    summary: 'Active contributor in agile sprint planning, trunk-based Git workflows, constructive PR reviews, and cross-functional sync between frontend and backend teams.',
    tags: ['Agile Sprints', 'Code Reviews', 'RCA Squads']
  },
  {
    id: 'communication',
    name: 'Communication',
    icon: icons.communication,
    metric: '95%',
    level: 'Clear & Technical',
    summary: 'Authoring concise OpenAPI/Swagger documentation, architecture RFCs, and mentoring junior engineers with empathetic, structured guidance.',
    tags: ['API Contracts', 'Mentorship', 'Tech RFCs']
  },
  {
    id: 'adaptability',
    name: 'Adaptability',
    icon: icons.adaptability,
    metric: '97%',
    level: 'Polyglot Agility',
    summary: 'Effortlessly navigating polyglot stacks—switching between Java Spring Boot backends, Dart Flutter mobile frontends, and Python FastAPI microservices.',
    tags: ['Polyglot Dev', 'Cross-Stack', 'Fast Ramp-Up']
  },
  {
    id: 'time-management',
    name: 'Time Management',
    icon: icons.timeManagement,
    metric: '94%',
    level: 'Milestone Delivery',
    summary: 'Disciplined time allocation, milestone tracking, priority triage, and maintaining high release velocity without compromising quality.',
    tags: ['Sprint Cadence', 'Velocity', 'On-Time Shipping']
  },
  {
    id: 'independent-learning',
    name: 'Independent Learning',
    icon: icons.independentLearning,
    metric: '99%',
    level: 'Self-Driven Growth',
    summary: 'Rapid mastery of complex distributed tools like Apache Kafka, Neo4j graph databases, Redis caching layers, and state-of-the-art frameworks.',
    tags: ['Kafka Streaming', 'Neo4j Graph', 'Continuous Upskilling']
  },
  {
    id: 'attention-to-detail',
    name: 'Attention to Detail',
    icon: icons.attentionToDetail,
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
        <div className="machine-banner__icon">{icons.gear}</div>
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
