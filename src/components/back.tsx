import React from "react";
import { View, StyleSheet, Text, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome5';

interface Props {
    cor: string,
    seta: string,
}

export default function Back({cor, seta}: Props){
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: `${cor}`
        },
    
        voltar: {
            flexDirection: "row",
        },
      });

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.voltar} >
                <MaterialCommunityIcons name="arrow-left" size={30} />
            </TouchableOpacity>
        </View>
    )
}

