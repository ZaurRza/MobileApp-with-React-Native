import { StatusBar } from "expo-status-bar";
import { styles } from "../Styles";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { NavBar } from "../NavBar";
import { useState } from "react";

import FilmsLogic from "../FilmsLogic";
export function Home({ navigation }) {
  const [Films, SetFilms] = useState([
    {
      title: "Не пойман-не вор",
      img: "https://www.film.ru/sites/default/files/styles/thumb_260x400/public/movies/posters/1611624-2055863.jpeg",
      views: "4637",
      id: "2",
      rating: "7,5",
      bgcolor: "#002E37",
    },
    {
      title: "Мумия",
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/7075696b-2399-4038-9f89-283921eea7ef/600x900",
      views: "4637",
      id: "3",
      rating: "9",
      bgcolor: "#200102",
    },
    {
      title: "Парк юрского периода",
      img: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0d072841-8c4d-40ac-82bc-36e743ef49f5/600x900",
      views: "4637",
      id: "4",
      rating: "7,8",
      bgcolor: "#001905",
    },
    {
      title: "Чужой 3",
      img: "https://upload.wikimedia.org/wikipedia/ru/thumb/b/b9/Alien3_poster.jpg/250px-Alien3_poster.jpg",
      views: "4637",
      id: "5",
      rating: "6,9",
      bgcolor: "#000C03",
    },
  ]);
  return (
    <View style={styles.bot}>
      <View style={styles.Home}>
        <View style={styles.CardPlace}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <FilmsLogic data={Films} />
            <FilmsLogic data={Films} />
            <FilmsLogic data={Films} />
            <FilmsLogic data={Films} />
            <FilmsLogic data={Films} />
          </ScrollView>
        </View>
        <NavBar
          navig={navigation}
          Home="#9F0000"
          Search="white"
          Profile="white"
          Download="white"
          Settings="white"
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
