import '../common/lib';
import 'babel-polyfill';

// redux-devtools
import { createDevTools, persistState } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
// react
import React from 'react';
import { render } from 'react-dom';
// router
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';
// redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
const loggerMiddleware = createLogger()

import { Provider } from 'react-redux';
import { syncHistory } from 'react-router-redux';
// reducers
import reducer from '../reducers';

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
);
// top entry
import App from '../component/App';
import Admin from '../component/Admin';

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);


const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  ),
  DevTools.instrument(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
);

const store = createStore(
  reducer,
  enhancer
)
// Required for replaying actions from devtools to work
reduxRouterMiddleware.listenForReplays(store)

const routes = {
  path: '/',
  component: App,
  childRoutes: [
    {
      path: 'admin',
      component: Admin
    },
    {
      path: '*',
      component: App
    }
  ]
};

render(
  <Provider store={store}>
    <div>
      <Router history={hashHistory} routes={routes} />
      <DevTools />
    </div>
  </Provider>
  , document.getElementById('react-content')
);
