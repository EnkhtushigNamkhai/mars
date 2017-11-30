import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from '../components/App';
import reducers from '../reducers';

// import { Router, Route, browserHistory } from 'react-router';

import { BrowserRouter } from 'react-router-dom';
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={createStoreWithMiddleware(reducers)}>
  
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </Provider>
  </MuiThemeProvider>,
  document.getElementById('app'),
);
