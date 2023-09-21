import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";


export default function Footer() {
  return (
    <View style={styles.footer}>
        <TouchableOpacity>
        <FontAwesome name="house" size={38} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity>
        <FontAwesome name="comment" size={38} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity>
        <FontAwesome name="location-pin" size={38} color="#FFFFFF" />
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
