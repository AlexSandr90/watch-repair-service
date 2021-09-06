import React from 'react';
import classes from './formik-form.module.scss';
import {ErrorMessage, Field, Formik} from 'formik';
import * as yup from 'yup';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

const formSchema = yup.object().shape({
    name: yup.string()
    .min(2, 'Too short!')
    .max(16, 'Too long!')
    .required('Required!'),
    email: yup.string()
    .email('Invalid email')
    .required('Required'),
    city: yup.string().required('Required'),
    size: yup.string().required('Required')
});

export let storage = window.localStorage;

const FormikForm = () => {
    const cities = useSelector(state => state.form.cities);
    const sizes = useSelector(state => state.form.sizes);
    const path = '/masters';
    const history = useHistory();

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                city: '',
                size: '',
                date: '',
                time: ''
            }}
            validationSchema={formSchema}
            // validate={
            //     values => {
            //         const errors = {};
            //         if (!values.email) {
            //             errors.email = 'Поле EMAIL не может быть пустым';
            //         } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.email)) {
            //             errors.email = 'Invalid email adddres'
            //         }
            //
            //         if (!values.name) {
            //             errors.name = 'Поле NAME не может быть пустым'
            //         } else if (values.name.length < 2 || values.name.length > 16) {
            //             errors.name = 'Длина имени должна быть больше 2 и меньше 16 символов'
            //         }
            //
            //         if (!values.city) {
            //             errors.city = 'Поле CITY не может быть пустым'
            //         }
            //
            //         if (!values.size) {
            //             errors.size = 'Поле SIZE не может быть пустым'
            //         }
            //
            //         return errors;
            //     }
            // }
            onSubmit={
                values => {
                    console.log(values);
                    storage.setItem('formikData', JSON.stringify(values));
                }
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
                        <form
                            className={classes.form}
                            onSubmit={handleSubmit}
                        >
                            <div className={classes.formItem}>
                                <label htmlFor="formik-name">Name</label>
                                <Field
                                    type='text'
                                    name='name'
                                    id='formik-name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                    placeholder='Type your name...'
                                />
                                <ErrorMessage name='name' component='div' />
                            </div>

                            <div className={classes.formItem}>
                                <label htmlFor="email">Email</label>
                                <Field
                                    type="email"
                                    name='email'
                                    id='email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder='Type your email'
                                />
                                <ErrorMessage name='email' component='div' />
                            </div>

                            <div className={classes.formItem}>
                                <label htmlFor="size">Укажите размер часов</label>
                                <select 
                                    name='size' 
                                    id='size'
                                    onChange={handleChange}
                                >
                                    <option disabled selected >Выберите размер часов</option>
                                    {
                                        sizes.map(size => {
                                            return (
                                                <option
                                                    value={size.size.toLowerCase()}
                                                    key={size.id}
                                                >
                                                    {size.size}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                                {errors.size && touched.size && errors.size}
                            </div>

                            <div className={classes.formItem}>
                                <label htmlFor="city">Укажите город</label>
                                <select 
                                    name="city" 
                                    id="city"
                                    onChange={handleChange}
                                >
                                    <option disabled selected >Выберите город</option>
                                    {
                                        cities.map(city => {
                                            return (
                                                <option
                                                    value={city.city.toLowerCase()}
                                                    key={city.id}
                                                >
                                                    {city.city}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <button
                                className={classes.formSubmit__btn}
                                type='submit'
                                disabled={isSubmitting}
                            >
                                Submit
                            </button>
                        </form>
                    )
                }
            }
        </Formik>
    )
};

export default FormikForm;