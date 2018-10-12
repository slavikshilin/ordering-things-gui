import React, { Component } from 'react';
import { bindActionCreators } from "redux";  
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as authActions from '../actions/authActions'; 
import * as storageActions from '../actions/storageActions';
import * as thingsActions from '../actions/thingsActions';  
import * as galleryActions from '../actions/galleryActions';
import Home from '../components/home';
import Splash from '../components/splash';

class HomePage extends Component {

    render() {

        const {
            auth,
            things,
            gallery,
            history,
            authActions,
            storageActions,
            thingsActions,
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
                    things={things}
                    gallery={gallery}
                    history={history}
                    authActions={authActions}
                    storageActions={storageActions}
                    thingsActions={thingsActions}
                    galleryActions={galleryActions} />
            )
        }
    }
}

const mapStateToProps = store => {
    return {
        auth: store.auth,
        things: store.things,
        gallery: store.gallery
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch),
        storageActions: bindActionCreators(storageActions, dispatch),
        thingsActions: bindActionCreators(thingsActions, dispatch),
        galleryActions: bindActionCreators(galleryActions, dispatch),
	}; 
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage))
