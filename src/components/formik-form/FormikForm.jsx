import React, {useState} from 'react';
import classes from './formik-form.module.scss';
import {ErrorMessage, Field, Formik} from 'formik';
import {useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import {formSchema} from "./schemas/form-schema";

export let storage = window.localStorage;


const FormikForm = () => {
    const cities = useSelector(state => state.form.cities);
    const sizes = useSelector(state => state.form.sizes);

    const [ startDate, setStartDate ] = useState(new Date());
    const [ currentDate, setCurrentDate ] = useState(startDate);

    console.log('startDate  =>> ', startDate);
    console.log('currentDate  =>> ', currentDate);

    const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        return currentDate.getTime() < selectedDate.getTime();
    };

    const path = '/masters';
    const history = useHistory();

    const handleSubmitForm = event => {
        event.preventDefault();

        history.push(path);

    };

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                city: '',
                size: '',
                date: currentDate,
                time: ''
            }}
            validationSchema={formSchema}
            onSubmit={
                values => {
                    console.log('values ==< ', values);
                    history.push(path);
                    storage.clear();
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
                                    className={classes.formDatepicker}
                                    // value={startDate}
                                    value={currentDate}
                                    selected={currentDate}
                                    onChange={date => setCurrentDate(date)}
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
                                // disabled={isSubmitting}
                                // onClick={handleSubmitForm}
                                // onChange={event => setStartDate(event.target.value)}
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