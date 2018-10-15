import React, { Component } from 'react';
import { Icon, Modal, Tooltip } from 'antd';
import AddThingContent from './addThingContent'
import bootParams from '../../types/boot/bootParams';
const confirm = Modal.confirm;

class AddThingButton extends Component {
   
    constructor(props) {
        super(props);
        this.state = { thingAdd: null };
    }
    
    showConfirm() {
        const { thingType, thingAddActions } = this.props;
        const thisLocal = this;

        confirm({
            title: 'Добавление новой вещи',
            content: <AddThingContent thingType={thingType} thingAddActions={thingAddActions} />,
            okText: 'OK',
            cancelText: 'Отмена',
            centered: true,
            width: 560,
            onOk() {
                const { thingAdd, thingsActions } = thisLocal.props; 

                if (thingAdd) {
                    thingsActions.fetchAddThing(thingAdd.thingAdd);
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