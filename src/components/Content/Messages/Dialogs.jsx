import React from 'react'
import Classes from './Dialogs.module.css';

function Dialogs() {
    return(
        <div className={Classes.dialogs}>
            <div className={Classes.dialogsItem}> 
                <div className={Classes.dialog}>
                    Maks
                </div>
                <div className={Classes.dialog + ' ' + Classes.active}>
                    Evgen
                </div>
                <div className={Classes.dialog}>
                    Andrey
                </div>
                <div className={Classes.dialog}>
                    Ivan
                </div>
                <div className={Classes.dialog}>
                    Egor
                </div>
            </div>
            <div className={Classes.messages}>
                <div className={Classes.message}>
                    Привет!
                </div>
                <div className={Classes.message}>
                    Как там дела на работе?
                </div>
                <div className={Classes.message}>
                    Помчали гулять!?
                </div>
            </div>
        </div>
    )
}

export default Dialogs;