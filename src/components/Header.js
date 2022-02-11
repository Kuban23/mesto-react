import header_logo from '../image/header_logo.svg';

function Header() {
   return (

      <header class="header">
            <img class="header__logo" src={header_logo} alt="Логотип Mesto Russia" />
         </header>
   );
};


export default Header;