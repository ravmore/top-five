import { createStore, applyMiddleware } from 'redux';
import reducer from './comboReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk, logger);

export default (state) => createStore(reducer, middleware, state);
