import s from './style.module.css'

const PopUpNotifications = ({ text }) => {
   return (
      <div
         className={`${text ? s.visible : ''} ${s.PopUpNotifications} noPrint`}
         style={{ opacity: text ? 1 : 0 }}>
         {text}
      </div>
   )
}

export default PopUpNotifications
