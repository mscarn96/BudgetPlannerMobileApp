import React, { useEffect, useState } from "react";
import { Keyboard, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Button, HelperText, Text, TextInput } from "react-native-paper";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { RegisterData } from "../features/auth/authAPI";
import { register } from "../features/auth/authSlice";
import { styles } from "./LogIn";
import SubmitDialog from "./SubmitDialog";

interface Props {
  setIsNewUser: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const validateEmail = (email: string) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const Register = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const [isDataValid, setIsDataValid] = useState(false);
  const [validationErrorMessage, setValidationErrorMessage] = useState("");

  const validate = () => {
    if (name.length < 3 || name.length > 20) {
      setValidationErrorMessage("Name must be between 3 and 20 characters");
      setIsDataValid(false);
    } else if (!validateEmail(email)) {
      setValidationErrorMessage("Invalid email");
      setIsDataValid(false);
    } else if (password.length < 6) {
      setValidationErrorMessage("Password must be at least 6 characters long");
      setIsDataValid(false);
    } else if (password !== repeatedPassword) {
      setValidationErrorMessage("Passwords must match");
      setIsDataValid(false);
    } else {
      setValidationErrorMessage("");
      setIsDataValid(true);
    }
  };

  useEffect(() => {
    validate();
  }, [name, email, password, repeatedPassword]);

  const [dialogVisible, setDialogVisible] = useState(false);

  const dispatch = useAppDispatch();

  const submitRegister = async () => {
    const registerData: RegisterData = {
      name,
      email,
      password,
    };
    await dispatch(register(registerData));
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
          label='Name'
          value={name}
          onChangeText={text => setName(text)}
          mode='outlined'
          style={styles.input}
        />
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
        <TextInput
          label='Repeat Password'
          secureTextEntry
          value={repeatedPassword}
          onChangeText={text => setRepeatedPassword(text)}
          mode='outlined'
          style={styles.input}
        />
        <Button
          style={styles.button}
          disabled={!isDataValid}
          mode='contained'
          onPress={() => submitRegister()}>
          Register
        </Button>
        <HelperText type='error' visible={!isDataValid}>
          {validationErrorMessage}
        </HelperText>
        <Button
          onTouchEnd={() => props.setIsNewUser(false)}
          mode='text'
          style={styles.button}>
          Already have an account?
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Register;
