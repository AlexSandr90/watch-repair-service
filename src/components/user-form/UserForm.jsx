import React, {useEffect, useState} from 'react';
import './user-from.scss';
import {useHistory} from 'react-router-dom';

const UserForm = props => {
    const {updateData} = props;
    const path = '/masters';
    const history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [nameError, setNameError] = useState('Имя не может быть пустым');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не может быть пустым');
    const [size, setSize] = useState('');
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [formValid, setFormValid] = useState(false);


    useEffect(() => {
        if (nameError || emailError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, emailError]);

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
    const blurHandler = event => {
        switch (event.target.name) {
            case 'name':
                setNameDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
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
            <p className='form-item'>
                <label htmlFor="name">Your name</label>
                {(nameDirty && nameError) && <div style={{color: 'red'}}>{nameError}</div>}
                <input
                    id='name'
                    type="text"
                    name='name'
                    required
                    className='form-item__input'
                    placeholder='Your name'
                    // placeholder={`${props.userName}`}
                    value={name}
                    onChange={event => nameHandler(event)}
                    onBlur={event => blurHandler(event)}
                />
            </p>

            <p className='form-item'>
                <label htmlFor="email">Your email</label>
                {(emailDirty && emailError) && <div style={{color: 'red'}}>{emailError}</div>}
                <input
                    id='email'
                    type="text"
                    name='email'
                    required
                    className='form-item__input'
                    placeholder='Your email'
                    value={email}
                    onChange={event => emailHandler(event)}
                    onBlur={event => blurHandler(event)}
                />
            </p>

            <p className="form-item">
                <label htmlFor="city">City: </label>

                <select
                    name="city"
                    id="city"
                    onChange={event => setCity(event.target.value)}
                >
                    <option>Choose your city</option>
                    <option value="Dnipro">Dnipro</option>
                    <option value="Lviv">Lviv</option>
                    <option value="Kyiv">Kyiv</option>
                    <option value="Ivano-Frankivsk">Ivano-Frankivsk</option>
                    <option value="Odesa">Odesa</option>
                    <option value="Kharkiv">Kharkiv</option>
                </select>
            </p>

            <p className='form-item'>
                <label htmlFor="size">Size</label>
                <select
                    name="size"
                    id="size"
                    onChange={event => setSize(event.target.value)}
                >
                    <option>Choose size of watch</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="lagre">Large</option>
                </select>
            </p>

            <p className='form-item time-block'>
                <span className='form-item__date'>
                    <label htmlFor="date">Choose a date</label>
                    <input
                        id='date'
                        min='2021-07-21'
                        max='2021-12-30'
                        type="date"
                        name='date'
                        value='2021-07-21'
                        required
                        className='form-item__input'
                        onChange={event => setDate(event.target.value)}
                    />
                </span>

                <span className="form-item__time">
                    <label htmlFor="time">Choose a time</label>
                    <input
                        id='time'
                        min='08:00'
                        max='20:00'
                        type="time"
                        name='time'
                        required
                        className='form-item__input'
                        onChange={event => setTime(event.target.value)}
                        onBlur={event => blurHandler(event)}
                    />
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