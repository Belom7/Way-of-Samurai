import React from 'react';
import Classes from './Comment.module.css';
import Like from './Like/Like'

function Comment(props) {
    return(
        <div className={Classes.comment}>
            <img src='https://archilab.online/images/1/123.jpg'></img>
            {props.name}
            <div className={Classes.message}>{props.message}</div>
            
            <div className={Classes.like}>
                <img src='https://static.wikia.nocookie.net/rutube9658/images/5/54/%D0%9B%D0%B0%D0%B9%D0%BA_TV_%D0%A8%D0%BE%D1%83.jpg/revision/latest/top-crop/width/360/height/450?cb=20181021193811&path-prefix=ru'></img>
                <Like n={props.like}/> 
            </div>
        </div>
    )
}

export default Comment;