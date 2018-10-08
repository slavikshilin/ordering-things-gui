import React, { Component } from 'react';
import { List, Card, Upload, Icon, message } from 'antd';

const { Meta } = Card;

const data = [
    {
        title: 'Title 1',
    },
    {
        title: 'Title 2',
    },
    {
        title: 'Title 3',
    },
    {
        title: 'Title 4',
    },
    {
        title: 'Title 5',
    },
    {
        title: 'Title 6',
    },
];

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

class TabContainer extends Component {

    state = {
        loading: false,
    };

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

    render() {  

        const thingsInfo = (this.props.thingsInfo) ? this.props.thingsInfo : [];

        const description = (
            <div>
                <p className="p-card">Размер:</p>
                <p className="p-card">Цвет:</p>
                <p className="p-card">Сезон:</p>
            </div>
        )        

        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Добавить</div>
            </div>
        );
    
        //const imageUrl = this.state.imageUrl;        

        return (
            <div>

                <Upload 
                    name="avatar"
                    listType="picture-card"
                    className="btn-add-thing btn-add-thing-text"
                    showUploadList={false}
                    beforeUpload={beforeUpload}
                    onChange={this.handleChange}
                >
                    {uploadButton}
                </Upload>

                <List
                    grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
                    dataSource={thingsInfo}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                hoverable
                                style={{ width: 380 }}
                                cover={<img alt="example" src="https://firebasestorage.googleapis.com/v0/b/ordering-things-api.appspot.com/o/maket%2Fmaket.jpg?alt=media&token=1a157331-ead3-400a-a145-31fb2f30be5c" />}>
                                <Meta
                                    title={item.caption}
                                    description={description} />
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default TabContainer