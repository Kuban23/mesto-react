import React from "react";

function Card(props) {

   function handleClick() {

      props.onCardClick(props.card);
   }

   return (

      <div className="photo">
         <div className="photo__element" >
            <button className="photo__trash" type="button" aria-label="Кнопка для удаления "></button>
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