import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { thingsReducer } from './thingsReducer';
import { thingAddReducer } from './thingAddReducer';
import { galleryReducer } from './galleryReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    things: thingsReducer,
    thingAdd: thingAddReducer,
    gallery: galleryReducer
})