import React from 'react';
import api from '../utils/Api';


function Main(props) {

   // Переменные состояния
   const [userName, setUserName] = React.useState({});
   const [userDescription, setUserDescription] = React.useState({});
   const [userAvatar, setUserAvatar] = React.useState();

   // Эффект при монтировании компонента, для запроса API за пользовательскими данными
   React.useEffect(() => {
      api.redactAvatar()
         .then((link) => {
            setUserAvatar(link);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []
   );

   React.useEffect(() => {
      api.getProfileUserInfo()
         .then((userInfo) => {
            setUserName(userInfo);
            setUserDescription(userInfo);
         })
         .catch((error) => {
            console.log(error);
         });
   }, []
   );

   return (

      <main className="content">

         {/* <!--Блок profile ----------------------------------------------------------------------------> */}
         <section className="profile">
            <div className="profile__image" onClick={props.onEditAvatar}>
               {/* <img className="profile__avatar" src="<%=require('./image/avatar.jpg')%>" alt="Изображение Аватарки" /> */}
               <img className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} alt="Изображение Аватарки" />


            </div>
            <div className="profile__info">
               <div className="profile__wrapper">
                  {/* <h1 className="profile__name">Жак-Ив Кусто</h1> */}
                  <h1 className="profile__name">{userName.name}</h1>
                  <button className="profile__edit-button" onClick={props.onEditProfile} type="button" aria-label="Кнопка редактирования профиля"></button>
               </div>
               <p className="profile__profession">{userDescription.about}</p>

            </div>
            <button className="profile__add-button" onClick={props.onAddPlace} type="button" aria-label="Кнопка для добавления фото"></button>
         </section>

         {/* <!--Блок elements ----------------------------------------------------------------------------> */}
         <section className="galery"></section>


      </main>

   );
}


export default Main;