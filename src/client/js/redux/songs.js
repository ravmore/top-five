import axios from 'axios';

//Action type
const ADD_SONG = 'ADD_SONG';
const REMOVE_SONG = 'REMOVE_SONG';

//Action creator
export const addSong = (song) => {
  return {
    type: ADD_SONG,
    song
  };
};

export const removeSong = (song) => {
  return {
    type: REMOVE_SONG,
    payload: song
  };
};

//Reducer
export default (state=[], action) => {
  switch (action.type) {
    case ADD_SONG:
      return state.concat(action.song);
    case REMOVE_SONG:
      return state.reduce((arr, song) => {
        if (song.id === action.payload.id)
          return arr;
        return [...arr, song];
      }, []);
    default:
      return state;
  }
};
