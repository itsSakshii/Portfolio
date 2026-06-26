import useReveal from './useReveal'
import { S } from './About'

const certifications = [
  {
    id: '01',
    title: 'Software Engineering Job Simulation',
    issuer: 'Blackbird Australia',
    issued: 'Jun 2024',
    credentialId: 'vCmhgbf5ZubExGhAG',
    credentialUrl: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Blackbird/8XSySTLv68WYeFhke_Blackbird%20Australia_wx9XThBJQkXuSYMkv_1718013319520_completion_certificate.pdf',
    skills: ['Amazon Web Services (AWS)', 'JavaScript', 'Git', 'React.js', 'Product Management', 'Unit Testing', 'Collaboration', 'Software Engineering', 'Problem Solving', 'REST APIs', 'Agile'],
  },
  // Add more certifications here
]

export default function Certifications() {
  const ref = useReveal()

  return (
    <section id="certifications" ref={ref} style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,6vw,6rem)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="line" style={{ marginBottom: '4rem' }} />

        <div className="reveal" style={S.eyebrow}>✦ Certifications</div>
        <h2 className="reveal" style={{ ...S.h2, marginBottom: '3.5rem' }}>
          Credentials &amp; <em>achievements</em>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(245,245,240,.07)', border: '1px solid rgba(245,245,240,.07)' }}>
          {certifications.map((cert, i) => (
            <div
              key={cert.id}
              className="reveal"
              style={{
                background: '#111111',
                padding: '2.4rem 2.2rem',
                transitionDelay: i * 0.1 + 's',
                transition: 'opacity .85s ease, transform .85s ease, background .3s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(245,245,240,.025)'}
              onMouseLeave={e => e.currentTarget.style.background = '#111111'}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'space-between', alignItems: 'flex-start' }}>

                {/* Left */}
                <div style={{ flex: '1 1 280px' }}>
                  {/* Number + issuer */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '.75rem' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.58rem', letterSpacing: '.3em', color: 'rgba(245,245,240,.22)' }}>{cert.id}</span>
                    <span style={{ padding: '.18rem .6rem', border: '1px solid rgba(245,245,240,.1)', fontFamily: 'Inter, sans-serif', fontSize: '.58rem', letterSpacing: '.14em', color: 'rgba(245,245,240,.38)', fontWeight: 300 }}>
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
                    fontSize: 'clamp(1.4rem,2.6vw,2rem)', lineHeight: 1.1,
                    letterSpacing: '-.01em', color: '#F5F5F0', marginBottom: '1rem',
                  }}>
                    {cert.title}
                  </h3>

                  {/* Skills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
                    {cert.skills.map((sk, idx) => (
                      <>
                        <span key={sk} style={{
                          padding: '.24rem .65rem',
                          border: '1px solid rgba(245,245,240,.1)',
                          fontFamily: 'Inter, sans-serif', fontWeight: 300,
                          fontSize: '.6rem', letterSpacing: '.1em',
                          color: 'rgba(245,245,240,.4)',
                        }}>{sk}</span>
                        {idx === 5 && <div key="break" style={{ flexBasis: '100%', height: 0 }} />}
                      </>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem', minWidth: '160px' }}>
                  {/* Issued date */}
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.65rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(245,245,240,.28)', marginBottom: '.3rem' }}>
                      Issued
                    </div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.78rem', color: 'rgba(245,245,240,.55)' }}>
                      {cert.issued}
                    </div>
                  </div>

                  {/* Credential ID */}
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.58rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(245,245,240,.2)', marginBottom: '.25rem' }}>
                      Credential ID
                    </div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: '.88rem', color: 'rgba(245,245,240,.38)', letterSpacing: '.04em' }}>
                      {cert.credentialId}
                    </div>
                  </div>

                  {/* Show credential link */}
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-h
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '.45rem',
                      padding: '.55rem 1.1rem',
                      border: '1px solid rgba(245,245,240,.18)',
                      color: 'rgba(245,245,240,.6)',
                      fontFamily: 'Inter, sans-serif', fontWeight: 300,
                      fontSize: '.62rem', letterSpacing: '.18em', textTransform: 'uppercase',
                      textDecoration: 'none', cursor: 'none',
                      transition: 'all .3s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(245,245,240,.55)'
                      e.currentTarget.style.color = '#F5F5F0'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(245,245,240,.18)'
                      e.currentTarget.style.color = 'rgba(245,245,240,.6)'
                    }}
                  >
                    {/* External link icon */}
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M1 9L9 1M9 1H4M9 1V6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Show Credential
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
