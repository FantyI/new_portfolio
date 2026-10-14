import { useEffect, useRef, useState } from 'react'

import './App.css'
import Navigation from './components/Navigation/Navigation'
import HomePages from './pages/HomePages/HomePages'
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
import Works from './pages/Works/Works'
import Reviews from './pages/Reviews/Reviews'
import Resume from './pages/Resume/Resume'
import SocialNetworks from './components/SocialNetworks/SocialNetworks'
import Feedback from './pages/Feedback/Feedback'
import PopUpNotifications from './components/PopUpNotifications/PopUpNotifications'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  const [visible, setVisible] = useState(false)
  const [active, setActive] = useState(false)
  const [hide, setHide] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [text, setText] = useState('')

  const textNotifications = async (text) => {
    setText(''); 

    setTimeout(() => {
      setText(text); 
      setTimeout(() => {
        setText(''); 
      }, 4000);
    }, 100);
  }
  
  useEffect(() => {

    const handleScroll = () => {
      if (window.scrollY < 130) {
        return setActive(false)
      }
      if (scroll < window.scrollY) {
        setHide(true)
      } else {
        setHide(false)
      }

      setScroll(window.scrollY)
      setActive(true)
      if (window.scrollY < 500) {
        return setHide(false)
      }

    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scroll])

  //contactWindow={true}
  return (
    <>
      <Navigation visible={visible} setVisible={setVisible} hide={hide} active={active} />
      <HomePages setVisible={setVisible} textNotifications={textNotifications} />
      <AboutMe />
      <Skills />
      <Works textNotifications={textNotifications} />
      <Reviews />
      <Resume />
      <SocialNetworks />
      <Feedback visible={visible} setVisible={setVisible} textNotifications={textNotifications} />
      <PopUpNotifications text={text} setText={setText} />
    </>
    // <>
    //   <Navigation visible={visible} setVisible={setVisible} hide={hide} active={active} />
    //   <HomePages textNotifications={textNotifications} setVisible={setVisible} setText={setText}/>
    //   <AboutMe />
    //   <Skills />
    //   <Works textNotifications={textNotifications}/>
    //   <Reviews />
    //   <SocialNetworks />
    //   <Feedback visible={visible} setVisible={setVisible} textNotifications={textNotifications} />
    //   <PopUpNotifications text={text} setText={setText}/>
    // </>
  )
}

export default App
