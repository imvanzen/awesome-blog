import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import posts from './postReducer';

const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  posts,
});

export default createRootReducer;
