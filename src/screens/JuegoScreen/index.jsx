import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
import styles from "./styles"

const fondoJuego = require('../../../assets/fondoJuego.jpg');
const JuegoScreen = ({ mostrarResultado, navigation }) => {
  const [jugadaUsuario, setJugadaUsuario] = useState('');

  const seleccionarJugada = (jugada) => {
    setJugadaUsuario(jugada);
    const jugadaMaquina = generarJugadaMaquina();
    const resultado = calcularResultado(jugada, jugadaMaquina);
    navigation.navigate("Resultado", { resultado: resultado, mostrarResultado: mostrarResultado  });
    
  };

  const generarJugadaMaquina = () => {
    const opciones = ['piedra', 'papel', 'tijera'];
    const indice = Math.floor(Math.random() * 3);
    return opciones[indice];
  };

  const calcularResultado = (jugadaUsuario, jugadaMaquina) => {
    if (jugadaUsuario === 'piedra') {
      if (jugadaMaquina === 'piedra') {
        return 'Empate';
      } else if (jugadaMaquina === 'papel') {
        return 'Perdiste';
      } else {
        return 'Ganaste';
      }
    } else if (jugadaUsuario === 'papel') {
      if (jugadaMaquina === 'piedra') {
        return 'Ganaste';
      } else if (jugadaMaquina === 'papel') {
        return 'Empate';
      } else {
        return 'Perdiste';
      }
    } else {
      if (jugadaMaquina === 'piedra') {
        return 'Perdiste';
      } else if (jugadaMaquina === 'papel') {
        return 'Ganaste';
      } else {
        return 'Empate';
      }
    }
  };

  return (
    <ImageBackground source={fondoJuego} resizeMode="cover" style={styles.fondo}>
    <View style={styles.container}>
      <Text style={styles.titulo}>Elige tu jugada:</Text>
      <View style={styles.opciones}>
        <TouchableOpacity
          style={styles.boton}
          onPress= {()=> seleccionarJugada('piedra')}>
          <Image source={require("../../../assets/rock.png")} style={styles.imagen} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => seleccionarJugada('papel')}>
          <Image source={require("../../../assets/paper.png")} style={styles.imagen} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.boton}
          onPress={() => seleccionarJugada('tijera')}>
          <Image source={require("../../../assets/scissors.png")} style={styles.imagen} />
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};


export default JuegoScreen;
