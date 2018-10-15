import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { filterReducer } from './filterReducer';
import { thingsReducer } from './thingsReducer';
import { thingAddReducer } from './thingAddReducer';
import { galleryReducer } from './galleryReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    filter: filterReducer,
    things: thingsReducer,
    thingAdd: thingAddReducer,
    gallery: galleryReducer
})