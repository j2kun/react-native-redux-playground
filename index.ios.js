/**
 * @flow
 */

import React from 'react'
import { Component } from 'react';

import { AppRegistry } from 'react-native';

import { applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './js/reducers'
import AppContainer from './js/containers/AppContainer.js'
import setupEnv from './js/env.js'

setupEnv();

function configureStore(initialState) {
  const middlewares = [thunkMiddleware];
  if (process.env.NODE_ENV === 'development') {
    const createLogger = require('redux-logger');
    const logger = createLogger();
    middlewares.push(logger);
  }

  let appliedMiddleware = applyMiddleware(...middlewares);
  return createStore(reducer, initialState, appliedMiddleware);
}

const store = configureStore({});  // initial state goes here (or cache)


const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)

AppRegistry.registerComponent('todo', () => App);
