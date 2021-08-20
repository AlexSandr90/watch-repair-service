import React from 'react';
import './form-elements.scss';


const Input = ({blurHandlerInput, changeHandlerInput, inputDirty, inputError, ...props}) => {

    return (
        <>
            <label htmlFor={props.name}>{props.labelText}</label>
            <input
                {...props}
                className='form-item__input'
                onChange={changeHandlerInput}
                onBlur={blurHandlerInput}
            />
            {(inputDirty && inputError) && <div style={{color: 'red'}}>{inputError}</div>}
        </>
    )
};

export default Input;