import React from "react"
import PropTypes from "prop-types"
import { Select, Input } from 'antd'
import paramControlType from '../../types/paramControlType';

const Option = Select.Option;
const { TextArea } = Input;

const ThingParamControl = props => {
    const { paramName, paramType, list, defaultValue, thingAddActions } = props;

    if (paramType === paramControlType.SELECT) {
        return (
            <Select defaultValue={defaultValue} 
                style={{ width: 500 }} 
                onChange={value => thingAddActions.thingAddChange({ paramName: paramName, paramValue: value })} >
                
                {Object.values(list).map((paramItem, i) =>
                    <Option value={paramItem} key={i} >{paramItem}</Option>
                )}
            </Select>
        )
    } else if (paramType === paramControlType.INPUT) {
        return <Input 
                    maxLength="50" 
                    style={{ width: 500 }} 
                    onChange={(e) => thingAddActions.thingAddChange({ paramName: paramName, paramValue: e.target.value })} />
    } else if (paramType === paramControlType.TEXT_AREA) {
        return <TextArea 
                    maxLength="250" 
                    autosize={{ minRows: 2, maxRows: 5 }} 
                    style={{ width: 500 }}
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