import React from 'react';
import Classes from './Profile.module.css';
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileReduxForm from './ProfileInfo/ProfileCommentForm';


const Profile = (props) => {

    const addNewPost = (value) => {
        props.addPost(value.comment)
    }
    
    return(
        <div className={Classes.profile}>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
            <ProfileReduxForm onSubmit={addNewPost}/>
            <Posts posts={props.profile.posts}/>
        </div>
    )
}

export default Profile;