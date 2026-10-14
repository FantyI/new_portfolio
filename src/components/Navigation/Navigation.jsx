import { useEffect, useState } from 'react'
import s from './style.module.css'
import { Routes } from 'react-router';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navigation = ({ visible, setVisible, active, hide }) => {

    useGSAP(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
                scrub: true
            }
        }).to('nav', {
            backdropFilter: 'blur(10px)',
            width: 1200,
            borderRadius: 100,
            padding: 'auto'
        })
    }, [])

    return (
        <nav className={`${s.navigate} ${active && s.active} ${hide && s.hide}`}>
            <h1><a className={s.logo} href="#logo">FantyI</a></h1>
            <ul className={s.listNav}>
                <li><a href="#about">Обо мне</a></li>
                <li><a href="#skills">Навыки</a></li>
                <li><a href="#works">Работы</a></li>
                <li><a href="#reviews">Отзывы</a></li>
                <li onClick={() => setVisible(true)}>Контакты</li>
                <li><a href="#resume">Резюме</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;