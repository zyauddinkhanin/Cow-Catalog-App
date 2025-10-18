import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { navigationRef } from './src/navigation';

const App = () => (
  <Provider store={store}>
    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
