import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const Home = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
