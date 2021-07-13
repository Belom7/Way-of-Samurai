import React from 'react';
import Classes from './Profile.module.css';
import Posts from './Posts/Posts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import ProfileReduxForm from './ProfileInfo/ProfileCommentForm';


const Profile = (props) => {
    
    const onSubmit = (formData) => {
        console.log(formData)
    }
    
    /* let addPost = () => {
        props.addPost();
    };

    let onPostChange = (e) => {
        let text = e.target.value
        props.onPostChange(text)
    }; */
    
    return(
        <div className={Classes.profile}>
            <ProfileInfo profile={props.profile.profile} status={props.status} updateStatus={props.updateStatus}/>
            <ProfileReduxForm onSubmit={onSubmit}/>
            <Posts posts={props.profile.posts}/>
        </div>
    )
}

export default Profile;