import React from 'react';
import Classes from './Profile.module.css';
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {
    
    let addPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value
        props.onPostChange(text)
    };
    
    return(
        <div className={Classes.profile}>
            <ProfileInfo profile={props.profile.profile} status={props.status} updateStatus={props.updateStatus}/>
            <div>
                <textarea onChange={onPostChange} value={props.profile.posts.newPostText}/>
                <button onClick={addPost}>add post</button>
            </div>
                <Posts posts={props.profile.posts}/>
        </div>
    )
}

export default Profile;