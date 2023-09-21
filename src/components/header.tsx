import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function Header() {
  return (
    <View style={styles.topo}>
      <TouchableOpacity>
        <FontAwesome name="bars" size={38} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity>
        <FontAwesome name="user-circle" size={38} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    backgroundColor: "#E86687",
    height: 78,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
});
