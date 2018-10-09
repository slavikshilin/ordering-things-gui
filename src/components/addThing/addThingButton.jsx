import React from 'react';
import { Icon, Modal } from 'antd';
import AddThingContent from './addThingContent'

const confirm = Modal.confirm;

const AddThingButton = (props) => {

    //const { thingDemo, fetchAddThingAction } = props;


    const showConfirm = () => {
        confirm({
            title: 'Добавление новой вещи',
            content: <AddThingContent />,
            okText: 'OK',
            cancelText: 'Отмена',
            centered: true,
            width: 1344,
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }

    return (
        <div className="btn-add-thing" onClick={() => showConfirm()}>
            <div className="btn-add-thing-content">
                <Icon type="plus" />
            </div>
        </div>
    )
}

export default AddThingButton  