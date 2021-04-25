import React from 'react';
import Profile from './Profile'
import {addPostActionCreator, onPostChangeActionCreator} from './../../../redux/profileReducer'

const ProfileContainer = (props) => {
    
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
        props.store.dispatch(onPostChangeActionCreator(text));
    };
    
    return(<Profile addPost={addPost} onPostChange={onPostChange} profile={state.profile}/>)
}

export default ProfileContainer;