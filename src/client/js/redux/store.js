import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk, logger);

export default (state) => createStore(appReducer, middleware, state);
