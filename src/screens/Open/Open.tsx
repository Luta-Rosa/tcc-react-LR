import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

function YourComponent({navigation}) {
  
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Cadastro")}
    >
      <Text style={styles.title}>LUTA ROSA</Text>
      <Text style={styles.subtitle}>JUNTAS PELA VIDA</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#9F4F63",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 11,
    fontStyle: "italic", // Adicione o estilo italic
  },
  subtitle: {
    color: "#E86687",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    fontStyle: "italic", // Adicione o estilo italic
  },
});

export default YourComponent;
