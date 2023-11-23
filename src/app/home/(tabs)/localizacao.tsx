import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

function Localizacao() {
  const cardsData = [
    {
      title: "Santa Marcelina Saúde",
      imageSource: require("../../../../assets/outros/hosp1.png"),
      description: "Rua Santa Marcelina, 177 | Itaquera | São Paulo | SP",
      phone: "(11) 2070-6000",
      icon: "map-marker-alt",
    },
    {
      title: "Hospital Amaral Carvalho",
      imageSource: require("../../../../assets/outros/002.jpg"),
      description: "Rua Dona Silvéria, 150 | Chácara Braz Miraglia | Jaú | SP",
      phone: "(14) 3602-1200",
      icon: "map-marker-alt",
    },
    {
      title: "Hospital Israelita Albert Einstein",
      imageSource: require("../../../../assets/outros/3.png"),
      description: "Av. Albert Einstein, 701 | Morumbi | São Paulo | SP",
      phone: "(11) 2151-1233",
      icon: "map-marker-alt",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Hospitais Próximos</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {cardsData.map((card, index) => (
          <View key={index} style={styles.card}>
            <Image style={styles.cardImage} source={card.imageSource} />

            <View>
              <Text style={styles.cardTitle}>{card.title}</Text>
            </View>

            <View style={styles.cardContent}>
              <FontAwesome5
                name={card.icon}
                size={16}
                color="#4682B4"
                style={styles.icon}
              />
              <View style={styles.textContainer}>
                <Text style={styles.cardDescription}>{card.description}</Text>
              </View>
            </View>

            <View style={styles.phoneContainer}>
              <FontAwesome5
                name="phone"
                size={16}
                color="#4682B4"
                style={styles.phoneIcon}
              />
              <Text style={styles.cardPhone}>{card.phone}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFD4DF",
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  card: {
    width: "100%",
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#FFF",
    elevation: 3,
    overflow: "hidden",
  },
  cardImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  icon: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  cardDescription: {
    fontSize: 15,
    textAlign: "left",
    color: "black",
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 15,
    marginTop: 0,
  },
  cardPhone: {
    fontSize: 15,
    textAlign: "left",
    color: "#4682B4",
    marginLeft: 5,
  },
  phoneIcon: {
    marginRight: 5,
  },
  headerText: {
    textAlign: "center",
    paddingVertical: 10,
    backgroundColor: "#E86687",
    fontSize: 20,
    color: "white",
  },
});

export default Localizacao;
