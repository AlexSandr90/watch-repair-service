import React, {useState} from 'react';
import classes from './formik-form.module.scss';
import {ErrorMessage, Field, Formik} from 'formik';
import * as Yup from 'yup';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'


const formSchema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too short!')
    .max(16, 'Too long!')
    .required('Required!'),
    email: Yup.string()
    .email('Invalid email')
    .required('Required'),
    city: Yup.string().required('Required'),
    size: Yup.string().required('Required')
});

export let storage = window.localStorage;

const FormikForm = () => {
    const cities = useSelector(state => state.form.cities);
    const sizes = useSelector(state => state.form.sizes);

    const [ startDate, setStartDate ] = useState(new Date());

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        return currentDate.getTime() < selectedDate.getTime();
    };

    const path = '/masters';
    const history = useHistory();

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                city: '',
                size: '',
                date: startDate,
                time: ''
            }}
            validationSchema={formSchema}
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

                            <div className={classes.formItem}>
                                <DatePicker
                                    value={startDate}
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    onBlur={handleBlur}
                                    showTimeSelect
                                    timeFormat='HH:mm'
                                    timeIntervals={60}
                                    timeCaption='time'
                                    dateFormat='MMMM d, yyyy h aa'
                                    minDate={new Date()}
                                    name='timeDate'
                                    filterTime={filterPassedTime}
                                />

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