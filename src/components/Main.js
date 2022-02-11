

function Main() {
   return (

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

   );
}


export default Main;