import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import Styles from "./styles";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <View style={Styles.container}>
      <View style={Styles.top}>
        <Text>aaaa</Text>
      </View>

      <View style={Styles.body}>
        <Text>bbbbb</Text>
      </View>

      <View style={Styles.bottom}>
        <Text>ccccc</Text>
      </View>
    </View>
  );
}
