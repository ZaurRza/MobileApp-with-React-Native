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
export function Settings({ navigation }) {
  return (
    <View style={styles.bot}>
      <View style={styles.container}>
        <Text>KOPDKEwkfoskfposkfkskf</Text>
        <View style={styles.button}>
          <Button
            color="red"
            onPress={() => console.log("ijesfijs")}
            title="Press"
          ></Button>
        </View>

        <StatusBar style="auto" />
      </View>
      <NavBar
        navig={navigation}
        Home="white"
        Search="white"
        Profile="white"
        Download="white"
        Settings="#9F0000"
      />
    </View>
  );
}
