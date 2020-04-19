import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAILURE,
} from './constants';

const initialState = {
  moviesList: [],
};

export default function listingPageReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        moviesList: payload,
      };
    default:
      return state;
  }
}
