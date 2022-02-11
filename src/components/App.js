//import logo from './logo.svg';
import '../index.css';
// import header_logo from '../image/header_logo.svg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
   return (
      <div className="page">

         {/* <!-- Блок header----------------------------------------------------------------------------> */}
         <Header />

         {/* <!--Блок profile ----------------------------------------------------------------------------> */}
         {/* <!--Блок elements ----------------------------------------------------------------------------> */}
         <Main />

         {/* <!-- Блок footer ----------------------------------------------------------------------------> */}
         <Footer />



         {/* <!-- Блок popup profile ----------------------------------------------------------------------------> */}

         <section className="popup popup_type_profile">
            <div className="popup__container">
               <form className="popup__form popup__form-prof" name="profile_form" novalidate>
                  <button className="popup__close" type="button" aria-label="Кнопка закрытия окна"></button>
                  <h2 className="popup__title">Редактировать профиль</h2>
                  <input className="popup__input popup__input_type_name" type="text" name="name" id="name-input" placeholder="Имя"
                     required minlength="2" maxlength="40" />
                  <span className="popup__input-error name-input-error"></span>
                  <input className="popup__input popup__input_type_profession" type="text" name="about" id="profession-input"
                     placeholder="Профессия" required minlength="2" maxlength="200" />
                  <span className="popup__input-error profession-input-error"></span>
                  <button className="popup__submit-button" type="submit" aria-label="Кнопка cохранить">Сохранить</button>
               </form>
            </div>
         </section>

         {/* <!-- Блок popup добавление карточки ----------------------------------------------------------------------------> */}
         <section className="popup popup_type_addImage">
            <div className="popup__container">
               <form className="popup__form popup__form-image" name="form-image" novalidate>
                  <button className="popup__close" type="button" aria-label="Кнопка закрытия окна"></button>
                  <h2 className="popup__title">Новое место</h2>
                  <input className="popup__input popup__input_type_name popup__input_type_title" name="name" type="text"
                     id="title-input" placeholder="Название" required minlength="2" maxlength="30" />
                  <span className="popup__input-error title-input-error"></span>
                  <input className="popup__input popup__input_type_profession popup__input_type_link" name="link" id="link-input"
                     type="url" placeholder="Ссылка на картинку" required />
                  <span className="popup__input-error link-input-error"></span>
                  <button className="popup__submit-button popup__submit-button_type_image" type="submit"
                     aria-label="Кнопка создать">Создать</button>
               </form>
            </div>
         </section>

         {/* <!-- Блок popup открытие попапа с картинкой ----------------------------------------------------------------------------> */}
         <section className="popup popup_type_image">
            <div className="popup__container-image">
               <button className="popup__close popup__close_type_emage" type="button" aria-label="Кнопка закрытия окна"></button>
               <figure className="popup__group">
                  <img className="popup__image" src="#" alt="Изображен край или область России" />
                  <figcaption className="popup__title-image">Наименование</figcaption>
               </figure>
            </div>
         </section>


         {/* <!-- Блок popup открытие попапа с аватаром ----------------------------------------------------------------------------> */}
         <section className="popup popup_type_avatar">
            <div className="popup__container">
               <button className="popup__close" type="button" aria-label="Кнопка закрытия окна"></button>
               <h2 className="popup__title">Обновить аватар</h2>
               <form className="popup__form popup__form-avatar" name="form-avatar" novalidate>
                  <input className="popup__input popup__input_type_link popup__input-avatar" name="link" id="avatar-link-input"
                     type="url" placeholder="Ссылка на аватар" required />
                  <span className="popup__input-error avatar-link-input-error"></span>
                  <button className="popup__submit-button" type="submit" aria-label="Кнопка cохранить">Сохранить</button>
               </form>
            </div>
         </section>

         {/* <!-- Блок popup открытие попапа для удаления карточки ----------------------------------------------------------------------------> */}
         <section className="popup popup_type_delete">
            <div className="popup__container">
               <button className="popup__close" type="button" aria-label="Кнопка закрытия окна"></button>
               <h2 className="popup__title">Вы уверены?</h2>
               <form className="popup__form" name="form_delete" novalidate>
                  <button className="popup__submit-button popup__submit-button_type_delete" type="submit" aria-label="Кнопка да">Да</button>
               </form>
            </div>
         </section>

         {/* <!-- Шаблон для карточек-фото ----------------------------------------------------------------------------> */}
         <template className="photo-template">
            <div className="photo">
               <div className="photo__element">
                  <button className="photo__trash" type="button" aria-label="Кнопка для удаления "></button>
                  <img className="photo__image" src="#" alt="Изображен край или область России" />
                  <div className="photo__title">
                     <h2 className="photo__text"></h2>
                     <div className="photo__like-container">
                        <button className="photo__like" type="button" aria-label="Кнопка для добавления лайков"></button>
                        <p className="photo__like-sum">0</p>
                     </div>
                  </div>
               </div>
            </div>
         </template>


      </div>








   );
}

export default App;
