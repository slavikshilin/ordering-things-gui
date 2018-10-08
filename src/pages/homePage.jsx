import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchLogout } from '../actions/authActions'  
import Home from '../components/home'
import Splash from '../components/splash'

class HomePage extends Component {

    render() {

        const {
            auth,
            history,
            fetchLogoutAction
        } = this.props

        if (auth.isFetching) {
            return (
                <Splash />
            )
        } else {
            return (
                <Home
                    auth={auth}
                    history={history}
                    fetchLogoutAction={fetchLogoutAction} />
            )
        }
    }
}

const mapStateToProps = store => {
    return {
        auth: store.auth,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLogoutAction: (history) => dispatch(fetchLogout(history))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage))
