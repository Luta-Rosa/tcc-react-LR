import React from "react";
import { View, Text, StyleSheet } from "react-native";

function GuiaDeUsoPage() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Navegação na Página Inicial:</Text>
      </View>


     
      <InformationText
        title="Procure uma rede de Apoio:"
        description="Converse com outros usuários e compartilhe suas experiências."
      />
      <InformationText
        title="Informações sobre Câncer de Mama e de Colo de Útero:"
        description="Acesse artigos, vídeos e informações atualizadas sobre câncer de mama e de colo de útero"
      />
      
      <InformationText
        title="Calendário de Exames:"
        description="Mantenha um registro de suas datas de exames e lembretes."
      />
      
    </View>
  );
}

function InformationText({ title, description }) {
  return (
    <View style={styles.information}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFD4DF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  information: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});

export default GuiaDeUsoPage;
