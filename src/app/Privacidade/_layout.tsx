import { Stack } from "expo-router";
import React from "react";

export default function PrivacidadeLayout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
        </Stack>
    );
}