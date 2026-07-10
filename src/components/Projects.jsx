import { useState, useCallback, useEffect } from 'react'
import useReveal from './useReveal'
import { S } from './About'
import imgNetworq  from '../assets/Networq.png'
import imgConvoX   from '../assets/ConvoX.png'
import imgCorpSync from '../assets/CorpSync.jpeg'
import imgSplitUs  from '../assets/SplitUs.png'

const PALETTE = {
  '01': { accent: 'rgba(99,102,241,.8)',  border: 'rgba(99,102,241,.3)'  },
  '02': { accent: 'rgba(56,189,248,.8)',  border: 'rgba(56,189,248,.3)'  },
  '03': { accent: 'rgba(168,85,247,.8)',  border: 'rgba(168,85,247,.3)'  },
  '04': { accent: 'rgba(52,211,153,.8)',  border: 'rgba(52,211,153,.3)'  },
}

const projects = [
  {
    id: '01', title: 'Networq Nexus', type: 'Full Stack Application', status: 'In Progress',
    desc: 'Network Nexus is a professional networking platform enabling users to build profiles, connect with professionals, share posts, exchange messages, and discover career opportunities in a secure and interactive environment.',
    tech: ['React', 'Node+Express', 'MongoDB', 'JWT+bcrypt', 'Socket.io', 'Shadcn UI'],
     link: "https://networq-frontend.vercel.app/"  ,   
    image: imgNetworq,
    ready: false,
  },
  {
    id: '02', title: 'ConvoX', type: 'Network based app', status: '2026',
    desc: 'A end to end chat app project of network based on tcp.',
    tech: ['Python', 'Socket.io', 'Streamlit', 'Wireshark'],
    link: 'https://tcp-chat-application-8ghtbpeekjrp9zj7nusc8c.streamlit.app/',
    image: imgConvoX,
    ready: true,
  },
  {
    id: '03', title: 'CorpSync', type: 'AI-Powered Enterprise Management System', status: '2025',
    desc: 'A corporate resource prediction platform based on there performence.',
    tech: ['Python', 'Scikit-learn', 'Flask', 'Bootstrap'],
    image: imgCorpSync,
    ready: true,
  },
  {
    id: '04', title: 'SplitUs', type: 'Full-Stack App', status: '2025',
    desc: 'Full-stack expense-sharing platform that helps friends, roommates, and groups split bills, track balances, and settle expenses effortlessly.',
    tech: ['React', 'Node.js', 'MySQL', 'JWT+bcrypt'],
    image: imgSplitUs,
    ready: true,
  },
]

/* ---------- floating preview (desktop only) ---------- */
function Preview({ project, visible, cursorY }) {
  if (!project) return null
  const pal = PALETTE[project.id]

  const cardH = 220
  const top = Math.max(16, Math.min(cursorY - cardH / 2, window.innerHeight - cardH - 16))

  return (
    <div style={{
      position: 'fixed',
      left: '50%',
      transform: visible
        ? 'translateX(-50%) translateY(0) scale(1)'
        : 'translateX(-50%) translateY(10px) scale(.97)',
      top: top + 'px',
      width: '340px',
      pointerEvents: 'none',
      zIndex: 999,
      opacity: visible ? 1 : 0,
      transition: 'opacity .25s ease, transform .25s ease',
    }}>
      <div style={{
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: `0 0 0 1px ${pal.border}, 0 0 60px -4px ${pal.accent}, 0 24px 80px rgba(0,0,0,.6)`,
      }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '220px', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
          />
        ) : (
          <div style={{ width: '100%', height: '220px', background: '#111' }} />
        )}
      </div>
    </div>
  )
}

/* ---------- single project row ---------- */
function Row({ p, i, onEnter, onLeave }) {
  const [hov, setHov] = useState(false)
  const pal = PALETTE[p.id]

  return (
    <div
      className="reveal"
      onMouseEnter={() => { setHov(true); onEnter(p) }}
      onMouseLeave={() => { setHov(false); onLeave() }}
      onClick={() => p.link && window.open(p.link, '_blank', 'noreferrer')}
      data-h
      style={{
        borderTop: '1px solid rgba(245,245,240,.1)',
        padding: '2.2rem 0',
        cursor: p.link ? 'pointer' : 'none',
        transitionDelay: i * 0.09 + 's',
        transition: 'opacity .85s ease, transform .85s ease',
      }}
    >
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        {/* left */}
        <div style={{ flex: '1 1 280px' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '.7rem', alignItems: 'center' }}>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.6rem', letterSpacing: '.28em', color: 'rgba(245,245,240,.28)' }}>{p.id}</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.6rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(245,245,240,.28)' }}>{p.type}</span>
          </div>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
            fontSize: 'clamp(1.7rem,3.2vw,2.6rem)', lineHeight: 1.05,
            letterSpacing: '-.01em',
            color: hov ? '#fff' : '#F5F5F0',
            marginBottom: '.9rem',
            transition: 'color .2s',
          }}>{p.title}</h3>
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.86rem', lineHeight: 1.82, color: 'rgba(245,245,240,.5)', maxWidth: '460px' }}>{p.desc}</p>
        </div>

        {/* right */}
        <div className="proj-right" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '.9rem', minWidth: '180px' }}>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.65rem', color: 'rgba(245,245,240,.22)', letterSpacing: '.15em' }}>{p.status}</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem', justifyContent: 'flex-end' }}>
            {p.tech.map(t => (
              <span key={t} style={{ padding: '.25rem .65rem', border: '1px solid rgba(245,245,240,.11)', fontFamily: 'Inter, sans-serif', fontSize: '.6rem', letterSpacing: '.1em', color: 'rgba(245,245,240,.42)', fontWeight: 300 }}>{t}</span>
            ))}
          </div>
          <div style={{
            fontFamily: 'Inter, sans-serif', fontSize: '.65rem', letterSpacing: '.2em',
            textTransform: 'uppercase', color: pal.accent,
            opacity: hov ? 1 : 0,
            transform: hov ? 'translateX(0)' : 'translateX(-8px)',
            transition: 'all .3s ease',
          }}>
            {p.ready ? 'View Project →' : 'In Progress →'}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- section ---------- */
export default function Projects() {
  const ref = useReveal()
  const [hoveredProject, setHoveredProject] = useState(null)
  const [cursorY, setCursorY] = useState(0)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1100)

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= 1100)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleMouseMove = useCallback((e) => setCursorY(e.clientY), [])

  return (
    <section
      id="projects"
      ref={ref}
      onMouseMove={isDesktop ? handleMouseMove : undefined}
      style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,6vw,6rem)' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="line" style={{ marginBottom: '4rem' }} />
        <div className="reveal" style={S.eyebrow}>✦ Selected Work</div>
        <h2 className="reveal" style={{ ...S.h2, marginBottom: '2.5rem' }}>Projects I've built</h2>

        {projects.map((p, i) => (
          <Row
            key={p.id}
            p={p}
            i={i}
            onEnter={isDesktop ? setHoveredProject : () => {}}
            onLeave={isDesktop ? () => setHoveredProject(null) : () => {}}
          />
        ))}
        <div style={{ borderTop: '1px solid rgba(245,245,240,.1)' }} />
      </div>

      {/* preview only on desktop */}
      {isDesktop && (
        <Preview
          project={hoveredProject}
          visible={!!hoveredProject}
          cursorY={cursorY}
        />
      )}
    </section>
  )
}
