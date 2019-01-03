import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import '../src/theme/css/index.css';
import '../src/theme/css/App.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { globalRoutes } from './routes/routes';
import reducers from './reducers/reducers'

const middlewares = [
  thunk
]

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(...middlewares)(createStore)(reducers, devTools)

/**
 * Define context for Application
 */
const context = {
  store,
  routes: globalRoutes,
};

/**
 * Mount Point
 */
const elementMountPoint = document.getElementById('root');
ReactDOM.render(<App context={context} />, elementMountPoint);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
