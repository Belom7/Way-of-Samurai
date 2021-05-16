import React from 'react'
import Dialogs from './Dialogs'
import {addMessageActionCreator,onMessageChangeActionCreator} from './../../../redux/dialogsReducer'
//import StoreContext from '../../../storeContext';
import { connect } from 'react-redux';

/* const MessagesContainer = () => {

    return(
    <StoreContext.Consumer> 
        {
        (store) => {
            let state = store.getState();

            let addMessage = () => {
                store.dispatch(addMessageActionCreator());
            };

            let onMessageChange = (text) => {
                store.dispatch(onMessageChangeActionCreator(text));
            };

        return (
            <Dialogs onMessageChange={onMessageChange} addMessage={addMessage} state={state.messages}/>
            )
        }
    }
    </StoreContext.Consumer>
    )
} */

let mapStateToProps = (state) => {
    return {
        state: state.messages
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: () => {
            dispatch(addMessageActionCreator())
        },
        addMessage: (text) => {
            dispatch(onMessageChangeActionCreator(text))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default MessagesContainer;