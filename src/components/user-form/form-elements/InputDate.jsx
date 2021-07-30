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
        defaultValue,
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
                defaultValue={defaultValue}
                required
                className='form-item__input'
                onBlur={blurHandlerInput}
                onChange={changeHandlerInput}
            />
            {(inputDirty && inputError) && <div style={{color: 'red'}}>{inputError}</div>}
        </>
    )
};

export default InputDate;