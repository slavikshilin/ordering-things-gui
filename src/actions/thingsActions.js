import { addFile, removeThing, getDownloadUrl, getData, addThing, editThing, AddThingImage } from '../core/api/apiMethods';
import guid from '../core/utils/guid'
import isEmptyOrNull from '../core/utils/checkEmpty';
import { minify } from '../core/utils/minifyJpegAsync';

export const REQUEST_THING = 'REQUEST_THING';
export const REQUEST_THING_SUCCESS = 'REQUEST_THING_SUCCESS';
export const REQUEST_THING_FAILED = 'REQUEST_THING_FAILED';

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const CLEAR_FILTER = 'CLEAR_FILTER';


/**
 * Очистка (сброс) фильтра в редюсере
 *
 * @return
 */
function clearFilter() {
    return {
        type: CLEAR_FILTER
    }
}

function changeFilter(thingsInfoFiltered, filter) {
    return {
        type: CHANGE_FILTER,
        payload: { filteredList: thingsInfoFiltered, filter }
    }
}

function requestThing() {
    return {
        type: REQUEST_THING
    }
}

function requestThingSuccess(thingsInfo, thingType) {
    return {
        type: REQUEST_THING_SUCCESS,
        payload: { thingsInfo, thingType }
    }
}

function requestThingError(err) {
    return {
        type: REQUEST_THING_FAILED,
        payload: err
    }
}

function sortByDateAndFilter(list, filter) {

    let sortesList = list;
    let filteredList = null;

    if (list) {
        sortesList = Object.values(list);

        if (sortesList.length > 1) {
            sortesList.sort(function (a, b) {
                return b.createDate - a.createDate;
            });
        }

        filteredList = sortesList;

        if (!isEmptyOrNull(filter)) {

            for (let key in filter) {

                filteredList = filteredList.filter(item => {
                    const typeKey = typeof item[key];
                    if (typeKey === 'string') {
                        return item[key].toUpperCase().startsWith(filter[key].toUpperCase());
                    } else if ((typeKey === 'boolean') || (typeKey === 'number')) {
                        return (item[key] === filter[key]);
                    } else {
                        return false;
                    }
                });
            }
        }

    }

    return filteredList;
}

export function filterThingsApply(things, filter, filterAdd) {
    return (dispatch) => {

        let newFilter = {};

        for (let key in filter) {
            if (key !== filterAdd.paramName) {
                newFilter[key] = filter[key];
            }
        }

        if ((filterAdd.paramValue !== '') && (filterAdd.paramValue !== '-')) {
            newFilter[filterAdd.paramName] = filterAdd.paramValue;
        }

        const filteredThings = sortByDateAndFilter(things, newFilter);
        dispatch(changeFilter(filteredThings, newFilter));
    }
}

export function filterThingsClear() {
    return (dispatch) => {
        dispatch(clearFilter());
    }
}

export function fetchThings(thingType, filter) {
    return async (dispatch) => {

        dispatch(requestThing())

        try {
            let snapshot = await getData(thingType);
            const list = sortByDateAndFilter(snapshot.val(), filter);
            dispatch(requestThingSuccess(list, thingType));
        } catch (err) {
            console.log(err);
            dispatch(requestThingError(new Error(err)));
        }

    }
}

export function fetchAddThing(thing, filter) {
    return async (dispatch) => {

        dispatch(requestThing())

        try {
            await addThing(thing);
            // получаем все данные с сервера
            let snapshot = await getData(thing.type);
            const list = sortByDateAndFilter(snapshot.val(), filter);
            dispatch(requestThingSuccess(list, thing.type));
        } catch (err) {
            console.log(err);
            dispatch(requestThingError(err));
        }

    }
}


/**
 * Редактирование описания вещи на сервере
 *
 * @export
 * @param {Object} thing 
 * @param {Object} filter
 * @returns
 */
export function fetchEditThing(thing, filter) {
    return async (dispatch) => {

        dispatch(requestThing())

        try {
            await editThing(thing);
            let snapshot = await getData(thing.type);
            const list = sortByDateAndFilter(snapshot.val(), filter);
            dispatch(requestThingSuccess(list, thing.type));
        } catch (err) {
            console.log(err);
            dispatch(requestThingError(err))
        }

    }
}


/**
 * Добавление фото вещи на сервер
 *
 * @export
 * @param {Object} item 
 * @param {Object} fileBig Оригинальный (полноразмерный) jpg-файл
 * @param {function} showMessage функция обратного вызова для показа уведомления 
 * @param {Object} filter Фильтр
 */
export function fetchAddImage(item, fileBig, showMessage, filter) {
    return async (dispatch) => {

        dispatch(requestThing())

        const fileBigName = guid();
        try {
            let resp = await addFile(fileBig, fileBigName)
            if (resp.state === 'success') {
                let imageUrlBig = await getDownloadUrl(resp.metadata.fullPath);
                var reader = new FileReader();
                reader.onloadend = (function () {
                    minify(reader.result, 360, async function (data) {
                        let bytes = new Uint8Array(data.length);
                        for (let i = 0; i < bytes.length; i++) {
                            bytes[i] = data.charCodeAt(i);
                        }
                        var fileSmall = new Blob([bytes], { type: 'image/jpeg' });
                        const fileSmallName = guid();
                        let resp = await addFile(fileSmall, fileSmallName);
                        if (resp.state === 'success') {
                            let imageUrlSmall = await getDownloadUrl(resp.metadata.fullPath);
                            const urlObj = { url: imageUrlBig, urlSmall: imageUrlSmall };
                            await AddThingImage(item, urlObj);
                            showMessage();
                            // получаем все данные с сервера
                            let snapshot = await getData(item.type);
                            const list = sortByDateAndFilter(snapshot.val(), filter);
                            dispatch(requestThingSuccess(list, item.type));
                        } else {
                            throw String('Не удалось передать файл!');
                        }
                    });
                });
                reader.readAsBinaryString(fileBig);
            } else {
                throw String('Не удалось передать файл!');
            }
        } catch (err) {
            console.log(err);
            dispatch(requestThingError(new Error(err)))
        }
    }
}

/**
 * Удаление вещи
 *
 * @export
 * @param {Object} thing Удаляемая вещь
 * @param {*} filter Фильтр
 */
export function fetchRemove(thing, filter) {
    return async (dispatch) => {

        dispatch(requestThing())

        try {
            await removeThing(thing);
            let snapshot = await getData(thing.type);
            const list = sortByDateAndFilter(snapshot.val(), filter);
            dispatch(requestThingSuccess(list, thing.type));
        } catch (err) {
            console.log(err);
            dispatch(requestThingError(err))
        }

    }
}