import { useGSAP } from '@gsap/react'
import s from './style.module.css'
import { SplitText } from 'gsap/all'
import gsap from 'gsap';

const Directions = () => {

    useGSAP(() => {
        const listHeadersSplit = new SplitText('.listTextDirections h2', {type: 'words'})
        const listTextSplit = new SplitText('.listTextDirections p', {type: 'lines'})
        gsap.timeline({
            scrollTrigger: {
                trigger: '#Description',
                start: 'top 65%',
                // markers: true
            }
        }).from(listHeadersSplit.words, {
            opacity: 0,
            stagger: .4,
            delay: .5
        }, .5)
        .from(listTextSplit.lines, {
            opacity: 0,
            stagger: .1,
            // delay: .5
        }, .9)
    }, [])

    const directions = [
        {
            name: 'Дизайн',
            text: 'Люблю продумывать интерфейсы, чтобы они были не только красивыми, но и удобными. Работаю в Figma, Adobe Photoshop и Illustrator: делаю макеты, подбираю цветовые схемы, проектирую UX/UI.'
        },
        {
            name: 'Frontend',
            text: 'Уверенно владею HTML, CSS и JavaScript. Специализируюсь на React, адаптирую вёрстку под любые устройства. Моя цель — делать быстрые и отзывчивые проекты, которые решают задачу.'
        },
        {
            name: 'Backend',
            text: 'Пишу серверную часть на Node.js (Express/Nest.js), работаю с базами данных (MySQL, PostgreSQL, MongoDB). Понимаю принципы REST API, аутентификации и оптимизации запросов.'
        },
    ]

    return (
        <div className={s.Directions}>
            <h2 className={s.title}>Направления</h2>
            {directions.map(direction => (
                <div className={`${s.direction}`} key={direction.name}>

                    <div className={`${s.name} listTextDirections`}><h2>{direction.name}</h2></div>
                    <div className={`${s.text} listTextDirections`}><p>{direction.text}</p></div>
                </div>
            ))}
        </div>
    )
}

export default Directions;