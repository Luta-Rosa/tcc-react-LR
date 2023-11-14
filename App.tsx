import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import Header from "./src/components/header"; //feita
import Footer from "./src/components/footer"; //feita
import About from "./src/screens/About/About"; //feita
import Editar from "./src/screens/Editar/Editar"; //feita
import Notificacao from "./src/screens/Notification/Notificacao"; //feita
import Priv from "./src/screens/Privacidade/Priv"; //feita
import Settings from "./src/screens/Settings/Settings"; //feita
import User from "./src/screens/User/User"; //feita
import Chat from "./src/screens/Chat/chat"; //feita
import Cadastro from "./src/screens/Cadastro/Cadastro"; //feita
import UserLogin from "./src/screens/Login/login"; //feita // fiz a paginação dela
import Home from "./src/screens/Home/home"; //ARI E GABI
import Open from "./src/screens/Open/Open"; //feita (tentar mudar a fonte)
import Guia from "./src/screens/Guia/Guia"; //ANA
import Cuidados from "./src/screens/Cuidados/Cuidados"; //todas
import Mente from "./src/screens/Saude-mental/Mente"; //todas
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Cadastro">
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={UserLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cuidados"
          component={Cuidados}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Saude-mental"
          component={Mente}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
   
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
