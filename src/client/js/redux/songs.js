import axios from 'axios';

//Action type
const ADD_SONG = 'ADD_SONG';

//Action creator
export const addSong = (song) => {
  return {
    type: ADD_SONG,
    song
  };
};

//Reducer
export default (state=[], action) => {
  switch (action.type) {
    case ADD_SONG:
      return state.concat(action.song);
    default:
      return state;
  }
};
