import React from 'react';
import Classes from './BlockFriends.module.css';

const BlockFriends = (props) => {
    return(
        <div className={Classes.friends} id={props.id}>
            {props.img} {props.name}
        </div>
    )
}

export default BlockFriends;