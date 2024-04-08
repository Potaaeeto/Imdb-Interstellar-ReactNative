import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
} from "react-native";
import Constants from "expo-constants";

// Import des images
import imdbLogo from "./assets/imgs/logo-imdb.png";

export default function App() {
  // console.log(Constants.statusBarHeight);
  // console.log(Platform.OS); // IOS and Android

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.logoBg}>
        <Image source={imdbLogo} style={styles.logo} />
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Interstellar</Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={styles.paragraph}>2014</Text>
          <Text style={styles.paragraph}>PG-13</Text>
          <Text style={styles.paragraph}>2h 49min</Text>
          <Text style={styles.paragraph}>Adventure, Drama, Sci-Fi</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  container: {
    backgroundColor: "black",
    padding: 10,
  },
  logoBg: {
    backgroundColor: "#393939",
  },
  logo: {
    height: 70,
    width: 70,
    marginLeft: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
    color: "white",
  },
  paragraph: {
    color: "#848484",
    fontSize: 12,
  },
});
