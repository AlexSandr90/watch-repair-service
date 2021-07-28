import React, {useEffect, useState} from 'react';
import './user-from.scss';
import {useHistory} from 'react-router-dom';
import {Input, Select} from "./form-elements";


// const Input = props => {
//     const {
//         name,
//         type,
//         value,
//         labelText,
//         inputDirty,
//         inputError,
//         placeholderText,
//         blurHandlerInput,
//         changeHandlerInput,
//     } = props;
//
//     return (
//         <div className='form-item'>
//             <label htmlFor={name}>{labelText}</label>
//             <input
//                 id={name}
//                 type={type}
//                 name={`${name}`}
//                 required
//                 className='form-item__input'
//                 placeholder={placeholderText}
//                 defaultValue={''}
//                 value={`${value}`}
//                 onChange={changeHandlerInput}
//                 onBlur={blurHandlerInput}
//             />
//             {(inputDirty && inputError) && <div style={{color: 'red'}}>{inputError}</div>}
//         </div>
//     )
// };

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
    const formInputHandler = (event, dataSetter, errorSetter, textError) => {
        dataSetter(event.target.value);

        if (!event.target.value) {
            errorSetter(textError);
        } else {
            errorSetter('')
        }
    };
    const cityHandler = event => {
        setCity(event.target.value);

        if (!event.city.target.value) {
            cityError('Поле CITY не может быть пустым');
        } else {
            cityError('');
        }
    }
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

            <Select
                name={`${city}`}
                labelText={'City:'}
                blurHandlerSelect={blurHandler}
                formInputHandlerSelect={cityHandler}
                optionText={'Choose your city'}
                selectDirty={cityDirty}
                selectError={cityError}
            />

            {/*<p className="form-item">*/}
            {/*    <label htmlFor="city">City: </label>*/}
            {/*    <select*/}
            {/*        id="city"*/}
            {/*        name="city"*/}
            {/*        required*/}
            {/*        onChange={event => formInputHandler(event, setCity, setCityError, 'Поле CITY не может быть пустым')}*/}
            {/*        onBlur={event => blurHandler(event)}*/}
            {/*    >*/}
            {/*        <option>Choose your city</option>*/}
            {/*        <option value="Dnipro">Dnipro</option>*/}
            {/*        <option value="Lviv">Lviv</option>*/}
            {/*        <option value="Kyiv">Kyiv</option>*/}
            {/*        <option value="Ivano-Frankivsk">Ivano-Frankivsk</option>*/}
            {/*        <option value="Odesa">Odesa</option>*/}
            {/*        <option value="Kharkiv">Kharkiv</option>*/}
            {/*    </select>*/}
            {/*    {(cityDirty && cityError) && <div style={{color: 'red'}}>{cityError}</div>}*/}
            {/*</p>*/}

            <p className='form-item'>
                <label htmlFor="size">Size</label>
                <select
                    id="size"
                    name="size"
                    required
                    onChange={event => formInputHandler(event, setSize, setSizeError, 'Поле SIZE не может быть пустым')}
                    onBlur={event => blurHandler(event)}
                >
                    <option>Choose size of watch</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="lagre">Large</option>
                </select>
                {(sizeDirty && sizeError) && <div style={{color: 'red'}}>{sizeError}</div>}
            </p>

            <p className='form-item time-block'>
                <span className='form-item__date'>
                    <label htmlFor="date">Choose a date</label>
                    <input
                        id='date' required
                        min='2021-07-21' max='2021-12-30'
                        type="date" name='date'
                        value='2021-07-21'
                        className='form-item__input'
                        onChange={event => formInputHandler(event, setDate, setDateError, 'Выберите дату')}
                        onBlur={event => blurHandler(event)}
                    />
                    {(dateDirty && dateError) && <div style={{color: 'red'}}>{dateError}</div>}
                </span>

                <span className="form-item__time">
                    <label htmlFor="time">Choose a time</label>
                    <input
                        id='time' required
                        min='08:00' max='20:00'
                        type="time" name='time'
                        className='form-item__input'
                        onChange={event => formInputHandler(event, setTime, setTimeError, 'Выберите время')}
                        onBlur={event => blurHandler(event)}
                    />
                    {(timeDirty && timeError) && <div style={{color: 'red'}}>{timeError}</div>}
                </span>
            </p>

            <input
                className='form-submit__btn'
                type="submit"
                onClick={event => handleSubmit(event)}
                value='Submit'
                disabled={!formValid}
            />
        </form>
    );
};

export default UserForm;