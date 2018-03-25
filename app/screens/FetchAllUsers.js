import React from "react";
import View from "react-native";
import { graphql,ApolloProvider, Query } from "react-apollo";
import { Text } from "react-native-elements";
import gql from "graphql-tag";

function UserList({ data: { loading, allUser, error } }) {
  if(loading){
    return <Text>Loading...</Text>
  }else if(error){
    return <Text>error...</Text>
  }
  else{
    console.log(allUser);
    return <Text>Data...</Text>
  }

}


export default graphql(gql`
  query allUser {
      userName
      email
      password
  }
`)(UserList);
