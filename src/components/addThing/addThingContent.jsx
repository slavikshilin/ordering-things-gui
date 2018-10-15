import React, { Component } from 'react';
import ThingParamControl from './thingParamContol';
import { bootParams } from '../../types/index'

class AddThingContent extends Component {

    getThingParamsByType(params) {
        const { thingAddActions } = this.props;
        
        return (
            <div>
                {Object.keys(params).map((element, i) =>
                    <div key={i} className="thing-block">
                        <div>{params[element].Text}</div>
                        <div>
                            <ThingParamControl 
                                paramName={element}
                                paramType={params[element].ParamType} 
                                list={params[element].List} 
                                defaultValue={params[element].Default} 
                                thingAddActions={thingAddActions} 
                            />
                        </div>
                    </div>
                )}
            </div>
        )
    }

    getThingParams() {
        let thingType = this.props.thingType;  

        if (thingType === 'boot') {
            return this.getThingParamsByType(bootParams);
        } else {
            return null;
        }
    }

    render() {

        return (
            <div>
                {this.getThingParams()}
            </div>
        )

    }
}

export default AddThingContent  