import React from 'react';
import PropTypes from 'prop-types';

const ThingParamLabel = props => {
    const { text } = props;

    return (
        <div>{text}</div>            
    )
}

ThingParamLabel.propTypes = {
    text: PropTypes.string.isRequired,
}

export default ThingParamLabel  