import { combineReducers } from 'redux';
import songsReducer from './songs';
import tokenReducer from './token';

export default combineReducers({
  token: tokenReducer,
  songs: songsReducer,
});
