import { Stack } from "expo-router";

export default function EditarLayout() {
    return(
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }}/>
        </Stack>
    );
}