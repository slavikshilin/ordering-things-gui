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

/**
 * Получение URL для скачивания файла
 * @param {File} path Путь в хранилище   
 * @returns {Promise<Object>}
 */
export function getDownloadUrl(path) {
	var storageRef = firebase.storage().ref();
	return storageRef.child(path).getDownloadURL();	
}

/**
 * Получение списка объектов БД
 * @param {Object} filter Фильтр  
 * @returns {Promise<Object>}
 */
export function getData(filter) {
	var database = firebase.database();
	var databaseRef = database.ref('things');
	return databaseRef.once("value");
}

/**
 * Получение списка объектов БД
 * @param {Object} thing Объект каталога   
 * @returns {Promise<Object>}
 */
export function addThing(thing) {
	var database = firebase.database();
	var databaseRef = database.ref('things');
	var newThingKey = databaseRef.push().key;
	var newThingRef = database.ref('things/' + newThingKey)
	return newThingRef.set(thing);
}