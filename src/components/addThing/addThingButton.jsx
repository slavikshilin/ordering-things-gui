import React from 'react';
import { Icon, Modal, Tooltip } from 'antd';
import AddThingContent from './addThingContent'
//import Slider from '../slider/slider'
const confirm = Modal.confirm;

const AddThingButton = (props) => {

    /*
        const { gallery, toggleLightboxAction } = props;
        <Slider gallery={gallery} toggleLightboxAction={toggleLightboxAction} />
        const showSlider = () => {
            toggleLightboxAction(0);
        }
    */

    
    const showConfirm = () => {
        confirm({
            title: 'Добавление новой вещи',
            content: <AddThingContent />,
            okText: 'OK',
            cancelText: 'Отмена',
            centered: true,
            width: 560,
            onOk() {
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    
    return (
        <Tooltip placement="topRight" title="Добавить новую вещь">
            <div className="btn-add-thing" onClick={() => showConfirm()}>
                <div className="btn-add-thing-content">
                    <Icon type="plus" />
                </div>
            </div>
        </Tooltip>
    )
}

export default AddThingButton  