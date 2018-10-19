import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import ThingParamControl from '../addThing/thingParamContol';
import ThingParamLabel from '../addThing/thingParamLabel';
import paramControlType from '../../types/paramControlType';

class FilterPanel extends Component {

    applyFilter(filterAdd) {
        const { thingsInfo, filter, filterActions, thingsActions } = this.props;
        const newFilter = { ...filter.filter, [filterAdd.paramName]: filterAdd.paramValue };
        filterActions.changeFilter(filterAdd);
        thingsActions.filterThingsApply(thingsInfo, newFilter);
    }

    render() {
        const { filter, params, filterActions, thingsActions } = this.props;

        return (
            <div className="filter-panel">
                {Object.keys(params).map((element, i) =>
                    {
                        if ((params[element].ParamType !== paramControlType.NONE)) {
                            
                            let defaultValue = '';
                            let useFilter = false;
                            if (filter.filter[element]) {
                                defaultValue = filter.filter[element];
                                useFilter = true;
                            } 
                            
                            return (
                                <div key={i} className="thing-block">
                                    <ThingParamLabel 
                                        text={params[element].Text} />
                                    <ThingParamControl 
                                        paramName={element}
                                        paramType={params[element].ParamType} 
                                        list={params[element].List} 
                                        defaultValue={defaultValue} 
                                        paramChange={this.applyFilter.bind(this)} 
                                        controlWidth={180}
                                        hasEmptyItem
                                        onlyInput
                                        useFilter={useFilter}
                                    />
                                </div>
                            )
                        } else {
                            return null;
                        }

                    }
                )}
                <div className="btn-filter">
                    <Button size="small" onClick={() => {
                        thingsActions.filterThingsAbort();
                        filterActions.clearFilter();
                    }}>Сбросить фильтр</Button>
                </div>
            </div>
        )
    }
}

FilterPanel.propTypes = {
    enabled: PropTypes.bool
}

export default FilterPanel  