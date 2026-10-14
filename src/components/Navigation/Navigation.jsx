import s from './style.module.css'
import { personal } from '../../data/resume';

const links = [
   { href: '#experience', name: 'Опыт' },
   { href: '#skills', name: 'Навыки' },
   { href: '#education', name: 'Образование' },
   { href: '#qualities', name: 'Качества' },
   { href: '#additional', name: 'Доп. инфо' },
   { href: '#letter', name: 'Письмо' },
]

const Navigation = ({ setVisible, active, hide }) => {
   return (
      <nav className={`${s.navigate} ${active ? s.active : ''} ${hide ? s.hide : ''} noPrint`}>
         <div className={`${s.inner} container`}>
            <a className={s.logo} href="#top">{personal.firstName}<span>.</span></a>
            <ul className={s.listNav}>
               {links.map(link => <li key={link.href}><a href={link.href}>{link.name}</a></li>)}
            </ul>
            <button className={s.contact} onClick={() => setVisible(true)}>Связаться</button>
         </div>
      </nav>
   )
}

export default Navigation;
