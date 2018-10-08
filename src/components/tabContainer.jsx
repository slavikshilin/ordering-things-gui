import React from 'react';
import { List, Card } from 'antd';

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

const TabContainer = (props) => {
    
    const description = (
        <div>
            <p className="p-card">Размер:</p>
            <p className="p-card">Цвет:</p>
            <p className="p-card">Сезон:</p>
        </div>
    )    
    
    return (
        <div>
            {props.tabName}
            <List
                grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <Card
                            hoverable
                            style={{ width: 380 }}
                            cover={<img alt="example" src="https://firebasestorage.googleapis.com/v0/b/ordering-things-api.appspot.com/o/maket%2Fmaket.jpg?alt=media&token=1a157331-ead3-400a-a145-31fb2f30be5c" />}>
                            <Meta
                                title={item.title}
                                description={description} />
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    )
}

export default TabContainer