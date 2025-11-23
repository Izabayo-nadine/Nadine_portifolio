import React from 'react'

const Resume = () => {
  const resumeUrl = "/assets/resume.pdf"
  
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Nadine_Resume.pdf'
    link.click()
  }

  return (
    <section id="resume" className="section">
      <h2>Resume</h2>
      <div className="resume-container">
        <div className="resume-preview">
          <div className="resume-card">
            <div className="resume-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
              </svg>
            </div>
            <div className="resume-info">
              <h3>Nadine's Resume</h3>
              <p>Download my complete resume to learn more about my experience, skills, and achievements.</p>
              <div className="resume-actions">
                <button 
                  className="btn primary"
                  onClick={handleDownload}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" />
                  </svg>
                  Download PDF
                </button>
                <a 
                  href={resumeUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn ghost"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                  </svg>
                  View Online
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="resume-highlights">
          <h3>Quick Highlights</h3>
          <div className="highlights-grid">
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11M11,9H13V7H11V9Z" />
                </svg>
              </div>
              <div className="highlight-content">
                <h4>Education</h4>
                <p>Software Engineering Student at Rwanda Coding Academy</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16,4C18.2,4 20,5.8 20,8C20,10.2 18.2,12 16,12C13.8,12 12,10.2 12,8C12,5.8 13.8,4 16,4M16,13C18.67,13 24,14.33 24,17V20H8V17C8,14.33 13.33,13 16,13M8,12C10.2,12 12,10.2 12,8C12,5.8 10.2,4 8,4C5.8,4 4,5.8 4,8C4,10.2 5.8,12 8,12M8,13C5.33,13 0,14.33 0,17V20H6V17C6,15.9 6.9,15 8,15C9.1,15 10,15.9 10,17V20H16V17C16,14.33 10.67,13 8,13Z" />
                </svg>
              </div>
              <div className="highlight-content">
                <h4>Mentoring</h4>
                <p>Volunteer mentor in Ideation & Prototyping Program</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                </svg>
              </div>
              <div className="highlight-content">
                <h4>Skills</h4>
                <p>TypeScript, React, Node.js, Python, and more</p>
              </div>
            </div>
            
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z" />
                </svg>
              </div>
              <div className="highlight-content">
                <h4>Projects</h4>
                <p>Multiple full-stack applications and prototypes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume

