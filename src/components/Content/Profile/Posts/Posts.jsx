import React from 'react';
import Classes from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
    return(
        <div className={Classes.posts}>
            <Post name='Юличка' text='Воу-воу чувак какая аватарка!'/>
            <Post name='Кто то из грота' text='Раз два три елочка гори!'/>
        </div>
    )
}

export default Posts;