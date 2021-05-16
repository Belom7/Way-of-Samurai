import React from 'react'
import Dialogs from './Dialogs'
import {addMessageActionCreator,onMessageChangeActionCreator} from './../../../redux/dialogsReducer'
import StoreContext from '../../../storeContext';

const MessagesContainer = () => {

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
}

export default MessagesContainer;