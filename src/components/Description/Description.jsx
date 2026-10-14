
import { useGSAP } from '@gsap/react';
import s from './style.module.css'
import gsap from 'gsap';
import { SplitText } from 'gsap/all';

const Description = () => {
    useGSAP(() => {
        const listTextSplit = new SplitText('.listText p', {type: 'lines'})
        gsap.timeline({
            scrollTrigger: {
                trigger: '#Description',
                start: 'top 65%',
                // markers: true
            }
        }).from('.title_after', {
            width: 0,
        }).from(listTextSplit.lines, {
            opacity: 0,
            stagger: 0.04
        })
    }, [])

    return (
        <div className={s.Description} id='Description'>
            <div>
                <div className={s.title}>Обо мне</div> 
                <div className={`${s.title_after} title_after`}></div>
            </div>
            <div className={`${s.text} listText`}>
                <p>
                    Привет! Меня зовут Глеб, мне 19 лет, я веб-разработчик из Вологды. Учусь в Колледже связи, активно осваиваю современные технологии и развиваюсь в IT.
                </p>
                <p>
                    Мне нравится создавать удобные и функциональные веб-приложения, продумывать интерфейсы и решать интересные задачи.
                </p>
                <p>
                    Постоянно изучаю новое, слежу за трендами в разработке и сразу пробую их в своих проектах. Моя цель — стать профессиональным fullstack-разработчиком и делать крутые цифровые продукты.
                </p>
                <p>
                    Если вы ищете ответственного и увлечённого разработчика — давайте знакомиться! Буду рад сотрудничеству и интересным проектам.
                </p>
            </div>
            {/* <div className={s.positiveSides}>
                <div className={s.cars}>
                    <img src="src/assets/AboutMe/fluent-mdl2_poll-results.svg" alt="" />
                    <p className={s.name}>Results-oriented</p>
                    <div className={s.cardCotent}>
                        Focused on delivering quality outcomes within time and resource constraints
                    </div>
                </div>
                <div className={s.cars}>
                    <img src="src/assets/AboutMe/fluent-mdl2_poll-results.svg" alt="" />
                    <p className={s.name}>Team player</p>
                    <div className={s.cardCotent}>
                        Skilled at collaborative work, conflict resolution, and consensus building
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Description;

