import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './Sidebar.module.css';

function Sidebar () {
    
    return (
        <div >
            <div className={Classes.sidebar}>
                <NavLink to='Profile' activeClassName={Classes.active}>Profile</NavLink>
            </div>
            <div className={Classes.sidebar}>
                <NavLink to='Messages' activeClassName={Classes.active}>Messages</NavLink>
            </div>
            <div className={Classes.sidebar}>
                <NavLink to='News' activeClassName={Classes.active}>News</NavLink>
            </div>
            <div className={Classes.sidebar}>
                <NavLink to='Music' activeClassName={Classes.active}>Music</NavLink>
            </div>
            <div className={Classes.sidebar}>
                <NavLink to='Settings' activeClassName={Classes.active}>Settings</NavLink>
            </div>
            <div className={Classes.sidebar}>
                <NavLink to='Users' activeClassName={Classes.active}>Users</NavLink>
            </div>
        </div>
    )
}

export default Sidebar;