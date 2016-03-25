# react-antd-redux-router-starter

This project is designed to help those who use antd to develop a website(or web app). Maybe also need to use redux, router and so on.

[![NPM version](https://img.shields.io/npm/v/antd-init.svg?style=flat)](https://npmjs.org/package/antd-init)

[Ant Design](https://github.com/ant-design/ant-design)

## Screenshot

![Screenshot](https://github.com/yuzhouisme/react-antd-redux-router-starter/blob/master/example/example-index.png)

## Getting started

1.Clone this repo.

2.Modify something in package.json like name to "your-project-name".

3.Run npm install.

```bash
$ npm install
```

4.Run development server.

```bash
$ npm run dev
```

5.Open your browser to http://localhost:8001/

## Explanation (I think it's important to beginner)

1.To know the directory structure.

```
$ tree . -L 2
.
├── README.md
├── index.html
├── node_modules
├── package.json
├── src
│   ├── actions // for redux action
│   ├── common
│   ├── component // dumb component
│   ├── constants // for constants
│   ├── container // smart component
│   ├── data
│   ├── entry // root entrance, a lot of config in it
│   ├── reducers // for redux reducer
│   └── store
├── static
│   ├── assets
│   ├── css
│   ├── img
│   └── js
└── webpack.config.js // add config brfs
```

2.The whole entrance is index.jsx. I try to describe clearly why import that.

```
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
```

3.Redux, read doc more and clear the connection between actions-reducers-container-component. 

More Redux: 
* In English, http://redux.js.org 
* In Chinese, https://github.com/sorrycc/redux-in-chinese

## Install environment and test (important)

1.Make sure you have install nodejs.

```bash
$ npm -v
3.5.2
```

2.Then install antd-init in the global.

```bash
$ npm i antd-init -g
...
$ antd-init -v
0.6.3
```

3.New your project.

```bash
$ mkdir <your-project-name> && cd <your-project-name>
$ antd-init
...
```

4.Run development server.

```bash
$ npm run dev
```

More usage: http://ant-tool.github.io/

## Inspiration

Thanks to [ant-design group](https://github.com/ant-design) for providing the UI components for developers. And I began to learn react in December last year, in work I am a mobile application developer as android/iOS platform, so I am a freshman. I sent many emails to yiming he who in ant-design group, thanks to him once again.

## Write in react and antd I used

My Blog [yuzhouisme.com](http://yuzhouisme.com/).

Tome, help students to remember words [tome.yuzhouisme.com](http://tome.yuzhouisme.com).

