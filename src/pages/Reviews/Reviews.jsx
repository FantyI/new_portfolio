import { useGSAP } from '@gsap/react'
import Heading from '../../components/Heading/Heading'
import Review from '../../components/Review/Review'
import s from './style.module.css'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const Reviews = () => {


   useGSAP(() => {
      const listTextSplit = new SplitText('.titleReviewsAnimation', { type: 'words' })
      const textSkillsAnimation = new SplitText('.textDescriptionAnimation', { type: 'lines' })
      gsap.timeline({
         scrollTrigger: {
            trigger: '#reviews',
            start: 'top 65%',

            // markers: true
         }
      }).from(listTextSplit.words, {
         left: -100
      }).from(textSkillsAnimation.lines, {
         opacity: 0,
         stagger: .1
      }).fromTo('.allReviewsAnimation', {
         background: '#09090b',
      }, {
         background: 'linear-gradient(var(--mainBackgroundColor), #09090b34, var(--mainBackgroundColor))',
         duration: 3
      }, .5)
   }, [])

   const reviews = [
      {
         name: 'Артём',
         stars: 5,
         text: "Без Глеба наш стартап бы не взлетел. Он не просто писал код — три месяца буквально жил с нами и подсказывал, как улучшить продукт. Настоящий IT-наставник!",
         date: '27.04.2025'
      },
      {
         name: 'Ольга',
         stars: 5,
         text: "Глеб сделал сайт для нашего бизнеса всего за неделю! Всё объяснил простым языком и даже помог с настройкой домена. Теперь клиенты легко находят нас — больше не тратим деньги на рекламу!",
         date: '27.04.2025'
      },
      {
         name: 'Максим (совместный проект)',
         stars: 5,
         text: "Работали с Глебом над сложным API. Его код настолько чистый, что сразу готов к продакшену. Редко встретишь человека, который думает как архитектор, а пишет код как senior.",
         date: '27.04.2025'
      },
      {
         name: 'WW',
         stars: 5,
         text: "Без Глеба наш стартап бы не взлетел. Он не просто писал код — три месяца буквально жил с нами и подсказывал, как улучшить продукт. Настоящий IT-наставник!",
         date: '27.04.2025'
      },
      {
         name: 'GG',
         stars: 5,
         text: "Без Глеба наш стартап бы не взлетел. Он не просто писал код — три месяца буквально жил с нами и подсказывал, как улучшить продукт. Настоящий IT-наставник!",
         date: '27.04.2025'
      },
   ]

   return (
      <div id={'reviews'}>
         <Heading title={'Отзывы'} />
         <div className={s.Reviews}>
            <div className={s.text}>
               <div className={`${s.title} titleReviewsAnimation`}>
                  Настоящие <span className={s.highlight} >отзывы </span>
                  клиентов
               </div>
               <div className={`${s.description} textDescriptionAnimation`}>
                  Вот что клиенты говорят о качестве моего кода, соблюдении сроков и работе со мной. Каждый проект — новый вызов, и я горжусь результатами, которыми остаются довольны.
               </div>
            </div>
            <div className={`${s.allReviews}`}>
               {/* <div className={s.scrolls}> */}
               <div>
                  <div className={s.scrollDown}>
                     {reviews.map((review, i) => (
                        <Review key={`down-${i}`} data={review} />
                     ))}
                     {reviews.slice(0, 3).map((review, i) => (
                        <Review key={`extra-${i}`} data={review} />
                     ))}
                  </div>
               </div>
               <div>
                  <div className={s.scrollUp}>
                     {[...reviews].reverse().map((review, i) => (
                        <Review key={`up-${i}`} data={review} />
                     ))}
                     {reviews.slice(0, 3).map((review, i) => (
                        <Review key={`extra-${i}`} data={review} />
                     ))}
                  </div>
               </div>
               {/* </div> */}
               <div className={`${s.textDescriptionAnimation} allReviewsAnimation`}></div>
            </div>
         </div>
      </div>
   )
}

export default Reviews