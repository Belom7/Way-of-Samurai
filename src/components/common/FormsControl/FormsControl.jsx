import React from 'react';
import Classes from './FormControl.module.css'

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return(
        <div className={Classes.formControl + ' ' + (hasError? Classes.error : '')}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return(
        <div className={Classes.formControl + ' ' + (hasError? Classes.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}