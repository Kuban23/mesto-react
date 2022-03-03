import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

   // Переменные состояния, нужны для для видимости попапов.
   const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
   const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
   const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
   const [selectedCard, setSelectedCard] = React.useState(null);
   const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

   // Переменные состояния cards
   const [cards, setCards] = React.useState([]);

   // Переменная состояния для текущего пользователя.
   const [currentUser, setCurrentUser] = React.useState({});

   // Эффект который будет вызывать getProfileUserInfo() и getLoadCards(), обновлять стейт переменную 
   // из полученного значения и загрузку карточек с сервера. 
   React.useEffect(() => {
      Promise.all([ // в Promise.all передаем массив промисов которые нужно выполнить
         api.getProfileUserInfo(),
         api.getLoadCards()
      ])
         .then(([userData, cardsData]) => {
            setCurrentUser(userData)
            setCards(cardsData)
            closeAllPopup()
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

   // Обработчик для изменения профайла 
   function handleUpdateUser(data) {
      api.redactProfile(data)
         .then((currentUserData) => {
            setCurrentUser(currentUserData)
            closeAllPopup()
         })
         .catch((error) => {
            console.log(error);
         })
   }

   // Обработчик для изменения аватара
   function handleUpdateAvatar({ avatar }) {
      api.redactAvatar({ avatar })
         .then((currentUserData) => {
            setCurrentUser(currentUserData)
            closeAllPopup()
         })
         .catch((error) => {
            console.log(error);
         })
   }

   // Реализация постновки и удаления лайков
   function handleCardLike(card) {
      // Снова проверяем, есть ли уже лайк на этой карточке
      const isLiked = card.likes.some(i => i._id === currentUser._id);

      // Отправляем запрос в API и получаем обновлённые данные карточки
      api.changeLikeCardStatus(card._id, !isLiked)
         .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
         })
         .catch((error) => {
            console.log(error);
         });
   }

   // Реализация удаления карточки
   function handleCardDelete(card) {

      // Отправляю запрос в API и получаю массив, исключаю из него удалённую карточку
      api.deleteCard(card._id)
         .then(() => {
            setCards((state) => state.filter((c) => c._id !== card._id));
         })
         .catch((error) => {
            console.log(error);
         })

   }

   // Запрос API добавление новой карточки
   function handleAddPlaceSubmit(data) {
      api.addCard(data)
         .then((newCard) => {
            setCards([newCard, ...cards])
            closeAllPopup()
         })
         .catch((error) => {
            console.log(error);
         });
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
                  cards={cards}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
               />

               <Footer />

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
                  onUpdateUser={handleUpdateUser}
               />

               <EditAvatarPopup
                  isOpen={isEditAvatarPopupOpen}
                  onClose={closeAllPopup}
                  onUpdateAvatar={handleUpdateAvatar}
               />

               <AddPlacePopup
                  isOpen={isAddPlacePopupOpen}
                  onClose={closeAllPopup}
                  onAddPlace={handleAddPlaceSubmit}
               />

            </div>
         </div>
      </CurrentUserContext.Provider>
   );
}

export default App;
