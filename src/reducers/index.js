import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import postReducer from './postReducer';
import commentReducer from './commentReducer';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  post: postReducer,
  comment: commentReducer,
});

export default createRootReducer;
