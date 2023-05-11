import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import InicioScreen from "./src/screens/InicioScreen";
import JuegoScreen from './src/screens/JuegoScreen';
import ResultadoScreen from './src/screens/ResultadoScreen';


export default function App() {

  
  const [estadoJuego, setEstadoJuego] = useState('inicio');
  const [resultado, setResultado] = useState('');

  const jugar = () => {
    setEstadoJuego('juego');
  };

  const mostrarResultado = (res) => {
    setResultado(res);
    setEstadoJuego('resultado');
  };

  const reiniciarJuego = () => {
    setEstadoJuego('inicio');
  };

  const volverInicio = () => {
    setEstadoJuego('inicio');
    setResultado('');
  };

  return (
    <View style={styles.container}>
      {estadoJuego === 'inicio' && <InicioScreen jugar={jugar} />}
      {estadoJuego === 'juego' && (
        <JuegoScreen mostrarResultado={mostrarResultado} />
      )}
      {estadoJuego === 'resultado' && (
        <ResultadoScreen
          resultado={resultado}
          reiniciarJuego={reiniciarJuego}
          volverInicio={volverInicio}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
