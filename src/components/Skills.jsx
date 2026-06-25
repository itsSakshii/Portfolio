import useReveal from './useReveal'
import { S } from './About'

const groups = [
  { cat: 'Frontend',       skills: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'JavaScript ES6+', 'HTML5 / CSS3'] },
  { cat: 'Backend',        skills: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'JWT Auth', 'Socket.io'] },
  { cat: 'Database',       skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Redis', 'Firebase', 'Prisma ORM'] },
  { cat: 'Tools & DevOps', skills: ['Git / GitHub', 'Docker', 'AWS (EC2, S3)', 'Vercel', 'Postman', 'Linux CLI'] },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" ref={ref} style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,6vw,6rem)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="line" style={{ marginBottom: '4rem' }} />
        <div className="reveal" style={S.eyebrow}>✦ Technical Skills</div>
        <h2 className="reveal" style={{ ...S.h2, marginBottom: '3rem' }}>What I work with</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1px',
          background: 'rgba(245,245,240,.07)',
          border: '1px solid rgba(245,245,240,.07)',
        }}>
          {groups.map(({ cat, skills }, i) => (
            <div key={cat} className="reveal" style={{ background: '#111111', padding: '2.2rem 1.8rem', transitionDelay: i * 0.08 + 's' }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.6rem', letterSpacing: '.3em', textTransform: 'uppercase', color: 'rgba(245,245,240,.3)', marginBottom: '1.4rem' }}>{cat}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {skills.map((sk, si) => (
                  <li key={sk} style={{
                    fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '.86rem',
                    color: 'rgba(245,245,240,.62)', letterSpacing: '.02em',
                    padding: '.55rem 0',
                    borderBottom: si < skills.length - 1 ? '1px solid rgba(245,245,240,.05)' : 'none',
                  }}>{sk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
