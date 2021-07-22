import React, {useState} from 'react';
import './user-from.scss';

const UserForm = () => {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ size, setSize ] = useState('');
    const [ date, setDate ] = useState('');
    const [ time, setTime ] = useState('');

    return (
        <form className='form'>
            <p className='form-item'>
                <label htmlFor="name">Your name</label>
                <input
                    id='name'
                    type="text"
                    name='name'
                    required
                    className='form-item__input'
                    placeholder='Your name'
                    onChange={event => setName(event.target.value)}
                />
            </p>

            <p className='form-item'>
                <label htmlFor="email">Your email</label>
                <input
                    id='email'
                    type="text"
                    name='email'
                    required
                    className='form-item__input'
                    placeholder='Your email'
                    onChange={event => setEmail(event.target.value)}
                />
            </p>

            <p className='form-item'>
                <label htmlFor="size">Size</label>
                <select
                    name="size"
                    id="size"
                    onChange={event => setSize(event.target.value)}
                >
                    <option >Choose size of watch</option>
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
                    />
                </span>
            </p>

            <input
                className='form-submit__btn'
                type="submit"
                onClick={event => {
                    event.preventDefault();
                    const res = {name, email, size, date, time};
                    console.log(res);

                    return res;
                }}
                value='Submit'
            />
        </form>
    );
};

export default UserForm;