import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import React from 'react';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
