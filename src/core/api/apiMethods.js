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

/**
 * Добавление файла в хранилище
 * @param {File} file Файл  
 * @param {File} fileName Имя файла   
 * @returns {Promise<Object>}
 */
export function addFile(file, fileName) {
	var storageRef = firebase.storage().ref();
	var mountainImagesRef = storageRef.child(`images/${fileName}.jpg`);	
	return mountainImagesRef.put(file);
}

/**
 * Удаление файла в хранилище
 * @param {File} fileName Имя файла   
 * @returns {Promise<Object>}
 */
export function removeFile(fileName) {
	var storageRef = firebase.storage().ref();
	var mountainImagesRef = storageRef.child(`images/${fileName}.jpg`);	
	return mountainImagesRef.delete();
}
