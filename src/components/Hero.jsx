import { useEffect, useRef } from 'react'

const dots = Array.from({ length: 9 })

export default function Hero() {
  const ref = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => {
      ref.current?.querySelectorAll('.h-reveal').forEach((el, i) => {
        setTimeout(() => {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }, 150 + i * 160)
      })
    }, 50)
    return () => clearTimeout(t)
  }, [])

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const hReveal = {
    opacity: 0,
    transform: 'translateY(28px)',
    transition: 'opacity .9s ease, transform .9s ease',
  }

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(6rem,10vw,8rem) clamp(1.5rem,6vw,6rem) 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(245,245,240,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(245,245,240,.022) 1px,transparent 1px)`,
        backgroundSize: '72px 72px',
      }} />
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '18%', right: '8%',
        width: '480px', height: '480px', pointerEvents: 'none',
        background: 'radial-gradient(circle,rgba(245,245,240,.03) 0%,transparent 70%)',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>

        {/* Greeting */}
        <div className="h-reveal" style={{ ...hReveal, display: 'flex', alignItems: 'center', gap: '.65rem', marginBottom: '1.4rem' }}>
          <span style={{ fontSize: '1rem' }}>✦</span>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontWeight: 300,
            fontSize: '.7rem', letterSpacing: '.34em', textTransform: 'uppercase',
            color: 'rgba(245,245,240,.42)',
          }}>
            hai!, kenalin aku
          </span>
        </div>

        {/* Name */}
        <h1 className="h-reveal" style={{
          ...hReveal,
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: 'clamp(3.4rem,9vw,8rem)',
          lineHeight: .95,
          letterSpacing: '-.02em',
          color: '#F5F5F0',
          marginBottom: '.5rem',
        }}>
          Sakshi Singh
        </h1>

        {/* a.k.a. */}
        <div className="h-reveal" style={{
          ...hReveal,
          fontFamily: 'Inter, sans-serif', fontWeight: 300,
          fontSize: 'clamp(.78rem,1.4vw,.95rem)',
          color: 'rgba(245,245,240,.48)',
          letterSpacing: '.06em',
          marginBottom: '2.4rem',
        }}>
          <span style={{ opacity: .45, fontSize: '.78em', marginRight: '.4rem' }}>a.k.a.</span>
          Full-Stack Software Developer
        </div>

        {/* Bio */}
        <p className="h-reveal" style={{
          ...hReveal,
          fontFamily: 'Inter, sans-serif', fontWeight: 300,
          fontSize: 'clamp(.82rem,1.3vw,.95rem)',
          lineHeight: 1.88,
          color: 'rgba(245,245,240,.55)',
          maxWidth: '500px',
          marginBottom: '3rem',
        }}>
          A software developer focused on building modern, aesthetic, and communicative web experiences.
          Passionate about full-stack development, clean UI/UX, and open-source.{' '}
          <em style={{ color: 'rgba(245,245,240,.35)', fontStyle: 'italic' }}>
            "Either you win or you learn."
          </em>
        </p>

        {/* CTAs */}
        <div className="h-reveal" style={{
          ...hReveal, display: 'flex', gap: '1.2rem', flexWrap: 'wrap',
        }}>
          {[
            { label: 'View Work', id: 'projects', primary: true },
            { label: 'Get in Touch', id: 'contact', primary: false },
          ].map(({ label, id, primary }) => (
            <button
              key={label}
              onClick={() => go(id)}
              data-h
              style={{
                padding: '.8rem 2rem',
                border: primary ? '1px solid rgba(245,245,240,.7)' : '1px solid rgba(245,245,240,.15)',
                background: 'transparent',
                color: primary ? '#F5F5F0' : 'rgba(245,245,240,.5)',
                fontFamily: 'Inter, sans-serif', fontWeight: 300,
                fontSize: '.72rem', letterSpacing: '.22em', textTransform: 'uppercase',
                cursor: 'none',
                transition: 'all .3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F0'; e.currentTarget.style.color = '#111111'; e.currentTarget.style.borderColor = '#F5F5F0' }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = primary ? '#F5F5F0' : 'rgba(245,245,240,.5)'
                e.currentTarget.style.borderColor = primary ? 'rgba(245,245,240,.7)' : 'rgba(245,245,240,.15)'
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Slide dots — bottom center */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: '.45rem', alignItems: 'center',
      }}>
        {dots.map((_, i) => (
          <div key={i} style={{
            width: i === 1 ? '18px' : '6px',
            height: '6px',
            borderRadius: '3px',
            background: i === 1 ? 'rgba(245,245,240,.75)' : 'rgba(245,245,240,.18)',
          }} />
        ))}
      </div>

      {/* Scroll indicator — bottom right */}
      <div style={{
        position: 'absolute', bottom: '2rem', right: '2rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem',
      }}>
        <span style={{
          fontFamily: 'Inter, sans-serif', fontSize: '.58rem',
          letterSpacing: '.28em', textTransform: 'uppercase',
          color: 'rgba(245,245,240,.28)',
          writingMode: 'vertical-lr',
        }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '44px', background: 'linear-gradient(to bottom,rgba(245,245,240,.28),transparent)' }} />
      </div>
    </section>
  )
}
