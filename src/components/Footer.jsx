export default function Footer() {
  return (
    <footer style={{ padding: '0 clamp(1.5rem,6vw,6rem) 2.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="line" style={{ marginBottom: '1.8rem' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontFamily: "'Dancing Script', cursive", fontSize: '1.1rem', color: 'rgba(245,245,240,.45)' }}>
            
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '.62rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(245,245,240,.22)' }}>
            © {new Date().getFullYear()} — Software Developer
          </div>
        </div>
      </div>
    </footer>
  )
}
