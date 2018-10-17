import React, { Component } from 'react';
import { Icon, Modal, Tooltip } from 'antd';
import EditThingContent from './editThingContent';
import { getThingParams, getFullThingInfo } from '../../mapping/fullThingInfo';
const confirm = Modal.confirm;

class EditThingButton extends Component {
    
    getDefaultThing(fullThingInfo) {
        let defaultThing = {};
        
        for (var key in fullThingInfo) {
            defaultThing[key] = fullThingInfo[key].value;
        }
        
        return defaultThing;
    }

    editConfirm() {
        const { thingInfo, thingAddActions } = this.props;
        const thisLocal = this;

        const params = getThingParams(thingInfo.type);
        const fullThingInfo = getFullThingInfo(thingInfo);
        let defaultThing = this.getDefaultThing(fullThingInfo);
        defaultThing.key = thingInfo.key;
        thingAddActions.thingAddDefault(defaultThing);

        confirm({
            title: 'Редактирование параметров вещи',
            content: <EditThingContent thingAddActions={thingAddActions} fullThingInfo={fullThingInfo} params={params} />,
            okText: 'OK',
            cancelText: 'Отмена',
            centered: true,
            width: 560,
            onOk() {
                const { thingAdd, thingsActions } = thisLocal.props; 

                if (thingAdd) {
                    // Set current datetime
                    thingAdd.thingAdd.createDate = Date.now();
                    thingAdd.thingAdd.type = thingInfo.type;

                    thingsActions.fetchEditThing(thingAdd.thingAdd);
                    thingAddActions.thingAddOk();
                    console.log('OK');
                }
            },
            onCancel() {
                thingAddActions.thingAddCancel();
                console.log('Cancel');
            },
        });
    }

    render() {
        return (
            <Tooltip placement="bottomLeft" title="Изменить">
                <Icon type="edit" onClick={() => this.editConfirm()} />
            </Tooltip>
        )
    }
}

export default EditThingButton  