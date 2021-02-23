import React, { Component } from 'react';
import { bindActionCreators } from "redux";  
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import Splash from './splash';
import AuthHeader from './authHeader';
import TabContainer from './tabContainer';
import thingTypes from '../types/thingType';
import bootParams from '../types/boot/bootParams';
import clothesParams from '../types/clothes/clothesParams';
import bagParams from '../types/bag/bagParams';
import accessorizeParams from '../types/accessorize/accessorizeParams';
import * as thingsActions from '../actions/thingsActions';  

const TabPane = Tabs.TabPane;

class Home extends Component {

    constructor(props) {
        super(props);
        props.thingsActions.fetchThings(thingTypes.CLOTHES);
    }

    callback(key) {
        const { thingsActions } = this.props;
        thingsActions.filterThingsClear();
        thingsActions.fetchThings(key);
        console.log(key);
    }

    render() {
        const { things } = this.props;
        const { thingType, isFetching } = things;

        if (isFetching) {
          return (<Splash />)  
        } else {
            return (
                <div className="main-layout">
                    <AuthHeader />
                    <div align="left">
                        <Tabs defaultActiveKey={thingType} onChange={this.callback.bind(this)}>
                            <TabPane tab="Одежда" key={thingTypes.CLOTHES}>
                                <TabContainer params={clothesParams} tabName="Одежда" />
                            </TabPane>
                            <TabPane tab="Обувь" key={thingTypes.BOOT}>
                                <TabContainer params={bootParams} tabName="Обувь" />
                            </TabPane>
                            <TabPane tab="Сумки и рюкзаки" key={thingTypes.BAG}>
                                <TabContainer params={bagParams} tabName="Сумки и рюкзаки" />                        
                            </TabPane>                            
                            <TabPane tab="Аксессуары" key={thingTypes.ACCESSORIZE}>
                                <TabContainer params={accessorizeParams} tabName="Аксессуары" />                        
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = store => {
    return {
        things: store.things
    }
}

const mapDispatchToProps = dispatch => {
    return {
        thingsActions: bindActionCreators(thingsActions, dispatch)
	}; 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
