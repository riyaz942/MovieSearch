import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import listingPageReducer from 'Pages/listingPage/redux/reducer';
import detailsPageReducer from 'Pages/detailsPage/redux/reducer';

const appReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    listingPageReducer,
    detailsPageReducer,
  });

export default appReducer;
