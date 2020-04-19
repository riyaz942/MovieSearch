import {
  GET_MOVIES_LIST_REQUEST,
  GET_MOVIES_LIST_SUCCESS,
  GET_MOVIES_LIST_FAILURE,
  CLEAR_MOVIE_LIST,
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
        moviesList: payload.Search,
      };
    case CLEAR_MOVIE_LIST:
      return {
        moviesList: [],
      }

    default:
      return state;
  }
}
