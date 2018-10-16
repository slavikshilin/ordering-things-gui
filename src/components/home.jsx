import React, { Component } from 'react';
import { Tabs } from 'antd';
import Splash from './splash';
import AuthHeader from './authHeader';
import TabContainer from './tabContainer';
import { getUserInfo } from '../core/utils/userInfo';
import bootParams from '../types/boot/bootParams';
import clothesParams from '../types/clothes/clothesParams';
import bagParams from '../types/bag/bagParams';
import thingTypes from '../types/thingType';

const TabPane = Tabs.TabPane;

class Home extends Component {

    constructor(props) {
        super(props);
        props.thingsActions.fetchThings(thingTypes.BOOT);
    }

    callback(key) {
        this.props.thingsActions.fetchThings(key);
        console.log(key);
    }

    render() {
        const {
            auth,
            things,
            thingAdd,
            gallery,
            history,
            authActions,
            thingsActions,
            thingAddActions,
            galleryActions 
        } = this.props

        const { thingsInfo, thingType, isFetching } = things;

        if (isFetching) {
          return (<Splash />)  
        } else {
            return (
                <div className="main-layout">
                    <AuthHeader userInfo={getUserInfo(auth)} history={history} authActions={authActions} />
                    <div align="left">
                        <Tabs defaultActiveKey={thingType} onChange={this.callback.bind(this)}>
                            <TabPane tab="Обувь" key={thingTypes.BOOT}>
                                <TabContainer 
                                    thingAdd={thingAdd}
                                    params={bootParams}
                                    thingsInfo={thingsInfo} 
                                    gallery={gallery} 
                                    thingsActions={thingsActions}
                                    thingAddActions={thingAddActions}
                                    galleryActions={galleryActions} 
                                    tabName="Обувь" />
                            </TabPane>
                            <TabPane tab="Одежда" key={thingTypes.CLOTHES}>
                                <TabContainer 
                                    thingAdd={thingAdd}
                                    params={clothesParams}
                                    thingsInfo={thingsInfo} 
                                    gallery={gallery} 
                                    thingsActions={thingsActions}
                                    thingAddActions={thingAddActions}
                                    galleryActions={galleryActions} 
                                    tabName="Одежда" />
                            </TabPane>
                            <TabPane tab="Сумки и рюкзаки" key={thingTypes.BAG}>
                                <TabContainer 
                                    thingAdd={thingAdd}
                                    params={bagParams}
                                    thingsInfo={thingsInfo} 
                                    gallery={gallery} 
                                    thingsActions={thingsActions}
                                    thingAddActions={thingAddActions}
                                    galleryActions={galleryActions} 
                                    tabName="Сумки и рюкзаки" />                        
                            </TabPane>                            
                            <TabPane tab="Аксессуары" key={thingTypes.ACCESSORIZE}>
                                <TabContainer 
                                    thingAdd={thingAdd}
                                    params={bootParams}
                                    thingsInfo={thingsInfo} 
                                    gallery={gallery} 
                                    thingsActions={thingsActions}
                                    thingAddActions={thingAddActions}
                                    galleryActions={galleryActions} 
                                    tabName="Аксессуары" />                        
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            )
        }
    }
}

export default Home
