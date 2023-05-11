import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: 'center',
      margin: 50,
    },
    fondo: {
        flex: 1,
        justifyContent: 'center',
    },
    titulo: {
      fontSize: 50,
      fontWeight: 'bold',
      marginBottom: 50,
      color: "red",
    },
    botones: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
    },
    boton: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
    },
    textoBoton: {
      fontSize: 18,
    },
  });

  export default styles;