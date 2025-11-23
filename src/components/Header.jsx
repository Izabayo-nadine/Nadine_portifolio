import React from 'react'

const Header = () => {
  return (
    <header className="site-header">
      <a className="logo" href="#home">
        N
      </a>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#resume">Resume</a>
        <a href="#contact" className="cta">
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header
