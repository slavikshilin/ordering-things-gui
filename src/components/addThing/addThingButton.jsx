import React, { Component } from 'react';
import { bindActionCreators } from "redux"; 
import { connect } from 'react-redux'; 
import { Icon, Modal, Tooltip } from 'antd';
import AddThingContent from './addThingContent';
import * as thingAddActions from '../../actions/thingAddActions'; 
import * as thingsActions from '../../actions/thingsActions';

const confirm = Modal.confirm;

class AddThingButton extends Component {
    
    getDefaultThing(params) {
        let defaultThing = {};
        for (var key in params) {
            defaultThing[key] = params[key].Default;
        }
        return defaultThing;
    }

    showConfirm() {
        const { params, thingAddActions } = this.props;
        const thisLocal = this;

        const defaultThing = this.getDefaultThing(params);
        thingAddActions.thingAddDefault(defaultThing);

        confirm({
            title: 'Добавление новой вещи',
            content: <AddThingContent thingAddActions={thingAddActions} params={params} />,
            okText: 'OK',
            cancelText: 'Отмена',
            centered: true,
            width: 560,
            onOk() {
                const { thingAdd, thingsActions } = thisLocal.props; 

                if (thingAdd) {
                    // Set current datetime
                    thingAdd.thingAdd.createDate = Date.now();

                    thingsActions.fetchAddThing(thingAdd.thingAdd);
                    thingAddActions.thingAddOk();
                    console.log('OK');
                }
            },
            onCancel() {
                thingAddActions.thingAddCancel();
                console.log('Cancel');
            },
        });
    }

    render() {

        return (
            <Tooltip placement="topRight" title="Добавить новую вещь">
                <div className="btn-add-thing" onClick={() => this.showConfirm()}>
                    <div className="btn-add-thing-content">
                        <Icon type="plus" />
                    </div>
                </div>
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
        thingAddActions: bindActionCreators(thingAddActions, dispatch),
        thingsActions: bindActionCreators(thingsActions, dispatch),
	}; 
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddThingButton)