import React from 'react'
import {ErrorMessage , useField} from 'formik'

export const Textfield = ({label, ...props}) => {

    const[field, meta] = useField(props);

    return (
        <div className="mb-2">
            <label htmlFor={field.name}>{label}</label>
            <input className={`form-control shadow-none ${meta.touched && meta.error && `is invalid`}`} 
                {...field} {...props}
                autoComplete="off"
            />
            <ErrorMessage className="text-danger mt-1 fs-6" name={field.name} />
        </div>
    )
}

export default Textfield