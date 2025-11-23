import React, { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let width = 0,
      height = 0,
      deviceRatio = window.devicePixelRatio || 1

    const nodes = new Array(8).fill(0).map((_, i) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() * 2 - 1) * 0.12,
      vy: (Math.random() * 2 - 1) * 0.12,
      r: 120 + Math.random() * 180,
      colorStops:
        i % 3 === 0
          ? ['#ff4ecd', '#ffd166']
          : i % 3 === 1
          ? ['#7cffe3', '#00e7c1']
          : ['#7a5cff', '#ff4ecd'],
    }))

    function resize() {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * deviceRatio)
      canvas.height = Math.floor(height * deviceRatio)
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      ctx.setTransform(deviceRatio, 0, 0, deviceRatio, 0, 0)
    }

    function step(dt) {
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'source-over'
      ctx.fillStyle = '#07061a'
      ctx.fillRect(0, 0, width, height)

      nodes.forEach((n) => {
        n.x += n.vx * dt * 0.001
        n.y += n.vy * dt * 0.001
        if (n.x < -0.2 || n.x > 1.2) n.vx *= -1
        if (n.y < -0.2 || n.y > 1.2) n.vy *= -1
        const cx = n.x * width
        const cy = n.y * height
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, n.r)
        g.addColorStop(0, hexToRgba(n.colorStops[0], 0.85))
        g.addColorStop(1, hexToRgba(n.colorStops[1], 0))
        ctx.globalCompositeOperation = 'lighter'
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(cx, cy, n.r, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    function hexToRgba(hex, a) {
      hex = hex.replace('#', '')
      const bigint = parseInt(hex, 16)
      const r = (bigint >> 16) & 255
      const g = (bigint >> 8) & 255
      const b = bigint & 255
      return `rgba(${r}, ${g}, ${b}, ${a})`
    }

    window.addEventListener('resize', resize, { passive: true })
    resize()

    let last = performance.now()
    function animate(now) {
      const dt = Math.min(50, now - last)
      last = now
      step(dt)
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="bg"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        display: 'block',
        width: '100%',
        height: '100%',
      }}
    />
  )
}

export default AnimatedBackground

