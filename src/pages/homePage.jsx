import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchLogout } from '../actions/authActions'; 
import { fetchAdd } from '../actions/storageActions';
import { fetchThings, fetchAddThing } from '../actions/thingsActions';
import { toggleLightbox } from '../actions/galleryActions';
import Home from '../components/home';
import Splash from '../components/splash';

class HomePage extends Component {

    render() {

        const {
            auth,
            things,
            gallery,
            history,
            fetchLogoutAction,
            fetchAddAction,
            fetchAddThingAction,
            fetchDataAction,
            toggleLightboxAction
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
                    fetchLogoutAction={fetchLogoutAction}
                    fetchDataAction={fetchDataAction}
                    fetchAddThingAction={fetchAddThingAction}
                    fetchAddAction={fetchAddAction}
                    toggleLightboxAction={toggleLightboxAction} />
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
        fetchLogoutAction: (history) => dispatch(fetchLogout(history)),
        fetchDataAction: (things) => dispatch(fetchThings(things)),      
        fetchAddThingAction: (thing) => dispatch(fetchAddThing(thing)),   
        fetchAddAction: (file) => dispatch(fetchAdd(file)),
        toggleLightboxAction: (idx) => dispatch(toggleLightbox(idx))
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePage))
