import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import InicioScreen from '../screens/InicioScreen';
import JuegoScreen from '../screens/JuegoScreen';
import EstadisticasScreen from '../screens/EstadisticasScreen';
import { View } from 'react-native';
import Ionicons from "@expo/vector-icons/Ionicons"

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Inicio"
         component={InicioScreen}
         options={{
          tabBarIcon: () => (
            <View>
              <Ionicons name="md-home" size={30} color="black" />
            </View>
          )
         }} />
        <Tab.Screen name="Juego" 
        component={JuegoScreen}
        options={{
          tabBarIcon: () => (
            <View>
              <Ionicons name="game-controller" size={30} color="black" />
            </View>
          )
         }} />
        <Tab.Screen name="Estadísticas"
         component={EstadisticasScreen}
         options={{
          tabBarIcon: () => (
            <View>
              <Ionicons name="analytics-outline" size={30} color="black" />
            </View>
          )
         }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;