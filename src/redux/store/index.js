import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { createLogger } from "redux-logger";
import rootReducer from "../reducer";
import { apiMiddleware } from "redux-api-middleware";
import apiAuthInjector from "../middleware/authInjectorMiddleware";

export const history = createBrowserHistory();
export const configureStore = initialState => {
  const enhancers = [];
  const composeEnhancers = compose;

  enhancers.push(
    compose(
      applyMiddleware(
        thunk,
        apiAuthInjector,
        apiMiddleware,
        createLogger()
      )
    )
  );  

  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(rootReducer(history), initialState, enhancer);

  if (module.hot) {
    module.hot.accept("../reducer", () =>
      store.replaceReducer(require("../reducer"))
    );
  }

  return store;
};
