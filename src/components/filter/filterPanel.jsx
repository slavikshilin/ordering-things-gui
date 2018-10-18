import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import ThingParamControl from '../addThing/thingParamContol';
import ThingParamLabel from '../addThing/thingParamLabel';
import paramControlType from '../../types/paramControlType';

const FilterPanel = props => {
    const { params, filterActions } = props

    return (
        <div className="filter-panel">
            {Object.keys(params).map((element, i) =>
                {
                    if ((params[element].ParamType !== paramControlType.NONE)) {
                        return (
                            <div key={i} className="thing-block">
                                <ThingParamLabel 
                                    text={params[element].Text} />
                                <ThingParamControl 
                                    paramName={element}
                                    paramType={params[element].ParamType} 
                                    list={params[element].List} 
                                    defaultValue="" 
                                    paramChange={filterActions.changeFilter} 
                                    controlWidth={180}
                                    hasEmptyItem
                                    onlyInput
                                />
                            </div>
                        )
                    } else {
                        return null;
                    }

                }
            )}
            <div className="btn-filter"><Button onClick={() => {filterActions.clearFilter()}}>Сбросить фильтр</Button></div>
        </div>
    )

}

FilterPanel.propTypes = {
    enabled: PropTypes.bool
}

export default FilterPanel  