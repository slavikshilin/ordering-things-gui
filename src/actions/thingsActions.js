import { addFile, removeFile, getData, getDownloadUrl } from '../core/api/apiMethods'

export const REQUEST_THING = 'REQUEST_THING'
export const REQUEST_THING_SUCCESS = 'REQUEST_THING_SUCCESS'
export const REQUEST_THING_FAILED = 'REQUEST_THING_FAILED'

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

                var things = snapshot.val();
                var count = 0;
                things.forEach(el => {
                    
                    getDownloadUrl(el.url)
                        .then( imageUrl => {
                            el.imageUrl = imageUrl;
                            console.log(el.imageUrl);
                            count++;
                            if (count === things.length) {
                                dispatch(requestThingSuccess(things));                            
                            }
                        })
                        .catch(
                            err => {
                                throw new Error(err);
                            }
                        )
                });
            })
            .catch(err => {
                console.log(err);
                dispatch(requestThingError(new Error(err)))
            })
    }
}

export function fetchAdd(thing) {
    return (dispatch) => {

        dispatch(requestThing())

        addFile()
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

export function fetchEdit(thing) {
    return (dispatch) => {

        dispatch(requestThing())

        const fileName = 'maket'
        const file = '123'
        addFile(file, fileName)
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