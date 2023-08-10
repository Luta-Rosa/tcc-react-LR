import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <ImageBackground
          style={styles.img}
          source={require("./assets/favicon.png")}
        />
      </View>

      <View style={styles.body}>
        <Text>bbbbbbbbbbbbbb</Text>
      </View>

      <View style={styles.bottom}>
        <Text>ccccccccc</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  //---------------------------------------------------
  top: {
    flex: 0.5,
    backgroundColor: "#fff",
    flexDirection: "row-reverse",
    marginTop: "5%",
    marginLeft: "5%",
  },

  botao: {
    backgroundColor: "#fff",
  },

  img: {
    height: 50,
    width: 50,
  },

  //---------------------------------------------------

  body: {
    flex: 5,
    backgroundColor: "#eb4034",
  },

  //---------------------------------------------------

  bottom: {
    flex: 0.5,
    backgroundColor: "#d634eb",
  },
});
