import { useState, useEffect } from 'react'

const links = ['About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768)

  useEffect(() => {
    const onScroll  = () => setScrolled(window.scrollY > 50)
    const onResize  = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) setOpen(false)
    }
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // close menu on body scroll (user scrolled past nav)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 40,
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      background: scrolled || open ? 'rgba(17,17,17,0.95)' : 'transparent',
      backdropFilter: scrolled || open ? 'blur(16px)' : 'none',
      borderBottom: scrolled && !open ? '1px solid rgba(245,245,240,0.06)' : 'none',
      transition: 'padding .4s ease, background .4s ease, backdrop-filter .4s ease',
    }}>
      <div style={{
        maxWidth: '1280px', margin: '0 auto',
        padding: '0 clamp(1.2rem,4vw,2rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-h
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.25rem', color: '#F5F5F0',
            background: 'none', border: 'none', cursor: isMobile ? 'pointer' : 'none',
          }}
        >
          Sakshi Singh
        </button>

        {/* Desktop nav */}
        {!isMobile && (
          <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map(l => (
              <li key={l}>
                <button
                  onClick={() => go(l)}
                  className="ul-hover"
                  data-h
                  style={{
                    fontFamily: 'Inter, sans-serif', fontWeight: 300,
                    fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'rgba(245,245,240,0.6)',
                    background: 'none', border: 'none', cursor: 'none',
                    transition: 'color .3s',
                  }}
                  onMouseEnter={e => e.target.style.color = '#F5F5F0'}
                  onMouseLeave={e => e.target.style.color = 'rgba(245,245,240,0.6)'}
                >
                  {l}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Hamburger — mobile only */}
        {isMobile && (
          <button
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '6px', display: 'flex', flexDirection: 'column',
              gap: '5px', alignItems: 'flex-end',
            }}
          >
            <span style={{
              display: 'block', height: '1.5px', background: '#F5F5F0', borderRadius: '2px',
              width: '24px',
              transform: open ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none',
              transition: 'transform .3s ease',
            }} />
            <span style={{
              display: 'block', height: '1.5px', background: '#F5F5F0', borderRadius: '2px',
              width: '16px',
              opacity: open ? 0 : 1,
              transition: 'opacity .2s ease',
            }} />
            <span style={{
              display: 'block', height: '1.5px', background: '#F5F5F0', borderRadius: '2px',
              width: '24px',
              transform: open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
              transition: 'transform .3s ease',
            }} />
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && (
        <div style={{
          overflow: 'hidden',
          maxHeight: open ? '320px' : '0',
          transition: 'max-height .4s cubic-bezier(.4,0,.2,1)',
          background: 'rgba(17,17,17,0.98)',
          borderTop: open ? '1px solid rgba(245,245,240,0.07)' : 'none',
        }}>
          {links.map((l, i) => (
            <button
              key={l}
              onClick={() => go(l)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '1.15rem clamp(1.2rem,4vw,2rem)',
                fontFamily: 'Inter, sans-serif', fontWeight: 300,
                fontSize: '0.82rem', letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'rgba(245,245,240,0.7)',
                background: 'none', border: 'none', cursor: 'pointer',
                borderBottom: i < links.length - 1 ? '1px solid rgba(245,245,240,0.05)' : 'none',
              }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
