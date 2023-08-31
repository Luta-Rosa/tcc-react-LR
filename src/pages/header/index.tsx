import React from "react";
import { View, TouchableOpacity } from "react-native";
import { List, UserCircle } from "phosphor-react-native";
import Styles from "./styles";

export default function Header() {
    return(
        <View style={Styles.container}>
        <View style={Styles.left}>
        <TouchableOpacity style={Styles.linha}>
        <List size={32} />
        </TouchableOpacity>
        </View>

        <View style={Styles.right}>
        <TouchableOpacity style={Styles.linha}>
        <UserCircle size={32} />
        </TouchableOpacity>
      </View>
      </View>
    )
}