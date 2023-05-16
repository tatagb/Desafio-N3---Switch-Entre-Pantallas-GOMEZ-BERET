import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import styles from "./styles";

const fondoResultado = require('../../../assets/fondoResultado.jpg');
const ResultadoScreen = ({ route, navigation }) => {
  const {resultado} =  route.params;
  return (
    <ImageBackground source={fondoResultado} resizeMode="cover" style={styles.fondo}>
    <View style={styles.container}>
      <Text style={styles.titulo}>{resultado}</Text>
      <View style={styles.botones}>
        <TouchableOpacity style={styles.boton} onPress={()=> navigation.navigate("Inicio")}>
          <Text style={styles.textoBoton}>Reiniciar</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};


export default ResultadoScreen;
