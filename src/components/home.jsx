import React, { Component } from 'react'
import { Tabs } from 'antd';
import AuthHeader from './authHeader'
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
                <div className="main-caption">
                    Каталог
                </div>
                <div align="left" tabBarGutter="1000">
                    <Tabs defaultActiveKey="1" onChange={callback} className="main-tab-item">
                        <TabPane tab="Одежда" key="1">Одежда</TabPane>
                        <TabPane tab="Обувь" key="2">Обувь</TabPane>
                        <TabPane tab="Аксессуары">Аксессуары</TabPane>
                    </Tabs>
                </div>
            </div>
        )
    }
}

export default Home
