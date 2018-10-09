import { addFile, removeFile, getDownloadUrl } from '../core/api/apiMethods'
import guid from '../core/utils/guid'

export const REQUEST_FILE = 'REQUEST_FILE'
export const REQUEST_FILE_SUCCESS = 'REQUEST_FILE_SUCCESS'
export const REQUEST_FILE_FAILED = 'REQUEST_FILE_FAILED'

function requestFile() {
    return {
        type: REQUEST_FILE
    }
}

function requestFileSuccess(imageUrl) {
    return {
        type: REQUEST_FILE_SUCCESS,
        payload: imageUrl
    }
}

function requestFileError(err) {
    return {
        type: REQUEST_FILE_FAILED,
        payload: err
    }
}

export function fetchAdd(file) {
    return (dispatch) => {
        dispatch(requestFile())

        const fileName = guid();
        addFile(file, fileName)
            .then((resp) => {
                if (resp.state === 'success') {

                    getDownloadUrl(resp.metadata.fullPath)
                        .then( imageUrl => {
                            console.log(imageUrl);
                            dispatch(requestFileSuccess(imageUrl));
                        })
                        .catch(
                            err => {
                                throw new Error(err);
                            }
                        )

                } else {
                    throw new Error('Не удалось передать файл!');
                }
            }
            )
            .catch(
                err => {
                    dispatch(requestFileError(new Error(err)))
                }
            )
    }
}

export function fetchRemove(fileName) {
    return (dispatch) => {
        dispatch(requestFile())
        removeFile(fileName)
            .then((resp) => {
                dispatch(requestFileSuccess(resp));
            }
            )
            .catch(
                err => {
                    dispatch(requestFileError(new Error(err)))
                }
            )
    }
}