import React from 'react';
import Profile from './Profile'
import {addPostActionCreator, onPostChangeActionCreator} from './../../../redux/profileReducer'
import StoreContext from '../../../storeContext';

const ProfileContainer = () => {
    
    return(
    <StoreContext.Consumer> 
        {
        (store) => {
            let state = store.getState();

            let addPost = () => {
                store.dispatch(addPostActionCreator());
            };

            let onPostChange = (text) => {
                store.dispatch(onPostChangeActionCreator(text));
            };

        return(
            <Profile addPost={addPost} onPostChange={onPostChange} profile={state.profile}/>
            )
        }
    }
    </StoreContext.Consumer>
    )
}

export default ProfileContainer;