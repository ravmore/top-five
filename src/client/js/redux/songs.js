// FLUX STANDARD ACTION
//  An action MUST:
//    be a plain JavaScript object.
//    have a ```type``` property.
//  An action MAY:
//    have an ```error``` property.
//    have a ```payload``` property.
//    have a ```meta``` property.
//  More details @ https://github.com/redux-utilities/flux-standard-action

import axios from 'axios';

//:::::::::::::::::::::::::::::::::://
//           Action Types           //
//:::::::::::::::::::::::::::::::::://

const ADD_SONG = 'ADD_SONG';
const REMOVE_SONG = 'REMOVE_SONG';

//:::::::::::::::::::::::::::::::::://
//          Action Creators         //
//:::::::::::::::::::::::::::::::::://  

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

//:::::::::::::::::::::::::::::::::://
//             REDUCERS             //
//:::::::::::::::::::::::::::::::::://

export default (state=[{}, {}, {}, {}, {}], action) => {
  switch (action.type) {
    case ADD_SONG:
      let added = false;
      return state.map(song => {
        if (added || song.id)
          return song;
        added = true;
        return action.song;
      });
    case REMOVE_SONG:
      const newState = state.reduce((arr, song) => {
        if (song.id === action.payload.id)
          return arr;
        return [...arr, song];
      }, []);
      while (newState.length < 5)
        newState.push({});
      return newState;
    default:
      return state;
  }
};
