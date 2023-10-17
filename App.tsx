import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import Home from "./src/screens/Home/home";
import Priv from "./src/screens/Privacidade/Priv";
import Header from "./src/components/header";
import Footer from "./src/components/footer";
import React from "react";

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar />
      <Header />
      <ScrollView style={style.content}>
        <Priv />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
