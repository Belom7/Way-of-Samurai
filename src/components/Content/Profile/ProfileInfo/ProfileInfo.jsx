import React from 'react';
import Classes from './ProfileInfo.module.css';
import Preloader from './../../../common/preloader/Preloader'
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return(
        <div className={Classes.profileInfo}>
            <div>
                <img src={props.profile.photos.large} alt='Аватарка большая' />
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;