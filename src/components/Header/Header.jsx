import React from 'react';
import Classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <header className= {Classes.header}>
          <img src='http://s4.fotokto.ru/photo/full/331/3316553.jpg' alt='Картинка хедера'></img>
          <div className={Classes.loginBlock}>
            {props.isAuth ? props.login : <NavLink to={'/Login'}>Login</NavLink>} 
          </div>
        </header>
    )
}

export default Header;