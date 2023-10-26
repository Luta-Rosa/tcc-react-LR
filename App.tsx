import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import Header from "./src/components/header";
import Footer from "./src/components/footer";
import About from "./src/screens/About/About";
import Cuidados from "./src/screens/Cuidados/Cuidados";
import Editar from "./src/screens/Editar/Editar";
import Guia from "./src/screens/Guia/Guia";
import Home from "./src/screens/Home/home";
import Notificacao from "./src/screens/Notification/Notificacao";
import Open from "./src/screens/Open/Open";
import Priv from "./src/screens/Privacidade/Priv";
import Mente from "./src/screens/Saude-mental/Mente";
import Settings from "./src/screens/Settings/Settings";
import User from "./src/screens/User/User";
import Chat from "./src/screens/Chat/chat";
import Cadastro from './src/screens/Cadastro/Cadastro';

export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar />
      {/* { <Header /> } */}
      <View style={style.content}>
        <Cadastro/>
      </View>
      {/* <Footer /> */}
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
