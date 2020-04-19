import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './modules/routes';
import * as serviceWorker from './serviceWorker';
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { configureStore, history } from "./redux/store";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
