import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import AdMobBanner from "expo";

export default class App extends React.Component {
  bannerError(e) {
    alert(e);
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
            testDeviceID="EMULATOR"
            servePersonalizedAds // true or false
            onDidFailToReceiveAdWithError={this.bannerError}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "brown",
    alignItems: "center",
    justifyContent: "center",
    color: "white"
  }
});
