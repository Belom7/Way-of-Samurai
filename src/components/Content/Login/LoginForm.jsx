import React from 'react';
import {reduxForm, Field} from 'redux-form'
import { maxLenghtCreator, required } from '../../../utils/validators/valodators';
import { Input } from '../../common/FormsControl/FormsControl';

const maxLength10 = maxLenghtCreator(10);
const maxLength15 = maxLenghtCreator(15);

const LoginForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component = {Input} validate={[required, maxLength10]}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component = {Input} validate={[required, maxLength15]}/>
                </div>
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