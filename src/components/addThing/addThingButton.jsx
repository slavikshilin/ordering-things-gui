import React, { Component } from 'react';
import { Icon, Modal, Tooltip } from 'antd';
import AddThingContent from './addThingContent'
const confirm = Modal.confirm;

class AddThingButton extends Component {
   
    constructor(props) {
        super(props);
        this.state = { thingAdd: null };
    }
    
    getDefaultThing(params) {
        let defaultThing = {};
        for (var key in params) {
            defaultThing[key] = params[key].Default;
        }
        return defaultThing;
    }

    showConfirm() {
        const { params, thingAddActions } = this.props;
        const thisLocal = this;

        const defaultThing = this.getDefaultThing(params);
        thingAddActions.thingAddDefault(defaultThing);

        confirm({
            title: 'Добавление новой вещи',
            content: <AddThingContent thingAddActions={thingAddActions} params={params} />,
            okText: 'OK',
            cancelText: 'Отмена',
            centered: true,
            width: 560,
            onOk() {
                const { thingAdd, thingsActions } = thisLocal.props; 

                if (thingAdd) {
                    // Set current datetime
                    thingAdd.thingAdd.createDate = Date.now();

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