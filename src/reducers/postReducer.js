import { FETCH_ALL_POSTS } from '../actions/types';

export default function postReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return action.posts;
    default:
      return state;
  }
}
