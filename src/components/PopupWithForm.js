import React from 'react';

function PopupWithForm(props) {

   return (
      <section className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
         <div className="popup__container">
            <form className="popup__form popup__form-prof" name={`${props.name}_form}`} noValidate
               onSubmit={props.onSubmit}>
               <button className="popup__close" onClick={props.onClose} type="button" aria-label="Кнопка закрытия окна"></button>
               <h2 className="popup__title">{props.title}</h2>

               {props.children}

               <button className="popup__submit-button" type="submit" aria-label="Кнопка cохранить">{props.buttonTitleSubmit}</button>
            </form>
         </div>
      </section>
   );

};

export default PopupWithForm;