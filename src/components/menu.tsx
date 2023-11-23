import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { StyleSheet } from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";

export default function Toolbar() {
  const [modalVisible, setModalVisible] = useState(false);

  const router = useRouter();

  return (
    <View>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        onShow={() => {
          modalVisible;
          console.log(modalVisible);
        }}
      >
        <View>
          <View style={styles.modalView}>
            <View style={styles.information}>
              <View style={styles.textinfo}>
                <Text style={styles.texto2}>Menu</Text>
              </View>
            </View>
            <View>
              <View style={styles.conteudo}>
                <TouchableOpacity
                  onPress={() => {
                    router.push("Settings");
                  }}
                >
                  <View style={styles.itens}>
                    <Feather
                      name="settings"
                      size={30}
                      color="white"
                      style={styles.icontoolbar}
                    />
                    <Text style={styles.textitens}>Configurações</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    router.push("Guia");
                  }}
                >
                  <View style={styles.itens}>
                    <Feather
                      name="book"
                      size={30}
                      color="white"
                      style={styles.icontoolbar}
                    />
                    <Text style={styles.textitens}>Guia de uso</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    router.push("About");
                  }}
                >
                  <View style={styles.itens}>
                    <Feather
                      name="info"
                      size={30}
                      color="white"
                      style={styles.icontoolbar}
                    />
                    <Text style={styles.textitens}>Sobre</Text>
                  </View>
                </TouchableOpacity>

             
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => setModalVisible(!modalVisible)}
          style={{
            backgroundColor: "#000000",
            opacity: 0.5,
            alignSelf: "flex-end",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        ></TouchableOpacity>
      </Modal>

      <View style={styles.toolbar}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Feather
            name="menu"
            size={30}
            color="white"
            style={styles.icontoolbar}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            router.push("User");
          }}
        >
          <Feather
            name="user"
            size={30}
            color="white"
            style={styles.icontoolbar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "#496F99",
    shadowColor: "#496F99",
    maxWidth: 250,
    height: "100%",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1,
  },
  topo: {
    flexDirection: "row",
    borderBottomColor: "black",
    paddingBottom: 20,
    borderBottomWidth: 0.5,
  },
  modalText: {
    alignSelf: "center",
    fontSize: 20,
    marginLeft: 130,
    fontFamily: "ISemi",
  },
  conteudo: {
    marginTop: 16,
    flexDirection: "column",
    paddingHorizontal: vw(2),
  },
  cidade: {
    height: 48,
    width: 280,
    borderRadius: 10,
    backgroundColor: "#10228A",
    flexDirection: "row",
    marginBottom: vw(8),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  itens: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: vw(5),
  },
  textitens: {
    color: "white",
    fontSize: vw(4),
  },

  texto2: {
    color: "white",
    fontSize: vw(4),
    marginLeft: 20,
  },

  text: {
    marginBottom: 6,
    marginTop: "200%",
    fontSize: 15,
    alignSelf: "center",
    color: "white",
  },
  toolbar: {
    backgroundColor: "#E86687",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: vw(20),
    shadowColor: "#000",
    shadowOffset: {
      width: vw(0),
      height: vw(4),
    },
    shadowOpacity: vw(0.3),
    shadowRadius: vw(4.65),

    elevation: vw(2),
  },
  icontoolbar: {
    marginRight: vw(5),
    marginLeft: vw(5),
  },
  modalimg: {
    height: 90,
    width: 100,
  },
  textinfo: {
    textAlign: "left",
    flexDirection: "column",
  },
  information: {
    marginTop: vw(4),
    marginBottom: vw(4),
    flexDirection: "row",
    alignItems: "center",
  },
});
