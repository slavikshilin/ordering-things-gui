import { CHANGE_FILTER, CLEAR_FILTER, ENABLE_FILTER } from '../actions/filterActions';

const initialState = {
    filter: {},
    enableFilter: false
}

export function filterReducer(state = initialState, action) {
    switch (action.type) {

        case CHANGE_FILTER:
            {
                let oldFilter = state.filter;
                let newFilter = { ...oldFilter, [action.payload.paramName]: action.payload.paramValue };    
                let newState = { ...state, filter: newFilter }
                return newState
            }
            
        case CLEAR_FILTER:
            {
                let newState = { ...initialState }
                return newState
            }    
            
        case ENABLE_FILTER:
            {
                let newState = { ...state, enableFilter: action.payload }
                return newState
            }              

        default:
            return state
    }
}