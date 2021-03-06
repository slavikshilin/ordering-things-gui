import { getIsLogged } from '../api/apiMethods';

export function getUserInfo(auth) {
    if (auth.userInfo) {
        return auth.userInfo
    } else if (localStorage.getItem('cks_token')) {
        return JSON.parse(localStorage.getItem('cks_token')).userInfo
    } else {
        return {}
    }    
}

export function isLoggedIn() {
    return (localStorage.getItem('cks_token') !== null) && (getIsLogged());
}

export function clearLocalStorage() {
    localStorage.clear()
}

export function setLocalStorage(userInfo) {
    localStorage.setItem('cks_token', JSON.stringify({ userInfo: userInfo }))  
 }
