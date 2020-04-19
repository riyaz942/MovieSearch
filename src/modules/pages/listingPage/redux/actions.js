import { API_ROOT } from "Constants/apiConstants";
import { RSAA } from "redux-api-middleware";
import {
  GET_MOVIES_LIST_REQUEST,
  GET_MOVIES_LIST_SUCCESS,
  GET_MOVIES_LIST_FAILURE,
} from './constants';

export function getMoviesListAction(searchString) {
  return {
    [RSAA]: {
      endpoint: `${API_ROOT}/?apikey=${'edd4e8b1'}&page=1&s=${searchString}`,
      method: "GET",
      types: [
        GET_MOVIES_LIST_REQUEST,
        GET_MOVIES_LIST_SUCCESS,
        GET_MOVIES_LIST_FAILURE,
      ]
    }
  };
}