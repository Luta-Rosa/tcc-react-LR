
import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

function NotificationSettingsScreen() {
  const [autoTouchReminder, setAutoTouchReminder] = useState(false);
  const [monthlyNotification, setMonthlyNotification] = useState(false);
  const [chatSounds, setChatSounds] = useState(true);
  const [vibration, setVibration] = useState(true);

  return (
    <View style={[styles.container, { paddingTop: 10 }]}>

      <View style={styles.centeredContent}>
        <NotificationCard title="Notificações Gerais">
          <View style={styles.settingItem}>
            <Text style={{ fontSize: 16 }}>Lembrete sobre auto-toque</Text>
            <Switch
              value={autoTouchReminder}
              onValueChange={setAutoTouchReminder}
            />
          </View>
          <View style={styles.settingItem}>
            <Text style={{ fontSize: 16 }}>Notificações mensais</Text>
            <Switch
              value={monthlyNotification}
              onValueChange={setMonthlyNotification}
            />
          </View>
        </NotificationCard>

        <NotificationCard title="Notificações do Chat">
          <View style={styles.settingItem}>
            <Text style={{ fontSize: 16 }}>Sons de conversas</Text>
            <Switch value={chatSounds} onValueChange={setChatSounds} />
          </View>

          <View style={styles.settingItem}>
            <Text style={{ fontSize: 16 }}>Vibração</Text>
            <Switch value={vibration} onValueChange={setVibration} />
          </View>
        </NotificationCard>
      </View>
    </View>
  );
}

function NotificationCard({ title, children }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
    padding: 20,
  },
  centeredContent: {
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#FFD4DF", 
    borderRadius: 10,
    padding: 15,
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

export default NotificationSettingsScreen;
