import React from 'react'
import Classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

let dialogsData = [
    {id: 1, name: 'Maks'},
    {id: 2, name: 'Evgen'},
    {id: 3, name: 'Andrey'},
    {id: 4, name: 'Ivan'},
    {id: 5, name: 'Egor'}
]

let messageData = [
    {id: 1, message: 'Привет!'},
    {id: 2, message: 'Погнали гулять!?'},
    {id: 3, message: 'Чего делаешь?'},
    {id: 4, message: 'ЭЭЭ ау'},
    {id: 5, message: 'гГ'},
]

let dialogElement = dialogsData.map (dialog => <Dialog name={dialog.name} id={dialog.id}/>)

let messageElement = messageData.map (message => <Message message={message.message} id={message.id}/>)

const Dialogs = (props) => {
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