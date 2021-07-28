import React from 'react';
import './form-elements.scss';

const Select = props => {

    const {
        name,
        labelText,
        blurHandlerSelect,
        formInputHandlerSelect,
        optionText,
        selectDirty,
        selectError
    } = props;

    return (
        <div className="form-item">
            <label htmlFor={name}>{labelText}</label>
            <select
                id={name}
                name={`${name}`}
                required
                // onChange={event => formInputHandler(event, setCity, setCityError, 'Поле CITY не может быть пустым')}
                onChange={formInputHandlerSelect}
                onBlur={blurHandlerSelect}
            >
                <option>{optionText}</option>
                <option value="Dnipro">Dnipro</option>
                <option value="Lviv">Lviv</option>
                <option value="Kyiv">Kyiv</option>
                <option value="Ivano-Frankivsk">Ivano-Frankivsk</option>
                <option value="Odesa">Odesa</option>
                <option value="Kharkiv">Kharkiv</option>
            </select>
            {(selectDirty && selectError) && <div style={{color: 'red'}}>{selectError}</div>}
        </div>
    );
};

export default Select;