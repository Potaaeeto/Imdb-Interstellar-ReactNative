import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";

// Import des images
import imdbLogo from "./assets/imgs/logo-imdb.png";
import interstellarPoster from "./assets/imgs/film.jpg";
import matthew from "./assets/imgs/matthew.jpg";
import mackenzie from "./assets/imgs/mackenzie.jpg";
import jessica from "./assets/imgs/jessica.jpg";
import anne from "./assets/imgs/anne.jpg";

// Import des icones
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  // console.log(Constants.statusBarHeight);
  // console.log(Platform.OS); // IOS and Android

  return (
    <SafeAreaView style={styles.mainView}>
      <ScrollView>
        <View style={styles.logoBg}>
          <Image source={imdbLogo} style={styles.logo} />
        </View>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: "#212121",
              padding: 10,
              marginBottom: 20,
            }}
          >
            <Text style={styles.title}>Interstellar</Text>
            <View style={{ flexDirection: "row", gap: 10, marginBottom: 20 }}>
              <Text style={styles.paragraph}>2014</Text>
              <Text style={styles.paragraph}>PG-13</Text>
              <Text style={styles.paragraph}>2h 49min</Text>
              <Text style={styles.paragraph}>Adventure, Drama, Sci-Fi</Text>
            </View>
            <View style={styles.description}>
              <Image source={interstellarPoster} style={styles.poster} />
              <View style={{ flex: 1 }}>
                <Text style={{ color: "white", marginBottom: 20 }}>
                  A team of explores travel through a wormhole in space in an
                  attempt to ensure humanity's survival.
                </Text>
                <Pressable
                  onPress={() => {
                    console.log("Pressable");
                  }}
                  style={{
                    backgroundColor: "#1277BD",
                    padding: 10,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center" }}>
                    + ADD TO WATCHLIST
                  </Text>
                </Pressable>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <AntDesign name="star" size={25} color="#C5A330" />
                <Text style={{ color: "white" }}>8.6/10</Text>
                <Text style={styles.paragraph}>1.1M</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <AntDesign name="staro" size={25} color="white" />
                <Text style={{ color: "white" }}>RATE THIS</Text>
              </View>
              <View
                style={{
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    padding: 3,
                  }}
                >
                  74
                </Text>
                <Text style={{ color: "white" }}>Metascore</Text>
                <Text style={styles.paragraph}>46 critic reviews</Text>
              </View>
            </View>
          </View>

          {/* TOP BILLED CAST */}
          <View style={{ backgroundColor: "#212121" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 15,
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>
                Top billed Cast
              </Text>
              <Text style={{ color: "#1277BD", fontSize: 15 }}>SEE ALL</Text>
            </View>

            <ScrollView
              horizontal={true}
              style={{ paddingLeft: 15, height: 280 }}
            >
              {/* MATTHEW */}
              <View style={{ height: 200, width: 150, marginRight: 10 }}>
                <Image source={matthew} style={styles.actors} />
                <View style={{ backgroundColor: "#2A2A2A", padding: 15 }}>
                  <Text numberOfLines={1} style={{ color: "white" }}>
                    Matthew McConaughey
                  </Text>
                  <Text style={styles.paragraph}>Cooper</Text>
                </View>
              </View>

              {/* ANNE */}
              <View style={{ height: 200, width: 150, marginRight: 10 }}>
                <Image source={anne} style={styles.actors} />
                <View style={{ backgroundColor: "#2A2A2A", padding: 15 }}>
                  <Text numberOfLines={1} style={{ color: "white" }}>
                    Anne Hathaway
                  </Text>
                  <Text style={styles.paragraph}>Brand</Text>
                </View>
              </View>

              {/* JESSICA */}
              <View style={{ height: 200, width: 150, marginRight: 10 }}>
                <Image source={jessica} style={styles.actors} />
                <View style={{ backgroundColor: "#2A2A2A", padding: 15 }}>
                  <Text numberOfLines={1} style={{ color: "white" }}>
                    Jessica Chastain
                  </Text>
                  <Text style={styles.paragraph}>Murph</Text>
                </View>
              </View>

              {/* MACKENZIE */}
              <View style={{ height: 200, width: 150 }}>
                <Image source={mackenzie} style={styles.actors} />
                <View style={{ backgroundColor: "#2A2A2A", padding: 15 }}>
                  <Text numberOfLines={1} style={{ color: "white" }}>
                    Mackenzie Foy
                  </Text>
                  <Text style={styles.paragraph}>Murph</Text>
                </View>
              </View>
            </ScrollView>

            <View
              style={{
                paddingLeft: 15,
                gap: 20,
                marginBottom: 20,
                paddingRight: 15,
              }}
            >
              <View>
                <Text style={{ color: "white", fontSize: 15, marginBottom: 3 }}>
                  Director
                </Text>
                <Text style={styles.paragraph}>Christopher Nolan</Text>
              </View>
              <View>
                <Text style={{ color: "white", fontSize: 15, marginBottom: 3 }}>
                  Writers
                </Text>
                <Text style={styles.paragraph}>
                  Jonathan Nolan (wrriten by) and Christopher Nolan (written by)
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
  },
  logoBg: {
    backgroundColor: "#393939",
  },
  container: {
    backgroundColor: "black",
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
  description: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 30,
  },
  poster: {
    width: 100,
    height: 150,
  },
  actors: {
    width: "100%",
    height: "100%",
  },
});
