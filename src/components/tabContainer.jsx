import React, { Component } from 'react';
import { List } from 'antd';
import CardItem from './cardItem';
import AddThingButton from './addThing/addThingButton';
import FilterPanel from './filter/filterPanel';

class TabContainer extends Component {

    render() {  
     
        const thingsInfo = (this.props.things.thingsInfo) ? this.props.things.thingsInfo : [];
        const { thingAdd, params, gallery, thingsActions, thingAddActions, galleryActions } = this.props; 

        return (
            <div>
                <div>
                    <FilterPanel things={this.props.things} params={params} thingsActions={thingsActions} />
                    <AddThingButton 
                        thingAdd={thingAdd} 
                        params={params} 
                        thingsInfo={thingsInfo} 
                        gallery={gallery} 
                        thingsActions={thingsActions} 
                        thingAddActions={thingAddActions} />
                </div>
                <List
                    locale={{ emptyText: 'Нет данных'}}
                    grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
                    dataSource={Object.values(thingsInfo)}
                    renderItem={item => { 
                        return <CardItem 
                                    thingAdd={thingAdd}
                                    item={item} 
                                    gallery={gallery} 
                                    thingsActions={thingsActions}
                                    thingAddActions={thingAddActions} 
                                    galleryActions={galleryActions} /> 
                    } }
                />
            </div>
        )

    }
}

export default TabContainer