import { useState } from 'react'
import Splash from './components/Splash'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [done, setDone] = useState(false)

  return (
    <div className="relative min-h-screen" style={{ background: '#111111' }}>
      <div className="noise" />
      <Cursor />
      {!done && <Splash onDone={() => setDone(true)} />}
      {done && (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  )
}
