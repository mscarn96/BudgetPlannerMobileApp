import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../app/hooks";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Tabs from "../components/Tabs";

interface Props {}

const Start = (props: Props) => {
  const user = useAppSelector(state => state.auth.user);

  const [isNewUser, setIsNewUser] = useState(false);

  return (
    <View style={styles.container}>
      {user ? (
        <Tabs />
      ) : isNewUser ? (
        <Register setIsNewUser={setIsNewUser} />
      ) : (
        <LogIn setIsNewUser={setIsNewUser} />
      )}
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
