import s from './style.module.css'

const PopUpNotifications = ({ text, setText }) => {

   // const newMessage = async () => {
      
   // }

   // if (text) {
   //    console.log(text);
      
   //    setTimeout(() => {
   //       console.log('2');

   //       setText('')
   //    }, 4000)
   // }
   


   return (
      <div 
      className={`${text && s.visible} ${s.PopUpNotifications}`} 
      style={{opacity: text ? 1 : 0}}>
         {text}
      </div>
   )
}

export default PopUpNotifications