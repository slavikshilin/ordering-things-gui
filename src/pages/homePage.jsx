import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/home';
import Splash from '../components/splash';

class HomePage extends Component {

    render() {

        if (this.props.auth.isFetching) {
            return (
                <Splash />
            )
        } else {
            return (
                <Home />
            )
        }
    }
}

const mapStateToProps = store => {
    return {
        auth: store.auth
    }
}

export default connect(
    mapStateToProps
)(HomePage)
