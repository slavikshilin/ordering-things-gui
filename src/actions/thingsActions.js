import { addFile, removeThing, getDownloadUrl, getData, addThing, editThing, AddThingImage } from '../core/api/apiMethods';
import guid from '../core/utils/guid'
import isEmptyOrNull from '../core/utils/checkEmpty';

export const REQUEST_THING = 'REQUEST_THING';
export const REQUEST_THING_SUCCESS = 'REQUEST_THING_SUCCESS';
export const REQUEST_THING_FAILED = 'REQUEST_THING_FAILED';

export const THING_FILTER_APPLY = 'THING_FILTER_APPLY';
export const THING_FILTER_ABORT = 'THING_FILTER_ABORT';

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

function thingFilterApplay(thingsInfoFiltered) {
    return {
        type: THING_FILTER_APPLY,
        payload: thingsInfoFiltered
    }
}

function thingFilterAbort() {
    return {
        type: THING_FILTER_ABORT
    }
}

function sortByDateAndFilter(list, filter) {

    let sortesList = list;
    let filteredList = null;

    if (list) {
        sortesList = Object.values(list);

        if (sortesList.length > 1) {
            sortesList.sort(function(a, b) {
                return b.createDate - a.createDate;
            });
        }

        filteredList = sortesList;

        if (!isEmptyOrNull(filter)) {

            for (let key in filter) {

                filteredList = filteredList.filter(item => { 
                    const typeKey = typeof item[key];
                    if ((filter[key] !== '') && (filter[key] !== '-'))
                    {
                        if (typeKey === 'string') {
                            return item[key].startsWith(filter[key]); 
                        } else if ((typeKey === 'boolean') || (typeKey === 'number')) {
                            return (item[key] === filter[key]); 
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                });
            }

        }

    }

    return filteredList;
}

export function filterThingsApply(things, filter) {
    return (dispatch) => {
        const filteredThings = sortByDateAndFilter(things, filter) 
        dispatch(thingFilterApplay(filteredThings))
    }    
}

export function filterThingsAbort() {
    return (dispatch) => {
        dispatch(thingFilterAbort())
    }    
}

export function fetchThings(thingType, filter) {
    return (dispatch) => {

        dispatch(requestThing())

        getData(thingType)
            .then((snapshot) => {
                const list = sortByDateAndFilter(snapshot.val(), filter);                
                dispatch(requestThingSuccess(list, thingType)); 
            })
            .catch(err => {
                console.log(err);
                dispatch(requestThingError(new Error(err)))
            })
    }
}

export function fetchAddThing(thing, filter) {
    return (dispatch) => {

        dispatch(requestThing())

        addThing(thing)
            .then(() => {

                // получаем все данные с сервера
                getData(thing.type)
                    .then((snapshot) => {
                        const list = sortByDateAndFilter(snapshot.val(), filter);                
                        dispatch(requestThingSuccess(list, thing.type)); 
                    })
                    .catch(err => {
                        console.log(err);
                        throw err;
                    })

            }
            )
            .catch(
                err => {
                    dispatch(requestThingError(err))
                }
            )
    }
}

export function fetchEditThing(thing, filter) {
    return (dispatch) => {

        dispatch(requestThing())

        editThing(thing)
            .then(() => {

                // получаем все данные с сервера
                getData(thing.type)
                    .then((snapshot) => {
                        const list = sortByDateAndFilter(snapshot.val(), filter);                
                        dispatch(requestThingSuccess(list, thing.type)); 
                    })
                    .catch(err => {
                        console.log(err);
                        throw err;
                    })

            }
            )
            .catch(
                err => {
                    dispatch(requestThingError(err))
                }
            )
    }
}

export function fetchAddImage(item, file, showMessage, filter) {
    return (dispatch) => {

        dispatch(requestThing())

        const fileName = guid();
        addFile(file, fileName)
            .then((resp) => {
                if (resp.state === 'success') {

                    getDownloadUrl(resp.metadata.fullPath)
                        .then(imageUrl => {
                            
                            const urlObj = { url: imageUrl };
                            AddThingImage(item, urlObj)
                                .then(() => {
                                    showMessage();
                                    // получаем все данные с сервера
                                    getData(item.type)
                                        .then((snapshot) => {
                                            const list = sortByDateAndFilter(snapshot.val(), filter);                
                                            dispatch(requestThingSuccess(list, item.type)); 
                                        })
                                        .catch(err => {
                                            console.log(err);
                                            throw err;
                                        })
                                }
                                )
                                .catch(
                                    err => {
                                        throw err;
                                    }
                                )
                        })
                        .catch(
                            err => {
                                throw err;
                            }
                        )

                } else {
                    throw String('Не удалось передать файл!');
                }
            }
            )
            .catch(
                err => {
                    dispatch(requestThingError(new Error(err)))
                }
            )

    }
}


export function fetchRemove(thing, filter) {
    return (dispatch) => {

        dispatch(requestThing())

        removeThing(thing)
            .then(() => {
                // получаем все данные с сервера
                getData(thing.type)
                    .then((snapshot) => {
                        const list = sortByDateAndFilter(snapshot.val(), filter);                
                        dispatch(requestThingSuccess(list, thing.type)); 
                    })
                    .catch(err => {
                        console.log(err);
                        throw err;
                    })
            }
            )
            .catch(
                err => {
                    dispatch(requestThingError(err))
                }
            )
    }
}