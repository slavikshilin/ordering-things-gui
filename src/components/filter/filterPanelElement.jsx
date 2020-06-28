import React, { Component } from 'react';
import { bindActionCreators } from "redux"; 
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { List } from 'antd';
import ThingFilterControl from './thingFilterContol';
import ThingParamLabel from '../addThing/thingParamLabel';
import paramControlType from '../../types/paramControlType';
import * as thingsActions from '../../actions/thingsActions';  

class FilterPanelElement extends Component {

    applyFilter(filterAdd) {
        const { things, thingsActions } = this.props;
        thingsActions.filterThingsApply(things.thingsInfoOrig, things.filter, filterAdd);
    }

    render() {
        const { things, params, element, index } = this.props;

        if ((params[element].ParamType  !== paramControlType.NONE)) {
            
            let defaultValue = '';
            let useFilter = false;
            if (things.filter[element]) {
                defaultValue = things.filter[element];
                useFilter = true;
            } 
            
            return (
                <List.Item>
                    <div key={index} className="thing-block">
                        <div>
                            <ThingParamLabel 
                                text={params[element].Text} />
                            <ThingFilterControl 
                                paramName={element}
                                paramType={params[element].ParamType} 
                                list={params[element].List} 
                                defaultValue={defaultValue} 
                                paramChange={this.applyFilter.bind(this)} 
                                hasEmptyItem
                                onlyInput
                                useFilter={useFilter}
                            />
                        </div>
                    </div>
                </List.Item>
            )
        } else {
            return null;
        }

    }
}

FilterPanelElement.propTypes = {
    enabled: PropTypes.bool
}

const mapStateToProps = store => {
    return {
        things: store.things
    }
}

const mapDispatchToProps = dispatch => {
    return {
        thingsActions: bindActionCreators(thingsActions, dispatch)
	}; 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilterPanelElement)
