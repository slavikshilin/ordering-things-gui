import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import AlertMessage from '../components/alertMessage'
import WrappedLogin from '../components/login'
import { clearLocalStorage } from '../core/utils/userInfo'

const { Content, Footer } = Layout

class LoginPage extends Component {

    render() {
        clearLocalStorage()
        const { auth } = this.props

        return (
            <Layout align="middle">
                <Footer style={{ fontSize: "x-large" }}>
                    <AlertMessage err={auth.err} />
                    Авторизация
                </Footer>
                <Content><WrappedLogin isFetching={auth.isFetching} /></Content>
                <Footer></Footer>
            </Layout>
        )
    }
}

const mapStateToProps = store => {
    return {
        auth: store.auth,
    }
}

export default connect(
    mapStateToProps
)(LoginPage)