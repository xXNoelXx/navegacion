import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerComponentScrollView, DrawerContentOptions} from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Navigator } from './Navigator';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();
const SettingStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Stack.Navigator>
  )
}

export const Menu = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={ width >= 768 ? 'permanent' : 'front' }
      drawerContent={ (props) => <MenuInterno { ...props }/> }
    >
      <Drawer.Screen name="Navigator" component={Navigator} />
      <Drawer.Screen name="SettingsScreen"   component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( {navigation}: DrawerContentComponentProps <DrawerContentOptions> ) => {

  return (
    <DrawerComponentScrollView>
      <View style={styles.avatarContainer}>
        <Image
            source={{
              uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif'
            }}
            style={styles.avatar}
        />
      </View>

        <View style={styles.menuContainer}>
          <TouchableOpacity 
          style={ styles.menuBoton }
          onPress={()=>navigation.navigate('StackNavigator')}
          >
              <Text style={ styles.menuText }>Inicio</Text>
          </TouchableOpacity>

          <TouchableOpacity 
          style={ styles.menuBoton }
          onPress={()=>navigation.navigate('SettingsScreen')}
          >
              <Text style={ styles.menuText }>Ajustes</Text>
          </TouchableOpacity>
        </View>

    </DrawerComponentScrollView>
  );
}