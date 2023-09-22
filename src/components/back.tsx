import React from "react";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome5';

export default function Back(){
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.voltar}>
                <MaterialCommunityIcons name="arrow-left" size={38} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },

    voltar: {
        height: 78,
        flexDirection: "row",
    },
  });