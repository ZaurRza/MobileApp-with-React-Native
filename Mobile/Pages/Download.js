import { StatusBar } from "expo-status-bar";
import { styles } from "../Styles";
import {
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { NavBar } from "../NavBar";
export function Download({ navigation }) {
  return (
    <View style={styles.bot}>
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working</Text>

        <Button
          tab
          color="red"
          onPress={() => navigation.navigate("Settings")}
          title="Press"
        ></Button>

        <StatusBar style="auto" />
      </View>
      <NavBar
        navig={navigation}
        Home="white"
        Search="white"
        Profile="white"
        Download="#9F0000"
        Settings="white"
      />
    </View>
  );
}
