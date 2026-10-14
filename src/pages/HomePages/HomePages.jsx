import { useGSAP } from '@gsap/react';
import Navigation from '../../components/Navigation/Navigation';
import s from './style.module.css'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const HomePages = ({setVisible, textNotifications}) => {
    
    useGSAP(() => {
        const headingSplit = new SplitText('#logo h1', {type: 'words'})
        gsap.from(headingSplit.words, {
            opacity: 0,
            yPercent: 100,
            duration: 1,
            stagger: 0.04
        })
    }, [])

    return (
        <header className={s.HomePages} id='logo'>
            {/* <Navigation /> */}

            <div className={`${s.greeting}`}>
                <h1 className={s.text}>
                    Код, который работает, <br />
                    <span className={s.highlighting}>дизайн, который цепляет</span>
                </h1>
                <div className={s.buttons}>
                    <button className={s.myResume} onClick={() => document.getElementById('resume')?.scrollIntoView()}>Моё резюме</button>
                    <button className={s.contactMe} onClick={() => setVisible(true)}>Связаться</button>
                </div>
            </div>
        </header>
    )
}

export default HomePages;