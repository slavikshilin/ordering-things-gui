import React from 'react';
import { Icon, Modal, Tooltip } from 'antd';
import AddThingContent from './addThingContent'
const confirm = Modal.confirm;

const AddThingButton = (props) => {

    const showConfirm = (props) => {
        confirm({
            title: 'Добавление новой вещи',
            content: <AddThingContent thingType={props.thingType} />,
            okText: 'OK',
            cancelText: 'Отмена',
            centered: true,
            width: 560,
            onOk() {
                props.actions.fetchAddThing(props.thingType)
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    return (
        <Tooltip placement="topRight" title="Добавить новую вещь">
            <div className="btn-add-thing" onClick={() => showConfirm(props)}>
                <div className="btn-add-thing-content">
                    <Icon type="plus" />
                </div>
            </div>
        </Tooltip>
    )
}

export default AddThingButton  