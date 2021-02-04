import React from 'react';
import Classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return(
        <div className={Classes.profileInfo}>
            <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'></img>
            <div className={Classes.fio}>Bagaev Maksim Aleksandrovich</div>
            <div className={`${Classes.year}`}> 1991 </div>
        </div>
    )
}

export default ProfileInfo;