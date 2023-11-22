import { Stack } from "expo-router";
import React from "react";

export default function OpenLayout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
        </Stack>
    );
}