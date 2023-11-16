import { Stack } from "expo-router";

export default function OpenLayout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
        </Stack>
    );
}