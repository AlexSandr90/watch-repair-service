import React, {useState} from 'react';
import classes from './formik-form.module.scss';
import {ErrorMessage, Field, Formik} from 'formik';
import * as yup from 'yup';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import DatePicker, {
    handleDateChange, 
    registerLocale, 
    setHours,
    setMinutes
} from 'react-datepicker';
import es from 'date-fns/locale/es';
import 'react-datepicker/dist/react-datepicker.css'

registerLocale('es', es);

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
    // const [ startDate, setStartDate ] = useState('');

    const [ startDate, setStartDate ] = useState(
        setHours(setMinutes(new Date(), 60), 16)
    );

        console.log(startDate)
    
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

                                    // onChange={handleDateChange}
                                    onChange={date => setStartDate(date)}
                                    includeTimes={[
                                        setHours(setMinutes(new Date(), 0), 17),
                                        setHours(setMinutes(new Date(), 60), 18),
                                        setHours(setMinutes(new Date(), 60), 19),
                                        setHours(setMinutes(new Date(), 60), 20),
                                    ]}
                                    showTimeSelect
                                    // dateFormat="Pp"
                                    dateFormat='MMMM d, yyyy h:mm aa'
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