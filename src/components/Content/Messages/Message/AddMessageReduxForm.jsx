import React from 'react'
import {Field, reduxForm} from 'redux-form'

const AddMessageForm = (props) => {
    return(
    <form onSubmit={props.handleSubmit}>
        <Field component={'textarea'} name={'newMessageText'} placeholder={'Введите сообщение'}/>
        <button>Отправить сообщение</button>
    </form>
    )
}

const AddMessageReduxForm = reduxForm({form:'message'})(AddMessageForm)

export default AddMessageReduxForm;