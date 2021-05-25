import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {}

const Subscriptions = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>Subscriptions</Text>
    </View>
  );
};

export default Subscriptions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
