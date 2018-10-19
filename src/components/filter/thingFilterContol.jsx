import React from 'react';
import PropTypes from 'prop-types';
import { Select, Input, AutoComplete } from 'antd';
import paramControlType from '../../types/paramControlType';

const Option = Select.Option;
const { TextArea } = Input;

const ThingFilterControl = props => {
    const { paramName, paramType, list, defaultValue, paramChange, controlWidth, hasEmptyItem, onlyInput, useFilter } = props;
    
    const DEFAULT_EMPTY = '-';
    let listLocal = [];
    let defaultValueLocal = defaultValue;
    let paramTypeLocal = (onlyInput && (paramType === paramControlType.TEXT_AREA)) ? paramControlType.INPUT : paramType;

    if (list) {
        listLocal = Object.values(list);
        if (hasEmptyItem) {
            listLocal.unshift(DEFAULT_EMPTY);
            if (!useFilter) {
                defaultValueLocal = DEFAULT_EMPTY;
            }
        }
    }

    if (paramType === paramControlType.SELECT) {
        return (
            <Select 
                defaultValue={defaultValueLocal}
                value={defaultValueLocal} 
                style={{ width: controlWidth }} 
                onChange={value => paramChange({ paramName: paramName, paramValue: value })} >
                
                {listLocal.map((paramItem, i) =>
                    <Option value={paramItem} key={i} >{paramItem}</Option>
                )}
            </Select>
        )
    } else if (paramTypeLocal === paramControlType.INPUT) {
        return <Input 
                    defaultValue={defaultValue}
                    value={defaultValue}
                    maxLength="50" 
                    style={{ width: controlWidth }} 
                    onChange={(e) => paramChange({ paramName: paramName, paramValue: e.target.value })} />
    } else if (paramTypeLocal === paramControlType.TEXT_AREA) {
        return <TextArea 
                    defaultValue={defaultValue}
                    value={defaultValue}
                    maxLength="250" 
                    autosize={{ minRows: 2, maxRows: 5 }} 
                    style={{ width: controlWidth }}
                    onChange={(e) => paramChange({ paramName: paramName, paramValue: e.target.value })}  />
    } else if (paramType === paramControlType.AUTO_COMPLETE) {
        
        const filteredList = ((defaultValue) && (defaultValue.length > 0)) ? list.filter(item => { 
            return item.toUpperCase().startsWith(defaultValue.toUpperCase()); 
        }) : list;

        return <AutoComplete 
                    dataSource={filteredList}
                    value={defaultValue}
                    defaultValue={defaultValue}
                    maxLength="250" 
                    style={{ width: controlWidth }}
                    onChange={(value) => paramChange({ paramName: paramName, paramValue: value })}  />
    } else {  
        return null
    }
}

ThingFilterControl.propTypes = {
    paramType: PropTypes.string.isRequired,
    list: PropTypes.any,
    defaultValue: PropTypes.any
}

export default ThingFilterControl  