import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import s from './style.module.css'
import { PHOTO, personal, goal, fullName, ageText } from '../../data/resume';

const Hero = ({ setVisible }) => {
   const [photoError, setPhotoError] = useState(false)
   const heroRef = useRef(null)

   useGSAP(() => {
      gsap.from('.heroAnimation', {
         opacity: 0,
         y: 30,
         duration: .8,
         stagger: .1
      })
   }, { scope: heroRef })

   const data = [
      { label: 'ФИО', value: fullName },
      { label: 'Возраст', value: ageText },
      { label: 'Город', value: personal.city },
      { label: 'Телефон', value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, '')}` },
      { label: 'Эл. почта', value: personal.email, href: `mailto:${personal.email}` },
   ]

   return (
      <header className={s.Hero} id='top' ref={heroRef}>
         <div className={`${s.inner} container`}>
            <div className={`${s.photo} heroAnimation`}>
               {photoError
                  ? <div className={s.placeholder}>
                     <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.24-8 5v3h16v-3c0-2.76-3.58-5-8-5Z" fill="currentColor" />
                     </svg>
                     <span>Здесь будет фото</span>
                     <span className={s.hint}>public/images/resume/photo.jpg</span>
                  </div>
                  : <img src={PHOTO} alt={fullName} onError={() => setPhotoError(true)} />
               }
            </div>

            <div className={s.content}>
               <div className={`${s.status} heroAnimation`}><span></span>Открыт к предложениям</div>
               <h1 className={`${s.name} heroAnimation`}>
                  {personal.firstName} <span className={s.lastName}>{personal.lastName}</span>
               </h1>

               <div className={`${s.goal} heroAnimation`}>
                  <div className={s.label}>Цель резюме — искомая должность</div>
                  <div className={s.position}>{goal.position}</div>
                  <div className={s.employment}>{goal.employment}</div>
               </div>

               <p className={`${s.summary} heroAnimation`}>{goal.summary}</p>

               <div className={`${s.personal} heroAnimation`}>
                  <div className={s.label}>Личные данные</div>
                  <dl className={s.data}>
                     {data.map(item => (
                        <div className={s.item} key={item.label}>
                           <dt>{item.label}</dt>
                           <dd>{item.href ? <a href={item.href}>{item.value}</a> : item.value}</dd>
                        </div>
                     ))}
                  </dl>
               </div>

               <div className={`${s.buttons} heroAnimation noPrint`}>
                  <button className={s.primary} onClick={() => setVisible(true)}>Связаться со мной</button>
                  <button className={s.secondary} onClick={() => window.print()}>Сохранить в PDF</button>
               </div>
            </div>
         </div>
      </header>
   )
}

export default Hero;
