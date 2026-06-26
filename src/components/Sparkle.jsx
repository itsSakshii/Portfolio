import { useEffect } from 'react'

const CHARS  = ['✦', '✧', '⋆', '✺', '✸', '·', '✵', '★', '✩']
const COLORS = ['#ffffff', '#e8e8e8', '#c8c8c8', '#d4d4d4', '#f0f0f0', '#a8a8a8', '#efefd0']

export default function Sparkle() {
  useEffect(() => {
    // skip on touch-only devices
    if (window.matchMedia('(hover: none)').matches) return

    let last = 0

    const spawn = (e) => {
      const now = Date.now()
      if (now - last < 35) return   // ~28 particles/sec max
      last = now

      const count = Math.random() < 0.4 ? 2 : 1   // occasionally double-burst

      for (let n = 0; n < count; n++) {
        const char  = CHARS[Math.floor(Math.random() * CHARS.length)]
        const color = COLORS[Math.floor(Math.random() * COLORS.length)]
        const size  = 7 + Math.random() * 9          // 7–16 px
        const dur   = 500 + Math.random() * 400      // 500–900 ms
        const angle = Math.random() * 360            // drift direction
        const dist  = 18 + Math.random() * 28        // drift distance px
        const rad   = (angle * Math.PI) / 180
        const dx    = `${Math.cos(rad) * dist - 50}%`
        const dy    = `${Math.sin(rad) * dist - 50}%`
        const dr    = `${180 + Math.random() * 360}deg`
        const ox    = (Math.random() - 0.5) * 12    // small spawn scatter
        const oy    = (Math.random() - 0.5) * 12

        const el = document.createElement('span')
        el.textContent = char
        el.style.cssText = `
          position: fixed;
          left: ${e.clientX + ox}px;
          top:  ${e.clientY + oy}px;
          color: ${color};
          font-size: ${size}px;
          line-height: 1;
          pointer-events: none;
          z-index: 9997;
          user-select: none;
          --dx: ${dx};
          --dy: ${dy};
          --dr: ${dr};
          animation: glitter-pop ${dur}ms ease-out forwards;
          text-shadow: 0 0 4px ${color}, 0 0 8px rgba(255,255,255,0.4);
        `
        document.body.appendChild(el)
        setTimeout(() => el.remove(), dur + 50)
      }
    }

    window.addEventListener('mousemove', spawn)
    return () => window.removeEventListener('mousemove', spawn)
  }, [])

  return null
}
