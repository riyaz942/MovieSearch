import {
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAILURE,
} from './constants';

const initialState = {
  movieDetails: {},
};

export default function detailsPageReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        movieDetails: payload,
      };
    default:
      return state;
  }
}
