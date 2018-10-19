import {
    REQUEST_THING,
    REQUEST_THING_SUCCESS,
    REQUEST_THING_FAILED,
    CHANGE_FILTER, 
    CLEAR_FILTER
} from '../actions/thingsActions'

const initialState = {
    thingsInfo: null,
    thingsInfoOrig: null,
    thingType: null,
    err: null,
    isFetching: false,
    filter: {}
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

        case CHANGE_FILTER:
            {
                let newState = { ...state,  thingsInfo: action.payload.filteredList, filter: action.payload.filter }
                return newState
            }
            
        case CLEAR_FILTER:
            {
                let newState = { ...state, thingsInfo: state.thingsInfoOrig, filter: {} }
                return newState
            }           

        default:
            return state
    }
}