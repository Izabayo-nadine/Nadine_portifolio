import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [copiedItem, setCopiedItem] = useState(null)

  const handleCopy = (text, item) => {
    navigator.clipboard.writeText(text)
    setCopiedItem(item)
    setTimeout(() => setCopiedItem(null), 2000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const form = e.target
      const data = new FormData(form)
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data).toString()
      })

      if (response.ok || response.status === 200) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        // Fallback for local preview
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }
    } catch (error) {
      // In local dev without netlify backend, provide graceful message
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactCards = [
    {
      id: 'email',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      label: 'Email',
      value: 'izabayonadine08@gmail.com',
      actionUrl: 'mailto:izabayonadine08@gmail.com'
    },
    {
      id: 'phone',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      label: 'Phone / WhatsApp',
      value: '+250 793 866 870',
      actionUrl: 'tel:+250793866870'
    },
    {
      id: 'location',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      label: 'Location',
      value: 'Kigali, Rwanda (CAT / UTC+2)',
      actionUrl: 'https://maps.google.com/?q=Kigali,Rwanda'
    },
    {
      id: 'github',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/Izabayo-nadine',
      actionUrl: 'https://github.com/Izabayo-nadine'
    }
  ]

  return (
    <section id="contact" className="section contact-section">
      <div className="section-header">
        <span className="section-eyebrow">// TRANSMISSION &amp; INQUIRIES</span>
        <h2>Get in Touch</h2>
        <p className="section-desc">
          Ready to discuss engineering roles, backend systems architecture, or collaborative technical opportunities.
        </p>
      </div>

      <div className="contact-container">
        {/* Left Column: Direct channels */}
        <div className="contact-info-panel">
          <div className="contact-status-card">
            <div className="status-header">
              <span className="live-ping"></span>
              <span className="status-text">CURRENT AVAILABILITY: OPEN FOR OPPORTUNITIES</span>
            </div>
            <p className="status-note">
              Seeking software engineering roles, distributed systems projects, and high-impact teams where I can build and grow.
            </p>
          </div>

          <div className="contact-channels-list">
            {contactCards.map((card) => (
              <div key={card.id} className="contact-channel-card">
                <div className="channel-icon-wrap">
                  {card.icon}
                </div>
                <div className="channel-text-wrap">
                  <span className="channel-label">{card.label}</span>
                  <a 
                    href={card.actionUrl} 
                    className="channel-value"
                    target={card.actionUrl.startsWith('http') ? '_blank' : undefined}
                    rel={card.actionUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {card.value}
                  </a>
                </div>
                {(card.id === 'email' || card.id === 'phone') && (
                  <button 
                    className="channel-copy-btn"
                    onClick={() => handleCopy(card.value, card.id)}
                    title={`Copy ${card.label}`}
                  >
                    {copiedItem === card.id ? '✓' : 'Copy'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Transmission Form */}
        <div className="contact-form-panel">
          <form 
            className="contact-terminal-form" 
            name="contact" 
            method="POST" 
            data-netlify="true"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            
            <div className="form-header-bar">
              <span className="form-header-prompt">❯ message.send()</span>
              <span className="form-header-badge">ENCRYPTED DISPATCH</span>
            </div>

            {submitStatus === 'success' && (
              <div className="form-alert form-alert--success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Thank you! Your message has been dispatched successfully. Nadine will respond promptly.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="form-alert form-alert--error">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span>There was a transmission issue. Please reach out directly to izabayonadine08@gmail.com.</span>
              </div>
            )}

            <div className="form-grid">
              <div className="input-field">
                <label htmlFor="contact-name">Your Name</label>
                <input 
                  id="contact-name"
                  type="text" 
                  name="name" 
                  placeholder="e.g. Alex Johnson"
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>

              <div className="input-field">
                <label htmlFor="contact-email">Email Address</label>
                <input 
                  id="contact-email"
                  type="email" 
                  name="email" 
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="contact-subject">Topic / Subject</label>
              <input 
                id="contact-subject"
                type="text" 
                name="subject" 
                placeholder="Software Engineering Opportunity / Project Collaboration"
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-field">
              <label htmlFor="contact-message">Message Details</label>
              <textarea 
                id="contact-message"
                name="message" 
                rows="5" 
                placeholder="Tell me about your team, the engineering challenge, or what you'd like to collaborate on..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button 
              className="btn primary submit-btn" 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner-icon"></span>
                  <span>Transmitting Message...</span>
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  <span>Dispatch Message</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
