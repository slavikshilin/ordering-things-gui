import {
    REQUEST_THING,
    REQUEST_THING_SUCCESS,
    REQUEST_THING_FAILED,
    THING_FILTER_APPLY,
    THING_FILTER_ABORT
} from '../actions/thingsActions'

const initialState = {
    thingsInfo: null,
    thingsInfoOrig: null,
    thingType: null,
    err: null,
    isFetching: false,
}

export function thingsReducer(state = initialState, action) {
    switch (action.type) {

        case REQUEST_THING:
            {
                let newState = { ...state, thingsInfo: null, thingType: null, err: null, isFetching: true }
                return newState
            }

        case REQUEST_THING_SUCCESS:
            {
                let newState = { ...state, thingsInfo: action.payload.thingsInfo, thingsInfoOrig: action.payload.thingsInfo, thingType: action.payload.thingType, err: null, isFetching: false }
                return newState
            }

        case REQUEST_THING_FAILED:
            {
                let newState = { ...state, thingsInfo: null, thingsInfoOrig: null, thingType: null, err: action.payload, isFetching: false }
                return newState
            }

        case THING_FILTER_APPLY:
            {
                let newState = { ...state, thingsInfo: action.payload }
                return newState
            }
  
        case THING_FILTER_ABORT:
            {
                let newState = { ...state, thingsInfo: state.thingsInfoOrig }
                return newState
            }            

        default:
            return state
    }
}