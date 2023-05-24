import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const fondoJuego = require('../../../assets/fondoInicio.jpg')

const InicioScreen = () => {
  return (
    <ImageBackground source={fondoJuego} resizeMode="cover" style={styles.fondo}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.texto}>INICIO</Text>
    </View>
    </ImageBackground>
  );
};

export default InicioScreen;

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