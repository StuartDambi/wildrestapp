import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: "white"}}>Hello Static World, this is a Google banner</Text>
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
