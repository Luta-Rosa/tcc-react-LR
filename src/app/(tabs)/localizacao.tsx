import React from "react";
import { View, Text, StyleSheet, ScrollView ,Image} from "react-native";

const Localizacao = () => {
  const cardsData = [
    {
      title: "Card 1",
      imageSource: require("../../../assets/sliders/foto1.png"),
      description: "Descrição do Card 1",
    },
    {
      title: "Card 2",
      imageSource: require("../../../assets/sliders/foto2.png"),
      description: "Descrição do Card 2",
    },
    {
      title: "Card 3",
      imageSource: require("../../../assets/sliders/foto3.png"),
      description: "Descrição do Card 3",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cardsData.map((card, index) => (
     <View key={index} style={[styles.card, { marginBottom:1 }]}>
          <Image style={styles.cardImage} source={card.imageSource} />
          <Text style={styles.cardTitle}>{card.title}</Text>
          <Text style={styles.cardDescription}>{card.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  card: {
    width: 350,
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden", // Adicionado para garantir que a imagem seja cortada dentro do borderRadius
  },

  cardImage: {
    width: "100%",
    height: "70%", // Ajuste a altura conforme necessário
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#FFF",
  },

  cardDescription: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
    color: "#FFF",
  },
});

export default Localizacao;
