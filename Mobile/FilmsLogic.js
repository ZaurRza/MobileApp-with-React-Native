import { StatusBar } from "expo-status-bar";
import { styles } from "./Styles";
import { Image, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { ScrollView } from "react-native";
export default function FilmsLogic(props) {
  const [fontsLoad] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoad) {
    return undefined;
  }
  return (
    <View
      style={{
        flexDirection: "row",
        display: "flex",
      }}
    >
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollToOverflowEnabled={true}
      >
        {props.data.map((item) => {
          return (
            <View
              key={item.id}
              style={{
                backgroundColor: item.bgcolor,
                borderRadius: 10,
                paddingLeft: 5,
                paddingRight: 5,
                paddingBottom: 5,
                margin: 15,
                shadowOffset: { width: -4, height: 4 },
                shadowOpacity: 0.3,
                shadowRadius: 30,
                elevation: 30,
                shadowColor: item.bgcolor,
              }}
            >
              <View style={styles.Card}>
                <Image
                  source={{ uri: item.img }}
                  style={{ width: "100%", height: "100%", borderRadius: 5 }}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "white", marginRight: 80 }}>
                  {item.views}
                </Text>
                <Text style={{ color: "white" }}>{item.rating}</Text>
              </View>
              <Text
                style={{
                  color: "white",
                  fontFamily: "Roboto-Bold",
                }}
              >
                {item.title}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
