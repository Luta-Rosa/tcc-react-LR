import { router, Stack } from "expo-router";
import React from "react";
import { Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function CuidadosLayout() {
    return(
        <Stack>
            <Stack.Screen 
            name="index" 
            options={{ 
                headerTitle: "Voltar",
                headerLeft: () => (
                    <Pressable
                      style={{ marginRight: 16 }}
                      onPress={() => router.replace("home")}
                    >
                      <FontAwesome name="arrow-left" size={20} />
                    </Pressable>
                  ),
                  headerStyle: {
                    backgroundColor: "#FFD4DF",
                  },
             }}/>
        </Stack>
    );
}