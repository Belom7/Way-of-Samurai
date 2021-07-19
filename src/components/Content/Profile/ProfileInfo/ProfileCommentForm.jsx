import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { required, maxLenghtCreator } from '../../../../utils/validators/valodators';
import { Textarea } from '../../../common/FormsControl/FormsControl';

const maxLenght10 = maxLenghtCreator(10)

const ProfileCommentForm = (props) => {
    
    return (
       <div>
           <form onSubmit={props.handleSubmit}>
               <div>
                    <Field name={'comment'} component={Textarea} placeholder={'Введите комментарий'} validate={[required, maxLenght10]}/>
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