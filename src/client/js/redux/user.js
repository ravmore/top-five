import axios from 'axios';

//Action Types
const SET_USER = 'SET_USER';

//Action Creators

export const setUser = (user) => {
  return {
    type: SET_USER,
    user //JSON object
  };
};

//Thunk Creators

export const getUserInfo = (id) => {
  return (dispatch) => {
    axios.get(`/api/users/${id}`)
    .then(user => dispatch(setUser(user)))
  };
};

//Reducers

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, action.user);
    default:
      return state;
  }
};
