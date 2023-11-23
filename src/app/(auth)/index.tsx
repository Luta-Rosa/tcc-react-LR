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
import { useRouter } from "expo-router";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Luta Rosa</Text>
    <Text style={styles.subtitle}>Juntas pela vida</Text>
  </View>
);

function UserLogin() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [requiredFields, setRequiredFields] = useState([]);

  const router = useRouter();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = () => {
    // Verifique se os campos obrigatórios foram preenchidos
    if (name && email && password) {
      // Verifique se o nome do usuário tem a primeira letra em maiúsculo
      if (name.charAt(0) === name.charAt(0).toUpperCase()) {
        // Verifique se a senha tem pelo menos 6 caracteres
        if (password.length >= 6) {
          setName("");
          setEmail("");
          setPassword("");
          router.replace("/home/(tabs)");
        } else {
          // Exiba uma mensagem de alerta informando que a senha precisa ter pelo menos 6 caracteres
          Alert.alert(
            "Senha inválida",
            "A senha deve ter pelo menos 6 caracteres."
          );
        }
      } else {
        // Exiba uma mensagem de alerta informando que o nome do usuário deve ter a primeira letra em maiúsculo
        Alert.alert(
          "Nome de usuário inválido",
          "O nome de usuário deve começar com letra maiúscula."
        );
      }
    } else {
      // Defina os campos que não foram preenchidos
      setRequiredFields(["name", "email", "password"]);
      // Exiba uma mensagem de alerta informando que todos os campos são obrigatórios
      Alert.alert(
        "Campos obrigatórios",
        "Por favor, preencha todos os campos."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.card}>
        <TextInput
          placeholder="Nome de Usuário"
          value={name}
          onChangeText={(text) => setName(text)}
          style={[
            styles.input,
            requiredFields.includes("name") && styles.requiredField,
          ]}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={[
            styles.input,
            requiredFields.includes("email") && styles.requiredField,
          ]}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Senha"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={[
              styles.passwordInput,
              requiredFields.includes("password") && styles.requiredField,
            ]}
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
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.replace("Cadastro")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Cadastrar-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  requiredField: {
    borderColor: "red", // Cor de destaque para campos obrigatórios não preenchidos
  },
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

export default UserLogin;
