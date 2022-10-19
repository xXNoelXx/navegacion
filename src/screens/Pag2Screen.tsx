import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

export const Pag2Screen = () => {

const navigator = useNavigation();


useEffect (() => {
  navigator.setOptions({
    title: 'Inicio',
    headerBackTitle: 'Atras',
  })
}, [])
  return (
    <View style={ styles.globalMargin }>
        <Text style={styles.title}>Pag2Screen</Text>

        <Button 
              title = "Ir a la pagina siguiente"
              onPress= { () => navigator.navigate('Pag3Screen')}
            />
    </View>
  )
}
