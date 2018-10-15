import React, { Component } from 'react';
import { Icon, Modal, Tooltip } from 'antd';
import AddThingContent from './addThingContent'
const confirm = Modal.confirm;

class AddThingButton extends Component {
   
    
    showConfirm() {
        const { thingType, thingAdd, thingAddActions } = this.props;

        confirm({
            title: 'Добавление новой вещи',
            content: <AddThingContent thingType={thingType} thingAddActions={thingAddActions} />,
            okText: 'OK',
            cancelText: 'Отмена',
            centered: true,
            width: 560,
            onOk() {
                if (thingAdd) {
                    //props.thingsActions.fetchAddThing(props.thingAdd);
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
            <Tooltip placement="topRight" title="Добавить новую вещь">
                <div className="btn-add-thing" onClick={() => this.showConfirm()}>
                    <div className="btn-add-thing-content">
                        <Icon type="plus" />
                    </div>
                </div>
            </Tooltip>
        )
    }
}

export default AddThingButton  