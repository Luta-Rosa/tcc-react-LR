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
        <Image
          source={require("../../../assets/sliders/medita.png")}
          style={styles.image2}
        />

        <Text style={styles.title}>O poder da meditação</Text>
        <Text style={styles.text}>1. Reduz o Estresse;</Text>
        <Text style={styles.text}>2. Melhora do bem-estar emocional;</Text>
        <Text style={styles.text}>
          3. Aumenta a concentração e aclareza mental;
        </Text>
        <Text style={styles.text}>5. Autodescoberta e autoconhecimento;</Text>
        <Text style={styles.text}>
          6. Desenvolvimento de empatia e compaixão;
        </Text>
        <Text style={styles.text}>
          7. Controle do impulso e autorregulação emocional;
        </Text>
        <Text style={styles.text}>8. Promoção da qualidade de vida;</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {},
  image2: {
    width: "15%",
    height: "40%",
    marginRight: "70%",
  },
  cont: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  image: {
    bottom: 25,
    width: 600,
    height: 600,
    resizeMode: "contain",
  },
  card: {
    alignItems: "center",
    position: "absolute",
    backgroundColor: "white", // Cor de fundo do card com transparência
    borderRadius: 30,
    top: 600,
    padding: 16,
    width: "100%",
    height: 300,
    display: "flex",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#62B3A9",
  },
  content: {
    fontSize: 16,
  },
});

export default Mente;
