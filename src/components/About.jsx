import React from 'react'

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="section-header">
        <span className="section-eyebrow">// ENGINEER PROFILE</span>
        <h2>About Me</h2>
        <p className="section-desc">
          Passionate about building resilient backends, distributed data pipelines, and responsive mobile interfaces.
        </p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <div className="bio-lead-card">
            <p className="lead-quote">
              "Great software isn't just about syntax; it's about architecting systems that scale reliably, handle failures gracefully, and empower real people."
            </p>
          </div>

          <p>
            I am a Software Engineer and graduate of <strong>Rwanda Coding Academy (RCA)</strong>, 
            where I specialized in backend systems architecture, algorithms, and distributed computing. 
            My work focuses on building robust backend microservices with <strong>Java &amp; Spring Boot</strong>, 
            integrating event-driven streaming with <strong>Apache Kafka</strong>, and designing high-performance 
            cross-platform mobile applications in <strong>Flutter, Dart, and Mapbox</strong>.
          </p>

          <p>
            During my time at RCA, I also dedicated myself to technical leadership and mentorship. As a volunteer mentor in the 
            <strong> Ideation &amp; Prototyping Program</strong>, I guided Year 1 engineering students through the entire software development 
            lifecycle—from problem formulation and architecture validation to rapid prototyping and production delivery.
          </p>

          <div className="about-metrics-grid">
            <div className="about-metric">
              <span className="metric-val">RCA '26</span>
              <span className="metric-sub">Software Engineering Graduate</span>
            </div>
            <div className="about-metric">
              <span className="metric-val">Mentor</span>
              <span className="metric-sub">Ideation &amp; Prototyping</span>
            </div>
            <div className="about-metric">
              <span className="metric-val">Full-Stack</span>
              <span className="metric-sub">Distributed &amp; Mobile</span>
            </div>
            <div className="about-metric">
              <span className="metric-val">Kigali</span>
              <span className="metric-sub">Rwanda</span>
            </div>
          </div>

          <div className="about-actions">
            <a href="#projects" className="btn primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
              View Projects
            </a>
            <a href="/assets/Izabayo_Nadine_CV_updated.pdf" download="Izabayo_Nadine_CV_updated.pdf" className="btn ghost">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download CV
            </a>
          </div>
        </div>

        {/* Developer Monogram Placeholder 'IN' */}
        <div className="about-image-column">
          <div className="developer-frame">
            <div className="frame-corner frame-corner--tl"></div>
            <div className="frame-corner frame-corner--tr"></div>
            <div className="frame-corner frame-corner--bl"></div>
            <div className="frame-corner frame-corner--br"></div>
            
            <div className="profile-monogram-box">
              <div className="monogram-glow-ring">
                <div className="monogram-inner-core">
                  <span className="monogram-letters">IN</span>
                  <span className="monogram-sub">IZABAYO NADINE</span>
                </div>
              </div>
              <div className="monogram-circuit-nodes">
                <span className="circuit-node circuit-node--1"></span>
                <span className="circuit-node circuit-node--2"></span>
                <span className="circuit-node circuit-node--3"></span>
                <span className="circuit-node circuit-node--4"></span>
              </div>
            </div>

            <div className="developer-tag-card">
              <span className="dev-tag-role">Izabayo Nadine</span>
              <span className="dev-tag-spec">Software Engineer • RCA Graduate</span>
              <div className="dev-tag-badges">
                <span className="badge-chip">Java</span>
                <span className="badge-chip">Kafka</span>
                <span className="badge-chip">Flutter</span>
                <span className="badge-chip">Next.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
