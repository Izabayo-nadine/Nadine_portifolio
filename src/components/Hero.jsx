import React from 'react'

const Hero = () => {
  return (
    <section className="hero" id="home" aria-label="Hero">
      <div className="hero__content">
        <h1>
          <span className="hi">Hello</span>, I'm{' '}
          <span className="name">Nadine</span>
        </h1>
        <p className="tag">Software Engineer • Rwanda Coding Academy</p>
        <p className="lead">
          I craft performant web experiences, playful interactions, and
          human‑centered solutions.
        </p>
        <div className="actions">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="#contact" className="btn ghost">
            Get in Touch
          </a>
        </div>
      </div>
      <div className="hero__orbit" aria-hidden="true">
        <div className="planet planet--1"></div>
        <div className="planet planet--2"></div>
        <div className="planet planet--3"></div>
      </div>
    </section>
  )
}

export default Hero

