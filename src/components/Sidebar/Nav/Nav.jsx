import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './Nav.module.css';

const Nav = (props) => {
    return(
        <div className={Classes.nav} id={props.id}>
            <NavLink to={`/${props.name}`} activeClassName={Classes.active}>{props.name}</NavLink>
        </div>
    )
}

export default Nav;