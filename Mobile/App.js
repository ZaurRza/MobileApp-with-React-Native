import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Animated } from "react-native";

import { Home } from "./Pages/Home";
import { Profile } from "./Pages/Profile";
import { Settings } from "./Pages/Settings";
import { styles } from "./Styles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavBar } from "./NavBar";
import { Download } from "./Pages/Download";
import { Search } from "./Pages/Search";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        detachInactiveScreens={false}
        screenOptions={{ headerShown: false, animation: "fade" }}
      >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Download" component={Download} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
