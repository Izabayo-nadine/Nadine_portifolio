import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

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
      // For Netlify Forms
      const form = e.target
      const formData = new FormData(form)
      
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  const contactInfo = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      label: "Email",
      value: "izabayonadine08@gmail.com",
      link: "mailto:izabayonadine08@gmail.com"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      label: "Phone",
      value: "+250 793866870",
      link: "tel:+250793866870"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
        </svg>
      ),
      label: "Location",
      value: "Kigali, Rwanda",
      link: "https://maps.google.com/?q=Kigali,Rwanda"
    }
  ]

  return (
    <section id="contact" className="section">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            I'm always excited to discuss new opportunities, collaborate on projects, 
            or just have a chat about technology and innovation.
          </p>
          <div className="contact-methods">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link} 
                className="contact-method"
                target={info.link.startsWith('http') ? '_blank' : undefined}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-icon">
                  {info.icon}
                </div>
                <div className="contact-details">
                  <span className="contact-label">{info.label}</span>
                  <span className="contact-value">{info.value}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <form 
          className="contact-form" 
          name="contact" 
          method="POST" 
          data-netlify="true"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <h3>Send a Message</h3>
          
          {submitStatus === 'success' && (
            <div className="form-message success">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z" />
              </svg>
              Thank you! Your message has been sent successfully.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="form-message error">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
              </svg>
              Sorry, there was an error sending your message. Please try again.
            </div>
          )}
          
          <div className="form-row">
            <label>
              <span>Name</span>
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </label>
            <label>
              <span>Email</span>
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </label>
          </div>
          <label>
            <span>Message</span>
            <textarea 
              name="message" 
              rows="5" 
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button 
            className="btn primary" 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="spinning">
                  <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
                </svg>
                Send Message
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
