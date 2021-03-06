import { THING_ADD_DEFAULT, THING_ADD_OK, THING_ADD_CANCEL, THING_ADD_CHANGE } from '../actions/thingAddActions'

const initialState = {
    thingAdd: { urls: {} }    
};

export function thingAddReducer(state = initialState, action) {
    switch (action.type) {

        case THING_ADD_DEFAULT:
            {
                let newState = { ...state, thingAdd: action.payload }
                return newState
            }

        case THING_ADD_OK:
            {
                let newState = { ...initialState };
                return newState
            }

        case THING_ADD_CANCEL:
            {
                let newState = { ...initialState };
                return newState
            }

        case THING_ADD_CHANGE:
            {
                let oldthingAdd = state.thingAdd;
                let thingAddNew = { ...oldthingAdd, [action.payload.paramName]: action.payload.paramValue };    
                let newState = { ...state, thingAdd: thingAddNew }
                return newState
            }       

        default:
            return state
    }
}