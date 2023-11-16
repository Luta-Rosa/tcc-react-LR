import React from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";

export default function Mente() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.cont}>
        <Image
          source={require("../../../assets/outros/mente.png")}
          style={styles.backgroundImage}
        />
        <View style={styles.card}>
          <Image
            source={require("../../../assets/outros/medita.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>O poder da meditação</Text>
          <Text style={styles.text}>1. Reduz o Estresse;</Text>
          <Text style={styles.text}>2. Melhora do bem-estar emocional;</Text>
          <Text style={styles.text}>
            3. Aumenta a concentração e a clareza mental;
          </Text>
          <Text style={styles.text}>4. Autodescoberta e autoconhecimento;</Text>
          <Text style={styles.text}>
            5. Desenvolvimento de empatia e compaixão;
          </Text>
          <Text style={styles.text}>
            6. Controle do impulso e autorregulação emocional;
          </Text>
          <Text style={styles.text}>7. Promoção da qualidade de vida;</Text>
          <Image
            source={require("../../../assets/outros/psico.png")}
            style={styles.icon}
          />
          <Text style={styles.title}>A importância do especialista</Text>

          <Text style={styles.text}>
            Um psicólogo desempenha um papel crucial na promoção da autoaceitação,
            como:
          </Text>
          <Text style={styles.text}>1.Apoio emocional e não julgamento;</Text>
          <Text style={styles.text}>
            2.Ajudam os pacientes a identificar crenças negativas sobre si mesmos;
          </Text>
          <Text style={styles.text}>
            3.Auxiliam as pessoas a compreender suas próprias emoções,
            comportamentos e motivações;
          </Text>
          <Text style={styles.text}>
            4.Os psicólogos frequentemente enfatizam a importância da
            autocompaixão
          </Text>
          <Text style={styles.title}>Você se Ama?</Text>
          <Image
            source={require("../../../assets/outros/ajuda.png")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  cont: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%', // Alterado para cobrir toda a tela
    resizeMode: 'cover',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 16,
    width: '-80%', // Alterado para '80%'
    marginTop: '25%', // Alterado para '25%' para começar a partir da metade da tela
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#62B3A9",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  }
});
