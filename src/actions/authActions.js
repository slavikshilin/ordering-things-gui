import { getLogin, getLogout } from '../core/api/apiMethods'
import { clearLocalStorage, setLocalStorage } from '../core/utils/userInfo'
//import * as firebase from 'firebase';

export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const REQUEST_LOGIN_SUCCESS = 'REQUEST_LOGIN_SUCCESS'
export const REQUEST_LOGIN_FAILED = 'REQUEST_LOGIN_FAILED'

export const REQUEST_LOGOUT = 'REQUEST_LOGOUT'
export const REQUEST_LOGOUT_SUCCESS = 'REQUEST_LOGOUT_SUCCESS'
export const REQUEST_LOGOUT_FAILED = 'REQUEST_LOGOUT_FAILED'

function requestLogin() {
    return {
        type: REQUEST_LOGIN
    }
}

function requestLoginSuccess(userInfo) {
    return {
        type: REQUEST_LOGIN_SUCCESS,
        payload: userInfo
    }
}

function requestLoginError(err) {
    return {
        type: REQUEST_LOGIN_FAILED,
        payload: err
    }
}

function requestLogout() {
    return {
        type: REQUEST_LOGOUT
    }
}

function requestLogoutSuccess() {
    return {
        type: REQUEST_LOGOUT_SUCCESS,
    }
}

function requestLogoutError(err) {
    return {
        type: REQUEST_LOGOUT_FAILED,
        payload: err
    }
}

export function fetchLogout(history) {
    return async (dispatch) => {

        clearLocalStorage()
        dispatch(requestLogout())

        try {
            await getLogout();
            dispatch(requestLogoutSuccess());
            history.push("/login")
        } catch(err) {
            dispatch(requestLogoutError(err));
        }

    }
}

/*eslint-disable */
export function fetchLogin(login, password, history) {
    return async (dispatch) => {
        dispatch(requestLogin())

        try {
            let userInfo = await getLogin(login, password);
            console.log(JSON.stringify(userInfo));

            /*
            var user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: "Вера Шилина",
                photoURL: "https://firebasestorage.googleapis.com/v0/b/ordering-things-api.appspot.com/o/users%2Fvera.jpg?alt=media&token=471839d5-48b6-4725-8cd7-cb11d5bad0aa"
            }).then(function () {
                console.log('update user success!');
            }).catch(function (error) {
                console.log('update user error: ' + error);
            });
            */            
           dispatch(requestLoginSuccess(userInfo));
           //сохранение токена в localStorage
           setLocalStorage(userInfo);
           history.push("/");
        } catch(err) {
            localStorage.clear();
            dispatch(requestLoginError(err));
        }        

    }
}
/*eslint-enable */
