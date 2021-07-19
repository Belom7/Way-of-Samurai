import React from 'react'
import {Field, reduxForm} from 'redux-form'
import { maxLenghtCreator, required } from '../../../../utils/validators/valodators'
import { Textarea } from '../../../common/FormsControl/FormsControl'

const maxLength50 = maxLenghtCreator(50)

const AddMessageForm = (props) => {

    return(
    <form onSubmit={props.handleSubmit}>
        <Field component={Textarea} name={'newMessageText'} placeholder={'Введите сообщение'} validate={[required, maxLength50]}/>
        <button>Отправить сообщение</button>
    </form>
    )
}

const AddMessageReduxForm = reduxForm({form:'message'})(AddMessageForm)

export default AddMessageReduxForm;