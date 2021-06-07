import React from "react";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Home from "../screens/Home";
import Subscriptions from "../screens/Subscriptions";
import Creator from "../screens/Creator";
import Options from "../screens/Options";

const Tab = createMaterialBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      activeColor='orange'
      barStyle={{ backgroundColor: "white" }}>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Subscriptions'
        component={Subscriptions}
        options={{
          tabBarLabel: "Subscriptions",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='cash-multiple'
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Creator'
        component={Creator}
        options={{
          tabBarLabel: "Creator",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='pencil' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Options'
        component={Options}
        options={{
          tabBarLabel: "Options",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='cog' color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
