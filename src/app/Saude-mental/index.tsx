import React from "react";
import { View } from "react-native";
import back from "../../components/back";
import { StyleSheet, Image, Text, ScrollView } from "react-native";

export default function Mente() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.background}>
        <Image
          source={require("../../../assets/outros/mente.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.card}>
        <Image
          source={require("../../../assets/outros/medita.png")}
          style={styles.icon}
        />
        <Text style={styles.title}>O poder da meditação</Text>

        <View style={styles.line} />

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

        <View style={styles.line} />

        <Image
          source={require("../../../assets/outros/psico.png")}
          style={styles.icon}
        />
        <Text style={styles.title}>A importância do especialista</Text>

        <View style={styles.line} />

        <Text style={styles.text}>
          Um psicólogo desempenha um papel crucial na promoção da autoaceitação,
          como:
        </Text>
        <Text style={styles.text}>1.Apoio emocional e não julgamento;</Text>
        <Text style={styles.text}>
          2.Ajudam os pacientes a identificar crenças negativas sobre simesmos;
        </Text>
        <Text style={styles.text}>
          3.Auxiliam as pessoas a compreender suas próprias emoções,
          comportamentos e motivações;
        </Text>
        <Text style={styles.text}>
          {" "}
          4.Os psicólogos frequentemente enfatizam a importância da
          autocompaixão
        </Text>
        <View style={styles.line} />

        <Text style={styles.title}>Você se Ama?</Text>
        <Image source={require("../../../assets/outros/ajuda.png")} />

        <Text style={styles.text2}>
          A saúde mental é essencial ao lidar com o câncer. Ela influencia a
          tomada de decisões informadas sobre o tratamento e a adesão às
          orientações médicas, melhorando as chances de recuperação.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 0,
    margin: 0,
  },
  background: {
    flex: 1,
    backgroundColor: "red",
  },
  image: {
    flex: 1,
    position: "absolute",
    width: "100%",
  },
  card: {
    position: "relative",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 16,
    width: "-80%",
    marginTop: "100%",
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#62B3A9",
    marginBottom: 10,
    alignSelf: "center",
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },

  text2: {
    marginTop: "10%",
    marginRight: "5%",
    marginLeft: "5%",
    fontSize: 16,
    marginBottom: 5,
  },

  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#62B3A9",
    width: "100%",
    marginVertical: 10,
    marginTop: "10%",
    marginBottom: "10%",
  },
});
