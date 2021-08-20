import React from 'react';
import './form-elements.scss';

const Select = props => {
    // console.log('Select ===== >  ', props);
    const {
        name,
        labelText,
        optionText,
        selectDirty,
        selectError,
        optionsArray,
        blurHandlerSelect,
        formInputHandlerSelect
    } = props;

    // console.log(`selectDirty: ${selectDirty}, selectDirty => ${selectDirty}`);

    return (
        <>
            <label htmlFor={name}>{labelText}</label>
            <select
                {...props}
                onChange={formInputHandlerSelect}
                onBlur={blurHandlerSelect}
            >
                <option disabled selected >{optionText}</option>
                {
                    optionsArray.map(optionItem => {
                        return (
                            <option
                                key={ optionItem }
                                value={ optionItem }
                                style={{textTransform: 'capitalize'}}
                            >
                                { optionItem }
                            </option>
                        )
                    })
                }
            </select>
            {(selectDirty && selectError) && <div style={{color: 'red'}}>{selectError}</div>}
        </>
    );
};

export default Select;