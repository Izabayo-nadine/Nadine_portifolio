import React, { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = 0
    let height = 0
    let animationFrameId
    const deviceRatio = Math.min(window.devicePixelRatio || 1, 2)

    // Mouse tracking for interactive effect
    const mouse = {
      x: null,
      y: null,
      radius: 140
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })

    // Node particles
    let particles = []
    const particleCount = 55

    const createParticles = () => {
      particles = []
      const colors = ['#00f5d4', '#7c4dff', '#00b4d8', '#ff3898']
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: Math.random() * 2 + 1.2,
          color: colors[i % colors.length],
          baseAlpha: Math.random() * 0.4 + 0.3
        })
      }
    }

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * deviceRatio)
      canvas.height = Math.floor(height * deviceRatio)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0)
      createParticles()
    }

    window.addEventListener('resize', resize, { passive: true })
    resize()

    // Draw cyber grid lines
    const drawGrid = (timestamp) => {
      const gridSize = 48
      const pulse = Math.sin(timestamp * 0.001) * 0.015 + 0.03
      ctx.strokeStyle = `rgba(124, 77, 255, ${pulse})`
      ctx.lineWidth = 1

      // Subtle vertical lines
      ctx.beginPath()
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
      }
      ctx.stroke()

      // Subtle horizontal lines
      ctx.beginPath()
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
      }
      ctx.stroke()
    }

    const render = (timestamp) => {
      ctx.clearRect(0, 0, width, height)

      // Dark background gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.3,
        100,
        width * 0.5,
        height * 0.5,
        Math.max(width, height)
      )
      bgGrad.addColorStop(0, '#0d0f22')
      bgGrad.addColorStop(0.5, '#080914')
      bgGrad.addColorStop(1, '#05060b')
      ctx.fillStyle = bgGrad
      ctx.fillRect(0, 0, width, height)

      // Ambient machine glow orbs
      const glow1 = ctx.createRadialGradient(width * 0.8, height * 0.2, 10, width * 0.8, height * 0.2, 380)
      glow1.addColorStop(0, 'rgba(0, 245, 212, 0.08)')
      glow1.addColorStop(1, 'rgba(0, 245, 212, 0)')
      ctx.fillStyle = glow1
      ctx.beginPath()
      ctx.arc(width * 0.8, height * 0.2, 380, 0, Math.PI * 2)
      ctx.fill()

      const glow2 = ctx.createRadialGradient(width * 0.2, height * 0.7, 10, width * 0.2, height * 0.7, 450)
      glow2.addColorStop(0, 'rgba(124, 77, 255, 0.09)')
      glow2.addColorStop(1, 'rgba(124, 77, 255, 0)')
      ctx.fillStyle = glow2
      ctx.beginPath()
      ctx.arc(width * 0.2, height * 0.7, 450, 0, Math.PI * 2)
      ctx.fill()

      drawGrid(timestamp)

      // Update & draw particles and connecting lines
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Move
        p.x += p.vx
        p.y += p.vy

        // Bounce on boundary
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x
          const dy = mouse.y - p.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < mouse.radius) {
            const force = (mouse.radius - dist) / mouse.radius
            p.x -= (dx / dist) * force * 2.2
            p.y -= (dy / dist) * force * 2.2
          }
        }

        // Draw particle node
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.globalAlpha = p.baseAlpha
        ctx.fill()

        // Connect nearby nodes with circuit lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 115) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            const lineAlpha = (1 - dist / 115) * 0.22
            ctx.strokeStyle = p.color
            ctx.globalAlpha = lineAlpha
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1.0
      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="cyber-matrix-canvas"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        display: 'block',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  )
}

export default AnimatedBackground
