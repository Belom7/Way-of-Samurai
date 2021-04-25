import React from 'react'
import Dialogs from './Dialogs'
import {addMessageActionCreator,onMessageChangeActionCreator} from './../../../redux/dialogsReducer'

const MessagesContainer = (props) => {

    let state = props.store.getState();

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text));
    };

    return(<Dialogs onMessageChange={onMessageChange} addMessage={addMessage} state={state.messages}/>)
}

export default MessagesContainer;