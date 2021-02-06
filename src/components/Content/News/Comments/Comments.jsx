import React from 'react';
import Classes from './Comments.module.css'
import Comment from './Comment/Comment';

let postsData = [
  {id: 1, name: 'Maksim', message:'Навальный жгет!', like: 2},
  {id: 2, name: 'Ivan', message:'Ля, фига се!', like: 15}
]

let postElement = postsData.map (post => <Comment name={post.name} message={post.message} like={post.like} id={post.id}/>)

const Comments = (props) => {
    return(
        <div className={Classes.MyPosts}>
          <h3>Комментарии</h3>
          {postElement}
        </div>
    )
}

export default Comments;