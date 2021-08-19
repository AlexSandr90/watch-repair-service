import React, {useEffect, useState} from 'react';
import './user-from.scss';
import {useHistory} from 'react-router-dom';
import {Input, Select, InputDate} from "./form-elements";

const UserForm = ({updateData, ...props}) => {
    const path = '/masters';
    const history = useHistory();

    const [ formFields, setFormFields ] = useState({
        name: '',
        email: '',
        size: '',
        city: '',
        date: '',
        time: ''
    });
    const [ errors, setErrors ] = useState({
        nameError: 'Имя не может быть пустым',
        emailError: 'Email не может быть пустым',
        sizeError: 'Поле SIZE не может быть пустым',
        cityError: 'Поле CITY не может быть пустым',
        dateError: 'Выберите дату',
        timeError: 'Выберите время'
    });
    const [ dirty, setDirty ] = useState({
        nameDirty: false,
        emailDirty: false,
        sizeDirty: false,
        cityDirty: false,
        dateDirty: false,
        timeDirty: false,
    });
    const [formValid, setFormValid] = useState(false);

    const { nameError, emailError, sizeError, cityError, dateError, timeError } = errors;
    const { nameDirty, emailDirty, sizeDirty, cityDirty, dateDirty, timeDirty } = dirty;
    const { name, email, size, city, date, time} = formFields;

    useEffect(() => {
        if (nameError || emailError || cityError || sizeError || dateError || timeError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    },
        [nameError, emailError, cityError, sizeError, dateError, timeError]
    );

    const nameHandler = event => {
        setFormFields({...formFields, name: event.target.value});

        if (event.target.value.length < 2 || event.target.value.length > 16) {
            setErrors({...errors, nameError: 'Длина имени должна быть больше 2 и меньше 16 символов'});
            if (!event.target.value) {
                setErrors({...errors, nameError: 'Имя не может быть пустым'});
            }
        } else {
            setErrors({...errors, nameError: ''});
        }
    };
    const emailHandler = event => {
        setFormFields({...formFields, email: event.target.value});
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(String(event.target.value).toLowerCase())) {
            setErrors({...errors, emailError: 'Your email is not correct'});
            if (!event.target.value) {
                setErrors({...errors, emailError: 'Email не может быть пустым'});
            }
        } else {
            setErrors({...errors, emailError: ''});
        }
    };
    const cityHandler = event => {
        setFormFields({...formFields, city: event.target.value});
        if (!event.target.value) {
            setErrors({...errors, cityError: 'Поле CITY не может быть пустым'});
        } else {
            setErrors({...errors, cityError: ''});
        }
    };
    const sizeHandler = event => {
        setFormFields({...formFields, size: event.target.value});

        if (!event.target.value) {
            setErrors({...errors, sizeError: 'Поле SIZE не может быть пустым'});
        } else {
            setErrors({...errors, sizeError: ''});
        }
    };
    const dateHandler = event => {
        setFormFields({...formFields, date: event.target.value});

        if (!event.target.value) {
            setErrors({...errors, dateError: 'Выберите дату'});
        } else {
            setErrors({...errors, dateError: ''});
        }
    };
    const timeHandler = event => {
        setFormFields({...formFields, time: event.target.value});

        if (!event.target.value) {
            setErrors({...errors, timeError: 'Выберите время'});
        } else {
            setErrors({...errors, timeError: ''});
        }
    };

    const blurHandler = event => {
        switch (event.target.name) {
            case 'name':
                setDirty({...dirty, nameDirty: true});
                break;
            case 'email':
                setDirty({...dirty, emailDirty: true});
                break;
            case 'city':
                setDirty({...dirty, cityDirty: true});
                break;
            case 'size':
                setDirty({...dirty, sizeDirty: true});
                break;
            case 'date':
                setDirty({...dirty, dateDirty: true});
                break;
            case 'time':
                setDirty({...dirty, timeDirty: true});
                break;
            default:
                break;
        }
    };
    const handleSubmit = event => {
        event.preventDefault();

        history.push(path);
        updateData(formFields);
        return formFields;
    };


    return (
        <form className='form'>

            <div className="form-item">
                <Input
                    name={'name'}
                    labelText='Your name'
                    type='text'
                    defaultValue={name}
                    value={name}
                    placeholderText='Your name'
                    changeHandlerInput={nameHandler}
                    blurHandlerInput={blurHandler}
                    inputDirty={nameDirty}
                    inputError={nameError}
                />
            </div>

            <div className="form-item">
                <Input
                    name={'email'}
                    labelText='Your email'
                    type='text'
                    value={email}
                    defaultValue={email}
                    placeholderText='Your email'
                    changeHandlerInput={emailHandler}
                    blurHandlerInput={blurHandler}
                    inputDirty={emailDirty}
                    inputError={emailError}
                />
            </div>

            <div className="form-item">
                <Select
                    name={city}
                    labelText={'City:'}
                    blurHandlerSelect={blurHandler}
                    formInputHandlerSelect={cityHandler}
                    optionText={'Choose your city'}
                    selectDirty={cityDirty}
                    selectError={cityError}
                    optionsArray={['Dnipro', 'Lviv', 'Kyiv', 'Ivano-Frankivsk', 'Odesa', 'Kharkiv']}
                />
            </div>

            <div className="form-item">
                <Select
                    name={size}
                    labelText={'Size'}
                    blurHandlerSelect={blurHandler}
                    formInputHandlerSelect={sizeHandler}
                    optionText={'Choose size of watch'}
                    selectDirty={sizeDirty}
                    selectError={sizeError}
                    optionsArray={['Small', 'Medium', 'Large']}
                />
            </div>

            <div className='form-item time-block'>
                <span className='form-item__date'>
                    <InputDate
                        name={date}
                        labelText='Choose a date'
                        type='date'
                        defaultValue={'2021-07-30'}
                        value={'2021-07-30'}
                        min={'2021-07-30'}
                        max={'2021-12-30'}
                        changeHandlerInput={dateHandler}
                        blurHandlerInput={blurHandler}
                        inputDirty={dateDirty}
                        inputError={dateError}
                    />
                </span>

                <span className="form-item__time">
                    <label htmlFor="time">Choose a time</label>
                    <input
                        id='time' required
                        min='08:00' max='20:00'
                        type={time} name={time}
                        className='form-item__input'
                        onChange={event => timeHandler(event)}
                        onBlur={event => blurHandler(event)}
                />
                {(timeDirty && timeError) && <div style={{color: 'red'}}>{timeError}</div>}

                    {/*<InputDate*/}
                    {/*    name='time'*/}
                    {/*    labelText='Choose a time'*/}
                    {/*    type='time'*/}
                    {/*    nim='08:00'*/}
                    {/*    max='20:00'*/}
                    {/*    changeHandlerInput={timeHandler}*/}
                    {/*    blurHandlerInput={blurHandler}*/}
                    {/*    inputDirty={timeDirty}*/}
                    {/*    inputError={timeError}*/}
                    {/*/>*/}

                </span>
            </div>

            <input
                className='form-submit__btn'
                type="submit"
                onClick={event => handleSubmit(event)}
                value='Find Master'
                disabled={!formValid}
            />
        </form>
    );
};

export default UserForm;