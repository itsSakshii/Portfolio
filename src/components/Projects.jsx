import { useState } from 'react'
import useReveal from './useReveal'
import { S } from './About'

const projects = [
  { id: '01', title: 'DevConnect', desc: 'Full-stack social platform for developers to share projects, collaborate, and grow — with real-time notifications and activity feeds.', tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'], year: '2024', type: 'Full-Stack App' },
  { id: '02', title: 'ShopNest', desc: 'Modern e-commerce platform with product management, cart, Stripe payments, and an analytics admin dashboard.', tech: ['React', 'Express', 'MongoDB', 'Stripe'], year: '2024', type: 'E-Commerce' },
  { id: '03', title: 'TaskFlow', desc: 'Drag-and-drop Kanban project management tool with team support, deadlines, and real-time collaboration.', tech: ['React', 'Node.js', 'PostgreSQL', 'WS'], year: '2023', type: 'Productivity' },
  { id: '04', title: 'AuraAI', desc: 'AI-powered writing assistant built on the OpenAI API — helps generate content, refine writing, and beat creative blocks.', tech: ['React', 'Express', 'OpenAI', 'Redis'], year: '2024', type: 'AI Application' },
]

function Card({ p, i }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      className="reveal"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      data-h
      style={{
        borderTop: '1px solid rgba(245,245,240,.1)',
        padding: '2.2rem 0',
        cursor: 'none',
        transitionDelay: i * 0.09 + 's',
        transition: 'opacity .85s ease, transform .85s ease',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        {/* Left */}
        <div style={{ flex: '1 1 280px' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '.7rem', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.6rem', letterSpacing: '.28em', color: 'rgba(245,245,240,.28)' }}>{p.id}</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.6rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(245,245,240,.28)' }}>{p.type}</span>
          </div>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
            fontSize: 'clamp(1.7rem,3.2vw,2.6rem)', lineHeight: 1.05,
            letterSpacing: '-.01em', color: '#F5F5F0', marginBottom: '.9rem',
          }}>{p.title}</h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.86rem', lineHeight: 1.82, color: 'rgba(245,245,240,.5)', maxWidth: '460px' }}>{p.desc}</p>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '.9rem', minWidth: '180px' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.65rem', color: 'rgba(245,245,240,.22)', letterSpacing: '.15em' }}>{p.year}</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', justifyContent: 'flex-end' }}>
            {p.tech.map(t => (
              <span key={t} style={{ padding: '.25rem .65rem', border: '1px solid rgba(245,245,240,.11)', fontFamily: 'Inter, sans-serif', fontSize: '.6rem', letterSpacing: '.1em', color: 'rgba(245,245,240,.42)', fontWeight: 300 }}>{t}</span>
            ))}
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(245,245,240,.6)', opacity: hov ? 1 : 0, transform: hov ? 'translateX(0)' : 'translateX(-8px)', transition: 'all .3s ease' }}>
            View Project →
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" ref={ref} style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,6vw,6rem)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="line" style={{ marginBottom: '4rem' }} />
        <div className="reveal" style={S.eyebrow}>✦ Selected Work</div>
        <h2 className="reveal" style={{ ...S.h2, marginBottom: '2.5rem' }}>Projects I've built</h2>
        {projects.map((p, i) => <Card key={p.id} p={p} i={i} />)}
        <div style={{ borderTop: '1px solid rgba(245,245,240,.1)' }} />
      </div>
    </section>
  )
}
