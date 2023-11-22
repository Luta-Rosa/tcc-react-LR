import { Stack, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function SettingsLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Notificações",
          headerLeft: () => (
            <Pressable
              style={{ marginRight: 16 }}
              onPress={() => router.replace("home")}
            >
              <FontAwesome name="arrow-left" size={20} />
            </Pressable>
          ),
        }}
      />
    </Stack>
  );
}
