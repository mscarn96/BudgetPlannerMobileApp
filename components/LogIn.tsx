import React, { useState } from "react";
import { Keyboard, StyleSheet, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Button, Text, TextInput } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { LoginData } from "../features/auth/authAPI";
import { login } from "../features/auth/authSlice";
import SubmitDialog from "./SubmitDialog";

interface Props {
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogIn = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [dialogVisible, setDialogVisible] = useState(false);

  const dispatch = useAppDispatch();

  const sumbitLogin = async () => {
    const loginData: LoginData = {
      email,
      password,
    };
    await dispatch(login(loginData));
    setDialogVisible(true);
  };

  const state = useAppSelector(state => state.auth);

  const dialogTitle = state.error ? "Error" : "Success";

  const dialogMessage = state.error ? state.error : "You are now logged in!";

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <SubmitDialog
          isVisible={dialogVisible}
          setVisible={setDialogVisible}
          title={dialogTitle}
          message={dialogMessage}
          isLoading={state.loading}
          setIsLoggedIn={props.setIsLoggedIn}
        />
        <Text style={styles.heading}>Budget Planner</Text>
        <TextInput
          label='Email'
          value={email}
          onChangeText={text => setEmail(text)}
          mode='outlined'
          style={styles.input}
        />
        <TextInput
          label='Password'
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          mode='outlined'
          style={styles.input}
        />
        <Button
          style={styles.button}
          mode='contained'
          onPress={() => sumbitLogin()}>
          Log in
        </Button>
        <Button
          onPress={() => props.setIsNewUser(true)}
          mode='text'
          style={styles.button}>
          New user?
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LogIn;

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "",
  },
  input: {
    height: 40,
    width: 180,
    padding: 5,
  },
  heading: {
    fontWeight: "700",
    color: "#f57c00",
    fontSize: 30,
    marginBottom: 30,
  },
  button: { marginTop: 20 },
});
