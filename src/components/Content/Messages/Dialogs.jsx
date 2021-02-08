import React from 'react'
import Classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogElement = props.d.map (dialog => <Dialog name={dialog.name} id={dialog.id}/>)
    let messageElement = props.m.map (message => <Message message={message.message} id={message.id}/>)

    return(
        <div className={Classes.dialogs}>
            <div className={Classes.dialogsItem}> 
                {dialogElement}                
            </div>
            <div className={Classes.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs;