import React from 'react';
import classes from './Comments.module.css'
import Comment from './Comment/Comment';

function Comments() {
    return(
        <div className={classes.MyPosts}>
          <p>Комментарии</p>
          <Comment name='Maksim' massage='Навальный жгет!' like='2'/>
          <Comment name='Ivan' massage='Ля, фига се' like='15'/>
        </div>
    )
}

export default Comments;