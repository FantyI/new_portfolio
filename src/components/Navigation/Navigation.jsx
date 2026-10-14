import { useEffect, useState } from 'react';
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

const getInitialTheme = () => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'

const Navigation = ({ setVisible, active, hide }) => {
   const [theme, setTheme] = useState(getInitialTheme)

   // Тема хранится в атрибуте data-theme у <html> и запоминается в браузере
   useEffect(() => {
      document.documentElement.dataset.theme = theme
      try {
         localStorage.setItem('theme', theme)
      } catch {
         // localStorage может быть недоступен — тема просто не запомнится
      }
   }, [theme])

   const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

   return (
      <nav className={`${s.navigate} ${active ? s.active : ''} ${hide ? s.hide : ''} noPrint`}>
         <div className={`${s.inner} container`}>
            <a className={s.logo} href="#top">{personal.firstName}<span>.</span></a>
            <ul className={s.listNav}>
               {links.map(link => <li key={link.href}><a href={link.href}>{link.name}</a></li>)}
            </ul>
            <div className={s.actions}>
               <button
                  className={s.theme}
                  onClick={toggleTheme}
                  aria-label={theme === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему'}
                  title={theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}>
                  {theme === 'dark'
                     ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <circle cx="12" cy="12" r="4.5" />
                        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                     </svg>
                     : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                     </svg>
                  }
               </button>
               <button className={s.contact} onClick={() => setVisible(true)}>Связаться</button>
            </div>
         </div>
      </nav>
   )
}

export default Navigation;
