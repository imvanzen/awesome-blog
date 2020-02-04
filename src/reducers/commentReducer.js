import { FETCH_POST_COMMENTS, CREATE_POST_COMMENT } from '../actions/types';

const initialState = {
  list: [],
};

export default function commentReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_COMMENTS:
      return { ...state, list: action.comments };
    case CREATE_POST_COMMENT:
      return { ...state, list: [action.comment, ...state.list] };
    default:
      return state;
  }
}
