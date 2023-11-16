import { Stack } from "expo-router";

export default function CuidadosLayout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
        </Stack>
    );
}