import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)
  const mouse = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const move = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dot.current) {
        dot.current.style.left = e.clientX + 'px'
        dot.current.style.top = e.clientY + 'px'
      }
    }

    const over = () => ring.current?.classList.add('big')
    const out = () => ring.current?.classList.remove('big')

    document.addEventListener('mousemove', move)
    document.querySelectorAll('a,button,[data-h]').forEach(el => {
      el.addEventListener('mouseenter', over)
      el.addEventListener('mouseleave', out)
    })

    let raf
    const tick = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.13
      pos.current.y += (mouse.current.y - pos.current.y) * 0.13
      if (ring.current) {
        ring.current.style.left = pos.current.x + 'px'
        ring.current.style.top = pos.current.y + 'px'
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      document.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="cur-dot" />
      <div ref={ring} className="cur-ring" />
    </>
  )
}
