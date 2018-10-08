import { combineReducers } from 'redux'
import { authReducer } from './authReducer'
import { filterReducer } from './filterReducer'
import { thingsReducer } from './thingsReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    filter: filterReducer,
    things: thingsReducer
})