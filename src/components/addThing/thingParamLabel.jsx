import React from 'react';
import PropTypes from 'prop-types';
import paramControlType from '../../types/paramControlType';


const ThingParamLabel = props => {
    const { paramType, text } = props;

    if (paramType !== paramControlType.NONE) {
        return (
            <div>{text}</div>            
        )
    } else {
        return null
    }
}

ThingParamLabel.propTypes = {
    paramType: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default ThingParamLabel  