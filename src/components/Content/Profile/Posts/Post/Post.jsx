import React from 'react';
import Classes from './Post.module.css';

const Post = (props) => {
    return (
        <div className={Classes.post}>
            <div className={Classes.img}>
                {<img src='http://archilab.online/images/1/123.jpg'></img>}
            </div>
            <div className={Classes.name}>
                {props.name}
            </div>
            <div className={Classes.text}>
                {props.message}
            </div>

        </div>
    )
}

export default Post;