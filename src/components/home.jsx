import React, { Component } from 'react'
import { Tabs, Spin } from 'antd';
import AuthHeader from './authHeader'
import TabContainer from './tabContainer'
import { getUserInfo } from '../core/utils/userInfo'

const TabPane = Tabs.TabPane;

function callback(key) {
    console.log(key);
}

class Home extends Component {

    constructor(props) {
        super(props);
        props.fetchDataAction(null);
    }


    render() {
        const {
            auth,
            things,
            history,
            fetchLogoutAction,
            fetchAddThingAction,
            fetchAddAction
        } = this.props

        const { thingsInfo, isFetching } = things;

        if (isFetching) {
          return (<Spin tip="Загрузка..." size="large" />)  
        } else {
            return (
                <div className="main-layout">
                    <AuthHeader userInfo={getUserInfo(auth)} history={history} fetchLogoutAction={fetchLogoutAction} />
                    <div align="left">
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Одежда" key="1">
                                <TabContainer thingsInfo={thingsInfo} fetchAddAction={fetchAddAction} fetchAddThingAction={fetchAddThingAction} tabName="Одежда" />
                            </TabPane>
                            <TabPane tab="Обувь" key="2">
                                <TabContainer thingsInfo={thingsInfo} fetchAddAction={fetchAddAction} fetchAddThingAction={fetchAddThingAction}  tabName="Обувь" />
                            </TabPane>
                            <TabPane tab="Сумки и рюкзаки" key="3">
                                <TabContainer thingsInfo={thingsInfo} fetchAddAction={fetchAddAction} fetchAddThingAction={fetchAddThingAction}  tabName="Сумки и рюкзаки" />                        
                            </TabPane>                            
                            <TabPane tab="Аксессуары" key="4">
                                <TabContainer thingsInfo={thingsInfo} fetchAddAction={fetchAddAction} fetchAddThingAction={fetchAddThingAction}  tabName="Аксессуары" />                        
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            )
        }
    }
}

export default Home
