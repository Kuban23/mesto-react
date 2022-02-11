import logo from './logo.svg';
import './index.css';
import './image/header_logo.svg';

function App() {
   return (
      <div className="page">

         {/* <!-- Блок header----------------------------------------------------------------------------> */}

         <header class="header">
            <img class="header__logo" src="<%=require('./image/header_logo.svg')%>" alt="Логотип Mesto Russia" />
         </header>

         <main class="content">

            {/* <!--Блок profile ----------------------------------------------------------------------------> */}

            <section class="profile">
               <div class="profile__image">
                  <img class="profile__avatar" src="<%=require('./image/avatar.jpg')%>" alt="Изображение Аватарки" />
               </div>

               <div class="profile__info">
                  <div class="profile__wrapper">
                     <h1 class="profile__name">Жак-Ив Кусто</h1>
                     <button class="profile__edit-button" type="button" aria-label="Кнопка редактирования профиля"></button>
                  </div>
                  <p class="profile__profession">Исследователь океана</p>
               </div>
               <button class="profile__add-button" type="button" aria-label="Кнопка для добавления фото"></button>
            </section>

            {/* <!--Блок elements ----------------------------------------------------------------------------> */}

            <section class="galery"></section>

         </main>

         {/* <!-- Блок footer ----------------------------------------------------------------------------> */}

         <footer class="footer">
            <p class="footer__copyright">&copy; 2021 Mesto Russia</p>
         </footer>

         {/* <!-- Блок popup profile ----------------------------------------------------------------------------> */}

         <section class="popup popup_type_profile">
            <div class="popup__container">
               <form class="popup__form popup__form-prof" name="profile_form" novalidate>
                  <button class="popup__close" type="button" aria-label="Кнопка закрытия окна"></button>
                  <h2 class="popup__title">Редактировать профиль</h2>
                  <input class="popup__input popup__input_type_name" type="text" name="name" id="name-input" placeholder="Имя"
                     required minlength="2" maxlength="40" />
                  <span class="popup__input-error name-input-error"></span>
                  <input class="popup__input popup__input_type_profession" type="text" name="about" id="profession-input"
                     placeholder="Профессия" required minlength="2" maxlength="200" />
                  <span class="popup__input-error profession-input-error"></span>
                  <button class="popup__submit-button" type="submit" aria-label="Кнопка cохранить">Сохранить</button>
               </form>
            </div>
         </section>

         {/* <!-- Блок popup добавление карточки ----------------------------------------------------------------------------> */}
         <section class="popup popup_type_addImage">
            <div class="popup__container">
               <form class="popup__form popup__form-image" name="form-image" novalidate>
                  <button class="popup__close" type="button" aria-label="Кнопка закрытия окна"></button>
                  <h2 class="popup__title">Новое место</h2>
                  <input class="popup__input popup__input_type_name popup__input_type_title" name="name" type="text"
                     id="title-input" placeholder="Название" required minlength="2" maxlength="30" />
                  <span class="popup__input-error title-input-error"></span>
                  <input class="popup__input popup__input_type_profession popup__input_type_link" name="link" id="link-input"
                     type="url" placeholder="Ссылка на картинку" required />
                  <span class="popup__input-error link-input-error"></span>
                  <button class="popup__submit-button popup__submit-button_type_image" type="submit"
                     aria-label="Кнопка создать">Создать</button>
               </form>
            </div>
         </section>

         {/* <!-- Блок popup открытие попапа с картинкой ----------------------------------------------------------------------------> */}
         <section class="popup popup_type_image">
            <div class="popup__container-image">
               <button class="popup__close popup__close_type_emage" type="button" aria-label="Кнопка закрытия окна"></button>
               <figure class="popup__group">
                  <img class="popup__image" src="#" alt="Изображен край или область России" />
                  <figcaption class="popup__title-image">Наименование</figcaption>
               </figure>
            </div>
         </section>


         {/* <!-- Блок popup открытие попапа с аватаром ----------------------------------------------------------------------------> */}
         <section class="popup popup_type_avatar">
            <div class="popup__container">
               <button class="popup__close" type="button" aria-label="Кнопка закрытия окна"></button>
               <h2 class="popup__title">Обновить аватар</h2>
               <form class="popup__form popup__form-avatar" name="form-avatar" novalidate>
                  <input class="popup__input popup__input_type_link popup__input-avatar" name="link" id="avatar-link-input"
                     type="url" placeholder="Ссылка на аватар" required />
                  <span class="popup__input-error avatar-link-input-error"></span>
                  <button class="popup__submit-button" type="submit" aria-label="Кнопка cохранить">Сохранить</button>
               </form>
            </div>
         </section>

         {/* <!-- Блок popup открытие попапа для удаления карточки ----------------------------------------------------------------------------> */}
         <section class="popup popup_type_delete">
            <div class="popup__container">
               <button class="popup__close" type="button" aria-label="Кнопка закрытия окна"></button>
               <h2 class="popup__title">Вы уверены?</h2>
               <form class="popup__form" name="form_delete" novalidate>
                  <button class="popup__submit-button popup__submit-button_type_delete" type="submit" aria-label="Кнопка да">Да</button>
               </form>
            </div>
         </section>

         {/* <!-- Шаблон для карточек-фото ----------------------------------------------------------------------------> */}
         <template class="photo-template">
            <div class="photo">
               <div class="photo__element">
                  <button class="photo__trash" type="button" aria-label="Кнопка для удаления "></button>
                  <img class="photo__image" src="#" alt="Изображен край или область России" />
                  <div class="photo__title">
                     <h2 class="photo__text"></h2>
                     <div class="photo__like-container">
                        <button class="photo__like" type="button" aria-label="Кнопка для добавления лайков"></button>
                        <p class="photo__like-sum">0</p>
                     </div>
                  </div>
               </div>
            </div>
         </template>


      </div>








   );
}

export default App;
