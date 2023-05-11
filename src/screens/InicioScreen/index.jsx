import React from 'react';
import {Text, TouchableOpacity, View, ImageBackground, StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import { useFonts } from 'expo-font';
import Bebas from '../../../src/assets/fonts/BebasNeue-Regular.ttf';


const fondoInicio = require('../../../assets/fondoInicio.jpg');

const InicioScreen = ({jugar}) => {
  // Carga la fuente utilizando useFonts
  const [fontsLoaded] = useFonts({
    'Bebas': Bebas,
  });

  // Verifica si la fuente se ha cargado correctamente
  if (!fontsLoaded) {
    return null;
  }
  return (
    <ImageBackground source={fondoInicio} resizeMode="cover" style={styles.fondo}>
    <View style={styles.container}>
      <Text style={styles.titulo}>Piedra, Papel o Tijera</Text>
      <TouchableOpacity style={styles.boton} onPress={jugar}>
        <Text style={styles.botonTexto}>Jugar</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fondo: {
      flex: 1,
      justifyContent: 'center',
      width: "100%"
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 50,
    color: "white",
    fontFamily: "Bebas",
  },
  boton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default InicioScreen;
