import { FETCH_POST_COMMENTS } from '../actions/types';

const initialState = {
  list: [],
};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_COMMENTS:
      return { ...state, list: action.comments };
    default:
      return state;
  }
}
