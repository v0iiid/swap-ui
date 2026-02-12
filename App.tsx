import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Alert,
  Linking,
  Image
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={s.safe}>
      <ScrollView style={s.scroll} contentContainerStyle={{ flexGrow: 1, justifyContent: "flex-end" }}>
        <Text style={s.title}>Swap Tokens</Text>
        <View style={s.cardRow}>
          <View style={s.card}>
            <View style={s.rows}>
              <View style={s.el}>
                <Image source={require("./assets/eth2.png")}
                  style={{ width: 44, height: 44, }} />
                <Text style={s.elText}>ETH</Text>
                <Image source={require("./assets/down1.png")}
                  style={{ width: 24, height: 24, resizeMode: "cover" }} />
              </View>
              <Text style={s.qty}>0.28014</Text>
            </View>
            <View style={s.rows}>
              <Text style={s.bal}>Balance: 0.0661 ETH</Text>
              <Text style={s.bal}>$499.749</Text>
            </View>
          </View>
          <View style={s.imgContainer}><Image style={s.img} source={require("./assets/image.png")} /></View>
          <View style={s.card}>
            <View style={s.rows}>
              <View style={s.el}>
                <Image source={require("./assets/dai.png")}
                  style={{ width: 44, height: 44, }} />
                <Text style={s.elText}>DAI</Text>
                <Image source={require("./assets/down1.png")}
                  style={{ width: 24, height: 24, resizeMode: "cover" }} />
              </View>
              <Text style={s.qty}>500</Text>
            </View>
            <View style={s.rows}>
              <Text style={s.bal}>Balance: 250 DAI</Text>
              <Text style={s.bal}>$499.749</Text>
            </View>

          </View>
          <TouchableOpacity style={s.btn} ><Text style={s.btnText}>Submit</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scroll: {
    flex: 1,
    paddingBottom: 20,
    padding: 25,
    marginBottom: 50
  },
  title: {
    paddingLeft: 5,
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom: 20
  },
  cardRow: {
    flexDirection: "column",
    gap: 8,
  },
  card: {
    backgroundColor: "#181818",
    borderRadius: 24,
    padding: 18,
    borderWidth: 1,
    borderColor: "#1E1E1E",
    gap: 12,
    paddingBottom: 20,

  },
  el: {
    backgroundColor: "#000000",
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderRadius: 1000,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#1E1E1E"
  },
  elText: {
    color: "#fff",
    paddingHorizontal: 6
  },
  qty: {
    fontWeight: 600,
    fontSize: 28,
    color: '#FFFFFF',
    letterSpacing: 0,
    paddingTop: 12,
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bal: {
    fontSize: 15,
    fontWeight: 500,
    color: "#A9AAB2"
  },
  btn: {
    backgroundColor: '#14F195',
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 10,
  },
  btnText: {
    color: "#000",
    fontSize: 18,
    fontWeight: 600
  },
  imgContainer: {
    backgroundColor: "#000000",
    zIndex: 1,
    position: "absolute",
    alignSelf: "center",
    bottom: 190,
    borderRadius:16,
    padding:5
  },
  img: {
    width:34,
    height:34
  }
});
