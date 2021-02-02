import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './Nav.module.css';

function Nav () {
    return (
        <div className={Classes.nav}>
            <div>
                <NavLink to='/Profile' activeClassName={Classes.active}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/Messages' activeClassName={Classes.active}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/News' activeClassName={Classes.active}>News</NavLink>
            </div>
            <div>
                <NavLink to='/Music' activeClassName={Classes.active}>Music</NavLink>
            </div>
            {/* <div>
                <NavLink to='/Settings' activeClassName={Classes.active}>Settings</NavLink>
            </div> */}
        </div>
    )
}

export default Nav;