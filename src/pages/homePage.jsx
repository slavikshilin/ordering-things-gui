import React, { Component } from 'react';
import { bindActionCreators } from "redux";  
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as authActions from '../actions/authActions'; 
import * as thingsActions from '../actions/thingsActions';  
import * as thingAddActions from '../actions/thingAddActions'; 
import * as galleryActions from '../actions/galleryActions';
import * as filterActions from '../actions/filterActions';
import Home from '../components/home';
import Splash from '../components/splash';

class HomePage extends Component {

    render() {

        const {
            auth,
            filter,
            things,
            thingAdd,
            gallery,
            history,
            authActions,
            filterActions,
            thingsActions,
            thingAddActions,
            galleryActions
        } = this.props

        if (auth.isFetching) {
            return (
                <Splash />
            )
        } else {
            return (
                <Home
                    auth={auth}
                    filter={filter}
                    things={things}
                    thingAdd={thingAdd}
                    gallery={gallery}
                    history={history}
                    authActions={authActions}
                    filterActions={filterActions}
                    thingsActions={thingsActions}
                    thingAddActions={thingAddActions}
                    galleryActions={galleryActions} />
            )
        }
    }
}

const mapStateToProps = store => {
    return {
        auth: store.auth,
        filter: store.filter,
        things: store.things,
        thingAdd: store.thingAdd,
        gallery: store.gallery,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch),
        filterActions: bindActionCreators(filterActions, dispatch),
        thingsActions: bindActionCreators(thingsActions, dispatch),
        thingAddActions: bindActionCreators(thingAddActions, dispatch),
        galleryActions: bindActionCreators(galleryActions, dispatch),
	}; 
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage))
