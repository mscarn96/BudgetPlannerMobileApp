import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";

import store from "./app/store";
import Start from "./screens/Start";

//https://reactnavigation.org/docs/tab-based-navigation
//https://reactnavigation.org/docs/typescript/
//https://callstack.github.io/react-native-paper/index.html

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#f57c00",
    accent: "#455a64",
    background: "#f2f5f3",
  },
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider theme={theme}>
          <Start />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
