import React, { Component } from 'react';
import { List, Card, Upload, Icon, message, Tooltip } from 'antd';

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

    render() {
        const { item } = this.props;

        return (
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
                    cover={<img alt="example" src={item.urls[0].url} />}>
                    <Meta
                        title={item.title}/>
                </Card>
            </List.Item>
        )
    }
}

export default CardItem