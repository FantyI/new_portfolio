
import { useEffect, useState } from 'react';
import SocialNetworks from '../../components/SocialNetworks/SocialNetworks';
import s from './style.module.css'

const Feedback = ({ visible, setVisible, textNotifications }) => {

   
   useEffect(() => {
      if (visible) {
         document.body.style.overflow = 'hidden'
         console.log('hidden')
      }
   }, [])

   const copyTextToClipboard = async (text) => {
      try {
         await navigator.clipboard.writeText(text);
         textNotifications('Скопировано в буфер обмена!')
      } catch (err) {
         textNotifications('Не удалось скопировать')
      }
   };

   if (visible) {
      document.body.style.overflow = 'hidden'
      console.log('hidden')
   }
   else {
      document.body.style.overflow = 'auto'
   }

   return (
      <>
         {visible
            &&
            <>
               <div className={s.Feedback} onClick={() => setVisible(false)}></div>
               <div className={s.formFeedback}>
                  <SocialNetworks />
                  <div className={s.buttons}>
                     <button onClick={() => copyTextToClipboard('bbb155072@gmail.com')}>
                        <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M5.35937 2.84033H26.7968C27.5337 2.84033 28.1366 3.44326 28.1366 4.18017V20.2582C28.1366 20.9951 27.5337 21.598 26.7968 21.598H5.35937C4.62246 21.598 4.01953 20.9951 4.01953 20.2582V4.18017C4.01953 3.44326 4.62246 2.84033 5.35937 2.84033Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                           <path d="M4.01953 4.8501L16.0781 12.2192L28.1366 4.8501" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        bbb155072@gmail.com
                     </button>
                     <button onClick={() => copyTextToClipboard('+7 981 421 48 03')}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.2652 15.5 20.5196 15.6054 20.7071 15.7929C20.8946 15.9804 21 16.2348 21 16.5V20C21 20.2652 20.8946 20.5196 20.7071 20.7071C20.5196 20.8946 20.2652 21 20 21C15.4913 21 11.1673 19.2089 7.97918 16.0208C4.79107 12.8327 3 8.50868 3 4C3 3.73478 3.10536 3.48043 3.29289 3.29289C3.48043 3.10536 3.73478 3 4 3H7.5C7.76522 3 8.01957 3.10536 8.20711 3.29289C8.39464 3.48043 8.5 3.73478 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white" />
                        </svg>
                        +7 981 421 48 03
                     </button>
                  </div>
                  <p className={s.or}>Или напишите сообщение</p>
                  <div className={s.form}>
                     <input type="email" placeholder='Ваш email' />
                     <textarea className={s.textarea} name="" id="" placeholder='Ваше сообщение'></textarea>
                     <button className={s.send}  onClick={() => textNotifications('Сообщение успешно отправлено')}>Отправить</button>
                  </div>
               </div>
            </>
         }
      </>

   )
}

export default Feedback;