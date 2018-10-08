import * as firebase from 'firebase';
import { FirebaseConfig } from '../../config/keys';

firebase.initializeApp(FirebaseConfig);

/**
 * Авторизация пользователя
 * @param {string} user Логин пользователя в формате email 
 * @param {string} password Пароль пользователя
 * @returns {Promise<Array<Object>>}
 */
export function getLogin(user, password) {
	return firebase.auth().signInWithEmailAndPassword(user, password);
}

/**
 * Выход авторизованного пользователя
 * @returns {Promise<Object>}
 */
export function getLogout() {
	return firebase.auth().signOut();
}
