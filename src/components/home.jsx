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

    render() {
        const {
            auth,
            history,
            fetchLogoutAction
        } = this.props

        return (
            <div className="main-layout">
                <AuthHeader userInfo={getUserInfo(auth)} history={history} fetchLogoutAction={fetchLogoutAction} />
                <div align="left" tabBarGutter="1000">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Одежда" key="1"><TabContainer tabName="Одежда" key="1"/></TabPane>
                        <TabPane tab="Обувь" key="2">Обувь</TabPane>
                        <TabPane tab="Аксессуары">Аксессуары</TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Home
