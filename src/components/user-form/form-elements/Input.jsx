import React from 'react';
import './form-elements.scss';


const Input = props => {
    const {
        name,
        type,
        value,
        labelText,
        inputDirty,
        inputError,
        defaultValue,
        placeholderText,
        blurHandlerInput,
        changeHandlerInput
    } = props;

    return (
        <>
            <label htmlFor={name}>{labelText}</label>
            <input
                id={name}
                type={type}
                name={`${name}`}
                required
                className='form-item__input'
                placeholder={placeholderText}
                defaultValue={defaultValue}
                value={`${value}`}
                onChange={changeHandlerInput}
                onBlur={blurHandlerInput}
            />
            {(inputDirty && inputError) && <div style={{color: 'red'}}>{inputError}</div>}
        </>
    )
};

export default Input;