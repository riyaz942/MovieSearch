import { API_ROOT } from "Constants/apiConstants";
import { RSAA } from "redux-api-middleware";
import {
  GET_MOVIE_DETAILS_REQUEST,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAILURE,
} from './constants';


export function getMovieDetails(id) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/?i=${id}`,
      method: "GET",
      types: [
        GET_MOVIE_DETAILS_REQUEST,
        GET_MOVIE_DETAILS_SUCCESS,
        GET_MOVIE_DETAILS_FAILURE,
      ]
    }
  };
}
