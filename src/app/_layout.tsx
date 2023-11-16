import React from "react";
import { Stack } from "expo-router";

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Open: undefined;
      Cadastro: undefined;
      Login: undefined;
      Home: undefined;
      Cuidados: undefined;
      Mente: undefined;
      Config: undefined;
      User: undefined;
      Guia: undefined;
      Footer: undefined;
    }
  }
}

export default function AppLayout() {
  return (
    <Stack>
      <Stack.Screen name="Login" options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
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
