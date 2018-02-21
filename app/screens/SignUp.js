import React from "react";
import { View } from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";

export default ({navigation}) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="SIGN UP">
    <FormLabel>Name</FormLabel>
    <FormInput placeholder="Name" />
    <FormLabel>Mobile</FormLabel>
    <FormInput placeholder="Mobileno.." />
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="SIGN UP"
        onPress={() => {
          onSignIn().then(() => navigation.navigate("SignedIn"));
        }}
      />
    </Card>
  </View>
);
