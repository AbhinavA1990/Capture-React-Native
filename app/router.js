import React from "react";
import { Platform, StatusBar } from "react-native";
import { FontAwesome } from "react-native-vector-icons";


import { StackNavigator, TabNavigator } from "react-navigation";

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";

import Home from "./screens/Home";
import Profile from "./screens/Profile";

import Post from "./screens/Post";

import Photos from "./screens/Photos"

export const SignedOut = StackNavigator({
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Log in Here!"
    }
  },  SignUp: {
      screen: SignUp,
      navigationOptions: {
        title: "Register Here! It's Free"
      }
    }
});

export const SignedIn = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={30} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user" size={30} color={tintColor} />
      )
    }
  },
  Post:{
    screen:Post,
    navigationOptions: {
      tabBarLabel: "Post",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="edit" size={30} color={tintColor} />
      )
    }
  },
  Photos:{
    screen:Photos,
    navigationOptions: {
      tabBarLabel: "Photos",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="camera" size={30} color={tintColor} />
      )
    }
  }
});


export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        }
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
