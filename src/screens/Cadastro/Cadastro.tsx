import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import { NavigationProp, useNavigation } from "@react-navigation/native";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Luta Rosa</Text>
    <Text style={styles.subtitle}>Juntas pela vida</Text>
  </View>
);

const UserRegistration = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleRegistration = () => {
    // Implemente a lógica para processar o cadastro do usuário aqui
    // Por exemplo, você pode fazer uma solicitação para um servidor ou armazenar os dados localmente.

    console.log('Cidade selecionada:', selectedCity);

    // Limpe os campos após o registro
    setName('');
    setEmail('');
    setSelectedCity('');
    setPassword('');
    setConfirmPassword('');

    // Exiba uma mensagem de sucesso ou redirecione o usuário para outra tela
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.card}>
        <TextInput
          placeholder="Nome de Usuário"
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
      
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Senha"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.passwordInput}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            <FontAwesome5
              name={isPasswordVisible ? 'eye-slash' : 'eye'}
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
            onChangeText={text => setConfirmPassword(text)}
            style={styles.passwordInput}
          />
          <TouchableOpacity
            onPress={toggleConfirmPasswordVisibility}
            style={styles.eyeIcon}
          >
            <FontAwesome5
              name={isConfirmPasswordVisible ? 'eye-slash' : 'eye'}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        <Picker
          selectedValue={selectedCity}
          onValueChange={(itemValue, itemIndex) => setSelectedCity(itemValue)}
          style={styles.input}
        >
          <Picker.Item label="Selecione a Cidade" value="" />
          <Picker.Item label="Lençóis Paulista" value="Lençóis Paulista" />
          <Picker.Item label="Bauru" value="Bauru" />
          <Picker.Item label="Jaú" value="Jaú" />
    
        </Picker>
      </View>
      <TouchableOpacity onPress={handleRegistration} style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegistration} style={styles.button}>
          <Text style={styles.buttonText}>Já tenho conta</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E86687',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  card: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    shadowColor: '#000',
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
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
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
    backgroundColor: '#E86687',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize:17
  },
});

export default UserRegistration;