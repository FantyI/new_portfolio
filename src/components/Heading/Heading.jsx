import { useGSAP } from '@gsap/react'
import s from './style.module.css'
import gsap from 'gsap'
import { useRef } from 'react'

const Heading = ({ title }) => {

    const headingRef = useRef(null)

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: headingRef.current,
                start: '100 bottom',
            }
        }).fromTo(headingRef.current, {
            scale: 0,
            duration: .2
        }, {
            scale: 1
        })
    }, [])

    return (
        <div className={`${s.Heading}`} ref={headingRef}>
            <div className={`${s.name} title`}>{title}</div>
            <div className={`${s.background} titleBg`}>{title.toUpperCase()}</div>
        </div>
    )
}

export default Heading