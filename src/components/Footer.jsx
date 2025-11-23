import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p>
        © {currentYear} Nadine — Built with love and vibrant gradients.
      </p>
    </footer>
  )
}

export default Footer

