import React from "react";
import PopupWithForm from './PopupWithForm';

function EditProfilePopup(props) {

   // Управляемые компонеты
   const [name, setName] = React.useState('');
   const [description, setDescription] = React.useState('');

   // Обработчики изменения инпутов
   function handleChangeName(evt) {
      setName(evt.target.value);
   }

   function handleChangeDescription(evt){
      setDescription(evt.target.value);
   }


   return (
      //  <!-- Блок popup profile ----------------------------------------------------------------------------> */ 
      <PopupWithForm title='Редактировать профиль' name='profile' isOpen={props.isOpen} buttonTitleSubmit='Сохранить' onClose={props.onClose}>

         <input className="popup__input popup__input_type_name" type="text" name="name" id="name-input" value={name} onChange={handleChangeName} placeholder="Имя"
            required minLength="2" maxLength="40" />
         <span className="popup__input-error name-input-error"></span>
         <input className="popup__input popup__input_type_profession" type="text" name="about" id="profession-input" value={description} onChange={handleChangeDescription}
            placeholder="Профессия" required minLength="2" maxLength="200" />
         <span className="popup__input-error profession-input-error"></span>

      </PopupWithForm>

   )
}

export default EditProfilePopup;