import React from 'react';
import {reduxForm, Field} from 'redux-form'
import { maxLenghtCreator, required } from '../../../utils/validators/valodators';
import { Input } from '../../common/FormsControl/FormsControl';
import Classes from './../../common/FormsControl/FormControl.module.css'

const maxLength25 = maxLenghtCreator(25);
const maxLength30 = maxLenghtCreator(30);

const LoginForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Email'} name={'email'} component = {Input} validate={[required, maxLength25]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} type={'password'} component = {Input} validate={[required, maxLength30]}/>
                </div>
                {props.error && <div className={Classes.formSummeryError}>
                    {props.error}
                </div>}
                <div>
                    <Field type="checkbox" name={'rememberMe'} component = {'input'}/>remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({form: 'Login'})(LoginForm)

export default LoginReduxForm;