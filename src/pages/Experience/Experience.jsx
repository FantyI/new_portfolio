import Section from '../../components/Section/Section';
import s from './style.module.css'
import { experience, projects } from '../../data/resume';

import externalLink from '../../assets/images/external-link.svg'
import github from '../../assets/images/github.svg'

const Experience = () => {
   return (
      <Section id='experience' number='01' title='Опыт работы'>
         <div className={s.timeline}>
            {experience.map(job => (
               <article className={s.job} key={job.organization}>
                  <div className={s.meta}>
                     <div className={s.period}>{job.period}</div>
                     <div className={s.type}>{job.type}</div>
                  </div>
                  <div className={s.card}>
                     <h3 className={s.position}>{job.position}</h3>
                     <div className={s.organization}>{job.organization}</div>
                     <div className={s.columns}>
                        <div>
                           <p className={s.label}>Обязанности</p>
                           <ul className={s.list}>{job.duties.map(item => <li key={item}>{item}</li>)}</ul>
                        </div>
                        <div>
                           <p className={s.label}>Достижения</p>
                           <ul className={s.list}>{job.achievements.map(item => <li key={item}>{item}</li>)}</ul>
                        </div>
                     </div>

                     {job.showProjects &&
                        <div className={s.projects}>
                           {projects.map(project => (
                              <div className={s.project} key={project.title}>
                                 <a href={project.link} target='_blank' rel='noreferrer' className={s.preview}>
                                    <img src={`${import.meta.env.BASE_URL}images/ImgCard/${project.title}.png`} alt={project.title} loading='lazy' />
                                 </a>
                                 <div className={s.projectInfo}>
                                    <div className={s.projectTitle}>{project.title}</div>
                                    <div className={s.links}>
                                       <a href={project.github} target='_blank' rel='noreferrer' title='Код на GitHub'><img src={github} alt='GitHub' /></a>
                                       <a href={project.link} target='_blank' rel='noreferrer' title='Открыть сайт'><img src={externalLink} alt='Сайт' /></a>
                                    </div>
                                 </div>
                                 <div className={s.technologies}>
                                    {project.technologies.map(technology => <span key={technology}>{technology}</span>)}
                                 </div>
                              </div>
                           ))}
                        </div>
                     }
                  </div>
               </article>
            ))}
         </div>
      </Section>
   )
}

export default Experience;
