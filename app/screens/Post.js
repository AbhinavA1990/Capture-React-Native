
import React, {Component} from "react";
import { View,AppRegistry,StyleSheet,Image } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../auth";
import { TextField} from 'react-native-material-textfield'


export default ({ navigation }) => (
  <View style={{ paddingVertical: 10 }}>

  <Card title="Profile Post">
  <Text>Post here</Text>
  <TextField
   title='Write something here'/>
<Button title='POST'></Button>
  </Card>


    <Card>
    <Text>Sakleshpur Trip</Text>
    <Image style={{
    width:100,
    height:100,
    alignSelf:'center'
  }}
        source={require('../images/life.png')}>
        </Image>
<Text>Sakleshpur is a hill station in western ghats mountain range,in karnataka state india</Text>


<Text>Sakleshpur Trip</Text>
<Image style={{
width:100,
height:100,
alignSelf:'center'
}}
    source={require('../images/life.png')}>
    </Image>
<Text>Sakleshpur is a hill station in western ghats mountain range,in karnataka state india</Text>


    </Card>


    <Card>
    <Text>Sakleshpur Trip</Text>
    <Image style={{
    width:100,
    height:100,
    alignSelf:'center'
  }}
        source={require('../images/life.png')}>
        </Image>
  <Text>Sakleshpur is a hill station in western ghats mountain range,in karnataka state india</Text>

    </Card>


    <Card>
    <Text>Sakleshpur Trip</Text>
    <Image style={{
    width:100,
    height:100,
    alignSelf:'center'
  }}
        source={require('../images/life.png')}>
        </Image>
<Text>Sakleshpur is a hill station in western ghats mountain range,in karnataka state india</Text>

    </Card>




</View>
);
