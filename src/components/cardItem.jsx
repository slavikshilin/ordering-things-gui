import React, { Component } from 'react';
import { List, Card, Upload, Icon, message, Tooltip } from 'antd';
import Lightbox from '../lib/index'; 

const { Meta } = Card;

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
            thingsActions.fetchAddImage(item, file);
            message.success('Файл успешно добавлен!');
        }

        return false;
    }

    showSlider() {
        const { item, galleryActions } = this.props;              
        galleryActions.toggleLightbox(item);
    }    
  

    render() {
        const { item, gallery, galleryActions } = this.props;
        const show = (item === gallery.item)

        const urlObjList = Object.values(item.urls);
        const imageUrls = urlObjList
            .map((urlObj, i) =>	                 
            {
                return {
                    src: urlObj.url,
                    title: item.title,
                    description: `Фото ${i + 1}/${urlObjList.length}`                               
                };
            });

        return (
            <div>    
                <List.Item>
                    <Card
                        actions={
                            [
                                <Upload 
                                    accept="image/*"
                                    name="fileAdd"
                                    showUploadList={false}
                                    beforeUpload={this.beforeUpload.bind(this)}
                                >
                                    
                                    <Tooltip placement="bottomLeft" title="Добавить фото">
                                        <Icon type="file-add" /> 
                                    </Tooltip>
                                </Upload>,

                                <Tooltip placement="bottomLeft" title="Изменить">
                                    <Icon type="edit" /> 
                                </Tooltip>,

                                <Tooltip placement="bottomLeft" title="Удалить">
                                    <Icon type="delete" /> 
                                </Tooltip>                            
                            ]}
                        hoverable
                        style={{ width: 180 }}
                        cover={<img alt="example" src={Object.values(item.urls)[0].url} onClick={this.showSlider.bind(this)} />}>
                        <Meta
                            title={item.title}/>
                    </Card>
                </List.Item>

                <Lightbox show={show} toggleLightboxAction={galleryActions.toggleLightbox} images={imageUrls} />

            </div>
        )
    }
}

export default CardItem