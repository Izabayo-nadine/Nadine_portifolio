import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      text: "Nadine's mentoring approach helped me demystify complex algorithms and data structures. Her patience and structured step-by-step guidance made our Ideation & Prototyping semester both exciting and transformative.",
      author: "Jean Paul",
      role: "Year 1 Student, Rwanda Coding Academy",
      initials: "JP"
    },
    {
      text: "Working alongside Nadine on full-stack and mobile applications was an exceptional experience. She brings architectural clarity, rapid debugging skills, and unwavering dedication to team success.",
      author: "Grace M.",
      role: "Engineering Peer, RCA",
      initials: "GM"
    },
    {
      text: "Nadine is a reliable, disciplined software engineer. Her mastery of backend services in Java Spring Boot and Kafka event streams made our inter-service integration seamless.",
      author: "David K.",
      role: "Distributed Systems Project Collaborator",
      initials: "DK"
    }
  ]

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="section-header">
        <span className="section-eyebrow">// PEER &amp; MENTEE FEEDBACK</span>
        <h2>Peer Testimonials</h2>
        <p className="section-desc">
          Reflections from fellow engineering peers and students mentored in the Ideation &amp; Prototyping Program.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote-mark">“</div>
            <p className="testimonial-text">{t.text}</p>
            <div className="testimonial-author-row">
              <div className="author-avatar-chip">
                <span>{t.initials}</span>
              </div>
              <div className="author-details">
                <strong className="author-name">{t.author}</strong>
                <span className="author-role">{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
