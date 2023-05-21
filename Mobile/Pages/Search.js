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
export function Search({ navigation }) {
  return (
    <View style={styles.bot}>
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working</Text>
        <View style={styles.button}>
          <Button
            tab
            color="red"
            onPress={() => navigation.navigate("Settings")}
            title="Press"
          ></Button>
        </View>
        <StatusBar style="auto" />
      </View>
      <NavBar
        navig={navigation}
        Home="white"
        Search="#9F0000"
        Profile="white"
        Download="white"
        Settings="white"
      />
    </View>
  );
}
