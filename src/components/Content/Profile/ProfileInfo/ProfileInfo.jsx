import React from 'react';
import Classes from './ProfileInfo.module.css';
import Preloader from './../../../common/preloader/Preloader'
import ProfileStatus from './ProfileStatus'
import UserImg from './../../../../assets/images/user.png'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length){ 
            props.savePhoto(e.target.files[0])
        }
    }
    return(
        <div className={Classes.profileInfo}>
            <div>
                <img src={props.profile.photos.large || UserImg} alt='Аватарка большая' />
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.fullName}</div>
                <div>{props.profile.aboutMe}</div>
            </div>
        </div>
    )
}

export default ProfileInfo;