import { StatusBar } from "expo-status-bar";
import { styles } from "./Styles";
import {
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableWithoutFeedback,
  View,
  Animated,
} from "react-native";

import { useState, useRef } from "react";

import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwewsome from "react-native-vector-icons/FontAwesome";

export function NavBar(props) {
  const [NavOpen, SetNavOpen] = useState(false);
  const animate_state = {
    start: 0,
    end: 100,
  };
  const value = useRef(new Animated.Value(animate_state.start)).current;
  function StartAnimate() {
    Animated.timing(value, {
      toValue: animate_state.end,
      useNativeDriver: false,
      duration: 200,
    }).start();
    setTimeout(() => {
      SetNavOpen(true);
    }, 50);
  }
  const inputRange = Object.values(animate_state);
  const outputRange = ["15%", "80%"];

  function StartAnimateBack() {
    animate_state.end = 0;
    animate_state.start = 100;
  }
  const width = value.interpolate({
    inputRange,
    outputRange,
  });

  return (
    <Animated.View style={{ width }}>
      <View style={NavOpen ? styles.navbar : styles.navbarClose}>
        <FontAwewsome
          style={NavOpen ? styles.button : styles.buttonShowAnoth}
          size={40}
          color="white"
          name="times"
          type="material"
          onPress={() => {
            setTimeout(() => {
              SetNavOpen(true);
            }, 20);
            StartAnimate();
          }}
        />
        <FontAwewsome
          style={NavOpen ? styles.buttonShow : styles.button}
          size={40}
          color="white"
          name="times"
          type="material"
          onPress={() => {
            setTimeout(() => {
              SetNavOpen(false);
            }, 60);
            StartAnimateBack();
            StartAnimate();
          }}
        />
        <FontAwewsome
          style={NavOpen ? styles.buttonShow : styles.button}
          size={30}
          name="user-circle-o"
          color={props.Profile}
          onPress={() => {
            props.navig.replace("Profile");
          }}
        />
        <FontAwewsome
          style={NavOpen ? styles.buttonShow : styles.button}
          size={30}
          name="search"
          color={props.Search}
          onPress={() => {
            props.navig.replace("Search");
          }}
        />
        <FontAwesome5
          style={NavOpen ? styles.buttonShow : styles.button}
          size={30}
          color={props.Home}
          name="home"
          onPress={() => {
            props.navig.replace("Home");
          }}
        />
        <FontAwewsome
          style={NavOpen ? styles.buttonShow : styles.button}
          size={30}
          name="cloud-download"
          color={props.Download}
          onPress={() => {
            props.navig.replace("Download");
          }}
        />

        <FontAwewsome
          style={NavOpen ? styles.buttonShow : styles.button}
          size={30}
          name="cog"
          color={props.Settings}
          onPress={() => {
            props.navig.replace("Settings");
          }}
        />

        <StatusBar style="auto" />
      </View>
    </Animated.View>
  );
}
