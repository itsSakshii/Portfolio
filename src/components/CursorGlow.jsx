import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const outerRef = useRef(null)
  const innerRef = useRef(null)
  const mouse = useRef({ x: -800, y: -800 })
  const posO  = useRef({ x: -800, y: -800 })  // outer — dreamy lag
  const posI  = useRef({ x: -800, y: -800 })  // inner — faster + stretchy
  const vel   = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return

    const onMove = (e) => { mouse.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMove)

    let raf
    const tick = () => {
      // outer aura — very lazy
      posO.current.x += (mouse.current.x - posO.current.x) * 0.04
      posO.current.y += (mouse.current.y - posO.current.y) * 0.04

      // inner core — faster, drives velocity
      const dx = mouse.current.x - posI.current.x
      const dy = mouse.current.y - posI.current.y
      posI.current.x += dx * 0.11
      posI.current.y += dy * 0.11

      // smooth velocity for stretch
      vel.current.x += (dx - vel.current.x) * 0.14
      vel.current.y += (dy - vel.current.y) * 0.14

      const speed  = Math.sqrt(vel.current.x ** 2 + vel.current.y ** 2)
      const angle  = Math.atan2(vel.current.y, vel.current.x) * (180 / Math.PI)
      const scaleX = 1 + Math.min(speed * 0.038, 1.1)   // stretch along movement
      const scaleY = Math.max(0.38, 1 / scaleX)          // squish perpendicular

      if (outerRef.current) {
        outerRef.current.style.left = posO.current.x + 'px'
        outerRef.current.style.top  = posO.current.y + 'px'
      }
      if (innerRef.current) {
        innerRef.current.style.left      = posI.current.x + 'px'
        innerRef.current.style.top       = posI.current.y + 'px'
        innerRef.current.style.transform = `translate(-50%,-50%) rotate(${angle}deg) scaleX(${scaleX}) scaleY(${scaleY})`
      }

      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Outer — slow, breathing, cool-silver tint */}
      <div ref={outerRef} style={{
        position: 'fixed',
        width: '200px', height: '200px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200,215,240,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
        zIndex: 0,
        animation: 'glow-breath 3.2s ease-in-out infinite',
      }} />

      {/* Inner — stretches like a comet tail on fast moves */}
      <div ref={innerRef} style={{
        position: 'fixed',
        width: '72px', height: '72px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(245,245,240,0.14) 0%, rgba(210,222,240,0.06) 55%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
    </>
  )
}
