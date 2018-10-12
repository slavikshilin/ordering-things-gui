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
            gallery,
            history,
            authActions,
            thingsActions,
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
                                    thingType={thingType.BOOT} 
                                    thingsInfo={thingsInfo} 
                                    gallery={gallery} 
                                     thingsActions={thingsActions}
                                    galleryActions={galleryActions} 
                                    tabName="Обувь" />
                            </TabPane>
                            <TabPane tab="Одежда" key="2">
                                <TabContainer 
                                    thingType={thingType.CLOTHES} 
                                    thingsInfo={thingsInfo} 
                                    gallery={gallery} 
                                    thingsActions={thingsActions}
                                    galleryActions={galleryActions} 
                                    tabName="Одежда" />
                            </TabPane>
                            <TabPane tab="Сумки и рюкзаки" key="3">
                                <TabContainer 
                                    thingType={thingType.BAG} 
                                    thingsInfo={thingsInfo} 
                                    gallery={gallery} 
                                    thingsActions={thingsActions}
                                    galleryActions={galleryActions} 
                                    tabName="Сумки и рюкзаки" />                        
                            </TabPane>                            
                            <TabPane tab="Аксессуары" key="4">
                                <TabContainer 
                                    thingType={thingType.ACCESSORIZE} 
                                    thingsInfo={thingsInfo} 
                                    gallery={gallery} 
                                    thingsActions={thingsActions}
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
