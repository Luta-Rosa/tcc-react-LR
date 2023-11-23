import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { devs } from "./mocks";

function About() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.texto}>
          "Luta Rosa - Juntas Pela Vida" é um projeto que visa conscientizar as
          mulheres sobre a importância da detecção precoce do câncer de mama e
          colo de útero.{" "}
        </Text>
      </View>

      {devs.map((dev) => (
        <View key={dev.id} style={styles.devs}>
          <Image source={dev.url} style={styles.imagem} />
          <Text style={styles.nome}>{dev.name}</Text>
        </View>
      ))}
      <View style={styles.centralizar}>
        <Image
          source={require("../../../assets/outros/logo.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "white",
  },
  card: {
    width: 350,
    height: 130,
    backgroundColor: "#FFD4DF",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 2,
    elevation: 5,
    marginTop: 10,
  },
  texto: {
    fontSize: 16,
    color: "black",
    alignSelf: "center",
    textAlign: "justify",
  },
  titulo: {
    fontSize: 17,
    fontWeight: "bold",
  },
  devs: {
    width: 350,
    height: 80,
    display: "flex",
    backgroundColor: "#D4E8FF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 3 },
    shadowRadius: 2,
    elevation: 5,
    marginTop: 20,
  },
  imagem: {
    width: 65,
    height: 80,
  },
  nome: {
    marginHorizontal: 80,
    marginVertical: -47,
    fontSize: 16,
  },
  logo: {
    width: 100,
    height: 100,
  },
  centralizar: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
});

export default About;
