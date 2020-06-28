import React, { Component } from 'react';
import { bindActionCreators } from "redux"; 
import { connect } from 'react-redux'; 
import { List, Button } from 'antd';
import CardItem from './cardItem';
import AddThingButton from './addThing/addThingButton';
import FilterPanelElement from './filter/filterPanelElement';
import * as thingsActions from '../actions/thingsActions';  

/**
 * Контейнер для вкладки. Содержит в себе панель фильтров, кнопку добавления новой вещи, а также сетку с карточками вещей
 *
 * @class TabContainer
 * @extends {Component} Базовый класс компонентов React
 */
class TabContainer extends Component {

    render() {  
     
        const thingsInfo = (this.props.things.thingsInfo) ? this.props.things.thingsInfo : [];
        const { params, thingsActions } = this.props; 

        return (
            <div>
                <div>
                    <div className="filter-panel">
                        <List 
                            grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
                            dataSource={Object.keys(params)}
                            renderItem={(item, index) => { 
                                return <FilterPanelElement 
                                            params={params}
                                            element={item} 
                                            index={index} /> 
                            }} 
                        />
                        <Button id="button-filter" size="small" onClick={() => { thingsActions.filterThingsClear(); }}>
                            Сбросить фильтр
                        </Button>
                    </div>
                    
                    <div className="btn-add-block">
                        <div>Количество: {thingsInfo.length}</div>
                            <AddThingButton params={params}  />
                        </div>
                </div>
                <List
                    locale={{ emptyText: 'Нет данных'}}
                    grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
                    dataSource={Object.values(thingsInfo)}
                    renderItem={item => { 
                        return <CardItem item={item} /> 
                    } }
                />
            </div>
        )

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
)(TabContainer)