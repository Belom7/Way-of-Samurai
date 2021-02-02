import React from 'react';
import classes from './Profile.module.css';

function Profile() {
    return(
        <div className={classes.profile}>
            <img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'></img>
            <div className={classes.fio}>Bagaev Maksim Aleksandrovich</div>
            <div className={`${classes.year}`}> 1991 </div>
        </div>
    )
}

export default Profile;