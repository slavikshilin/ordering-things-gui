import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { filterReducer } from './filterReducer'
import { thingReducer } from './thingReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    filter: filterReducer,
    thing: thingReducer
})