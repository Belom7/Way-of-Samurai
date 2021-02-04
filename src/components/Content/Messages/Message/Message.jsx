import React from 'react';
import Classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={Classes.message}>
            <div>{props.message}</div>
        </div>
    )
}

export default Message;