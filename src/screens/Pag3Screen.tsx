import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps <any, any>{};

export const Pag3Screen = ({navigation} : Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pag3Screen</Text>

        <Button 
              title = "Regresar"
              onPress= { () => navigation.pop()}
        />

        <Button 
              title = "Ir a la Pagina de Inicio"
              onPress= { () => navigation.popToTop()}
        />

    </View>
  )
}
