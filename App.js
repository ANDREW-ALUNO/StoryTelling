
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import firebase from 'firebase';
import { firebaseConfig } from './config';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './navigation/drawerNavigator';
import { createStackNavigator } from '@react-navigation/stack';

if (! firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app()
}

const Stack = createStackNavigator()
const MyStack=()=>{
  return (
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown:false,gestureEnabled:false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="DashBoard" component={DrawerNavigator} />

    </Stack.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

