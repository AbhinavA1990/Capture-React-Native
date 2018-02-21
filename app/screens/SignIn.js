import React from "react";
import { StyleSheet,View, Image} from "react-native";
import { Card, Button, FormLabel, FormInput } from "react-native-elements";
import { onSignIn } from "../auth";

//const navigation = this.props.navigation;

export default ({navigation}) => (
  //<Container>
  <View style={{ paddingVertical: 20 }}>
    <Card title="SIGN IN">
    <Image source={require('../images/slk-logo.png')}/>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />

      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="#03A9F4"
        title="Sign In"
        onPress={() => {
          onSignIn().then(() => navigation.navigate("SignedIn"));
        }}
      />
      <Button
        buttonStyle={{ marginTop: 20 }}
        backgroundColor="transparent"
        textStyle={{ color: "#bcbec1" }}
        title="Sign Up"
        onPress={() => navigation.navigate("SignUp")}
      />
    </Card>
  </View>
  //<Container>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
