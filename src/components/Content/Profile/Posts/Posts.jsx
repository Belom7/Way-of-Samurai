import React from 'react';
import Classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = React.memo((props) => {
    
    let postM = props.posts.postMessage.map ( post => <Post message={post.message} name={post.name} id={post.id}/>)

    return(
        <div className={Classes.posts}>
            {postM}
        </div>
    )
})

export default Posts;