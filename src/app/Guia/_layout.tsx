import { Stack } from "expo-router";

export default function GuiaLayout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
        </Stack>
    );
}