import React from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import Title from "./src/pages/home";

import Home from "./src/pages/home";

export default function App() {
  return (
    <SafeAreaView>
      <View style={{flex: 1}}>
      <StatusBar/>
      <Home />
      </View>
    </SafeAreaView>
  )
}
