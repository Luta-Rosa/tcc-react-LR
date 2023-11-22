import { Stack, useRouter } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function EditarLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Editar Usuário", 
      
          headerStyle: {
            backgroundColor: "#496F99",
          },
        }}
      />
    </Stack>
  );
}
