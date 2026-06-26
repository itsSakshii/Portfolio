import { useState } from 'react'
import useReveal from './useReveal'
import { S } from './About'

const ACCESS_KEY = 'ee5a0d2f-9929-4a37-9305-8886524b9737'

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

  const send = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSt('loading')

    const formData = new FormData()
    formData.append('access_key', ACCESS_KEY)
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('message', form.message)

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      const data = await res.json()
      setSt(data.success ? 'ok' : 'err')
      if (data.success) setForm({ name: '', email: '', message: '' })
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
                { l: 'Email',    v: 'its.sakshii.me@gmail.com',           href: 'mailto:its.sakshii.me@gmail.com' },
                { l: 'LinkedIn', v: 'linkedin.com/in/sakshi-singh-3010sa', href: 'https://www.linkedin.com/in/sakshi-singh-3010sa/' },
                { l: 'GitHub',   v: 'github.com/itsSakshii',              href: 'https://github.com/itsSakshii' },
              ].map(({ l, v, href }) => (
                <div key={l} style={{ display: 'flex', gap: '1.2rem', marginBottom: '.9rem', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '.62rem', letterSpacing: '.22em', textTransform: 'uppercase', color: 'rgba(245,245,240,.28)', fontWeight: 300, minWidth: '64px' }}>{l}</span>
                  <a href={href} target={href.startsWith('mailto') ? '_self' : '_blank'} rel="noreferrer"
                    style={{ fontFamily: 'Inter, sans-serif', fontSize: '.86rem', color: 'rgba(245,245,240,.55)', fontWeight: 300, textDecoration: 'none', transition: 'color .2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#F5F5F0'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(245,245,240,.55)'}
                  >{v}</a>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className="reveal" onSubmit={send} style={{ display: 'flex', flexDirection: 'column', gap: '1.8rem' }}>
            <div>
              <label style={lbl}>Name</label>
              <input name="name" value={form.name} onChange={change} onFocus={focus} onBlur={blur} placeholder="Your name" style={inp} required />
            </div>
            <div>
              <label style={lbl}>Email</label>
              <input name="email" type="email" value={form.email} onChange={change} onFocus={focus} onBlur={blur} placeholder="your@email.com" style={inp} required />
            </div>
            <div>
              <label style={lbl}>Message</label>
              <textarea name="message" value={form.message} onChange={change} onFocus={focus} onBlur={blur} placeholder="Tell me about your project..." rows={4} style={{ ...inp, resize: 'none' }} required />
            </div>

            <button
              type="submit"
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
          </form>

        </div>
      </div>
    </section>
  )
}
