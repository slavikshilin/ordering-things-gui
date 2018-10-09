import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { fetchLogout } from '../actions/authActions' 
import { fetchAdd } from '../actions/storageActions'
import { fetchThings } from '../actions/thingsActions'
import Home from '../components/home'
import Splash from '../components/splash'

class HomePage extends Component {

    render() {

        const {
            auth,
            things,
            history,
            fetchLogoutAction,
            fetchAddAction,
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
                    fetchDataAction={fetchDataAction}
                    fetchAddAction={fetchAddAction} />
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
        fetchDataAction: (things) => dispatch(fetchThings(things)),        
        fetchAddAction: (file) => dispatch(fetchAdd(file))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage))
