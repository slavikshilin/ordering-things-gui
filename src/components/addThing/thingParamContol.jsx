import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { Select, Input, AutoComplete } from 'antd';
import paramControlType from '../../types/paramControlType';

const Option = Select.Option;
const { TextArea } = Input;

class ThingParamControl extends Component {

    constructor (props) {
        super(props);
        this.state = { list: props.list };
    }
    
    handleSearch = (value) => {
        const { list } = this.props;    
        const filteredList = ((value) && (value.length > 0)) ? list.filter(item => { 
            return item.toUpperCase().startsWith(value.toUpperCase()); 
        }) : list;
        this.setState({ list: filteredList });
    }

    render() {
        const { paramName, paramType, list, defaultValue, paramChange, controlWidth } = this.props;

        let listLocal = [];
        if (list) {
            listLocal = Object.values(list);
        }

        if (paramType === paramControlType.SELECT) {
            return (
                <Select 
                    defaultValue={defaultValue}
                    style={{ width: controlWidth }} 
                    onChange={value => paramChange({ paramName: paramName, paramValue: value })} >
                    
                    {listLocal.map((paramItem, i) =>
                        <Option value={paramItem} key={i} >{paramItem}</Option>
                    )}
                </Select>
            )
        } else if (paramType === paramControlType.INPUT) {
            return <Input 
                        defaultValue={defaultValue}
                        maxLength="50" 
                        style={{ width: controlWidth }} 
                        onChange={(e) => paramChange({ paramName: paramName, paramValue: e.target.value })} />
        } else if (paramType === paramControlType.TEXT_AREA) {
            return <TextArea 
                        defaultValue={defaultValue}
                        maxLength="250" 
                        autosize={{ minRows: 2, maxRows: 5 }} 
                        style={{ width: controlWidth }}
                        onChange={(e) => paramChange({ paramName: paramName, paramValue: e.target.value })}  />
        } else if (paramType === paramControlType.AUTO_COMPLETE) {
            return <AutoComplete 
                        dataSource={this.state.list}
                        defaultValue={defaultValue}
                        maxLength="250" 
                        style={{ width: controlWidth }}
                        onChange={(value) => paramChange({ paramName: paramName, paramValue: value })}
                        onSearch={this.handleSearch.bind(this)}  />
        } else {                    
            return null
        }
    }
}

ThingParamControl.propTypes = {
    paramType: PropTypes.string.isRequired,
    list: PropTypes.any,
    defaultValue: PropTypes.any
}

export default ThingParamControl  