import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Navigator } from './Navigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={ width >= 768 ? 'permanent' : 'front' }
    >
      <Drawer.Screen name="Navigator" options={{title:'Inicio'}} component={Navigator} />
      <Drawer.Screen name="Article"   options={{title:'Opciones'}} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}