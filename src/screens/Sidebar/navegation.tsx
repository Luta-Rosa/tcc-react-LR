// Navigation.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Home/home';
import Sidebar from '../Sidebar/sidebar';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <Sidebar {...props} />}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        {/* Adicione mais telas aqui */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

