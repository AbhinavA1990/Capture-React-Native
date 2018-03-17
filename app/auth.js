import { AsyncStorage } from "react-native";
import { ApolloProvider } from 'react-apollo';
 import { ApolloClient } from 'apollo-client';
 import { HttpLink } from 'apollo-link-http';
 import { InMemoryCache } from 'apollo-cache-inmemory';
 import gql from 'graphql-tag';

export const USER_KEY = "auth-demo-key";

const CurrentUserForLayout = gql`
query{
authenticatedUser(email:"Purushotham.Raju@gmail.com",password:"Pregnant") {
  userName
  email
  password
}
}
`;
const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8080/graphql' }),
  cache: new InMemoryCache()
});

client.query({ query: gql`query{
  authenticatedUser(email:"Purushotham.Raju@gmail.com",password:"Pregnant") {
    userName
    email
    password
  }
}` }).then(console.log);



export const onSignIn = () => {
  console.log("handle sign in");
  AsyncStorage.setItem(USER_KEY, "true");
};

export const onSignOut = () => {
  console.log("handle sign out");
  AsyncStorage.removeItem(USER_KEY);
};

export const isSignedIn = () => {
  //debugger;
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
