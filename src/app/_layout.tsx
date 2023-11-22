import React from "react";
import { Stack } from "expo-router";

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" options={{ headerShown: false }} />
      <Stack.Screen name="home/(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="About" options={{ headerShown: false }} />
      <Stack.Screen name="Cuidados" options={{ headerShown: false }} />
      <Stack.Screen name="Editar" options={{ headerShown: false }} />
      <Stack.Screen name="Guia" options={{ headerShown: false }} />
      <Stack.Screen name="Notification" options={{ headerShown: false }} />
      <Stack.Screen name="Open" options={{ headerShown: false }} />
      <Stack.Screen name="Privacidade" options={{ headerShown: false }} />
      <Stack.Screen name="Saude-mental" options={{ headerShown: false }} />
      <Stack.Screen name="Settings" options={{ headerShown: false }} />
      <Stack.Screen name="User" options={{ headerShown: false }} />
    </Stack>
  );
}
