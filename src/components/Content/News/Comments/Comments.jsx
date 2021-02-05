import React from 'react';
import Classes from './Comments.module.css'
import Comment from './Comment/Comment';

let postsData = [
  {id= 1, name: 'Maksim', message:'Навальный жгет!', like: 2},
  {id= 2, name: 'Ivan', message:'Ля, фига се!', like: 15}
]

const Comments = (props) => {
    return(
        <div className={Classes.MyPosts}>
          <h3>Комментарии</h3>
          <Comment name={postsData[0].name} massage={postsData[0].message} like={postsData[0].like} id={postsData[0].id}/>
          <Comment name={postsData[1].name} massage={postsData[1].message} like={postsData[1].like} id={postsData[1].id}/>
        </div>
    )
}

export default Comments;