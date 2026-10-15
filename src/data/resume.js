// Все данные резюме в одном месте.
// Если что-то поменялось — правь здесь, сайт обновится сам.

// Фото: положи файл в public/images/resume/photo.jpg — он подставится автоматически
export const PHOTO = `${import.meta.env.BASE_URL}images/resume/photo.jpg`

export const personal = {
   lastName: 'Тархов',
   firstName: 'Глеб',
   middleName: 'Андреевич',
   birthDate: '', // формат ДД.ММ.ГГГГ, например '05.03.2007' — возраст посчитается сам
   age: 19, // используется, пока birthDate не заполнена
   city: 'Вологда',
   phone: '+7 981 421 48 03',
   email: 'bbb155072@gmail.com',
}

export const goal = {
   position: 'Разработчик Web и мультимедийных приложений',
   employment: 'Стажировка, частичная или полная занятость',
   summary: 'Студент Вологодского колледжа связи и информационных технологий. Создаю удобные и функциональные веб-приложения: от макета в Figma до сервера на Node.js. Постоянно изучаю новое и применяю это в своих проектах.',
}

export const experience = [
   {
      period: 'Октябрь 2025 — ноябрь 2025',
      type: 'Производственная практика',
      organization: '«Макси Инновация»',
      position: 'Разработчик',
      duties: [
         'Рефакторинг и улучшение существующего кода',
         'Разработка нового функционала',
         'Доработка существующего функционала',
      ],
      achievements: [
         'Разработал страницу для внутреннего сервиса организации',
      ],
   },
   {
      period: '2024 — н.в.',
      type: 'Проекты на заказ',
      organization: 'Самостоятельная деятельность',
      position: 'Frontend-разработчик',
      duties: [
         'Разработка сайтов и лендингов на React, HTML, CSS, JavaScript',
         'Адаптивная вёрстка под любые устройства, анимации на GSAP',
         'Публикация проектов на Vercel, работа с Git и GitHub',
      ],
      achievements: [
         'Реализовано 6 проектов — они показаны ниже',
      ],
      showProjects: true,
   },
]

export const projects = [
   {
      title: 'Строй Эксперт',
      github: 'https://github.com/FantyI/stroyexpert-frontend',
      link: 'https://stroyexpert.vercel.app/',
      technologies: ['React', 'CSS'],
   },
   {
      title: 'Velvet Pour',
      github: 'https://github.com/FantyI/gsap_cocktails.git',
      link: 'https://gsap-cocktails-wine.vercel.app/',
      technologies: ['React', 'CSS', 'GSAP'],
   },
   {
      title: 'WebCode',
      github: 'https://github.com/FantyI/hackathon',
      link: 'https://hackathon-five-nu.vercel.app/',
      technologies: ['HTML', 'CSS'],
   },
   {
      title: 'RMC',
      github: 'https://github.com/FantyI/RMC',
      link: 'https://rmc-phi.vercel.app/',
      technologies: ['HTML', 'CSS'],
   },
   {
      title: 'Eurotour',
      github: 'https://github.com/swissse/eurotour.git',
      link: 'https://eurotour-lake.vercel.app/',
      technologies: ['HTML', 'CSS', 'JS'],
   },
   {
      title: 'VELES',
      github: 'https://github.com/FantyI/stroyexpert-frontend',
      link: 'https://veles-nine.vercel.app/',
      technologies: ['React', 'CSS', 'JS'],
   },
]

export const directions = [
   {
      name: 'Дизайн',
      text: 'Работаю в Figma, Adobe Photoshop и Illustrator: делаю макеты, подбираю цветовые схемы, проектирую UX/UI.',
   },
   {
      name: 'Frontend',
      text: 'HTML, CSS, JavaScript, React, Redux, React Router. Адаптивная вёрстка и анимации на GSAP.',
   },
   {
      name: 'Backend',
      text: 'Node.js (Express/Nest.js), REST API, аутентификация. Базы данных: MySQL, PostgreSQL, MongoDB.',
   },
   {
      name: 'Инструменты',
      text: 'Git, GitHub, Vite, Vercel, npm.',
   },
]

export const education = {
   institution: 'АПОУ ВО «Вологодский колледж связи и информационных технологий»',
   specialty: '09.02.07 Информационные системы и программирование',
   qualification: 'Разработчик Web и мультимедийных приложений',
   year: '2027',
}

export const qualities = [
   { name: 'Ответственность', text: 'Соблюдаю сроки и довожу задачи до конца' },
   { name: 'Нацеленность на результат', text: 'Делаю качественно в рамках сроков и ресурсов' },
   { name: 'Командная работа', text: 'Умею договариваться и находить общий язык' },
   { name: 'Обучаемость', text: 'Быстро осваиваю новые технологии и инструменты' },
   { name: 'Внимательность', text: 'Слежу за деталями в коде и интерфейсе' },
   { name: 'Креативность', text: 'Люблю придумывать нестандартные решения' },
]

export const additional = [
   { name: 'Готовность', text: 'Готов к стажировке, обучению и работе в команде' },
   { name: 'Город', text: 'Вологда, рассматриваю удалённую работу' },
   { name: 'Портфолио', text: 'github.com/FantyI', link: 'https://github.com/FantyI' },
]

export const coverLetter = [
   'Здравствуйте!',
   'Меня зовут Глеб, мне 19 лет, я студент Вологодского колледжа связи и информационных технологий по специальности «Информационные системы и программирование». Хочу откликнуться на позицию разработчика Web и мультимедийных приложений.',
   'Прошёл производственную практику в компании «Макси Инновация» в должности разработчика: занимался рефакторингом кода, разработкой и доработкой функционала, сделал страницу для внутреннего сервиса компании.',
   'Я занимаюсь веб-разработкой уже несколько лет: делаю сайты на React, верстаю адаптивные интерфейсы, добавляю анимации на GSAP и пишу серверную часть на Node.js. На этой странице — шесть моих реализованных проектов.',
   'Быстро осваиваю новые технологии, ответственно отношусь к срокам и умею работать в команде. Буду рад применить свои навыки в вашей компании и развиваться вместе с ней.',
   'Спасибо за внимание! Буду рад обсудить сотрудничество.',
]

export const socials = {
   github: 'https://github.com/FantyI',
   vk: 'https://vk.com/id577804112',
   telegram: 'https://t.me/FantyI0',
}

export const fullName = `${personal.lastName} ${personal.firstName} ${personal.middleName}`

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

const age = personal.birthDate ? getAge(personal.birthDate) : personal.age
export const ageText = personal.birthDate
   ? `${personal.birthDate} (${age} ${pluralYears(age)})`
   : `${age} ${pluralYears(age)}`
