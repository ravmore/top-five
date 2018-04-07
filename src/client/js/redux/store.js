import { createStore } from 'redux';
import appReducer from './reducers';

export default (state) => createStore(appReducer, state);