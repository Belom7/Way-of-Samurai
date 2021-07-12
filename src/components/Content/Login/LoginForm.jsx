import React from 'react';
import {reduxForm, Field} from 'redux-form'

const LoginForm = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Login'} name={'login'} component = {'input'}/>
                </div>
                <div>
                    <Field placeholder={'Password'} name={'password'} component = {'input'}/>
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