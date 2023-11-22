import { Stack, useRouter } from "expo-router";
import React from "react";

export default function AboutLayout() {
    const router = useRouter();
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
        </Stack>
    );
}