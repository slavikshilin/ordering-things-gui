import React, { Component } from 'react';
import { bindActionCreators } from "redux"; 
import { connect } from 'react-redux'; 
import { Icon, Modal, Tooltip } from 'antd';
import EditThingContent from './editThingContent';
import { getThingParams, getFullThingInfo } from '../../mapping/fullThingInfo';
import * as thingsActions from '../../actions/thingsActions';  
import * as thingAddActions from '../../actions/thingAddActions'; 

const confirm = Modal.confirm;

class EditThingButton extends Component {
    
    getDefaultThing(fullThingInfo) {
        let defaultThing = {};
        
        for (var key in fullThingInfo) {
            defaultThing[key] = fullThingInfo[key].value;
        }
        
        return defaultThing;
    }

    editConfirm() {
        const { thingInfo, thingAddActions } = this.props;
        const thisLocal = this;

        const params = getThingParams(thingInfo.type);
        const fullThingInfo = getFullThingInfo(thingInfo);
        let defaultThing = this.getDefaultThing(fullThingInfo);
        defaultThing.key = thingInfo.key;
        thingAddActions.thingAddDefault(defaultThing);

        confirm({
            title: 'Редактирование параметров вещи',
            content: <EditThingContent thingAddActions={thingAddActions} fullThingInfo={fullThingInfo} params={params} />,
            okText: 'OK',
            cancelText: 'Отмена',
            centered: true,
            width: 560,
            onOk() {
                const { thingAdd, thingsActions } = thisLocal.props; 

                if (thingAdd) {
                    // Set current datetime
                    thingAdd.thingAdd.updateDate = Date.now();
                    thingAdd.thingAdd.type = thingInfo.type;

                    thingsActions.fetchEditThing(thingAdd.thingAdd);
                    thingAddActions.thingAddOk();
                    console.log('OK edit');
                }
            },
            onCancel() {
                thingAddActions.thingAddCancel();
                console.log('Cancel edit');
            },
        });
    }

    render() {
        return (
            <Tooltip placement="bottomLeft" title="Изменить">
                <Icon type="edit" onClick={() => this.editConfirm()} />
            </Tooltip>
        )
    }
}

const mapStateToProps = store => {
    return {
        thingAdd: store.thingAdd
    }
}

const mapDispatchToProps = dispatch => {
    return {
        thingsActions: bindActionCreators(thingsActions, dispatch),
        thingAddActions: bindActionCreators(thingAddActions, dispatch)
	}; 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditThingButton)
