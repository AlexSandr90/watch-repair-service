import React from 'react';
import './form-elements.scss';

const InputDate = props => {
    const {
        min,
        max,
        name,
        type,
        value,
        labelText,
        inputDirty,
        inputError,
        blurHandlerInput,
        changeHandlerInput
    } = props;

    return (
        <>
            <label htmlFor={name}>{labelText}</label>
            <input
                id={name}
                min={`${min}`}
                max={`${max}`}
                type={type}
                name={`${name}`}
                value={`${value}`}
                required
                className='form-item__input'
                defaultValue={''}
                onBlur={blurHandlerInput}
                onChange={changeHandlerInput}
            />
            {(inputDirty && inputError) && <div style={{color: 'red'}}>{inputError}</div>}
        </>
    )
};

export default InputDate;