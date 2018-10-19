import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import ThingFilterControl from './thingFilterContol';
import ThingParamLabel from '../addThing/thingParamLabel';
import paramControlType from '../../types/paramControlType';

class FilterPanel extends Component {

    applyFilter(filterAdd) {
        const { things, thingsActions } = this.props;
        thingsActions.filterThingsApply(things.thingsInfoOrig, things.filter, filterAdd);
    }

    render() {
        const { things, params, thingsActions } = this.props;

        return (
            <div className="filter-panel">
                {Object.keys(params).map((element, i) =>
                    {
                        if ((params[element].ParamType !== paramControlType.NONE)) {
                            
                            let defaultValue = '';
                            let useFilter = false;
                            if (things.filter[element]) {
                                defaultValue = things.filter[element];
                                useFilter = true;
                            } 
                            
                            return (
                                <div key={i} className="thing-block">
                                    <ThingParamLabel 
                                        text={params[element].Text} />
                                    <ThingFilterControl 
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
                        thingsActions.filterThingsClear();
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