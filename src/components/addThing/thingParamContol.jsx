import React from 'react';
import PropTypes from 'prop-types';
import { Select, Input } from 'antd';
import paramControlType from '../../types/paramControlType';

const Option = Select.Option;
const { TextArea } = Input;

const ThingParamControl = props => {
    const { paramName, paramType, list, defaultValue, thingAddActions, controlWidth, hasEmptyItem, onlyInput } = props;
    
    const DEFAULT_EMPTY = '-';
    let listLocal = [];
    let defaultValueLocal = defaultValue;
    let paramTypeLocal = (onlyInput && (paramType === paramControlType.TEXT_AREA)) ? paramControlType.INPUT : paramType;

    if (list) {
        listLocal = Object.values(list);
        if (hasEmptyItem) {
            listLocal.unshift(DEFAULT_EMPTY);
            defaultValueLocal = DEFAULT_EMPTY;
        }
    }

    if (paramType === paramControlType.SELECT) {
        return (
            <Select defaultValue={defaultValueLocal} 
                style={{ width: controlWidth }} 
                onChange={value => thingAddActions.thingAddChange({ paramName: paramName, paramValue: value })} >
                
                {listLocal.map((paramItem, i) =>
                    <Option value={paramItem} key={i} >{paramItem}</Option>
                )}
            </Select>
        )
    } else if (paramTypeLocal === paramControlType.INPUT) {
        return <Input 
                    defaultValue={defaultValue}
                    maxLength="50" 
                    style={{ width: controlWidth }} 
                    onChange={(e) => thingAddActions.thingAddChange({ paramName: paramName, paramValue: e.target.value })} />
    } else if (paramTypeLocal === paramControlType.TEXT_AREA) {
        return <TextArea 
                    defaultValue={defaultValue}
                    maxLength="250" 
                    autosize={{ minRows: 2, maxRows: 5 }} 
                    style={{ width: controlWidth }}
                    onChange={(e) => thingAddActions.thingAddChange({ paramName: paramName, paramValue: e.target.value })}  />
    } else {
        return null
    }
}

ThingParamControl.propTypes = {
    paramType: PropTypes.string.isRequired,
    list: PropTypes.any,
    defaultValue: PropTypes.any
}

export default ThingParamControl  