import React from "react";
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {

   // Подписываемся на контекст CurrentUserContext
   const currentUser = React.useContext(CurrentUserContext);

   // Определяем, являемся ли мы владельцем текущей карточки
   const isOwn = props.card.owner._id === currentUser._id;

   // Создаём переменную, которую после зададим в className для кнопки удаления
   const cardDeleteButtonClassName = (
      `photo__trash ${isOwn ? 'photo__trash_type_active' : ''}`
   );

   function handleClick() {

      props.onCardClick(props.card);
   }

   return (

      <div className="photo">
         <div className="photo__element" >
            <button className="cardDeleteButtonClassName" type="button" aria-label="Кнопка для удаления "></button>
            <img className="photo__image" onClick={handleClick} src={props.card.link} alt={props.card.name} />
            <div className="photo__title">
               <h2 className="photo__text">{props.card.name}</h2>
               <div className="photo__like-container">
                  <button className="photo__like" type="button" aria-label="Кнопка для добавления лайков"></button>
                  <p className="photo__like-sum">{props.card.likes.length}</p>
               </div>
            </div>
         </div>
      </div>

   );

}



export default Card;