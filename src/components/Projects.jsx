import React, { useState } from 'react'

const projectsData = [
  {
    id: 'inzirax',
    title: 'InziraX',
    type: 'Personal Project',
    subtitle: 'Traffic Management & Road Safety Application',
    category: 'mobile',
    image: '/assets/projects/inzirax.jpg',
    description: 'A mobile application built with Flutter, Dart, and Mapbox that helps road users access real-time route information, hazard updates, and incident reporting backed by FastAPI.',
    tags: ['Flutter', 'Dart', 'Mapbox', 'FastAPI', 'Python', 'Git', 'GitHub'],
    githubUrl: 'https://github.com/Izabayo-nadine/InziraX',
    liveUrl: null
  },
  {
    id: 'hospinix',
    title: 'Hospinix',
    type: 'Full-Stack App',
    subtitle: 'Hospital & Pharmacy Management System',
    category: 'fullstack',
    image: '/assets/projects/hospinix.png',
    description: 'Digital healthcare management platform supporting hospital and pharmacy workflows, featuring Java Spring Boot backend services, PostgreSQL persistence, and responsive React & Next.js interfaces.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'JPA', 'Hibernate', 'React', 'Next.js', 'REST APIs', 'JWT'],
    githubUrl: 'https://github.com/Izabayo-nadine/Hospinx-frontend',
    liveUrl: 'https://hospinix-teal.vercel.app/'
  },
  {
    id: 'uweraai',
    title: 'UweraAI',
    type: 'Team Project',
    subtitle: 'AI-Powered Learning & Assessment Platform',
    category: 'distributed',
    image: '/assets/projects/uweraai.png',
    description: 'Intelligent learning and assessment platform supporting student progress tracking, engineered with Java Spring Boot, Apache Kafka event streaming, and Neo4j graph data management.',
    tags: ['Java', 'Spring Boot', 'Apache Kafka', 'PostgreSQL', 'Redis', 'Neo4j', 'JUnit', 'Mockito', 'Git'],
    githubUrl: 'https://github.com/Izabayo-nadine/UweraAI-backend',
    liveUrl: 'https://uwera.rw'
  },
  {
    id: 'jobmatch',
    title: 'JobMatch',
    type: 'Full-Stack App',
    subtitle: 'Job Matching & Discovery Platform',
    category: 'fullstack',
    image: '/assets/projects/jobmatch.png',
    description: 'Career platform connecting job seekers with relevant opportunities via tailored discovery filters, built with a Next.js and React frontend and Node.js REST APIs.',
    tags: ['JavaScript', 'React', 'Next.js', 'Node.js', 'REST APIs', 'Git', 'GitHub'],
    githubUrl: 'https://github.com/Izabayo-nadine/job-match-frontend',
    liveUrl: 'https://job-match-frontend-ir8n.vercel.app/'
  }
]


const Projects = () => {
  const [filter, setFilter] = useState('all')

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter || (filter === 'fullstack' && (p.category === 'fullstack' || p.category === 'distributed')))

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <span className="section-eyebrow">// FEATURED SYSTEMS</span>
        <h2>Projects</h2>
        <p className="section-desc">
          Core engineering projects showcasing distributed backends, streaming architecture, and responsive web &amp; mobile applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="project-filters" role="tablist" aria-label="Project Categories">
        <button 
          className={`filter-btn ${filter === 'all' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Projects ({projectsData.length})
        </button>
        <button 
          className={`filter-btn ${filter === 'mobile' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('mobile')}
        >
          Mobile (InziraX)
        </button>
        <button 
          className={`filter-btn ${filter === 'distributed' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('distributed')}
        >
          Distributed &amp; AI (UweraAI)
        </button>
        <button 
          className={`filter-btn ${filter === 'fullstack' ? 'filter-btn--active' : ''}`}
          onClick={() => setFilter('fullstack')}
        >
          Full-Stack Systems
        </button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article key={project.id} className="project-card">
            
            {/* Visual Media Header with actual screenshot */}
            <div className="project-card__media">
              <img 
                src={project.image} 
                alt={`${project.title} - ${project.subtitle}`} 
                className="project-image"
                loading="lazy"
              />
              <div className="project-type-badge">
                <span className="type-dot"></span>
                <span>{project.type}</span>
              </div>
            </div>

            {/* Card Content - Clean & Concise without repeating CV */}
            <div className="project-card__body">
              <div className="project-meta-row">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-category-tag">{project.category}</span>
              </div>
              
              <h4 className="project-subtitle">{project.subtitle}</h4>
              <p className="project-description">{project.description}</p>

              {/* Tags */}
              <div className="project-tags">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tech-badge">{tag}</span>
                ))}
              </div>

              {/* Action Links */}
              <div className="project-card__footer">
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="card-github-link card-action-btn"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>View Repository</span>
                </a>

                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card-live-link card-action-btn"
                  >
                    <span>Live Preview</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                )}
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
