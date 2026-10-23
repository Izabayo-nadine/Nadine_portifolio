import React, { useState, useEffect } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Strengths', href: '#strengths' },
    { label: 'Experience', href: '#experience' },
    { label: 'References', href: '#references' },
    { label: 'Resume', href: '#resume' },
  ]

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="header-inner">
        <a className="logo" href="#home" aria-label="Nadine Portfolio Home">
          <span className="logo__bracket">&lt;</span>
          <span className="logo__name">Nadine</span>
          <span className="logo__dot">.</span>
          <span className="logo__role">dev</span>
          <span className="logo__bracket"> /&gt;</span>
        </a>

        <div className="system-pill" title="Rwanda Coding Academy - Software Engineer Graduate">
          <span className="status-indicator"></span>
          <span className="system-pill__text">RCA Graduate • Ready to Build</span>
        </div>

        <nav className={`nav ${mobileMenuOpen ? 'nav--open' : ''}`} aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="cta" onClick={closeMenu}>
            <span>Get in Touch</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </nav>

        <button 
          className="mobile-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          <span className={`bar ${mobileMenuOpen ? 'bar--open-1' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'bar--open-2' : ''}`}></span>
          <span className={`bar ${mobileMenuOpen ? 'bar--open-3' : ''}`}></span>
        </button>
      </div>
    </header>
  )
}

export default Header
