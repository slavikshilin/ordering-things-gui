import React from 'react';
import PropTypes from 'prop-types'
import { Popover, Icon } from 'antd';
import getFullThingInfo from '../mapping/fullThingInfo';
import ThingInfoPopoverItem from './thingInfoPopoverItem';

const ThingInfoPopover = props => {

    const contentInfo = (props) => {
        const thingInfo = (props.thingInfo) ? props.thingInfo : {};
        const popupInfo = getFullThingInfo(thingInfo); 

        let result = [];
        for (var key in popupInfo) {
            result.push({ type: key, name: popupInfo[key].name, value: popupInfo[key].value });
        }        
        return result;
    }

    const content = (
        <div>
            {contentInfo(props).map(popoverItem =>
                <ThingInfoPopoverItem popoverItem={popoverItem} />    
            )}
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