import { Stack, useRouter } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function UserLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Perfil Usuário",
          headerLeft: () => (
            <Pressable
              style={{ marginRight: 16 }}
              onPress={() => router.replace("home")}
            >
              <FontAwesome name="arrow-left" size={20} />
            </Pressable>
          ),
          headerStyle: {
            backgroundColor: "#85CC9B",
          },
        }}
      />
    </Stack>
  );
}
