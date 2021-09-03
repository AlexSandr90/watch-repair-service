import React from 'react';
import classes from './formik-form.module.scss';
import { Formik } from 'formik';

const FormikForm = (props) => {
console.log('FormikForm =>>> ', props.state.cities);

    return (
        <Formik 
            className={classes.FormikForm} 
            initialValues={{
                name: '',
                email: '',
                city: '',
                size: '',
                date: '',
                time: ''
            }}
            validate={
                values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required'
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email adddres'    
                    }
                    return errors;
                }
            }
            onSubmit={
                values => console.log(values)
            }
        >
            {
                ({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => {
                    return (
                        <form onSubmit={handleSubmit} >
                             <label htmlFor="formik-name">Name</label>
                             <input 
                                type="text" 
                                name='name'
                                id='formik-name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && errors.name}
                            <label htmlFor="email">Email</label>  
                            <input 
                                type="email" 
                                name='email'
                                id='email'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}



                            <button type='submit' disabled={isSubmitting} >
                                Submit
                            </button>    
                        </form>
                    )
                }
            }
        </Formik>
    )
}

export default FormikForm;