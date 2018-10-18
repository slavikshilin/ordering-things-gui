import React, { Component } from 'react';
import ThingParamControl from '../addThing/thingParamContol';
import ThingParamLabel from '../addThing/thingParamLabel';
import paramControlType from '../../types/paramControlType';

class EditThingContent extends Component {

    getCurrentValue(fullThingInfo, element) {
        if (fullThingInfo[element]) {
            return fullThingInfo[element].value;
        } else {
            return '';
        }
    }

    getThingParams() {
        const { fullThingInfo, params, thingAddActions } = this.props;
        
        return (
            <div>
                {Object.keys(params).map((element, i) =>
                    {
                        if ((params[element].ParamType !== paramControlType.NONE)) {
                            return (
                                <div key={i} className="thing-block">
                                    <ThingParamLabel 
                                        text={params[element].Text} />
                                    <div>
                                        <ThingParamControl 
                                            paramName={element}
                                            paramType={params[element].ParamType} 
                                            list={params[element].List} 
                                            defaultValue={this.getCurrentValue(fullThingInfo, element)} 
                                            paramChange={thingAddActions.thingAddChange}  
                                            controlWidth={500}
                                        />
                                    </div>
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

    render() {

        return (
            <div>
                {this.getThingParams()}
            </div>
        )

    }
}

export default EditThingContent  