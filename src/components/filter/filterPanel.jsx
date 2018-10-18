import React from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox } from 'antd';
import ThingParamControl from '../addThing/thingParamContol';
import ThingParamLabel from '../addThing/thingParamLabel';
import paramControlType from '../../types/paramControlType';

const FilterPanel = props => {
    const { thingsInfo, filter, params, filterActions, thingsActions } = props

    const setEnableFilter = (checked) => {
        filterActions.enableFilter(checked);

        if (checked) {
            thingsActions.filterThingsApply(thingsInfo, filter.filter);
        } else {
            thingsActions.filterThingsAbort();    
        }
    }

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
                                    paramChange={filterActions.changeFilter} 
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
                <Checkbox checked={filter.enableFilter} onChange={(e) => setEnableFilter(e.target.checked)}>Фильтровать</Checkbox>
                <Button size="small" onClick={() => {filterActions.clearFilter()}}>Сбросить фильтр</Button>
            </div>
        </div>
    )

}

FilterPanel.propTypes = {
    enabled: PropTypes.bool
}

export default FilterPanel  