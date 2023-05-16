import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InicioScreen from '../screens/InicioScreen'
import JuegoScreen from '../screens/JuegoScreen'
import ResultadoScreen from '../screens/ResultadoScreen'

const AppNavigator = () => {

    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Inicio' component={InicioScreen}/>
            <Stack.Screen name='Juego' component={JuegoScreen}/>
            <Stack.Screen name='Resultado' component={ResultadoScreen}/>
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigator;

const styles = StyleSheet.create ({})