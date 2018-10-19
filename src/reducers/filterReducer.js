import { CHANGE_FILTER, CLEAR_FILTER } from '../actions/filterActions';

const initialState = {
    filter: {}
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

        default:
            return state
    }
}