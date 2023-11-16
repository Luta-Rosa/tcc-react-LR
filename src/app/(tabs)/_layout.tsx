import { Stack, Tabs } from "expo-router";

export default function TabsLayout() {
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{ headerShown: false }}/>
            <Tabs.Screen name="chat" options={{ headerShown: false }}/>
            <Tabs.Screen name="localizacao" options={{ headerShown: false }}/>
        </Tabs>
    );
}