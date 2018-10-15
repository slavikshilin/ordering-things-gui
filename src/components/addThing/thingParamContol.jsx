import React from "react"
import PropTypes from "prop-types"
import { Select, Input } from 'antd'
import paramControlType from '../../types/paramControlType';

const Option = Select.Option;
const { TextArea } = Input;

const ThingParamControl = props => {
    const { paramType, list, defaultValue } = props;

    if (paramType === paramControlType.SELECT) {
        return (
            <Select defaultValue={defaultValue} style={{ width: 500 }} >
                {Object.values(list).map((paramItem, i) =>	
                    <Option value={paramItem} key={i} >{paramItem}</Option>
                )}
            </Select>
        )   
    } else if (paramType === paramControlType.INPUT) {
        return <Input maxLength="50" style={{ width: 500 }} />
    } else if (paramType === paramControlType.TEXT_AREA) {
        return <TextArea maxLength="250" style={{ width: 500 }} />
    } else {
        return null
    }
}

ThingParamControl.propTypes = {
    paramType: PropTypes.string.isRequired,
    list: PropTypes.array,
    defaultValue: PropTypes.string
}

export default ThingParamControl  