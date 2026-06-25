import useReveal from './useReveal'

const stats = [
  { v: '2+', l: 'Years Experience' },
  { v: '20+', l: 'Projects Built' },
  { v: '5+', l: 'Happy Clients' },
  { v: '∞', l: 'Lines of Code' },
]

const S = { // shared section heading styles
  eyebrow: {
    fontFamily: 'Inter, sans-serif', fontWeight: 300,
    fontSize: '.68rem', letterSpacing: '.36em', textTransform: 'uppercase',
    color: 'rgba(245,245,240,.33)', marginBottom: '1.1rem',
  },
  h2: {
    fontFamily: "'Cormorant Garamond', serif", fontWeight: 300,
    fontSize: 'clamp(2.4rem,5vw,4.2rem)', lineHeight: 1.05,
    letterSpacing: '-.02em', color: '#F5F5F0', marginBottom: '1.8rem',
  },
  body: {
    fontFamily: 'Inter, sans-serif', fontWeight: 300,
    fontSize: '.9rem', lineHeight: 1.9,
    color: 'rgba(245,245,240,.55)',
  },
}

export { S }

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,6vw,6rem)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="line" style={{ marginBottom: '4rem' }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '4rem' }}>
          {/* Left */}
          <div>
            <div className="reveal" style={S.eyebrow}>✦ About Me</div>
            <h2 className="reveal" style={S.h2}>
              Crafting digital<br /><em>experiences</em> that matter
            </h2>
           <p className="reveal" style={{ ...S.body, marginBottom: '1.1rem' }}>
  I'm Sakshi Singh, a full-stack software developer passionate about crafting digital experiences that combine functionality, performance, and elegant design. I thrive on solving complex challenges through clean and scalable code.
</p>

<p className="reveal" style={{ ...S.body, marginBottom: '1.1rem' }}>
  Currently pursuing a Master of Computer Applications (MCA) at Jaypee Institute of Information Technology (JIIT), Noida, I continuously explore modern technologies and industry best practices to build impactful software solutions.
</p>

<p className="reveal" style={S.body}>
  Beyond development, I enjoy exploring emerging technologies, contributing to collaborative projects, and pushing the boundaries of what can be achieved on the web.
</p>
          </div>

          {/* Stats grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(245,245,240,.07)', border: '1px solid rgba(245,245,240,.07)', alignContent: 'start' }}>
            {stats.map(({ v, l }, i) => (
              <div key={l} className="reveal" style={{
                background: '#111111', padding: '2.2rem 1.8rem',
                transitionDelay: i * 0.08 + 's',
              }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 300, fontSize: 'clamp(2.2rem,4.5vw,3.2rem)', lineHeight: 1, color: '#F5F5F0', marginBottom: '.4rem' }}>{v}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.63rem', letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(245,245,240,.32)' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
