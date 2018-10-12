import React from "react"
import PropTypes from "prop-types"
import UserPopover from './userPopover'

const AuthHeader = props => {
    const { userInfo, history, authActions } = props

    return (
        <div className="auth-header">
            <UserPopover userInfo={userInfo} />
            &nbsp;&nbsp;
            <span className="auth-link" type="primary" onClick={() => authActions.fetchLogout(history)}>Выйти</span>
        </div>
    )

}

AuthHeader.propTypes = {
    enabled: PropTypes.bool
}

export default AuthHeader  