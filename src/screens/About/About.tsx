import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Back from "../../components/back";

const NossoProjeto: React.FC = () => {
  const desenvolvedoras = [
    {
      nome: "Ana Clara",
      imagem: require("../../../assets/desenvolvedoras/ana.png"),
    },
    {
      nome: "Ariane Rodokas",
      imagem: require("../../../assets/desenvolvedoras/ariane.png"),
    },

    {
      nome: "Gabriela Silva",
      imagem: require("../../../assets/desenvolvedoras/gabie.png"),
    },
  ];

  return (
    <>
      <Back cor="white" seta="black" />

      <View style={styles.descricao}>
        <Text style={styles.texto}>
          "Luta Rosa - Juntas Pela Vida" é um projeto que visa conscientizar as
          mulheres sobre a importância da detecção precoce do câncer de mama e
          colo de útero.
        </Text>
      </View>

      <ScrollView>
        {desenvolvedoras.map((desenvolvedora, index) => (
          <View
            key={index}
            style={[styles.card, { backgroundColor: "#D4E8FF" }]}
          >
            <Image source={desenvolvedora.imagem} style={styles.imagem} />
            <Text style={styles.nome}>{desenvolvedora.nome}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  card: {
    flexDirection: "row",
    marginLeft: 10,
    padding: 10,
    marginTop: "5%",
    marginBottom: "5%",
  },

  imagem: {
    width: 85,
    height: 85,
  },
  nome: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: "2%",
   
  },
  texto: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 15,
    textAlign: "justify",
  },

  descricao: {
    backgroundColor: "#FFD4DF",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginLeft: "5%",
    marginRight: "5%",
  },

  // desenvolvedoraContainer: {

  // },
});

export default NossoProjeto;
