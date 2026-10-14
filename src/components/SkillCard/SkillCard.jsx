import { useEffect, useRef, useState } from 'react'
import s from './style.module.css'

const SkillCard = ({ data }) => {
   const refIcon = useRef(null);

   const [fill, setFill] = useState('')
   const [isHover, setHover] = useState(false)

   // Цвет рамки берём из первого элемента иконки
   useEffect(() => {
      if (refIcon.current) {
         const svg = refIcon.current.querySelector('svg')
         setFill(svg.firstElementChild.getAttribute('fill'));
      }
   }, [data]);

   return (
      <div
         className={s.SkillCard}
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         style={{
            borderTop: `3px solid ${fill}`,
            boxShadow: isHover ? `0 0 35px 0 ${fill}` : 'none',
         }}>
         <div className={s.icon} ref={refIcon}>
            {data.icon}
         </div>
         <div className={s.name}>
            {data.name}
         </div>
      </div>
   )
}

export default SkillCard
