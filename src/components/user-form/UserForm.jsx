import React, {useEffect, useState} from 'react';
import './user-from.scss';
import {useHistory} from 'react-router-dom';
import {Input, Select, InputDate} from "./form-elements";

const UserForm = props => {
    const {updateData} = props;
    const path = '/masters';
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [size, setSize] = useState('');
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const [nameError, setNameError] = useState('Имя не может быть пустым');
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [sizeError, setSizeError] = useState('Поле SIZE не может быть пустым');
    const [cityError, setCityError] = useState('Поле CITY не может быть пустым');
    const [dateError, setDateError] = useState('Выберите дату');
    const [timeError, setTimeError] = useState('Выберите время');

    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [sizeDirty, setSizeDirty] = useState(false);
    const [cityDirty, setCityDirty] = useState(false);
    const [dateDirty, setDateDirty] = useState(false);
    const [timeDirty, setTimeDirty] = useState(false);

    const [formValid, setFormValid] = useState(false);


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
        setName(event.target.value);

        if (event.target.value.length < 2 || event.target.value.length > 16) {
            setNameError('Длина имени должна быть больше 2 и меньше 16 символов');
            if (!event.target.value) {
                setNameError('Имя не может быть пустым');
            }
        } else {
            setNameError('');
        }
    };
    const emailHandler = event => {
        setEmail(event.target.value);

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(String(event.target.value).toLowerCase())) {
            setEmailError('Your email is not correct');
            if (!event.target.value) {
                setEmailError('Email не может быть пустым')
            }
        } else {
            setEmailError('');
        }
    };

    const cityHandler = event => {
        setCity(event.target.value);

        if (!event.target.value) {
            setCityError('Поле CITY не может быть пустым');
        } else {
            setCityError('');
        }
    };
    const sizeHandler = event => {
        setSize(event.target.value);

        if (!event.target.value) {
            setSizeError('Поле SIZE не может быть пустым');
        } else {
            setSizeError('');
        }
    };
    const dateHandler = event => {
        setDate(event.target.value);

        if (!event.target.value) {
            setDateError('Выберите дату');
        } else {
            setDateError('');
        }
    };
    const timeHandler = event => {
        setTime(event.target.value);

        if (!event.target.value) {
            setTimeError('Выберите время');
        } else {
            setTimeError('');
        }
    };

    const blurHandler = event => {
        switch (event.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'city':
                setCityDirty(true);
                break;
            case 'size':
                setSizeDirty(true);
                break;
            case 'date':
                setDateDirty(true);
                break;
            case 'time':
                setTimeDirty(true);
                break;
            default:
                break;
        }
    };
    const handleSubmit = event => {
        event.preventDefault();
        const res = {name, email, size, date, time, city};

        history.push(path);
        updateData(res);
        return res;
    };


    return (
        <form className='form'>

            <div className="form-item">
                <Input
                    name={'name'}
                    labelText='Your name'
                    type='text'
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
                    placeholderText='Your email'
                    changeHandlerInput={emailHandler}
                    blurHandlerInput={blurHandler}
                    inputDirty={emailDirty}
                    inputError={emailError}
                />
            </div>

            <div className="form-item">
                <Select
                    name={`city`}
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
                    name={`size`}
                    labelText={'Size'}
                    blurHandlerSelect={blurHandler}
                    formInputHandlerSelect={sizeHandler}
                    optionText={'Choose size of watch'}
                    selectDirty={sizeDirty}
                    selectError={sizeError}
                    optionsArray={['Small', 'Medium', 'Lagre']}
                />
            </div>

            <div className='form-item time-block'>
                <span className='form-item__date'>
                    <InputDate
                        name={'date'}
                        labelText='Choose a date'
                        type='date'
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
                    <InputDate
                        name={'time'}
                        labelText='Choose a time'
                        type='time'
                        min={'08:00'}
                        max={'20:00'}
                        changeHandlerInput={timeHandler}
                        blurHandlerInput={blurHandler}
                        inputDirty={timeDirty}
                        inputError={timeError}
                    />
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