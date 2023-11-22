import { Stack, Tabs } from "expo-router";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={26} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#E86687" },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarStyle: { backgroundColor: "#E86687" },
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#E86687" },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarStyle: { backgroundColor: "#E86687" },
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="whatsapp" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="localizacao"
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: "#E86687" },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarStyle: { backgroundColor: "#E86687" },
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="map-pin" color={color} />,
        }}
      />
    </Tabs>
  );
}
