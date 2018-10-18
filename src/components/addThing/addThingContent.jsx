import React, { Component } from 'react';
import ThingParamControl from './thingParamContol';
import ThingParamLabel from './thingParamLabel';
import paramControlType from '../../types/paramControlType';

class AddThingContent extends Component {

    getThingParams() {
        const { params, thingAddActions } = this.props;
        
        return (
            <div>
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
                                        defaultValue={params[element].Default} 
                                        paramChange={thingAddActions.thingAddChange} 
                                        controlWidth={500}
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

    render() {

        return (
            <div>
                {this.getThingParams()}
            </div>
        )

    }
}

export default AddThingContent  