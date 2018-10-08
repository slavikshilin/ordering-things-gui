import { REQUEST_THING, REQUEST_THING_SUCCESS, REQUEST_THING_FAILED } from '../actions/thingActions'

const initialState = {
    thingsInfo: null,
    err: null,
    isFetching: false,
}

export function thingsReducer(state = initialState, action) {
    switch (action.type) {

        case REQUEST_THING:
            {
                let newState = { ...state, thingsInfo: null, err: null, isFetching: true }
                return newState
            }

        case REQUEST_THING_SUCCESS:
            {
                let newState = { ...state, thingsInfo: action.payload, err: null, isFetching: false }
                return newState
            }

        case REQUEST_THING_FAILED:
            {
                let newState = { ...state, thingsInfo: null, err: action.payload, isFetching: false }
                return newState
            }       

        default:
            return state
    }
}