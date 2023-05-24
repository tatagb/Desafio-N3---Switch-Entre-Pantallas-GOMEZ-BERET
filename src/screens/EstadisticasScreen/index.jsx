import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const fondoEstadisticas = require('../../../assets/estadisticas.jpg')

const EstadisticasScreen = () => {
  return (
    <ImageBackground source={fondoEstadisticas} resizeMode="cover" style={styles.fondo}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.texto}>ESTADÍSTICAS DEL JUEGO</Text>
    </View>
    </ImageBackground>
  );
};

export default EstadisticasScreen;

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    justifyContent: 'center',
    width: "100%"
  },
  texto: {
    justifyContent: "center",
    color:"red",
    fontSize: 50
  }
  })