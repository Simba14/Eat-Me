import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux'; //communication glue between react and redux
import { createStore } from 'redux';
import reducers from './reducers';
import Router from './navigations/Router.js'

import AddItemScreen from './screens/AddItemScreen';
import MyItemsScreen from './screens/MyItemsScreen';

const App = () => {
  return (
    // <Provider store={createStore}> // provider works with the store. translates the data in the store to be used by react
      <Router />
    // </Provider>
  );
}

export default App;