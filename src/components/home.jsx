import React, { Component } from 'react';
import { Tabs, Spin } from 'antd';
import AuthHeader from './authHeader';
import TabContainer from './tabContainer';
import { getUserInfo } from '../core/utils/userInfo';
import { thingType } from '../types/index';

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

class Home extends Component {

    constructor(props) {
        super(props);
        props.thingsActions.fetchThings(null);
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

        const { thingsInfo, isFetching } = things;

        if (isFetching) {
          return (<Spin tip="Загрузка..." size="large" />)  
        } else {
            return (
                <div className="main-layout">
                    <AuthHeader userInfo={getUserInfo(auth)} history={history} authActions={authActions} />
                    <div align="left">
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Обувь" key="1">
                                <TabContainer 
                                    thingAdd={thingAdd}
                                    thingType={thingType.BOOT} 
                                    thingsInfo={thingsInfo} 
                                    gallery={gallery} 
                                    thingsActions={thingsActions}
                                    thingAddActions={thingAddActions}
                                    galleryActions={galleryActions} 
                                    tabName="Обувь" />
                            </TabPane>
                            <TabPane tab="Одежда" key="2">
                                <TabContainer 
                                    thingAdd={thingAdd}
                                    thingType={thingType.CLOTHES} 
                                    thingsInfo={thingsInfo} 
                                    gallery={gallery} 
                                    thingsActions={thingsActions}
                                    thingAddActions={thingAddActions}
                                    galleryActions={galleryActions} 
                                    tabName="Одежда" />
                            </TabPane>
                            <TabPane tab="Сумки и рюкзаки" key="3">
                                <TabContainer 
                                    thingAdd={thingAdd}
                                    thingType={thingType.BAG} 
                                    thingsInfo={thingsInfo} 
                                    gallery={gallery} 
                                    thingsActions={thingsActions}
                                    thingAddActions={thingAddActions}
                                    galleryActions={galleryActions} 
                                    tabName="Сумки и рюкзаки" />                        
                            </TabPane>                            
                            <TabPane tab="Аксессуары" key="4">
                                <TabContainer 
                                    thingAdd={thingAdd}
                                    thingType={thingType.ACCESSORIZE} 
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
