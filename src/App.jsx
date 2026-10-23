import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Strengths from './components/Strengths'
import Experience from './components/Experience'
import References from './components/References'
import Testimonials from './components/Testimonials'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import './App.css'
import './components/styles.css'

function App() {
  useEffect(() => {
    // Progressive enhancement scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    )

    const revealElements = document.querySelectorAll('.section, .project-card, .strength-card, .timeline-node')
    revealElements.forEach((el) => {
      el.classList.add('scroll-reveal')
      observer.observe(el)
    })

    // Safety fallback: ensure all content becomes visible after initial render
    const safetyTimer = setTimeout(() => {
      revealElements.forEach((el) => el.classList.add('in-view'))
    }, 1200)

    return () => {
      clearTimeout(safetyTimer)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="app">
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Strengths />
        <Experience />
        <References />
        <Testimonials />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
