import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

function SettingsScreen() {
  const [theme, setTheme] = useState("light");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.push("Editar");
        }}
      >
        <SettingsCard
          title="Central de Contas"
          icon="user"
          children={undefined}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          router.push("Privacidade");
        }}>
        <SettingsCard title=" Política e Privacidade" icon="lock" children={undefined} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => {
          router.push("Notification");
        }}>
        <SettingsCard
          title="Notificações"
          icon="bell"
          children={undefined}
        ></SettingsCard>
      </TouchableOpacity>

      <SettingsCard title="Tema" icon="palette">
        <View style={styles.settingItem}>
          <Text>Tema Escuro</Text>
          <Switch
            value={theme === "dark"}
            onValueChange={() => setTheme(theme === "dark" ? "light" : "dark")}
          />
        </View>
      </SettingsCard>
    </View>
  );
}

function SettingsCard({ title, icon, children }) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <FontAwesome5 name={icon} size={17} color="black" style={styles.icon} />
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white",
  },

  card: {
    backgroundColor: "#D9FFE5",
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
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default SettingsScreen;
