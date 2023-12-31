import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Back from "../../components/back";

const UserScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [userImage, setUserImage] = useState(null);

  const handleImagePick = () => {
    Alert.alert("Carregar imagem");
  };

  return (
    <View style={styles.container}>
      <View style={styles.backgroundImg}>
        <TouchableOpacity style={styles.imagePicker} onPress={handleImagePick}>
          <View style={styles.imageContainer}>
            {userImage ? (
              <Image source={{ uri: userImage }} />
            ) : (
              <Text style={styles.imagePickerText}>
                Selecionar Imagem do Usuário
              </Text>
            )}
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <View style={styles.inputDiv}>
          <Text style={styles.label}>Nome:</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder=""
          />
        </View>

        <View style={styles.inputDiv}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder=""
          />
        </View>

        <View style={styles.inputDiv}>
          <Text style={styles.label}>Telefone:</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={(text) => setPhone(text)}
            placeholder=""
          />
        </View>

        <View style={styles.inputDiv}>
          <Text style={styles.label}>Localização:</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={(text) => setLocation(text)}
            placeholder=""
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    height: 36,
    borderRadius: 10,
    backgroundColor: "white",
    marginBottom: 10,
    paddingLeft: 10,
  },
  imagePicker: {
    alignItems: "center",
    marginTop: 20,
  },
  imageContainer: {
    backgroundColor: "#D4E8FF",
    width: 190,
    height: 190,
    borderRadius: 100,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imagePickerText: {
    fontSize: 14,
    color: "gray",
    textDecorationLine: "underline",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#D9FFE5",
    width: 360,
    height: 320,
    borderRadius: 20,
    marginBottom: 40,
    marginTop: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "4%",
  },
  inputDiv: {
    width: "90%",
  },
  backgroundImg: {
    backgroundColor: "#85CC9B",
    height: 161,
    width: "auto",
  },
});

export default UserScreen;
