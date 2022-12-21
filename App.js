import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import RouteNav from './src/nav/RouteHandler';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
const App = () => {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PersistGate persistor={persistor}>
          <RouteNav />
        </PersistGate>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
