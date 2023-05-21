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
import { Avatar } from "@react-native-material/core";
import { NavBar } from "../NavBar";
export function Profile({ navigation }) {
  return (
    <View style={styles.bot}>
      <View style={styles.container}>
        <Avatar label="Kent Dodds" size={150} style={styles.avatar} autoColor />
        <StatusBar style="auto" />
      </View>
      <NavBar
        navig={navigation}
        Home="white"
        Search="white"
        Profile="#9F0000"
        Download="white"
        Settings="white"
      />
    </View>
  );
}
