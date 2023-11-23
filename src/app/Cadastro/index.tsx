import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Luta Rosa</Text>
    <Text style={styles.subtitle}>Juntas pela vida</Text>
  </View>
);

function UserRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleRegistration = () => {
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      password === "" ||
      confirmPassword === "" ||
      selectedCity === ""
    ) {
      Alert.alert("Aviso", "Todos os campos são obrigatórios!");
      return;
    }
    // aqui ele ve se a senha tem 6 caracteres
    if (password.length < 6) {
      Alert.alert("Aviso", "A senha deve ter pelo menos 6 caracteres!");
      return;
    }
    // ele vai ver se o email é valido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Aviso", "Por favor, insira um e-mail válido!");
      return;
    }

    // ele ve se o nome do usuario começa com letra maiuscula
    if (!/^[A-Z].*$/.test(name)) {
      Alert.alert(
        "Aviso",
        "O nome do usuário deve começar com uma letra maiúscula!"
      );
      return;
    }

    // aqui ele ve se o confirmar senha esta igual a senha
    if (password !== confirmPassword) {
      Alert.alert("Aviso", "As senhas não coincidem!");
      return;
    }
 // aqui ele ve se os fone tem 11 caracteres
    if (phone.length !== 11) {
      Alert.alert("Aviso", "O telefone deve ter exatamente 10 dígitos!");
      return;
    }
    console.log("Cidade selecionada:", selectedCity);

    setName("");
    setEmail("");
    setPhone("");
    setSelectedCity("");
    setPassword("");
    setConfirmPassword("");

    Alert.alert("Sucesso", "Os dados foram salvos com sucesso!");

    router.replace("(auth)");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.card}>
        <TextInput
          placeholder="Nome de Usuário"
          value={name}
          onChangeText={(text) => setName(text)}
          style={[styles.input, name !== "" && styles.validInput]}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={[styles.input, email !== "" && styles.validInput]}
        />
        <TextInput
          placeholder="Telefone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          keyboardType="phone-pad"
          style={[styles.input, phone !== "" && styles.validInput]}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Senha"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={[styles.passwordInput, password !== "" && styles.validInput]}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <FontAwesome5
              name={isPasswordVisible ? "eye-slash" : "eye"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Confirmar Senha"
            secureTextEntry={!isConfirmPasswordVisible}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            style={[
              styles.passwordInput,
              confirmPassword !== "" && styles.validInput,
            ]}
          />
          <TouchableOpacity
            onPress={toggleConfirmPasswordVisibility}
            style={styles.eyeIcon}
          >
            <FontAwesome5
              name={isConfirmPasswordVisible ? "eye-slash" : "eye"}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        <Picker
          selectedValue={selectedCity}
          onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
          style={[styles.input, selectedCity !== "" && styles.validInput]}
        >
          <Picker.Item label="Selecione a Cidade" value="" />
          <Picker.Item label="Lençóis Paulista" value="Lençóis Paulista" />
          <Picker.Item label="Bauru" value="Bauru" />
          <Picker.Item label="Jaú" value="Jaú" />
        </Picker>
      </View>
      <TouchableOpacity onPress={handleRegistration} style={styles.button}>
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E86687",
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  card: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  validInput: {
    borderColor: "green", // cor do campo quando preenche
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    padding: 10,
  },
  button: {
    backgroundColor: "#E86687",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
});

export default UserRegistration;
