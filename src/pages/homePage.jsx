import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchLogout } from '../actions/authActions' 
import { fetchThings } from '../actions/thingActions'  
import Home from '../components/home'
import Splash from '../components/splash'

class HomePage extends Component {

    render() {

        const {
            auth,
            things,
            history,
            fetchLogoutAction,
            fetchDataAction
        } = this.props

        if (auth.isFetching) {
            return (
                <Splash />
            )
        } else {
            return (
                <Home
                    auth={auth}
                    things={things}
                    history={history}
                    fetchLogoutAction={fetchLogoutAction}
                    fetchDataAction={fetchDataAction} />
            )
        }
    }
}

const mapStateToProps = store => {
    return {
        auth: store.auth,
        things: store.things
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchLogoutAction: (history) => dispatch(fetchLogout(history)),
        fetchDataAction: (filter) => dispatch(fetchThings(filter))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage))
