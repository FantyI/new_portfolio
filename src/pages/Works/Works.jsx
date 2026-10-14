import Heading from '../../components/Heading/Heading';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import s from './style.module.css'

const Works = ({textNotifications}) => {
   const works = [
      {
         title: 'Строй Эксперт',
         github: 'https://github.com/FantyI/stroyexpert-frontend',
         externalLink: 'https://stroyexpert.vercel.app/',
         technologies: ['react', 'css']
      },
      {
         title: 'Velvet Pour',
         github: 'https://github.com/FantyI/gsap_cocktails.git',
         externalLink: 'https://gsap-cocktails-wine.vercel.app/',
         technologies: ['React', 'css', 'gsap']
      },
      {
         title: 'WebCode',
         github: 'https://github.com/FantyI/hackathon',
         externalLink: 'https://hackathon-five-nu.vercel.app/',
         technologies: ['HTML', 'CSS']
      },
      {
         title: 'RMC',
         github: 'https://github.com/FantyI/RMC',
         externalLink: 'https://rmc-phi.vercel.app/',
         technologies: ['html', 'css']
      },
      {
         title: 'Eurotour',
         github: 'https://github.com/swissse/eurotour.git',
         externalLink: 'https://eurotour-lake.vercel.app/',
         technologies: ['html', 'css', 'js']
      },
      {
         title: 'VELES',
         github: 'https://github.com/FantyI/stroyexpert-frontend',
         externalLink: 'https://veles-nine.vercel.app/',
         technologies: ['react', 'css', 'js']
      },
   ]

   return (
      <div id={'works'}>
         <Heading title={'Работы'} />
         <div className={s.Works}>
            {works.map(work => <ProjectCard key={work.title} data={work} textNotifications={textNotifications}/>)}
         </div>
      </div>
   )
}

export default Works;