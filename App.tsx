import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { Navigator } from './src/navigator/Navigator';
//import { MenuLateral } from './src/navigator/MenuLateral';
import { Menu } from './src/navigator/Menu';

const App = () => {
  return (
    <NavigationContainer>
      {/*<Navigator />*/}
      
      {/*<MenuLateral />*/}

      <Menu />

    </NavigationContainer>
  )
}

export default App
