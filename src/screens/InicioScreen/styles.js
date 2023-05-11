import { StyleSheet } from "react-native";

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

export default styles;