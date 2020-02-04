import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import postReducer from './postReducer';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  post: postReducer,
});

export default createRootReducer;
