import React, { Component } from 'react';
import ThingParamControl from './thingParamContol';
import { bootParams } from '../../types/index'

class AddThingContent extends Component {

    getThingParamsByType(params) {
        return (
            <div>
                {Object.keys(params).map((element, i) =>	
                    <div key={i}>
                        <div>{params[element].Text}</div>
                        <div>
                            <ThingParamControl paramType={params[element].ParamType} list={params[element].List} defaultValue={params[element].Default} />                           
                        </div> 
                    </div>                        
            )}
            </div>
        )   
    }

    getThingParams() {
        const thingType = this.props.thingType;

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