import SocialNetworks from '../../components/SocialNetworks/SocialNetworks';
import s from './style.module.css'
import { personal } from '../../data/resume';

const Footer = ({ setVisible }) => {
   return (
      <footer className={`${s.Footer} container noPrint`}>
         <div className={s.cta}>
            <h2 className={s.title}>Давайте работать вместе</h2>
            <p className={s.text}>Открыт к стажировке и первым рабочим проектам. Отвечу в течение дня.</p>
            <button className={s.button} onClick={() => setVisible(true)}>Связаться со мной</button>
         </div>
         <div className={s.bottom}>
            <span>© {new Date().getFullYear()} {personal.firstName}. Резюме веб-разработчика</span>
            <SocialNetworks />
         </div>
      </footer>
   )
}

export default Footer;
