import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import { store } from './store/configureStore'
import 'antd/dist/antd.css'
import './index.css'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import registerServiceWorker from './registerServiceWorker'
import { isLoggedIn } from './core/utils/userInfo'

const { Footer } = Layout

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout align="middle">
                <Switch>
                    <Route exact path='/' render={() => (
                        isLoggedIn() ? (
                            <HomePage to="/"/>
                        ) : (
                            <Redirect to="/login" push={true} />
                        )
                    )}/>
                    <Route path='/login' component={LoginPage}/>
                </Switch>
                <Footer className="main-footer" id="footer">© Вячеслав Шилин</Footer>
            </Layout>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'))

registerServiceWorker()
