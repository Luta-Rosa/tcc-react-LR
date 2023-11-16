import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"


export default function Footer({ navigation }: any) {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={navigation.navigate('Home')}>
        <MaterialCommunityIcons name="home" size={38} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity onPress={navigation.navigate('Chat')}>
        <MaterialCommunityIcons name="chat" size={38} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity onPress={navigation.navigate('Localizacao')}>
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
