import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Pag1Screen } from '../screens/Pag1Screen';
import { Pag2Screen } from '../screens/Pag2Screen';
import { Pag3Screen } from '../screens/Pag3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

export type RootStackParams={
  Pag1Screen: undefined,
  Pag2Screen: undefined,
  Pag3Screen: undefined,
  PersonaScreen: {id: number, nombre:string},  
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          elevation: 0
        },
        cardStyle:{
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="Pag1Screen" options={{ title: "Pagina 1" }} component={Pag1Screen} />
      <Stack.Screen name="Pag2Screen" options={{ title: "Pagina 2" }} component={Pag2Screen} />
      <Stack.Screen name="Pag3Screen" options={{ title: "Pagina 3" }} component={Pag3Screen} />
      <Stack.Screen name="PersonaScreen" options={{ title: "PersonaScreen" }} component={PersonaScreen} />
    </Stack.Navigator>
  );
}