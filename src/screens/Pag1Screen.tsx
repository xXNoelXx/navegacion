import React, { useEffect } from 'react'
import { DrawerScreenProps } from '@react-navigation/drawer';
//import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, View,  TouchableOpacity} from 'react-native';
import { styles } from '../theme/appTheme';

//interface Props extends StackScreenProps <any, any>{};
interface Props extends DrawerScreenProps <any, any>{};

export const Pag1Screen = ( {navigation} : Props) => {

  useEffect(() => {
    
    navigation.setOptions({
      headerLeft:() => (
        <Button 
          title="Menu"
          onPress={ () => navigation.toggleDrawer() }
        />
      )
    })

  }, [])
  

  return (
    <View style={ styles.globalMargin }>
        <Text style={styles.title}>Pag1Screen</Text>

            <Button 
              title = "Ir a la pagina siguiente"
              onPress= { () => navigation.navigate('Pag2Screen')}
            />

        <Text>Navegando con Argumentos</Text>

        <View style={{flexDirection:'row'}}>
        <TouchableOpacity
          style={ {
            ...styles.boton,
            backgroundColor: 'orange'
          } }
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            Nombre: 'Noel',
          })}
        >
          <Text style={styles.botonTexto}>Noel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ styles.boton }
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            Nombre: 'Tacho',
          })}
        >
          <Text style={styles.botonTexto}>Tacho</Text>
        </TouchableOpacity>

        </View>
    </View>
  )
}
