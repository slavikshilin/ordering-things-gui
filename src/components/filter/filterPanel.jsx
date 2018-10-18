import React from 'react';
import PropTypes from 'prop-types';
import ThingParamControl from '../addThing/thingParamContol';
import ThingParamLabel from '../addThing/thingParamLabel';
import paramControlType from '../../types/paramControlType';

const FilterPanel = props => {
    const { params, thingAddActions } = props

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
                                    thingAddActions={thingAddActions} 
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
        </div>
    )

}

FilterPanel.propTypes = {
    enabled: PropTypes.bool
}

export default FilterPanel  