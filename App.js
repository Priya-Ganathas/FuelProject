
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Onboarding from './src/Onboarding';
import Signup from './src/Signup';
import Login from './src/Login';
import Home from './src/screens/Home';
import { DrawerContent } from './src/DrawerContent';
import MainTabScreen from './src/MainTabScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <PaperProvider >
    <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
  );

}

export default App;

