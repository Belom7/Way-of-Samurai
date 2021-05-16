import React from 'react';
import Profile from './Profile'
import {addPostActionCreator, onPostChangeActionCreator} from './../../../redux/profileReducer'
//import StoreContext from '../../../storeContext';
import { connect } from 'react-redux';

/* const ProfileContainer = () => {
    
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
} */

let mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },

        onPostChange: (text) => {
            dispatch(onPostChangeActionCreator(text));
        },
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;