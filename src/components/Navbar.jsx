import { useState, useEffect } from 'react'

const links = ['About', 'Projects', 'Skills', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 40,
      padding: scrolled ? '1rem 0' : '1.5rem 0',
      background: scrolled ? 'rgba(17,17,17,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(245,245,240,0.06)' : 'none',
      transition: 'all .4s ease',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-h
          style={{
            fontFamily: "'Dancing Script', cursive",
            fontSize: '1.25rem',
            color: '#F5F5F0',
            background: 'none', border: 'none', cursor: 'none',
          }}
        >
          Sakshi Singh
        </button>

        {/* Desktop */}
        <ul style={{ display: 'flex', gap: '2.5rem', listStyle: 'none' }} className="hidden md:flex">
          {links.map(l => (
            <li key={l}>
              <button
                onClick={() => go(l)}
                className="ul-hover"
                data-h
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 300,
                  fontSize: '0.72rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
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

        {/* Mobile toggle */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          data-h
          style={{ background: 'none', border: 'none', cursor: 'none' }}
        >
          <span style={{ display: 'block', width: '22px', height: '1px', background: '#F5F5F0', transform: open ? 'rotate(45deg) translateY(9px)' : 'none', transition: 'all .3s' }} />
          <span style={{ display: 'block', width: '14px', height: '1px', background: '#F5F5F0', opacity: open ? 0 : 1, transition: 'all .3s' }} />
          <span style={{ display: 'block', width: '22px', height: '1px', background: '#F5F5F0', transform: open ? 'rotate(-45deg) translateY(-9px)' : 'none', transition: 'all .3s' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          borderTop: '1px solid rgba(245,245,240,0.07)',
          background: 'rgba(17,17,17,0.97)',
          backdropFilter: 'blur(20px)',
        }}>
          {links.map(l => (
            <button
              key={l}
              onClick={() => go(l)}
              data-h
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '1rem 2rem',
                fontFamily: 'Inter, sans-serif', fontWeight: 300,
                fontSize: '0.78rem', letterSpacing: '0.22em', textTransform: 'uppercase',
                color: 'rgba(245,245,240,0.65)',
                background: 'none', border: 'none', cursor: 'none',
                borderBottom: '1px solid rgba(245,245,240,0.04)',
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
