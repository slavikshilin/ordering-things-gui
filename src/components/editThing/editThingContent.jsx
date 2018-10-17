import React, { Component } from 'react';
import ThingParamControl from '../addThing/thingParamContol';
import ThingParamLabel from '../addThing/thingParamLabel';

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
                    <div key={i} className="thing-block">
                        <ThingParamLabel 
                            paramType={params[element].ParamType} 
                            text={params[element].Text} />
                        <div>
                            <ThingParamControl 
                                paramName={element}
                                paramType={params[element].ParamType} 
                                list={params[element].List} 
                                defaultValue={this.getCurrentValue(fullThingInfo, element)} 
                                thingAddActions={thingAddActions} 
                            />
                        </div>
                    </div>
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