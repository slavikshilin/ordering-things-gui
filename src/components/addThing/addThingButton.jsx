import React from 'react';
import { Icon } from 'antd';
//import AddThingContent from './addThingContent'
import Slider from '../slider/slider'
//const confirm = Modal.confirm;

const AddThingButton = (props) => {

    const { gallery, toggleLightboxAction } = props;

    /*
    const showConfirm = () => {
        confirm({
            title: 'Добавление новой вещи',
            content: <AddThingContent />,
            okText: 'OK',
            cancelText: 'Отмена',
            centered: true,
            width: 950,
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    */

    const showSlider = () => {
        toggleLightboxAction(0);
    }

    return (
        <div className="btn-add-thing" onClick={() => showSlider()}>
            <div className="btn-add-thing-content">
                <Icon type="plus" />
            </div>
            <Slider gallery={gallery} toggleLightboxAction={toggleLightboxAction} />
        </div>
    )
}

export default AddThingButton  