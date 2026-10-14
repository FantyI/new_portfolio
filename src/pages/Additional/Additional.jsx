import Section from '../../components/Section/Section';
import s from './style.module.css'
import { additional } from '../../data/resume';

const Additional = () => {
   return (
      <Section id='additional' number='05' title='Дополнительная информация'>
         <dl className={s.grid}>
            {additional.map(item => (
               <div className={s.item} key={item.name}>
                  <dt>{item.name}</dt>
                  <dd>{item.link ? <a href={item.link} target='_blank' rel='noreferrer'>{item.text}</a> : item.text}</dd>
               </div>
            ))}
         </dl>
      </Section>
   )
}

export default Additional;
