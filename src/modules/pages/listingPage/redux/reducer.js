import {
  GET_MOVIES_LIST_REQUEST,
  GET_MOVIES_LIST_SUCCESS,
  GET_MOVIES_LIST_FAILURE,
  CLEAR_MOVIE_LIST,
  SET_SEARCH_STRING
} from './constants';

const initialState = {
  searchString: '',
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
    case CLEAR_MOVIE_LIST:
      return {
        ...state,
        moviesList: [],
      }
    case SET_SEARCH_STRING:
        return {
          ...state,
          searchString: payload
        }
    default:
      return state;
  }
}
