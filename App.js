import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/drawerNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
    </NavigationContainer>
  );
}

