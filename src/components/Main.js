import React from 'react';

function Main(props) {

   // function handleEditAvatarClick() {
   //    document.querySelector('.popup_type_avatar').classList.add('popup_opened');
   // };

   // function handleEditProfileClick() {
   //    document.querySelector('.popup_type_profile').classList.add('popup_opened');
   // };

 

   return (

      <main className="content">

         {/* <!--Блок profile ----------------------------------------------------------------------------> */}

         <section className="profile">
            <div className="profile__image" onClick={props.onEditAvatar}>
               <img className="profile__avatar" src="<%=require('./image/avatar.jpg')%>" alt="Изображение Аватарки" />
            </div>

            <div className="profile__info">
               <div className="profile__wrapper">
                  <h1 className="profile__name">Жак-Ив Кусто</h1>
                  <button className="profile__edit-button" onClick={props.onEditProfile} type="button" aria-label="Кнопка редактирования профиля"></button>
               </div>
               <p className="profile__profession">Исследователь океана</p>
            </div>
            <button className="profile__add-button" onClick={props.onAddPlace} type="button" aria-label="Кнопка для добавления фото"></button>
         </section>

         {/* <!--Блок elements ----------------------------------------------------------------------------> */}

         <section className="galery"></section>


      </main>

   );
}


export default Main;