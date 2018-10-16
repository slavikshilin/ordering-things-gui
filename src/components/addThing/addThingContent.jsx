import React, { Component } from 'react';
import ThingParamControl from './thingParamContol';
import ThingParamLabel from './thingParamLabel';

class AddThingContent extends Component {

    getThingParams() {
        const { params, thingAddActions } = this.props;
        
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
                                defaultValue={params[element].Default} 
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

export default AddThingContent  