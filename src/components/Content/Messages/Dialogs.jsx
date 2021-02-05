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

const Dialogs = (props) => {
    return(
        <div className={Classes.dialogs}>
            <div className={Classes.dialogsItem}> 
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
                <Dialog name={dialogsData[4].name} id={dialogsData[4].id}/>                
            </div>
            <div className={Classes.messages}>
                <Message message={messageData[0].message} id={messageData[0].id}/>
                <Message message={messageData[1].message} id={messageData[1].id}/>
                <Message message={messageData[2].message} id={messageData[2].id}/>
                <Message message={messageData[3].message} id={messageData[3].id}/>
                <Message message={messageData[4].message} id={messageData[4].id}/>
            </div>
        </div>
    )
}

export default Dialogs;