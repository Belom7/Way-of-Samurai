import React from 'react';
import Classes from './Profile.module.css';
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    let profileInfo = props.state.profileInfo.map (info => <ProfileInfo i={info.i} f={info.f} o={info.o} year={info.year} img={info.img}/>)

    return(
        <div className={Classes.profile}>
            <div><img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'></img>
            </div>
            {profileInfo}
            <Posts state={props.state.posts}/>
        </div>
    )
}

export default Profile;