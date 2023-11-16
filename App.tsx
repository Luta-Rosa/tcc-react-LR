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
import Cuidados from "./src/screens/Cuidados/Cuidados"; //todas
import Mente from "./src/screens/Saude-mental/Mente"; //todas
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SettingsScreen from './src/screens/Settings/Settings';
import UserScreen from './src/screens/Editar/Editar';
import YourComponent from './src/screens/Open/Open';

import GuiaDeUsoPage from "./src/screens/Guia/Guia";

const Stack = createStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Open: undefined;
      Cadastro: undefined;
      Login: undefined;
      Home: undefined;
      Cuidados: undefined;
      Mente: undefined;
      Config: undefined;
      User: undefined;
      Guia: undefined;
      Footer: undefined;
    }
  }
}

export default function App(){
  return (
    
    <NavigationContainer>
            <StatusBar />

      
      <Stack.Navigator initialRouteName="Open">
      <Stack.Screen
          name="Open"
          component={YourComponent}
          options={{ headerShown: false }}
        />
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
          <Stack.Screen
          name="Config"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
                  <Stack.Screen
          name="User"
          component={UserScreen}
          options={{ headerShown: false }}
        />
                          <Stack.Screen
          name="Guia"
          component={GuiaDeUsoPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <Footer />
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
