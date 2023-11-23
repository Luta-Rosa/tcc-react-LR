import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header() {
  return (
    <View style={styles.topo}>
      <TouchableOpacity>
        <MaterialCommunityIcons name="menu" size={38} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity>
        <MaterialCommunityIcons name="account-circle" size={38} color="#FFFFFF" />
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
