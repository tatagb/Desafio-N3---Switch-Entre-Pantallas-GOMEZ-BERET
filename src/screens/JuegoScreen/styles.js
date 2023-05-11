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
    },
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 50,
    },
    opciones: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
    },
    boton: {
      backgroundColor: '#eee',
      padding: 10,
      borderRadius: 5,
    },
    imagen: {
      width: 50,
      height: 50,
    },
  });

  
  export default styles;