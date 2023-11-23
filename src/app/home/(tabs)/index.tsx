import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import Menu from "../../../components/menu";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.8;
const CARD_HEIGHT = 176;
const BUTTON_WIDTH = ITEM_WIDTH * 0.9;
const BUTTON_HEIGHT = 60;
const BUTTON_TEXT_SIZE = 19;
const BUTTON_MARGIN_BOTTOM = 10;

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <ScrollView>
        <View style={styles.centralizar}>
          <Image
            source={require("../../../../assets/sliders/foto3.png")}
            style={styles.image}
          />
        </View>

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

          <View style={styles.centralizar2}>
            <Image
              source={require("../../../../assets/outros/lutarosa.png")}
              style={styles.image2}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    marginTop: -80,
  },
  button: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#D4E8FF",
    marginVertical: BUTTON_MARGIN_BOTTOM,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: BUTTON_TEXT_SIZE,
    color: "#2B4A6D",
  },
  image: {
    width: 350,
    height: 400,
    resizeMode: "contain",
  },
  centralizar: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: -75,
  },

  centralizar2: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
  },

  image2: {
    width: 190,
    height: 90,
  },
});
