import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

<<<<<<< HEAD
export default (state) => createStore(appReducer, state);
=======
const middleware = applyMiddleware(thunk, logger);

export default (state) => createStore(appReducer, middleware, state);
>>>>>>> 2ca4f8b76c66ecee5fa29231283a04e822ae7a3d
