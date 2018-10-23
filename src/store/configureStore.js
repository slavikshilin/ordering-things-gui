import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

function getApplyMiddleware() {
    if (process.env.NODE_ENV === 'development') {
        return applyMiddleware(thunk, logger);
    } else {
        return applyMiddleware(thunk);
    }
}

export const store = createStore(rootReducer, getApplyMiddleware());