import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import s from './style.module.css'

const Section = ({ id, number, title, children }) => {
   const sectionRef = useRef(null)

   useGSAP(() => {
      gsap.from(sectionRef.current, {
         opacity: 0,
         y: 40,
         duration: .8,
         scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
         }
      })
   }, [])

   return (
      <section id={id} ref={sectionRef} className={`${s.Section} container reveal`}>
         <div className={s.head}>
            <span className={s.number}>{number}</span>
            <h2 className={s.title}>{title}</h2>
            <span className={s.line}></span>
         </div>
         {children}
      </section>
   )
}

export default Section
