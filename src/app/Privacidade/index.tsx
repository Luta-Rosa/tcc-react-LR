import React from "react";
import { View, Text, StyleSheet, ScrollView, Linking } from "react-native";

const PrivacyScreen = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.summary}>
        Bem-vindo à nossa política de privacidade. Abaixo, fornecemos um resumo
        das nossas práticas de privacidade.
      </Text>

      <Text style={styles.sectionHeading}>1. Coleta de Dados</Text>
      <Text style={styles.content}>
        Coletamos dados pessoais para melhorar sua experiência no aplicativo e
        para fins de análise. Você pode ler mais detalhes em nossa{" "}
        <Text style={styles.link} onPress={() => {}}>
          política de privacidade completa
        </Text>
        .
      </Text>

      <Text style={styles.sectionHeading}>2. Consentimento</Text>
      <Text style={styles.content}>
        Ao usar nosso aplicativo, você concorda com nossa coleta e uso de dados
        de acordo com nossa política de privacidade.
      </Text>

      <Text style={styles.sectionHeading}>3. Informações de Contato</Text>
      <Text style={styles.content}>
        Se você tiver alguma dúvida ou preocupação sobre sua privacidade, entre
        em contato conosco em contato@seuapp.com.
      </Text>

      <Text style={styles.updateInfo}>
        Última atualização: 17 de Outubro de 2023
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
    backgroundColor: "white",
  },
  summary: {
    fontSize: 16,
    marginTop: 10,
  },
  sectionHeading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  content: {
    fontSize: 16,
    marginTop: 10,
  },
  link: {
    color: "#E86687",
    textDecorationLine: "underline",
  },
  updateInfo: {
    fontSize: 12,
    marginTop: 200,
    color: "gray",
    textAlign: "center",
  },
});

export default PrivacyScreen;
