import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

export default function Cuidados() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.cont}>
        <Image source={require("../../../assets/outros/Utero.png")} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFD4DF",
  },
  cont: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
