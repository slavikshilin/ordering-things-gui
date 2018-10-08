import { CHANGE_FILTER, CLEAR_FILTER } from '../actions/filterActions'

const initialState = {
    filter: null,
}

export function filterReducer(state = initialState, action) {
    switch (action.type) {

        case CHANGE_FILTER:
            {
                let newState = { ...state, filter: action.payload }
                return newState
            }
            
        case CLEAR_FILTER:
            {
                let newState = { ...initialState }
                return newState
            }              

        default:
            return state
    }
}