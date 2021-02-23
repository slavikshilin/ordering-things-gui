import React from "react";
import { bindActionCreators } from "redux"; 
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'; 
import PropTypes from "prop-types";
import { getUserInfo } from '../core/utils/userInfo';
import UserPopover from './userPopover';
import * as authActions from '../actions/authActions'; 

const AuthHeader = props => {
    const { auth, history, authActions } = props;
    
    return (
        <div className="auth-header">
            <UserPopover userInfo={getUserInfo(auth)} />
            &nbsp;&nbsp;
            <span className="auth-link" type="primary" onClick={() => authActions.fetchLogout(history)}>Выйти</span>
        </div>
    )
}

AuthHeader.propTypes = {
    enabled: PropTypes.bool
}

const mapStateToProps = store => {
    return {
        auth: store.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
	}; 
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AuthHeader))
