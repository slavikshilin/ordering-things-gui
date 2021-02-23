import React, { Component } from 'react';
import { bindActionCreators } from "redux"; 
import { connect } from 'react-redux'; 
import { List, Card, Upload, Icon, message, Tooltip, Modal, Spin } from 'antd';
import Img from 'react-image';
import ThingInfoPopover from './thingInfoPopover';
import EditThingButton from './editThing/editThingButton';
import Lightbox from '../lib/index';
import * as thingsActions from '../actions/thingsActions';  
import * as galleryActions from '../actions/galleryActions';

const { Meta } = Card;
const { confirm } = Modal;

const antIcon = <Icon type="loading-3-quarters" style={{ fontSize: 24 }} spin />;

const showMessage = () => {
    message.success('Файл успешно добавлен!');
}

class CardItem extends Component {

    beforeUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            message.error('Можно добавлять только JPG файл!');
        }
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isLt2M) {
            message.error('Файл должен быть меньше 10MB!');
        }

        const { item, thingsActions } = this.props;
        const result = isJPG && isLt2M;

        if (result) {
            thingsActions.fetchAddImage(item, file, showMessage);
        }

        return false;
    }

    showSlider() {
        const { item, galleryActions } = this.props;
        galleryActions.toggleLightbox(item);
    }

    showDeleteConfirm() {
        const { item, thingsActions } = this.props;
        confirm({
            centered: true,
            title: `Удалить "${item.title}"?`,
            content: '',
            okText: 'Да',
            okType: 'danger',
            cancelText: 'Нет',
            onOk() {
                console.log('OK remove');
                thingsActions.fetchRemove(item);
            },
            onCancel() {
                console.log('Cancel remove');
            },
        });
    }

    render() {
        const { item, gallery, galleryActions } = this.props;
        const show = (item === gallery.item) && (item.urls);

        const defaultUrl = (item.urls) ? Object.values(item.urls)[0].urlSmall : 'https://firebasestorage.googleapis.com/v0/b/ordering-things-api.appspot.com/o/default%2Fempty.jpg?alt=media&token=427e09b3-98ac-4967-b058-74c99a039f86';

        const imageUrls = (item.urls) ? Object.values(item.urls)
            .map((urlObj, i) => {
                return {
                    src: urlObj.url,
                    title: item.title,
                    description: `Фото ${i + 1}/${Object.values(item.urls).length}`
                };
            }) : null;

        return (
            <div>
                <List.Item>
                    <Card
                        actions={
                            [
                                <Upload
                                    multiple
                                    accept="image/*"
                                    name="fileAdd"
                                    showUploadList={false}
                                    beforeUpload={this.beforeUpload.bind(this)} >

                                    <Tooltip placement="bottomLeft" title="Добавить фото">
                                        <Icon type="file-add" />
                                    </Tooltip>
                                </Upload>,

                                <ThingInfoPopover thingInfo={item} />,

                                <EditThingButton thingInfo={item} />,

                                <Tooltip placement="bottomLeft" title="Удалить">
                                    <Icon type="delete" onClick={this.showDeleteConfirm.bind(this)} />
                                </Tooltip>
                            ]}
                        hoverable
                        cover={<Img alt="Фото" src={defaultUrl} loader={<Spin indicator={antIcon} />} onClick={this.showSlider.bind(this)} />}>
                        <Meta
                            title={item.title} />
                    </Card>
                </List.Item>

                <Lightbox show={show} toggleLightboxAction={galleryActions.toggleLightbox} images={imageUrls} />

            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        gallery: store.gallery,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        thingsActions: bindActionCreators(thingsActions, dispatch),
        galleryActions: bindActionCreators(galleryActions, dispatch)
	}; 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardItem)