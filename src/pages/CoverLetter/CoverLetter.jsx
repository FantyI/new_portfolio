import Section from '../../components/Section/Section';
import s from './style.module.css'
import { coverLetter, fullName, personal } from '../../data/resume';

const CoverLetter = () => {
   return (
      <Section id='letter' number='06' title='Сопроводительное письмо'>
         <div className={s.letter}>
            <span className={s.quote}>“</span>
            <div className={s.body}>
               {coverLetter.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <div className={s.signature}>
               <div>
                  <div className={s.regards}>С уважением,</div>
                  <div className={s.name}>{fullName}</div>
               </div>
               <div className={s.contacts}>
                  <a href={`tel:${personal.phone.replace(/\s/g, '')}`}>{personal.phone}</a>
                  <a href={`mailto:${personal.email}`}>{personal.email}</a>
               </div>
            </div>
         </div>
      </Section>
   )
}

export default CoverLetter;
