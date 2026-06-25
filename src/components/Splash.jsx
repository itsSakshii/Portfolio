import { useEffect, useState } from 'react'

export default function Splash({ onDone }) {
  const [show, setShow] = useState(false)
  const [exit, setExit] = useState(false)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    // slight delay so fonts load
    const t0 = setTimeout(() => setShow(true), 80)

    const interval = setInterval(() => {
      setPct(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + 1.4
      })
    }, 28)

    const t1 = setTimeout(() => setExit(true), 3400)
    const t2 = setTimeout(() => onDone(), 4100)

    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearInterval(interval) }
  }, [onDone])

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 50,
        background: '#111111',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: exit ? 0 : 1,
        transition: 'opacity .7s ease',
        pointerEvents: exit ? 'none' : 'all',
      }}
    >
      {/* Vertical side label */}
      <div style={{
        position: 'absolute', left: '2rem', top: '50%',
        writingMode: 'vertical-lr',
        transform: 'rotate(180deg) translateX(50%)',
        fontSize: '0.58rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'rgba(245,245,240,0.38)',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 300,
        userSelect: 'none',
      }}>
        ThenandNow
      </div>

      {/* Main block */}
      <div style={{ position: 'relative', userSelect: 'none', padding: '0 1rem' }}>

        {/* PORTFOLIO */}
        <h1 style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 200,
          fontSize: 'clamp(3.8rem, 10.5vw, 9.8rem)',
          letterSpacing: '-0.015em',
          lineHeight: 1,
          color: '#F5F5F0',
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity 1s ease .08s, transform 1s ease .08s',
          position: 'relative',
          whiteSpace: 'nowrap',
        }}>
          PORTFOLIO

          {/* Script name — floats over the right half, like reference */}
          <span style={{
            position: 'absolute',
            top: '28%',
            right: '-1%',
            fontFamily: "'Dancing Script', cursive",
            fontWeight: 400,
            fontSize: 'clamp(1rem, 2.6vw, 2.1rem)',
            color: 'rgba(245,245,240,0.4)',
            opacity: show ? 1 : 0,
            transition: 'opacity 1.3s ease .55s',
            pointerEvents: 'none',
            letterSpacing: '0.02em',
          }}>
            Sakshi Singh
          </span>
        </h1>

        {/* software developer */}
        <div style={{
          marginTop: '0.25rem',
          textAlign: 'right',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 300,
          fontSize: 'clamp(0.62rem, 1.3vw, 0.9rem)',
          letterSpacing: '0.28em',
          color: 'rgba(245,245,240,0.55)',
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 1s ease .28s, transform 1s ease .28s',
        }}>
          software developer
        </div>
      </div>

      {/* Progress line */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%', height: '1px',
        background: 'rgba(245,245,240,0.07)',
      }}>
        <div style={{
          height: '100%',
          width: Math.min(pct, 100) + '%',
          background: 'rgba(245,245,240,0.45)',
          transition: 'width .06s linear',
        }} />
      </div>
    </div>
  )
}
