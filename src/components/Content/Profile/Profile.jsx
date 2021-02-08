import React from 'react';
import Classes from './Profile.module.css';
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    /* let profileInfo = props.pi.map ( info => <ProfileInfo i={info.i} f={info.f} o={info.o} year={info.year}/>) */

    return(
        <div className={Classes.profile}>
            <ProfileInfo/>
            <Posts pM={props.pM}/>
        </div>
    )
}

export default Profile;