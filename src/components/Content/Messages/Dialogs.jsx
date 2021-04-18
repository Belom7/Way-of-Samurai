import React from 'react'
import Classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {addMessageActionCreator,onMessageChangeActionCreator} from '../../../redux/state'

const Dialogs = (props) => {
    let dialogElement = props.state.dialogsData.map (dialog => <Dialog name={dialog.name} id={dialog.id}/>);
    let messageElement = props.state.messageData.map (message => <Message message={message.message} id={message.id}/>);

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(onMessageChangeActionCreator(text));
    };

    return(
        <div className={Classes.dialogs}>
            <div className={Classes.dialogsItem}> 
                {dialogElement}                
            </div>
            <div className={Classes.messages}>
                {messageElement}
            </div>
            <div>
                <textarea value={props.state.newMessageText} onChange={onMessageChange}/>
                <button onClick={addMessage}>Отправить сообщение</button>
            </div>
        </div>
    )
}

export default Dialogs;