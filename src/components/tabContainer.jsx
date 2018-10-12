import React, { Component } from 'react';
import { List, Card, Upload, Icon, message } from 'antd';
import AddThingButton from './addThing/addThingButton'

const { Meta } = Card;

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class TabContainer extends Component {

    state = {
        loading: false,
    };

    beforeUpload = (file) => {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
            message.error('Можно добавлять только JPG файл!');
        }
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isLt2M) {
            message.error('Файл должен быть меньше 10MB!');
        }

        const { fetchAddAction } = this.props;
        const result = isJPG && isLt2M;
        if (result) {
            fetchAddAction(file);
        }

        return result;
    }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl => this.setState({
            imageUrl,
            loading: false,
          }));
        }
    }

    description = (item) => {
        return (
            <div>
                <p className="p-card">Размер: {item.size}</p>
                <p className="p-card">Цвет: {item.color}</p>
                <p className="p-card">Сезон: {item.season}</p>
            </div>
        )
    }   

    render() {  

        const thingsInfo = (this.props.thingsInfo) ? this.props.thingsInfo : [];

        const { thingType, fetchAddThingAction, gallery, toggleLightboxAction } = this.props; 
    

        const uploadButton = (
            <div>
                <Icon type={false ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Доб. ф</div>
            </div>
        );
    
        //const imageUrl = this.state.imageUrl;        
    
        return (
            <div>
                <AddThingButton thingType={thingType} thingsInfo={thingsInfo} fetchAddThingAction={fetchAddThingAction} gallery={gallery} toggleLightboxAction={toggleLightboxAction}  />
                <Upload 
                    accept="image/*"
                    name="avatar"
                    listType="picture-card"
                    className="btn-add-file btn-add-file-text"
                    showUploadList={false}
                    beforeUpload={this.beforeUpload}
                    onChange={this.handleChange}
                >
                    {uploadButton}
                </Upload>

                <List
                    grid={{ gutter: 16, xs: 1, sm: 2, md: 5, lg: 5, xl: 5, xxl: 5 }}
                    dataSource={thingsInfo}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                actions={
                                    [
                                        <Icon type="file-add"  />, 
                                        <Icon type="edit" />, 
                                        <Icon type="delete" />
                                    ]}
                                hoverable
                                style={{ width: 180 }}
                                cover={<img alt="example" src={item.urls[0]} />}>
                                <Meta
                                    title={item.title}
                                    description={this.description(item)} />
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        )

    }
}

export default TabContainer