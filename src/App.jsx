import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import Navigation from './components/Navigation/Navigation'
import Hero from './pages/Hero/Hero'
import Experience from './pages/Experience/Experience'
import Skills from './pages/Skills/Skills'
import Education from './pages/Education/Education'
import Qualities from './pages/Qualities/Qualities'
import Additional from './pages/Additional/Additional'
import CoverLetter from './pages/CoverLetter/CoverLetter'
import Footer from './pages/Footer/Footer'
import Feedback from './pages/Feedback/Feedback'
import PopUpNotifications from './components/PopUpNotifications/PopUpNotifications'

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(false)
  const [hide, setHide] = useState(false)
  const [text, setText] = useState('')
  const lastScroll = useRef(0)

  const textNotifications = (text) => {
    setText('');

    setTimeout(() => {
      setText(text);
      setTimeout(() => {
        setText('');
      }, 4000);
    }, 100);
  }

  // Навигация: фон после прокрутки, прячется при скролле вниз
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setActive(y > 30)
      setHide(y > 500 && y > lastScroll.current)
      lastScroll.current = y
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Navigation setVisible={setVisible} hide={hide} active={active} />
      <main>
        <Hero setVisible={setVisible} />
        <Experience />
        <Skills />
        <Education />
        <Qualities />
        <Additional />
        <CoverLetter />
      </main>
      <Footer setVisible={setVisible} />
      <Feedback visible={visible} setVisible={setVisible} textNotifications={textNotifications} />
      <PopUpNotifications text={text} />
    </>
  )
}

export default App
