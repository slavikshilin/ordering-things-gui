import { addFile, removeFile, getDownloadUrl, getData, addThing, editThing, AddThingImage } from '../core/api/apiMethods';
import guid from '../core/utils/guid'

export const REQUEST_THING = 'REQUEST_THING';
export const REQUEST_THING_SUCCESS = 'REQUEST_THING_SUCCESS';
export const REQUEST_THING_FAILED = 'REQUEST_THING_FAILED';

function requestThing() {
    return {
        type: REQUEST_THING
    }
}

function requestThingSuccess(thingsInfo) {
    return {
        type: REQUEST_THING_SUCCESS,
        payload: thingsInfo
    }
}

function requestThingError(err) {
    return {
        type: REQUEST_THING_FAILED,
        payload: err
    }
}

export function fetchThings(filter) {
    return (dispatch) => {

        dispatch(requestThing())

        getData(filter)
            .then((snapshot) => {
                dispatch(requestThingSuccess(snapshot.val())); 
            })
            .catch(err => {
                console.log(err);
                dispatch(requestThingError(new Error(err)))
            })
    }
}

export function fetchAddThing(thing) {
    return (dispatch) => {

        dispatch(requestThing())

        addThing(thing)
            .then((res) => {
                dispatch(requestThingSuccess(res));
            }
            )
            .catch(
                err => {
                    dispatch(requestThingError(err))
                }
            )
    }
}

export function fetchEdit(thing) {
    return (dispatch) => {

        dispatch(requestThing())
        editThing(thing)
            .then(() => {
                // получаем все данные с сервера
                getData()
                    .then((snapshot) => {
                        dispatch(requestThingSuccess(snapshot.val())); 
                    })
                    .catch(err => {
                        console.log(err);
                        throw err;
                    })
            }
            )
            .catch(
                err => {
                    dispatch(requestThingError(new Error(err)))
                }
            )
    }
}

export function fetchAddImage(item, file, showMessage) {
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
                                    getData()
                                        .then((snapshot) => {
                                            dispatch(requestThingSuccess(snapshot.val())); 
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


export function fetchRemove(thing) {
    return (dispatch) => {

        dispatch(requestThing())

        const fileName = 'maket'
        removeFile(fileName)
            .then(() => {
                dispatch(requestThingSuccess());
            }
            )
            .catch(
                err => {
                    dispatch(requestThingError(err))
                }
            )
    }
}