import { useState } from 'react'
import emailjs from '@emailjs/browser'
import useReveal from './useReveal'
import { S } from './About'

// ── Fill these in from emailjs.com ──────────────────────────────────────────
const SERVICE_ID  = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
// ────────────────────────────────────────────────────────────────────────────

const inp = {
  width: '100%', background: 'transparent',
  border: 'none', borderBottom: '1px solid rgba(245,245,240,.14)',
  color: '#F5F5F0', fontFamily: 'Inter, sans-serif', fontWeight: 300,
  fontSize: '.92rem', padding: '.95rem 0', outline: 'none',
  letterSpacing: '.03em', caretColor: '#F5F5F0',
  transition: 'border-color .3s',
}

const lbl = {
  display: 'block', fontFamily: 'Inter, sans-serif', fontWeight: 300,
  fontSize: '.62rem', letterSpacing: '.28em', textTransform: 'uppercase',
  color: 'rgba(245,245,240,.32)', marginBottom: '.4rem',
}

export default function Contact() {
  const ref = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [st, setSt] = useState('idle') // idle | loading | ok | err

  const change = e => setForm({ ...form, [e.target.name]: e.target.value })

  const send = async () => {
    if (!form.name || !form.email || !form.message) return
    setSt('loading')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      }, PUBLIC_KEY)
      setSt('ok')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setSt('err')
    }
    setTimeout(() => setSt('idle'), 4500)
  }

  const focus = e => e.target.style.borderBottomColor = 'rgba(245,245,240,.55)'
  const blur  = e => e.target.style.borderBottomColor = 'rgba(245,245,240,.14)'

  return (
    <section id="contact" ref={ref} style={{ padding: 'clamp(4rem,8vw,7rem) clamp(1.5rem,6vw,6rem)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div className="line" style={{ marginBottom: '4rem' }} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: '4rem' }}>

          {/* Left */}
          <div>
            <div className="reveal" style={S.eyebrow}>✦ Get in Touch</div>
            <h2 className="reveal" style={S.h2}>Let's build<br /><em>something great</em></h2>
            <p className="reveal" style={{ ...S.body, marginBottom: '2.5rem' }}>
              Have a project in mind, want to collaborate, or just want to say hi? I'm always open to interesting conversations.
            </p>

            <div className="reveal">
              {[
                { l: 'Email',    v: 'sakshi@example.com' },
                { l: 'LinkedIn', v: 'linkedin.com/in/sakshisingh' },
                { l: 'GitHub',   v: 'github.com/sakshisingh' },
              ].map(({ l, v }) => (
                <div key={l} style={{ display: 'flex', gap: '1.2rem', marginBottom: '.9rem', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '.62rem', letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(245,245,240,.28)', fontWeight: 300, minWidth: '64px' }}>{l}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '.86rem', color: 'rgba(245,245,240,.55)', fontWeight: 300 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            <div>
              <label style={lbl}>Name</label>
              <input name="name" value={form.name} onChange={change} onFocus={focus} onBlur={blur} placeholder="Your name" style={inp} />
            </div>
            <div>
              <label style={lbl}>Email</label>
              <input name="email" type="email" value={form.email} onChange={change} onFocus={focus} onBlur={blur} placeholder="your@email.com" style={inp} />
            </div>
            <div>
              <label style={lbl}>Message</label>
              <textarea name="message" value={form.message} onChange={change} onFocus={focus} onBlur={blur} placeholder="Tell me about your project..." rows={4} style={{ ...inp, resize: 'none' }} />
            </div>

            <button
              onClick={send}
              disabled={st === 'loading'}
              data-h
              style={{
                alignSelf: 'flex-start',
                padding: '.9rem 2.2rem',
                border: '1px solid rgba(245,245,240,.6)',
                background: 'transparent', color: '#F5F5F0',
                fontFamily: 'Inter, sans-serif', fontWeight: 300,
                fontSize: '.72rem', letterSpacing: '.24em', textTransform: 'uppercase',
                cursor: 'none', transition: 'all .3s',
                opacity: st === 'loading' ? .5 : 1,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#F5F5F0'; e.currentTarget.style.color = '#111111' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#F5F5F0' }}
            >
              {st === 'loading' ? 'Sending...' : st === 'ok' ? 'Sent ✓' : st === 'err' ? 'Try Again' : 'Send Message'}
            </button>

            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '.68rem', color: 'rgba(245,245,240,.3)', fontWeight: 300, lineHeight: 1.7 }}>
              ⓘ Replace <code style={{ color: 'rgba(245,245,240,.5)' }}>SERVICE_ID</code>, <code style={{ color: 'rgba(245,245,240,.5)' }}>TEMPLATE_ID</code>, and <code style={{ color: 'rgba(245,245,240,.5)' }}>PUBLIC_KEY</code> in Contact.jsx with your <a href="https://emailjs.com" target="_blank" rel="noreferrer" style={{ color: 'rgba(245,245,240,.6)', textDecoration: 'underline' }}>EmailJS</a> credentials.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
