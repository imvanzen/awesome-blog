import { FETCH_ALL_POSTS } from '../actions/types';

const initialState = {
  list: [],
  details: {
    id: null,
    title: null,
    body: null,
  },
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_POSTS:
      return Object.assign({}, ...state, { list: action.posts });
    default:
      return state;
  }
}
