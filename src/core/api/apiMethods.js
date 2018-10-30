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
 * Проверка авторизованности пользователя
 * @returns {boolean}
 */
export function getIsLogged() {
	var user = firebase.auth().currentUser;
	if (user) {
		return true;
	} else {
		return false;
	}
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
 * Получение списка вещей
 * @param {Object} typeThing фильтрация по типу т.к. firebase не подддерживает фильтрацию по нескольким параметрам  
 * @returns {Promise<Object>}
 */
export function getData(typeThing) {
	var database = firebase.database();
	var databaseRef = database.ref('things');
	var databaseFilteredRef = databaseRef.orderByChild('type').equalTo(typeThing);
	return databaseFilteredRef.once("value");
}

/**
 * Добавление новой вещи в список
 * @param {Object} thing Объект каталога   
 * @returns {Promise<Object>}
 */
export function addThing(thing) {
	var database = firebase.database();
	var databaseRef = database.ref('things');
	var newThingKey = databaseRef.push().key;
	thing.key = newThingKey;
	var newThingRef = database.ref('things/' + newThingKey)
	return newThingRef.set(thing);
}

/**
 * Добавление новой вещи в список
 * @param {Object} thing Объект каталога   
 * @returns {Promise<Object>}
 */
export function editThing(thing) {
	var database = firebase.database();
	var thingRef = database.ref('things/' + thing.key)
	return thingRef.update(thing);
}

/**
 * Удаление вещи из списка
 * @param {Object} thing Объект каталога   
 * @returns {Promise<Object>}
 */
export function removeThing(thing) {
	var database = firebase.database();
	var thingRef = database.ref('things/' + thing.key)
	return thingRef.remove();
}

/**
 * Добавление новой вещи в список
 * @param {Object} thing Объект каталога   
 * @returns {Promise<Object>}
 */
export function AddThingImage(thing, url) {
	var database = firebase.database();
	var databaseRef = database.ref('things/' + thing.key + '/urls/');
	var newImageKey = databaseRef.push().key;
	url.key = newImageKey;	
	var newThingImageRef = database.ref('things/' + thing.key + '/urls/' + newImageKey);
	return newThingImageRef.set(url);
}