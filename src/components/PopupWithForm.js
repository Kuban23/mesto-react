

function PopupWithForm(props) {
   return (
      <section className={`popup popup_type_${props.name}`}>
         <div className="popup__container">
            <form className="popup__form popup__form-prof" name={`${props.name}_form}`} novalidate>
               <button className="popup__close" type="button" aria-label="Кнопка закрытия окна"></button>
               <h2 className="popup__title">{props.title}</h2>
               {/* <input className="popup__input popup__input_type_name" type="text" name="name" id="name-input" placeholder="Имя"
                     required minlength="2" maxlength="40" />
                  <span className="popup__input-error name-input-error"></span>
                  <input className="popup__input popup__input_type_profession" type="text" name="about" id="profession-input"
                     placeholder="Профессия" required minlength="2" maxlength="200" />
                  <span className="popup__input-error profession-input-error"></span> */}

               {children}

               <button className="popup__submit-button" type="submit" aria-label="Кнопка cохранить">Сохранить</button>
            </form>
         </div>
      </section>
   );

};

export default PopupWithForm;