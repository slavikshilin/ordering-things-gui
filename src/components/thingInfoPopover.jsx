import React from 'react';
import PropTypes from 'prop-types'
import { Popover, Icon } from 'antd';

const ThingInfoPopover = props => {
    const thingInfo = (props.thingInfo) ? props.thingInfo : {}

    const content = (
        <div>
            <p>Имя: {thingInfo.title}</p>
            <p>Цвет: {thingInfo.colorType}</p>
        </div>
    )

    return (
        <Popover placement="bottomLeft" content={content} title="Описание">
            <Icon type="info" />
        </Popover>
    )
}

ThingInfoPopover.propTypes = {
    thingInfo: PropTypes.any
}

export default ThingInfoPopover  