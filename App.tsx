import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import Home from "./src/screens/Home/home";
import Cadastro from './src/screens/Cadastro/Cadastro';
import Header from "./src/components/header";
import Footer from "./src/components/footer";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <ScrollView style={styles.content}>
        <Cadastro />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
