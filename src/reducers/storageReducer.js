import { REQUEST_FILE, REQUEST_FILE_SUCCESS, REQUEST_FILE_FAILED } from '../actions/storageActions'

const initialState = {
    imageUrl: null,
    err: null,
    isFetching: false,
}

export function storageReducer(state = initialState, action) {
    switch (action.type) {

        case REQUEST_FILE:
            {
                let newState = { ...state, imageUrl: null, err: null, isFetching: true }
                return newState
            }

        case REQUEST_FILE_SUCCESS:
            {
                let newState = { ...state, imageUrl: action.payload, err: null, isFetching: false }
                return newState
            }

        case REQUEST_FILE_FAILED:
            {
                let newState = { ...state, imageUrl: null, err: action.payload, isFetching: false }
                return newState
            }       

        default:
            return state
    }
}