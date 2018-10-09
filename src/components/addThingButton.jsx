import React from 'react';
import PropTypes from 'prop-types'
import { Icon } from 'antd';


const AddThingButton = props => {
    return (
        <div className="btn-add-thing"> 
            <div className="btn-add-thing-content">
                <Icon type={props.isFetching ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Добавить</div>
            </div>
        </div>
    )
}

AddThingButton.propTypes = {
    isFetching: PropTypes.bool.isRequired
}

export default AddThingButton  