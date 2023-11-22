import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Menu from "../../../components/menu";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { useRouter } from "expo-router";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.8;
const CARD_HEIGHT = 176; // Ajuste a altura desejada
const BUTTON_WIDTH = ITEM_WIDTH * 0.9; // Ajuste a largura desejada
const BUTTON_HEIGHT = 60; // Ajuste a altura desejada
const BUTTON_TEXT_SIZE = 19; // Ajuste o tamanho do texto conforme desejado
const BUTTON_MARGIN_BOTTOM = 45;

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
        <Menu />
        <ScrollView>
          <View style={styles.centeredContainer}>
            <TouchableOpacity
              style={[styles.button, { marginBottom: BUTTON_MARGIN_BOTTOM }]}
              onPress={() => router.replace("Cuidados")}
            >
              <Text style={styles.buttonText}>Cuidados</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, { marginBottom: BUTTON_MARGIN_BOTTOM }]}
              onPress={() => router.replace("Saude-mental")}
            >
              <Text style={styles.buttonText}>Saúde Mental</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  centeredContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60, // Ajuste o valor conforme necessário para posicionar os botões no centro
  },
  button: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    backgroundColor: "#D4E8FF",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    fontSize: BUTTON_TEXT_SIZE,
    color: "#2B4A6D",
  },
});
