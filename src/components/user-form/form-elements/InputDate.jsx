import React from 'react';
import './form-elements.scss';

const InputDate = ({
                       labelText, inputDirty, inputError,
                       blurHandlerInput, changeHandlerInput, ...props
}) => {

    return (
        <>
            <label htmlFor={props.name}>{labelText}</label>
            <input
                {...props}
                className='form-item__input'
                onBlur={blurHandlerInput}
                onChange={changeHandlerInput}
            />
            {(inputDirty && inputError) && <div style={{color: 'red'}}>{inputError}</div>}
        </>
    )
};

export default InputDate;