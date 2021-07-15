import React from 'react';
import {reduxForm, Field} from 'redux-form';

const ProfileCommentForm = (props) => {
    
    return (
       <div>
           <form onSubmit={props.handleSubmit}>
               <div>
                    <Field name={'comment'} component={'input'} placeholder={'Введите комментарий'}/>
               </div>
               <div>
                    <button>add post</button>
               </div>
           </form>
       </div>
    )
}

const ProfileReduxForm = reduxForm({form: 'Comment'})(ProfileCommentForm)

export default ProfileReduxForm