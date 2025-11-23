import React from 'react'

const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi! I'm Nadine, a passionate software engineer studying at Rwanda Coding Academy. 
            I specialize in creating modern web applications that solve real-world problems 
            and make people's lives easier.
          </p>
          <p>
            What drives me is the opportunity to mentor and guide fellow students. As a volunteer 
            in the Ideation & Prototyping Program, I help Year 1 students learn how to think 
            creatively, prototype their ideas, and turn concepts into working solutions.
          </p>
          <p>
            When I'm not coding or mentoring, you'll find me exploring new technologies, 
            contributing to open-source projects, or collaborating with my peers on innovative 
            solutions that can make a positive impact in our community.
          </p>
        </div>
        <div className="about-image">
          <div className="profile-image">
            <img 
              src="/assets/profile.jpg" 
              alt="Nadine - Software Engineer" 
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
            <div className="profile-placeholder">
              <span>N</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
