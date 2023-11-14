// Sidebar.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const Sidebar = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Personalize a barra lateral conforme necessário */}
      <View style={{ padding: 20 }}>
        <Text>Seu App</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default Sidebar;
