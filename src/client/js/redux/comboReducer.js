import { combineReducers } from 'redux';
import songsReducer from './songs';
import playlistsReducer from './playlists';
import userReducer from './user';
import tokenReducer from './token';


export default combineReducers({
  token: tokenReducer,
  songs: songsReducer,
  activePlaylist: playlistsReducer,
  user: userReducer
});
