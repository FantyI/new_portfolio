import { useState } from 'react';
import Heading from '../../components/Heading/Heading';
import s from './style.module.css'

// Фото: положи файл в public/images/resume/photo.jpg — он подставится автоматически
const PHOTO = '/images/resume/photo.jpg'

// Всё, что в [квадратных скобках], нужно заменить своими данными
const resume = {
   fullName: '[Фамилия] Глеб [Отчество]',
   birthDate: '', // формат ДД.ММ.ГГГГ, например '05.03.2007' — возраст посчитается сам
   age: 19,
   phone: '+7 981 421 48 03',
   email: 'bbb155072@gmail.com',
   city: 'Вологда',
   position: 'Разработчик Web и мультимедийных приложений',
   experience: [
      {
         period: '[мм.гггг] — [мм.гггг]',
         organization: '[Полное наименование организации]',
         position: '[Должность на практике]',
         type: 'Производственная практика',
         duties: [
            '[Вёрстка страниц и интерфейсов]',
            '[Доработка и поддержка сайта организации]',
         ],
         achievements: [
            '[Что удалось сделать / улучшить]',
         ]
      },
      {
         period: '2024 — н.в.',
         organization: 'Самостоятельная деятельность (проекты на заказ)',
         position: 'Frontend-разработчик',
         duties: [
            'Разработка сайтов и лендингов на React, HTML, CSS, JavaScript',
            'Адаптивная вёрстка, анимации на GSAP, деплой на Vercel',
         ],
         achievements: [
            'Реализовано 6 проектов: «Строй Эксперт», Velvet Pour, WebCode, RMC, Eurotour, VELES',
         ]
      },
   ],
   skills: [
      'HTML5, CSS3, адаптивная вёрстка',
      'JavaScript (ES6+), React, Redux, React Router',
      'Анимации: GSAP (ScrollTrigger, SplitText)',
      'Node.js (Express/Nest.js), REST API, аутентификация',
      'Базы данных: MySQL, PostgreSQL, MongoDB',
      'Дизайн: Figma, Adobe Photoshop, Illustrator, UX/UI',
      'Git, GitHub, Vite, Vercel',
   ],
   education: {
      institution: 'АПОУ ВО «Вологодский колледж связи и информационных технологий»',
      specialty: '09.02.07 Информационные системы и программирование',
      qualification: 'Разработчик Web и мультимедийных приложений',
      year: '2027 г. (год окончания)',
   },
   qualities: [
      'Ответственность и пунктуальность',
      'Нацеленность на результат',
      'Умение работать в команде',
      'Быстрая обучаемость',
      'Внимательность к деталям',
   ],
   additional: [
      'Иностранный язык: английский — [уровень, например B1, чтение технической документации]',
      'Готов к стажировке и обучению',
      'Портфолио проектов: github.com/FantyI',
   ],
   coverLetter: [
      'Здравствуйте!',
      'Меня зовут Глеб, мне 19 лет, я студент Вологодского колледжа связи и информационных технологий по специальности «Информационные системы и программирование». Хочу откликнуться на позицию разработчика Web и мультимедийных приложений.',
      'Я занимаюсь веб-разработкой уже несколько лет: делаю сайты на React, верстаю адаптивные интерфейсы, добавляю анимации на GSAP и пишу серверную часть на Node.js. В портфолио — шесть реализованных проектов, ссылки на которые есть на этом сайте.',
      'Быстро осваиваю новые технологии, ответственно отношусь к срокам и умею работать в команде. Буду рад применить свои навыки в вашей компании и развиваться вместе с ней.',
      'Спасибо за внимание! Буду рад обсудить сотрудничество.',
   ],
}

const getAge = (birthDate) => {
   const [day, month, year] = birthDate.split('.').map(Number)
   const today = new Date()
   let age = today.getFullYear() - year
   if (today.getMonth() + 1 < month || (today.getMonth() + 1 === month && today.getDate() < day)) age--
   return age
}

const pluralYears = (n) => {
   const mod10 = n % 10, mod100 = n % 100
   if (mod10 === 1 && mod100 !== 11) return 'год'
   if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return 'года'
   return 'лет'
}

const Resume = () => {
   const [photoError, setPhotoError] = useState(false)

   const age = resume.birthDate ? getAge(resume.birthDate) : resume.age
   const ageText = `${age} ${pluralYears(age)}`

   return (
      <div id={'resume'}>
         <Heading title={'Резюме'} />
         <div className={s.Resume}>
            <aside className={s.side}>
               <div className={s.photo}>
                  {photoError
                     ? <div className={s.placeholder}>
                        <span>Здесь будет фото</span>
                        <span className={s.hint}>public/images/resume/photo.jpg</span>
                     </div>
                     : <img src={PHOTO} alt={resume.fullName} onError={() => setPhotoError(true)} />
                  }
               </div>
               <div className={s.block}>
                  <h3 className={s.blockTitle}>Личные данные</h3>
                  <ul className={s.info}>
                     <li><span>ФИО</span>{resume.fullName}</li>
                     <li><span>Возраст</span>{resume.birthDate ? `${resume.birthDate} (${ageText})` : ageText}</li>
                     <li><span>Город</span>{resume.city}</li>
                     <li><span>Телефон</span><a href={`tel:${resume.phone.replace(/\s/g, '')}`}>{resume.phone}</a></li>
                     <li><span>Эл. почта</span><a href={`mailto:${resume.email}`}>{resume.email}</a></li>
                  </ul>
               </div>
            </aside>

            <div className={s.main}>
               <div className={s.block}>
                  <h3 className={s.blockTitle}>Цель резюме</h3>
                  <p className={s.position}>Соискание должности: <b>{resume.position}</b></p>
               </div>

               <div className={s.block}>
                  <h3 className={s.blockTitle}>Опыт работы</h3>
                  {resume.experience.map(job => (
                     <div className={s.job} key={job.organization}>
                        <div className={s.period}>{job.period}{job.type && ` · ${job.type}`}</div>
                        <div className={s.organization}>{job.organization}</div>
                        <div className={s.jobPosition}>{job.position}</div>
                        <p className={s.label}>Обязанности:</p>
                        <ul className={s.list}>{job.duties.map(item => <li key={item}>{item}</li>)}</ul>
                        <p className={s.label}>Достижения:</p>
                        <ul className={s.list}>{job.achievements.map(item => <li key={item}>{item}</li>)}</ul>
                     </div>
                  ))}
               </div>

               <div className={s.block}>
                  <h3 className={s.blockTitle}>Профессиональные навыки</h3>
                  <div className={s.tags}>
                     {resume.skills.map(skill => <span className={s.tag} key={skill}>{skill}</span>)}
                  </div>
               </div>

               <div className={s.block}>
                  <h3 className={s.blockTitle}>Образование</h3>
                  <div className={s.organization}>{resume.education.institution}</div>
                  <p className={s.text}>Специальность: {resume.education.specialty}</p>
                  <p className={s.text}>Квалификация: {resume.education.qualification}</p>
                  <p className={s.period}>{resume.education.year}</p>
               </div>

               <div className={s.twoColumns}>
                  <div className={s.block}>
                     <h3 className={s.blockTitle}>Личные качества</h3>
                     <ul className={s.list}>{resume.qualities.map(item => <li key={item}>{item}</li>)}</ul>
                  </div>
                  <div className={s.block}>
                     <h3 className={s.blockTitle}>Дополнительная информация</h3>
                     <ul className={s.list}>{resume.additional.map(item => <li key={item}>{item}</li>)}</ul>
                  </div>
               </div>

               <div className={s.block}>
                  <h3 className={s.blockTitle}>Сопроводительное письмо</h3>
                  <div className={s.letter}>
                     {resume.coverLetter.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                     <p className={s.signature}>С уважением, {resume.fullName}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Resume;
