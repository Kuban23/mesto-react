import React from "react";

function Card(props) {

   return (

      // <div className="photo" style={{ backgroundImage: `url(${item})` }}></div>
      <div className="photo">
         <div className="photo__element" >
            <button className="photo__trash" type="button" aria-label="Кнопка для удаления "></button>
            <img className="photo__image" src={props.card.link} alt="Изображен край или область России" />
            <div className="photo__title">
               <h2 className="photo__text">{props.card.name}</h2>
               <div className="photo__like-container">
                  <button className="photo__like" type="button" aria-label="Кнопка для добавления лайков"></button>
                  <p className="photo__like-sum">0</p>
               </div>
            </div>
         </div>
      </div>

   );

}



export default Card;