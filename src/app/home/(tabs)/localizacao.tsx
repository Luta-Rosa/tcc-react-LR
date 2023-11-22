import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

function Localizacao() {
  const cardsData = [
    {
      title: "Santa Marcelina Saúde",
      imageSource: require("../../../../assets/outros/hosp1.png"),
      description: "Rua Santa Marcelina, 177 | Itaquera | São Paulo | SP",
      icon: "map-marker-alt",
    },
    {
      title: "Hospital Amaral Carvalho",
      imageSource: require("../../../../assets/outros/002.jpg"),
      description: "Rua Dona Silvéria,150 | Chácara Braz Miraglia | Jaú | SP",
      icon: "map-marker-alt",
    },
    {
      title: "Card 3",
      imageSource: require("../../../../assets/outros/3.png"),
      description: "Av.Albert Einstein 627/701 | Morumbi | São Paulo | SP",
      icon: "map-marker-alt",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Hospitais Próximos</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cardsData.map((card, index) => (
          <View key={index} style={styles.card}>
            <Image style={styles.cardImage} source={card.imageSource} />
            <Text style={styles.cardTitle}>{card.title}</Text>
            <View style={styles.descriptionContainer}>
              <FontAwesome5 name={card.icon} size={16} color="#4682B4" style={styles.icon} />
              <Text style={styles.cardDescription}>{card.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D4E8FF",
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
    backgroundColor: "#4682B4",
    color: "#FFF",
  },

  scrollContainer: {
    paddingHorizontal: 16, // Adicionado espaçamento horizontal
    paddingTop: 20,
  },

  card: {
    width: "100%", // Alterado para ocupar 100% da largura disponível
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#FFF", // Adicionado um fundo branco
    elevation: 3, // Adiciona sombra no Android
    overflow: "hidden",
  },

  cardImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10, // Adicionado espaçamento vertical
    color: "black",
    textAlign: "center",
  },

  descriptionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16, // Adicionado espaçamento horizontal
    marginBottom: 16, // Adicionado espaçamento inferior
  },

  icon: {
    marginRight: 5,
  },

  cardDescription: {
    fontSize: 15,
    textAlign: "center",
    color: "black",
  },
});

export default Localizacao;
