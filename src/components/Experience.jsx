import { useState } from 'react'
import useReveal from './useReveal'
import { S } from './About'

const experiences = [
  {
    id: '01',
    role: 'MERN Stack Developer',
    company: 'Galas IT Solutions Pvt. Ltd.',
    type: 'Full-time',
    period: 'Sep 2024 — Jul 2025 · 11 mos',
    duration: '11 mos',
    location: 'Remote',
    desc: 'Serving as a MERN Stack Developer working across multiple tech stacks. Leading frontend development using React.js, SASS, and GSAP for animated, high-performance projects, while also contributing to backend integration with MongoDB and Express.js.',
    points: [
      'Built and animated frontend interfaces using React.js, SASS, and GSAP for complex UI structures',
      'Worked on a full-stack application with Material UI on the frontend and Hapi.js on the backend',
      'Integrated MongoDB and Express.js to deliver end-to-end feature development across projects',
    ],
    tech: ['React.js', 'GSAP', 'SASS', 'Material UI', 'TanStack Query', 'MongoDB', 'Express.js', 'Hapi.js', 'JavaScript'],
  },
  {
    id: '02',
    role: 'Frontend Web Developer',
    company: 'Galas IT Solutions Pvt. Ltd.',
    type: 'Internship',
    period: 'Jun 2024 — Aug 2024 · 3 mos',
    duration: '3 mos',
    location: 'Remote',
    desc: 'Contributed to the official company website during the internship, gaining hands-on experience in frontend development. Worked with advanced animation libraries alongside core web technologies, while also building team collaboration and real-world development skills.',
    points: [
      'Contributed directly to the official Galas IT Solutions website as the primary frontend task',
      'Worked with React.js and GSAP animations — a challenging and skill-doubling experience',
      'Strengthened team collaboration and real-life project delivery skills across the internship',
    ],
    tech: ['React.js', 'GSAP', 'JavaScript', 'HTML5 / CSS3'],
  },
]

export default function Experience() {
  const ref = useReveal()
  const [active, setActive] = useState(null)

  return (
    <section id="experience" ref={ref} style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,6vw,6rem)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="line" style={{ marginBottom: '4rem' }} />

        <div className="reveal" style={S.eyebrow}>✦ Experience</div>
        <h2 className="reveal" style={{ ...S.h2, marginBottom: '3.5rem' }}>
          Where I've <em>worked</em>
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: 0, bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, rgba(245,245,240,.15), rgba(245,245,240,.04))',
            display: 'none',
          }} className="timeline-line" />

          {experiences.map((exp, i) => {
            const isOpen = active === exp.id
            return (
              <div
                key={exp.id}
                className="reveal"
                style={{
                  transitionDelay: i * 0.1 + 's',
                  borderTop: '1px solid rgba(245,245,240,.09)',
                  padding: '0',
                }}
              >
                {/* Header row — always visible, clickable */}
                <button
                  onClick={() => setActive(isOpen ? null : exp.id)}
                  data-h
                  style={{
                    width: '100%',
                    background: isOpen ? 'rgba(245,245,240,.03)' : 'transparent',
                    border: 'none',
                    cursor: 'none',
                    padding: '2rem 0',
                    textAlign: 'left',
                    transition: 'background .3s',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between' }}>

                    {/* Left side */}
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap', flex: '1 1 300px' }}>
                      {/* Number */}
                      <span style={{
                        fontFamily: 'Inter, sans-serif', fontWeight: 300,
                        fontSize: '.58rem', letterSpacing: '.3em',
                        color: 'rgba(245,245,240,.25)',
                        minWidth: '28px',
                      }}>{exp.id}</span>

                      <div>
                        <div style={{
                          fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                          fontSize: 'clamp(1.3rem,2.6vw,2rem)',
                          lineHeight: 1.1, letterSpacing: '-.01em',
                          color: '#F5F5F0',
                          marginBottom: '1rem',
                        }}>
                          {exp.role}
                        </div>
                        <div style={{
                          fontFamily: 'Inter, sans-serif', fontWeight: 300,
                          fontSize: '.78rem', letterSpacing: '.04em',
                          color: 'rgba(245,245,240,.45)',
                          display: 'flex', gap: '.75rem', flexWrap: 'wrap', alignItems: 'center',
                        }}>
                          <span>{exp.company}</span>
                          <span style={{ color: 'rgba(245,245,240,.18)' }}>·</span>
                          <span style={{
                            padding: '.18rem .6rem',
                            border: '1px solid rgba(245,245,240,.1)',
                            fontSize: '.6rem', letterSpacing: '.14em',
                            color: 'rgba(245,245,240,.38)',
                          }}>{exp.type}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right side */}
                    <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.72rem', color: 'rgba(245,245,240,.5)', letterSpacing: '.06em', marginBottom: '.2rem' }}>{exp.period}</div>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.6rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(245,245,240,.25)' }}>{exp.location}</div>
                      </div>

                      {/* Expand toggle */}
                      <div style={{
                        width: '32px', height: '32px',
                        border: '1px solid rgba(245,245,240,.15)',
                        borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all .35s ease',
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        background: isOpen ? 'rgba(245,245,240,.07)' : 'transparent',
                      }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <line x1="5" y1="0" x2="5" y2="10" stroke="rgba(245,245,240,0.6)" strokeWidth="1" />
                          <line x1="0" y1="5" x2="10" y2="5" stroke="rgba(245,245,240,0.6)" strokeWidth="1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </button>

                {/* Expandable body */}
                <div style={{
                  overflow: 'hidden',
                  maxHeight: isOpen ? '600px' : '0',
                  transition: 'max-height .55s cubic-bezier(.4,0,.2,1)',
                }}>
                  <div className="exp-body" style={{
                    padding: '0 0 2.5rem 2.8rem',
                    borderLeft: '1px solid rgba(245,245,240,.08)',
                    marginLeft: '1rem',
                  }}>
                    {/* Description */}
                    <p style={{
                      fontFamily: 'Inter, sans-serif', fontWeight: 300,
                      fontSize: '.88rem', lineHeight: 1.85,
                      color: 'rgba(245,245,240,.52)',
                      marginBottom: '1.5rem',
                      maxWidth: '640px',
                    }}>
                      {exp.desc}
                    </p>

                    {/* Bullet points */}
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.8rem' }}>
                      {exp.points.map((pt, pi) => (
                        <li key={pi} style={{
                          fontFamily: 'Inter, sans-serif', fontWeight: 300,
                          fontSize: '.84rem', lineHeight: 1.75,
                          color: 'rgba(245,245,240,.6)',
                          padding: '.4rem 0',
                          paddingLeft: '1.2rem',
                          position: 'relative',
                          borderBottom: pi < exp.points.length - 1 ? '1px solid rgba(245,245,240,.04)' : 'none',
                          maxWidth: '580px',
                        }}>
                          <span style={{
                            position: 'absolute', left: 0, top: '.55rem',
                            width: '4px', height: '1px',
                            background: 'rgba(245,245,240,.3)',
                            display: 'block',
                          }} />
                          {pt}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.45rem' }}>
                      {exp.tech.map(t => (
                        <span key={t} style={{
                          padding: '.28rem .7rem',
                          border: '1px solid rgba(245,245,240,.1)',
                          fontFamily: 'Inter, sans-serif', fontWeight: 300,
                          fontSize: '.6rem', letterSpacing: '.12em',
                          color: 'rgba(245,245,240,.42)',
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Bottom line */}
          <div style={{ borderTop: '1px solid rgba(245,245,240,.09)' }} />
        </div>

        {/* Resume CTA */}
        <div className="reveal" style={{ marginTop: '3.5rem', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
          <a
            href="https://drive.google.com/uc?export=download&id=1KpRT16D9c3f8UZc0_HIgw-pNIj8bX1Xk"
            target="_blank"
            rel="noreferrer"
            data-h
            style={{
              display: 'inline-block',
              padding: '.85rem 2.2rem',
              border: '1px solid rgba(245,245,240,.6)',
              color: '#F5F5F0',
              fontFamily: 'Inter, sans-serif', fontWeight: 300,
              fontSize: '.72rem', letterSpacing: '.24em', textTransform: 'uppercase',
              textDecoration: 'none',
              cursor: 'none',
              transition: 'all .3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F0'; e.currentTarget.style.color = '#111111' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#F5F5F0' }}
          >
            Download Resume
          </a>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.72rem', letterSpacing: '.1em', color: 'rgba(245,245,240,.3)' }}>
            PDF ·
          </span>
        </div>
      </div>
    </section>
  )
}
