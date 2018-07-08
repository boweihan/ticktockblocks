import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Store from './app/lib/configureStore';
import Home from './app/components/pages/Home';

const App = () => (
  <Provider store={Store.store}>
    <PersistGate loading={null} persistor={Store.persistor}>
      <Home />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent('App', () => App);

export default App;
