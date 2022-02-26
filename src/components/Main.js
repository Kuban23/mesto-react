import React from 'react';
import api from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

   // Подписываемся на контекст CurrentUserContext
   const currentUser = React.useContext(CurrentUserContext);

   // Переменные состояния

   // const [userName, setUserName] = React.useState('');
   // const [userDescription, setUserDescription] = React.useState('');
   // const [userAvatar, setUserAvatar] = React.useState('');

   const [cards, setCards] = React.useState([]);

   // Эффект при монтировании компонента, для запроса API за пользовательскими данными
   // React.useEffect(() => {
   //    api.getProfileUserInfo()
   //       .then((userInfo) => {
   //          setUserName(userInfo.name);
   //          setUserDescription(userInfo.about);
   //          setUserAvatar(userInfo.avatar);
   //       })
   //       .catch((error) => {
   //          console.log(error);
   //       });
   // }, []);

   // При клике по кнопке лайк будет запускаться функция
   function handleCardLike(card) {
      // Снова проверяем, есть ли уже лайк на этой карточке
      const isLiked = card.likes.some(i => i._id === currentUser._id);

      // Отправляем запрос в API и получаем обновлённые данные карточки
      api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
         setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      });
   }



   React.useEffect(() => {
      api.getLoadCards()
         .then((data) => {
            setCards(data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []);


   return (

      <main className="content">

         {/* <!--Блок profile ----------------------------------------------------------------------------> */}
         <section className="profile">
            <div className="profile__image" onClick={props.onEditAvatar} >
               <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
            </div>
            <div className="profile__info">
               <div className="profile__wrapper">
                  <h1 className="profile__name">{currentUser.name}</h1>
                  <button className="profile__edit-button" onClick={props.onEditProfile} type="button" aria-label="Кнопка редактирования профиля"></button>
               </div>
               <p className="profile__profession">{currentUser.about}</p>

            </div>
            <button className="profile__add-button" onClick={props.onAddPlace} type="button" aria-label="Кнопка для добавления фото"></button>
         </section>

         {/* <!--Блок elements ----------------------------------------------------------------------------> */}
         <section className="galery" >
            {cards.map((item) => {

               return (
                  <Card
                     card={item}
                     onCardClick={props.onCardClick}
                     key={item._id}
                     onCardLike={handleCardLike}
                  />
               )
            })
            }

         </section>

      </main>



   );
}


export default Main;