import React from 'react';
import Classes from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return(
        <div className={Classes.profileInfo}>
            <div>{props.f} {props.i} {props.o}</div>
            <div>{props.year}</div>
        </div>
    )
}

export default ProfileInfo;