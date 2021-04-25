import React from 'react';
import Classes from './Profile.module.css';
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
    let profileInfo = props.profile.profileInfo.map (info => <ProfileInfo i={info.i} f={info.f} o={info.o} year={info.year} img={info.img}/>)
    
    let addPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value
        props.onPostChange(text)
    };
    
    return(
        <div className={Classes.profile}>
            <div><img src='https://whatsism.com/uploads/posts/2018-07/1530546770_rmk_vdjbx10.jpg'></img>
            </div>
            {profileInfo}
            <div>
                <textarea onChange={onPostChange} value={props.profile.newPostText}/>
                <button onClick={addPost}>add post</button>
            </div>
            <Posts posts={props.profile.posts}/>
        </div>
    )
}

export default Profile;