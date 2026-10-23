import React, { useState } from 'react'

const References = () => {
  const [copiedType, setCopiedType] = useState(null)

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopiedType(type)
    setTimeout(() => setCopiedType(null), 2000)
  }

  return (
    <section id="references" className="section references-section">
      <div className="section-header">
        <span className="section-eyebrow">// VERIFIED ENDORSEMENTS</span>
        <h2>Academic &amp; Professional References</h2>
        <p className="section-desc">
          Official references from faculty leadership and technical instructors at Rwanda Coding Academy.
        </p>
      </div>

      <div className="references-container">
        {/* Primary Reference Card */}
        <div className="reference-card">
          <div className="reference-card__badge">
            <span className="shield-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="9 12 11 14 15 10"></polyline>
              </svg>
            </span>
            <span>VERIFIED RCA FACULTY</span>
          </div>

          <div className="reference-card__header">
            <div className="reference-avatar">
              <span className="reference-initials">ML</span>
            </div>
            <div className="reference-info">
              <h3 className="reference-name">MUKAMA Louis</h3>
              <p className="reference-role">Instructor, Rwanda Coding Academy</p>
              <span className="reference-dept">Software Engineering &amp; Computer Science</span>
            </div>
          </div>

          <p className="reference-endorsement">
            Supervising instructor and academic advisor at Rwanda Coding Academy, guiding advanced curriculum in software engineering, distributed systems, and collaborative development.
          </p>

          <div className="reference-contacts">
            {/* Email contact row */}
            <div className="contact-chip">
              <div className="contact-chip__meta">
                <span className="chip-label">EMAIL ADDRESS</span>
                <a href="mailto:mukamalouis1@gmail.com" className="chip-value">
                  mukamalouis1@gmail.com
                </a>
              </div>
              <button 
                className="copy-mini-btn"
                onClick={() => handleCopy('mukamalouis1@gmail.com', 'email')}
                title="Copy email address"
              >
                {copiedType === 'email' ? '✓ Copied' : 'Copy'}
              </button>
            </div>

            {/* Phone contact row */}
            <div className="contact-chip">
              <div className="contact-chip__meta">
                <span className="chip-label">PHONE NUMBER</span>
                <a href="tel:+250783875713" className="chip-value">
                  +250 783 875 713
                </a>
              </div>
              <button 
                className="copy-mini-btn"
                onClick={() => handleCopy('+250783875713', 'phone')}
                title="Copy phone number"
              >
                {copiedType === 'phone' ? '✓ Copied' : 'Copy'}
              </button>
            </div>
          </div>

          <div className="reference-footer">
            <div className="verified-seal">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span>Rwanda Coding Academy Institutional Endorsement</span>
            </div>
          </div>
        </div>

        {/* Extended References Callout Card */}
        <div className="reference-callout">
          <div className="callout-icon-wrap">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h3>Need Further Verification?</h3>
          <p>
            Additional academic, project team, and industry references are available upon request. 
            I am happy to provide comprehensive recommendation letters, academic transcripts, and mentor verification.
          </p>
          <a href="#contact" className="btn ghost">
            <span>Request Additional References</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default References
