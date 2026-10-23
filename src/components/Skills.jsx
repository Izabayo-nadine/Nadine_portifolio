import React, { useState } from 'react'

const skillCategories = [
  {
    id: 'backend',
    title: 'Backend & Distributed Systems',
    icon: '⚡',
    description: 'High-throughput APIs, event-driven message streaming, microservices, and polyglot persistence.',
    skills: [
      { name: 'Java', level: 'Expert', desc: 'Core OOP, concurrency, streams, JVM tuning' },
      { name: 'Spring Boot', level: 'Expert', desc: 'Spring MVC, Data JPA, Security, Cloud' },
      { name: 'Apache Kafka', level: 'Advanced', desc: 'Topic partitions, consumer groups, event stream decoupling' },
      { name: 'FastAPI', level: 'Advanced', desc: 'Asynchronous Python microservices, Pydantic validation' },
      { name: 'PostgreSQL', level: 'Expert', desc: 'ACID transactions, relational schema design, indexing' },
      { name: 'JPA / Hibernate', level: 'Expert', desc: 'ORM mapping, query optimization, lazy/eager loading' },
      { name: 'Redis', level: 'Advanced', desc: 'In-memory caching, TTL keys, pub/sub messaging' },
      { name: 'Neo4j', level: 'Proficient', desc: 'Graph data models, Cypher queries, relationship mapping' },
      { name: 'Node.js', level: 'Proficient', desc: 'Express REST services, async event loop' },
      { name: 'Spring Security & JWT', level: 'Expert', desc: 'Stateless auth, RBAC, filter chains, token signing' },
      { name: 'REST APIs', level: 'Expert', desc: 'HATEOAS, RFC HTTP standards, Swagger/OpenAPI' },
    ]
  },
  {
    id: 'frontend',
    title: 'Mobile & Frontend Engineering',
    icon: '📱',
    description: 'Responsive user interfaces, dynamic map telemetry, and fluid cross-platform native apps.',
    skills: [
      { name: 'Flutter & Dart', level: 'Expert', desc: 'Custom widgets, state management, native bridges' },
      { name: 'Mapbox SDK', level: 'Advanced', desc: 'Vector tiles, real-time geolocation, incident mapping' },
      { name: 'React', level: 'Expert', desc: 'Hooks, custom state, component composition, optimization' },
      { name: 'Next.js', level: 'Advanced', desc: 'SSR, static generation, API routes, layout streaming' },
      { name: 'JavaScript (ES6+)', level: 'Expert', desc: 'Async/await, DOM events, functional idioms' },
      { name: 'HTML5 & CSS3', level: 'Expert', desc: 'Semantic layouts, CSS Grid, Flexbox, glassmorphism' },
      { name: 'Responsive UI/UX', level: 'Expert', desc: 'Mobile-first design, accessibility, micro-interactions' },
    ]
  },
  {
    id: 'devops',
    title: 'Testing, DevOps & Architecture',
    icon: '🛠️',
    description: 'Automated test verification, version control integrity, containerization, and agile execution.',
    skills: [
      { name: 'JUnit 5', level: 'Expert', desc: 'Unit testing, parameterized tests, test assertions' },
      { name: 'Mockito', level: 'Expert', desc: 'Mocking dependencies, behavior verification, stubbing' },
      { name: 'Git & GitHub', level: 'Expert', desc: 'Trunk development, feature branching, PR reviews' },
      { name: 'Docker', level: 'Proficient', desc: 'Multi-stage container builds, microservice orchestration' },
      { name: 'Postman', level: 'Expert', desc: 'API test collections, environment variables, mock servers' },
      { name: 'Microservices', level: 'Advanced', desc: 'Service discovery, API gateways, decoupled architectures' },
      { name: 'Agile & Mentoring', level: 'Expert', desc: 'Sprint planning, peer code reviews, junior mentorship' },
    ]
  }
]

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const displayedCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(c => c.id === selectedCategory)

  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <span className="section-eyebrow">// TECHNICAL ARSENAL</span>
        <h2>Engineering Skills &amp; Stack</h2>
        <p className="section-desc">
          Proficiency across distributed backends, streaming architecture, cross-platform mobile apps, and quality automation.
        </p>
      </div>

      {/* Category Toggles */}
      <div className="skills-tabs" role="tablist">
        <button 
          className={`skills-tab ${selectedCategory === 'all' ? 'skills-tab--active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          All Technologies (25+)
        </button>
        <button 
          className={`skills-tab ${selectedCategory === 'backend' ? 'skills-tab--active' : ''}`}
          onClick={() => setSelectedCategory('backend')}
        >
          ⚡ Backend &amp; Kafka
        </button>
        <button 
          className={`skills-tab ${selectedCategory === 'frontend' ? 'skills-tab--active' : ''}`}
          onClick={() => setSelectedCategory('frontend')}
        >
          📱 Mobile &amp; Frontend
        </button>
        <button 
          className={`skills-tab ${selectedCategory === 'devops' ? 'skills-tab--active' : ''}`}
          onClick={() => setSelectedCategory('devops')}
        >
          🛠️ Testing &amp; Tooling
        </button>
      </div>

      {/* Categories Grid */}
      <div className="skills-category-container">
        {displayedCategories.map((category) => (
          <div key={category.id} className="skill-category-card">
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-description">{category.description}</p>
              </div>
            </div>

            <div className="skills-chips-grid">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-chip-box">
                  <div className="skill-chip-top">
                    <span className="skill-chip-name">{skill.name}</span>
                    <span className={`skill-chip-level skill-chip-level--${skill.level.toLowerCase()}`}>
                      {skill.level}
                    </span>
                  </div>
                  <span className="skill-chip-desc">{skill.desc}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
