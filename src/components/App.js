import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import  EditProfilePopup  from './EditProfilePopup';


function App() {

   // Переменные состояния, нужны для для видимости попапов.
   const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
   const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
   const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
   const [selectedCard, setSelectedCard] = React.useState(false);
   const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

   // Переменная состояния для текущего пользователя.
   const [currentUser, setcurrentUser] = React.useState({});

   // Эффект который будет вызывать getProfileUserInfo() и обновлять стейт переменную из полученного значения
   React.useEffect(() => {
      api.getProfileUserInfo()
         .then((userData) => {
            setcurrentUser(userData)
         })
         .catch((error) => {
            console.log(error);
         })
   }, []);



   // Обработчики для переменных состояния, стэйтовые переменные.
   function handleEditAvatarClick() {
      setIsEditAvatarPopupOpen(true);
   };

   function handleEditProfileClick() {
      setIsEditProfilePopupOpen(true);
   };

   function handleEditPlaceClick() {
      setIsAddPlacePopupOpen(true);
   };

   function handleCardClick(data) {
      setSelectedCard(data);
      setIsImagePopupOpen(true);
   };

   // Закрываем все попапы
   function closeAllPopup() {
      setIsEditAvatarPopupOpen(false);
      setIsEditProfilePopupOpen(false);
      setIsAddPlacePopupOpen(false);
      setIsImagePopupOpen(false);
   }


   return (
      <CurrentUserContext.Provider value={currentUser}>
         <div className='background'>
            <div className="page">

               <Header />
               {/* <!--Блок profile ----------------------------------------------------------------------------> */}
               {/* <!--Блок elements ----------------------------------------------------------------------------> */}
               <Main
                  onEditAvatar={handleEditAvatarClick}
                  onEditProfile={handleEditProfileClick}
                  onAddPlace={handleEditPlaceClick}
                  onCardClick={handleCardClick}
               />

               <Footer />

               {/* <!-- Блок popup открытие попапа с аватаром ----------------------------------------------------------------------------> */}
               <PopupWithForm title='Обновить аватар' name='avatar' isOpen={isEditAvatarPopupOpen} buttonTitleSubmit='Сохранить' onClose={closeAllPopup}>

                  <input className="popup__input popup__input_type_link popup__input-avatar" name="link" id="avatar-link-input"
                     type="url" placeholder="Ссылка на аватар" required />
                  <span className="popup__input-error avatar-link-input-error"></span>

               </PopupWithForm>

               {/* <!-- Блок popup profile ----------------------------------------------------------------------------> */}
               {/* <PopupWithForm title='Редактировать профиль' name='profile' isOpen={isEditProfilePopupOpen} buttonTitleSubmit='Сохранить' onClose={closeAllPopup}>

               <input className="popup__input popup__input_type_name" type="text" name="name" id="name-input" placeholder="Имя"
                  required minLength="2" maxLength="40" />
               <span className="popup__input-error name-input-error"></span>
               <input className="popup__input popup__input_type_profession" type="text" name="about" id="profession-input"
                  placeholder="Профессия" required minLength="2" maxLength="200" />
               <span className="popup__input-error profession-input-error"></span>

            </PopupWithForm> */}

               {/* <!-- Блок popup добавление карточки ----------------------------------------------------------------------------> */}
               <PopupWithForm title='Новое место' name='image' isOpen={isAddPlacePopupOpen} buttonTitleSubmit='Создать' onClose={closeAllPopup}>

                  <input className="popup__input popup__input_type_name popup__input_type_title" name="name" type="text"
                     id="title-input" placeholder="Название" required minLength="2" maxLength="30" />
                  <span className="popup__input-error title-input-error"></span>
                  <input className="popup__input popup__input_type_profession popup__input_type_link" name="link" id="link-input"
                     type="url" placeholder="Ссылка на картинку" required />
                  <span className="popup__input-error link-input-error"></span>


               </PopupWithForm>

               <ImagePopup
                  card={selectedCard}
                  onClose={closeAllPopup}
                  isOpened={isImagePopupOpen}
               />

               {/* <!-- Блок popup открытие попапа для удаления карточки ----------------------------------------------------------------------------> */}
               <PopupWithForm title='Вы уверены?' name='confirm' buttonTitleSubmit='Да' onClose={closeAllPopup}></PopupWithForm>

               <EditProfilePopup
               isOpen={isEditProfilePopupOpen}
               onClose={closeAllPopup}
               />

            </div>
         </div>
      </CurrentUserContext.Provider>
   );
}

export default App;
