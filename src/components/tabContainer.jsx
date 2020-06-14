import React, { Component } from 'react';
import { List, Button } from 'antd';
import CardItem from './cardItem';
import AddThingButton from './addThing/addThingButton';
//import FilterPanel from './filter/filterPanel';
import FilterPanelElement from './filter/filterPanelElement';

/**
 * Контейнер для вкладки. Содержит в себе панель фильтров, кнопку добавления новой вещи, а также сетку с карточками вещей
 *
 * @class TabContainer
 * @extends {Component} Базовый класс компонентов React
 */
class TabContainer extends Component {

    render() {  
     
        const thingsInfo = (this.props.things.thingsInfo) ? this.props.things.thingsInfo : [];
        const { things, thingAdd, params, gallery, thingsActions, thingAddActions, galleryActions } = this.props; 

        return (
            <div>
                <div>
                    <div className="filter-panel">
                        <List 
                            grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
                            dataSource={Object.keys(params)}
                            renderItem={(item, index) => { 
                                return <FilterPanelElement 
                                            things={things} 
                                            params={params}
                                            element={item} 
                                            index={index}
                                            thingsActions={thingsActions} /> 
                            }} 
                        />
                        <Button id="button-filter" size="small" onClick={() => { thingsActions.filterThingsClear(); }}>
                            Сбросить фильтр
                        </Button>
                    </div>
                    
                    <div className="btn-add-block">
                        <div>Количество: {thingsInfo.length}</div>
                        <AddThingButton 
                            thingAdd={thingAdd} 
                            params={params} 
                            thingsInfo={thingsInfo} 
                            gallery={gallery} 
                            thingsActions={thingsActions} 
                            thingAddActions={thingAddActions} />
                        </div>
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