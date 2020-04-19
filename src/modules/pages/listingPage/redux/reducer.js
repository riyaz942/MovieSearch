import {
  GET_MOVIES_LIST_REQUEST,
  GET_MOVIES_LIST_SUCCESS,
  GET_MOVIES_LIST_FAILURE,
} from './constants';

const initialState = {
  moviesList: [],
};

export default function listingPageReducer(
  state = initialState,
  { type, payload }
) {

  switch (type) {
    case GET_MOVIES_LIST_SUCCESS:
      return {
        ...state,
        moviesList: payload.Search,
      };
    default:
      return state;
  }
}
