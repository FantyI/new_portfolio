import { useEffect, useRef, useState } from 'react'
import s from './style.module.css'

import externalLink from '../../assets/images/external-link.svg'
import github from '../../assets/images/github.svg'

const ProjectCard  = ({ data, textNotifications }) => {
   
   return (
      <div className={s.ProjectCard}>
         <img src={`/images/ImgCard/${data.title}.png`} className={s.img} alt={data.title} />
         <div className={s.text}>
            <h2 className={s.title}>{data.title}</h2>
            <div className={s.technologies}>
               {data.technologies.map(technology => (
                  <div className={s.technology} key={technology}>{technology.toUpperCase()}</div>
               ))}
            </div>
            <div className={s.link}>
               <div className={s.details} onClick={() => textNotifications('Раздел «Подробнее» пока недоступен.')}>
                  Подробнее
               </div>
               <div className={s.linkImages}>
                  <a target='_blank' href={data.github} className={s.linkImg}><img src={github} alt="" /></a>
                  <a target='_blank' href={data.externalLink} className={s.linkImg}><img src={externalLink} alt="" /></a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProjectCard 