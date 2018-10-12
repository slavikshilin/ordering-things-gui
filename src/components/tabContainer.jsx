import React, { Component } from 'react';
import { List } from 'antd';
import CardItem from './cardItem';
import AddThingButton from './addThing/addThingButton'


class TabContainer extends Component {

    state = {
        loading: false
    };

    render() {  

        const thingsInfo = (this.props.thingsInfo) ? this.props.thingsInfo : [];
        const { thingType, gallery, thingsActions, galleryActions } = this.props; 

        return (
            <div>
                <AddThingButton thingType={thingType} thingsInfo={thingsInfo} gallery={gallery} thingsActions={thingsActions} />
                <List
                    grid={{ gutter: 16, xs: 1, sm: 2, md: 5, lg: 5, xl: 5, xxl: 5 }}
                    dataSource={Object.values(thingsInfo)}
                    renderItem={item => { 
                        return <CardItem item={item} gallery={gallery} thingsActions={thingsActions} galleryActions={galleryActions} /> 
                    } }
                />
            </div>
        )

    }
}

export default TabContainer