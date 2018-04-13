// FLUX STANDARD ACTION
//  An action MUST:
//    be a plain JavaScript object.
//    have a ```type``` property.
//  An action MAY:
//    have an ```error``` property.
//    have a ```payload``` property.
//    have a ```meta``` property.
//  More details @ https://github.com/redux-utilities/flux-standard-action

//:::::::::::::::::::::::::::::::::://
//           Action Types           //
//:::::::::::::::::::::::::::::::::://

export const SET_TOKEN = 'SET_TOKEN_DATA';

//:::::::::::::::::::::::::::::::::://
//          Action Creators         //
//:::::::::::::::::::::::::::::::::://  

// create action to store token data retrived from spotify
export const setTokenAction = (token, error) => {
  const action = { type: SET_TOKEN };
  if (!!error)  {
    return errorAction(action.type, error);
  }  
  action.payload = token;
  return action;
};


// create an error action based on the type and error
function errorAction(type, error) {
  return {
    type,
    error: true,
    payload: new Error(error),
  };
};

//:::::::::::::::::::::::::::::::::://
//             REDUCERS             //
//:::::::::::::::::::::::::::::::::://

export default (state={}, action) => {
  switch(action.type) {
    case SET_TOKEN:
      return action.payload;
    default:
      return state;
  };
};