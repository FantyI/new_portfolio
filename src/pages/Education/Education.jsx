import Section from '../../components/Section/Section';
import s from './style.module.css'
import { education } from '../../data/resume';

const Education = () => {
   return (
      <Section id='education' number='03' title='Образование'>
         <div className={s.card}>
            <div className={s.icon}>
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3Zm-6.82 9.18v4L12 20l6.82-3.82v-4L12 16l-6.82-3.82Z" fill="#fff" />
               </svg>
            </div>
            <div className={s.info}>
               <div className={s.level}>Среднее профессиональное</div>
               <h3 className={s.institution}>{education.institution}</h3>
               <dl className={s.details}>
                  <div>
                     <dt>Специальность</dt>
                     <dd>{education.specialty}</dd>
                  </div>
                  <div>
                     <dt>Квалификация</dt>
                     <dd>{education.qualification}</dd>
                  </div>
               </dl>
            </div>
            <div className={s.year}>
               <span>{education.year}</span>
               год окончания
            </div>
         </div>
      </Section>
   )
}

export default Education;
