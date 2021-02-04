import React from 'react'
import { NavLink } from 'react-router-dom';
import Classes from './Dialog.module.css';

const Dialog = (props) => {
    return (
        <div>
            <NavLink to={'/Messages/' + props.id} activeClassName={Classes.active}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;