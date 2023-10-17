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

  // Função para manipular o envio dos dados do usuário
  const handleUserSubmit = () => {
    // Aqui você pode adicionar a lógica para enviar os dados do usuário para o servidor ou armazená-los localmente.
    // Certifique-se de validar e tratar os dados adequadamente.

    Alert.alert(
      "Dados do usuário editados",
      `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nLocalização: ${location}`
    );
  };

  // Função para carregar uma imagem do usuário (pode ser substituída pela funcionalidade de escolher imagens da galeria)
  const handleImagePick = () => {
    // Implemente a funcionalidade para carregar uma imagem do usuário aqui.
    // Pode ser feita através de bibliotecas como react-native-image-picker ou react-native-camera.
    // Neste exemplo, estamos apenas mostrando um alerta.
    Alert.alert(
      "Carregar imagem",
      "Implemente a funcionalidade para carregar uma imagem do usuário."
    );
  };

  return (
    <View style={styles.container}>
      <Back cor="#496F99" seta="#FFFFFF" />
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
            placeholder="Digite seu nome"
            
          />
        </View>

        <View style={styles.inputDiv}>
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="user@gmail.com"
          />
        </View>

        <View style={styles.inputDiv}>
          <Text style={styles.label}>Telefone:</Text>
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={(text) => setPhone(text)}
            placeholder="+55 (00) 00000-0000"
          />
        </View>

        <View style={styles.inputDiv}>
          <Text style={styles.label}>Localização:</Text>
          <TextInput
            style={styles.input}
            value={location}
            onChangeText={(text) => setLocation(text)}
            placeholder="Digite sua localização"
          />
        </View>
      </View>

      {/* PRECISA ESTILIZAR O BOTAO */}
      <Button title="Salvar" onPress={handleUserSubmit} />

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
    backgroundColor: "#D4E8FF",
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
    backgroundColor: "#496F99",
    height: 161,
    width: "auto",
  },

});

export default UserScreen;
