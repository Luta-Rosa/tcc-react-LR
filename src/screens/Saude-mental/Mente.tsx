import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const Mente: React.FC = () => {
  return (
    <View style={styles.cont}>
      <Image
        source={require("../../../assets/sliders/mente.png")}
        style={styles.image}
      />
      <View style={styles.card}>
        <Text style={styles.title}>O poder da meditação</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    bottom: 25,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  card: {
    alignItems: "center",
    position: "absolute",
    backgroundColor: "white", // Cor de fundo do card com transparência
    borderRadius: 30,
    bottom: -80,
    padding: 16,
    width: "100%", 
    height: "50%"
  },
  
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#62B3A9"
  },
  content: {
    fontSize: 16,
  },
});

export default Mente;

