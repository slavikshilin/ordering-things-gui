import React from 'react';
import PropTypes from 'prop-types'

const ThingInfoPopoverItem = props => {

    return (
        <p>
            {props.popoverItem.name}: {props.popoverItem.value}
        </p>
    )
}

ThingInfoPopoverItem.propTypes = {
    popoverItem: PropTypes.object.isRequired
}

export default ThingInfoPopoverItem  