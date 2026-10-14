import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Section from '../../components/Section/Section';
import SkillCard from '../../components/SkillCard/SkillCard';
import s from './style.module.css';
import { directions } from '../../data/resume';
import { skills } from '../../data/skills';

const filters = [
   { tag: 'All', name: 'Все' },
   { tag: 'Design', name: 'Дизайн' },
   { tag: 'Frontend', name: 'Frontend' },
   { tag: 'Backend', name: 'Backend' },
   { tag: 'DB', name: 'БД' },
]

const Skills = () => {
   const [isActive, setActive] = useState('All')

   useGSAP(() => {
      gsap.from('.skillsGridAnimation > div', {
         opacity: 0,
         y: 20,
         stagger: .05,
         duration: .4
      })
   }, [isActive])

   const filteredSkills = skills.filter(skill => skill.tag.includes(isActive))

   return (
      <Section id='skills' number='02' title='Профессиональные навыки'>
         <div className={s.Skills}>
            <div className={s.directions}>
               {directions.map(direction => (
                  <div className={s.direction} key={direction.name}>
                     <h3 className={s.name}>{direction.name}</h3>
                     <p className={s.text}>{direction.text}</p>
                  </div>
               ))}
            </div>
            <div className={`${s.technologies} noPrint`}>
               <div className={s.sorting}>
                  {filters.map(filter => (
                     <button
                        key={filter.tag}
                        onClick={() => setActive(filter.tag)}
                        className={`${s.chapter} ${isActive === filter.tag ? s.active : ''}`}>
                        {filter.name}
                     </button>
                  ))}
               </div>
               <div className={`${s.grid} skillsGridAnimation`}>
                  {filteredSkills.map(data => (
                     <div key={data.name}>
                        <SkillCard data={data} />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </Section>
   )
}

export default Skills
