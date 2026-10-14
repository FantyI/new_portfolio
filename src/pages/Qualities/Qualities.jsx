import Section from '../../components/Section/Section';
import s from './style.module.css'
import { qualities } from '../../data/resume';

const Qualities = () => {
   return (
      <Section id='qualities' number='04' title='Личные качества'>
         <div className={s.grid}>
            {qualities.map((quality, i) => (
               <div className={s.card} key={quality.name}>
                  <span className={s.index}>{String(i + 1).padStart(2, '0')}</span>
                  <h3 className={s.name}>{quality.name}</h3>
                  <p className={s.text}>{quality.text}</p>
               </div>
            ))}
         </div>
      </Section>
   )
}

export default Qualities;
