import React from 'react'
import Classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    return(
        <div className={Classes.dialogs}>
            <div className={Classes.dialogsItem}> 
                <Dialog name='Maks' id='1'/>
                <Dialog name='Evgen' id='2'/>
                <Dialog name='Andrey' id='3'/>
                <Dialog name='Ivan' id='4'/>
                <Dialog name='Egor' id='5'/>                
            </div>
            <div className={Classes.messages}>
                <Message message='Привет!'/>
                <Message message='Погнали гулять!?'/>
                <Message message='Чего делаешь?'/>
                <Message message='ЭЭЭ ау!'/>
                <Message message='гГ'/>
            </div>
        </div>
    )
}

export default Dialogs;