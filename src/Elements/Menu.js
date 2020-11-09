import React from 'react';
import {
    Link,
    useLocation
  } from "react-router-dom";
import Logo from '../img/logo.png'
 
  import DropdownButton from 'react-bootstrap/DropdownButton'

function Menu() {
  let location = useLocation();

return (
  <div className ="menu">
    <div className="containere">
 <div className="logo">
 <img src={Logo} width='40px' alt="logo" /><h1>Movies</h1>
 </div>
 <div className="menuBotom">
  <DropdownButton  variant="secondary"  id="dropdown-basic-button" title="Menu">
    <div className="menu_button">
      <Link className={location.pathname === '/' ? 'active' : ''} to="/">Home</Link>
  
  <Link className={location.pathname === '/MyFavorite' ? 'active' : ''} to="/MyFavorite">MyFavorite</Link>
    </div>
  
</DropdownButton>
</div>
   

  </div>
  </div>
  
 
);
}
  
  export default Menu;
  