import { addFile, removeFile } from '../core/api/apiMethods'

export const REQUEST_THING = 'REQUEST_THING'
export const REQUEST_THING_SUCCESS = 'REQUEST_THING_SUCCESS'
export const REQUEST_THING_FAILED = 'REQUEST_THING_FAILED'

function requestThing() {
    return {
        type: REQUEST_THING
    }
}

function requestThingSuccess(thing) {
    return {
        type: REQUEST_THING_SUCCESS,
        payload: thing
    }
}

function requestThingError(err) {
    return {
        type: REQUEST_THING_FAILED,
        payload: err
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