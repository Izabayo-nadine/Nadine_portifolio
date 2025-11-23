import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      text: "Nadine's mentoring approach helped me understand complex algorithms. Her patience and clear explanations made learning enjoyable.",
      author: "Jean Paul",
      role: "Year 1 Student, RCA",
      image: "/assets/testimonials/jean-paul.jpg",
      initials: "JP"
    },
    {
      text: "Working with Nadine on the prototyping program was amazing. She brings creativity and technical expertise to every project.",
      author: "Grace M.",
      role: "Fellow Student",
      image: "/assets/testimonials/grace.jpg",
      initials: "GM"
    },
    {
      text: "Nadine's leadership skills and technical knowledge make her an excellent team member. She always delivers quality work.",
      author: "David K.",
      role: "Project Collaborator",
      image: "/assets/testimonials/david.jpg",
      initials: "DK"
    }
  ]

  return (
    <section id="testimonials" className="section">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-content">
              <p>"{testimonial.text}"</p>
            </div>
            <div className="testimonial-author">
              <div className="testimonial-avatar">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="testimonial-avatar-placeholder">
                  <span>{testimonial.initials}</span>
                </div>
              </div>
              <div className="testimonial-info">
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
