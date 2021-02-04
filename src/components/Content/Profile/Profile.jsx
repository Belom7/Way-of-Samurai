import React from 'react';
import Classes from './Profile.module.css';
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
    return(
        <div className={Classes.profile}>
            <ProfileInfo/>
            <Posts/>
        </div>
    )
}

export default Profile;