import React from 'react'

const Resume = () => {
  const resumeUrl = "/assets/Izabayo_Nadine_CV_updated.pdf"
  
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Izabayo_Nadine_CV_updated.pdf'
    link.click()
  }

  const highlights = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
      title: 'Rwanda Coding Academy Graduate',
      desc: 'Graduated in Software Engineering with deep foundations in distributed systems and systems programming'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
      title: 'Distributed Systems & Mobile',
      desc: 'Hands-on experience in Java, Spring Boot, Apache Kafka, FastAPI, PostgreSQL, and Flutter'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: 'Engineering Mentorship',
      desc: 'Volunteer mentor for Year 1 cohorts in the Ideation & Prototyping program'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      ),
      title: 'Production Verification',
      desc: 'Rigorous unit & integration test coverage via JUnit 5, Mockito, and Git PR standards'
    }
  ]

  return (
    <section id="resume" className="section resume-section">
      <div className="section-header">
        <span className="section-eyebrow">// CURRICULUM VITAE</span>
        <h2>Resume &amp; Qualifications</h2>
        <p className="section-desc">
          Official engineering curriculum vitae detailing academic achievements, distributed architectures, and technical competencies.
        </p>
      </div>

      <div className="resume-container">
        {/* Left Action Box */}
        <div className="resume-card-box">
          <div className="resume-card-inner">
            <div className="resume-card-header">
              <div className="pdf-icon-wrap">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <div className="resume-card-meta">
                <span className="doc-type">OFFICIAL PDF RESUME</span>
                <h3 className="doc-title">Izabayo Nadine — Software Engineer</h3>
                <span className="doc-specs">Updated 2026 • Rwanda Coding Academy Graduate • English</span>
              </div>
            </div>

            <p className="resume-card-summary">
              Download my complete technical resume for a comprehensive breakdown of software architectures, Kafka event stream integrations, Flutter applications, and academic credentials.
            </p>

            <div className="resume-actions-row">
              <button 
                className="btn primary"
                onClick={handleDownload}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>Download CV (PDF)</span>
              </button>

              <a 
                href={resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn ghost"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>View Online</span>
              </a>
            </div>

            <div className="ats-friendly-badge">
              <span className="check-dot">✓</span>
              <span>ATS-Formatted • Verified Rwanda Coding Academy Graduate (Class of 2026)</span>
            </div>
          </div>
        </div>

        {/* Right Highlights Grid */}
        <div className="resume-highlights-box">
          <h3 className="highlights-title">Core Profile Summary</h3>
          <div className="highlights-stack">
            {highlights.map((h, i) => (
              <div key={i} className="highlight-row">
                <div className="highlight-icon-circle">{h.icon}</div>
                <div className="highlight-info">
                  <h4>{h.title}</h4>
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="quick-contact-callout">
            <span>Direct Hiring Inquiries:</span>
            <a href="mailto:izabayonadine08@gmail.com" className="direct-email-link">
              izabayonadine08@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
