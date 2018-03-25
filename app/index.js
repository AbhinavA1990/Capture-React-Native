import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ApolloClient from "apollo-boost";
import { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from "react-apollo";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from "graphql-tag";


import Component from "./screens/SignIn";
import { SignedOut, SignedIn ,createRootNavigator,Profilepage,Post,Photos} from "./router";
import UserList from "./screens/FetchAllUsers";
import { isSignedIn } from "./auth";


const client = new ApolloClient({
	uri: `https://223.237.236.73:8080/graphql`
});


export default class App extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
        signedIn: false,
        checkedSignIn: false
      };
    }

  componentWillMount() {
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }

  render() {
    //return <SignedOut />;
    const { checkedSignIn, signedIn } = this.state;

    // If we haven't checked AsyncStorage yet, don't render anything (better ways to do this)
    if (!checkedSignIn) {
      return null;
    }

    const Layout = createRootNavigator(signedIn);
    return <Layout/>
  }
}
