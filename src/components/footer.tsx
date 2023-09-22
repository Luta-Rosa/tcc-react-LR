import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


export default function Footer() {
  return (
    <View style={styles.footer}>
        <TouchableOpacity>
        <MaterialCommunityIcons name="home" size={38} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity>
        <MaterialCommunityIcons name="chat" size={38} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity>
        <MaterialCommunityIcons name="map-marker" size={38} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#E86687",
    height: 78,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
});
