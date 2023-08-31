import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import Styles from "./styles";
import { List, UserCircle } from "phosphor-react-native";
import Header from "../header";

export default function Home() {
  return (
    <View style={Styles.container}>
      <Header/>

      <View style={Styles.body}>
        <Text>bbbbb</Text>
      </View>

      <View style={Styles.bottom}>
        <Text>ccccc</Text>
      </View>
    </View>
  );
}
