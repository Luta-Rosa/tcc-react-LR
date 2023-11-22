import { Stack, useRouter } from 'expo-router';
import React from "react";

export default function NotificationLayout() {
    const router = useRouter();
    return(
        <Stack>
            <Stack.Screen
             name="index" 
             options={{ 
                headerTitle: "Notificações"
                 }}/>
        </Stack>
    );
}