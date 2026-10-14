import { useGSAP } from '@gsap/react'
import s from './style.module.css'
import gsap from 'gsap'

const Card = ({ data }) => {

   useGSAP(() => {
      gsap.timeline({
         scrollTrigger: {
            trigger: '#Description',
            start: 'top 65%',
            // markers: true
         }
      }).fromTo('.cardAnimation', {
         opacity: 0,
         left: -100
      }, {
         opacity: 1,
         left: 0
      })
   }, [])

   const { icon, name, text } = data;
   return (
      <div className={`${s.card} cardAnimation`}>
         <div className={s.icon}>
            {icon}
         </div>
         <div className={s.name}>{name}</div>
         <p className={s.text}>{text}</p>
      </div>
   )
}

export default Card