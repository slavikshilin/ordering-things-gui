import React, { Component } from 'react'
import { Tabs } from 'antd';
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
            fetchLogoutAction
        } = this.props

        const thingsInfo = things.thingsInfo;

        return (
            <div className="main-layout">
                <AuthHeader userInfo={getUserInfo(auth)} history={history} fetchLogoutAction={fetchLogoutAction} />
                <div align="left">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Одежда" key="1">
                            <TabContainer thingsInfo={thingsInfo} tabName="Одежда" />
                        </TabPane>
                        <TabPane tab="Обувь" key="2">
                            <TabContainer thingsInfo={thingsInfo} tabName="Обувь" />
                        </TabPane>
                        <TabPane tab="Аксессуары" key="3">
                            <TabContainer thingsInfo={thingsInfo} tabName="Аксессуары" />                        
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Home
