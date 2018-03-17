
import React, {Component} from "react";
import { View,AppRegistry,StyleSheet,Image } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut, onLoad } from "../auth";
import { TextField} from 'react-native-material-textfield'


export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="User's Profile">

    <Image style={{
    width:100,
    height:100,
    alignSelf:'center',
        borderRadius:100,
        borderColor:'#fff',
        borderWidth:4}}
        source={require('../images/life.png')}></Image>

        <Text >Name:    Indu</Text>
        <Text >ProfileAtSLK: </Text>



<Text style={{color:'blue',
position: 'absolute',
left:0}}
onPress={() =>{
  onLoad();
  debugger;
  navigation.navigate("Post");
}}
>POST</Text>


<Text style={{
  color:'blue',
  position: 'absolute',
right:0}}
onPress={() =>{
  onLoad();
  debugger;
  navigation.navigate("Photos");
}}
>    PHOTOS  </Text>



<Button
     style={{}}
     buttonStyle={{  backgroundColor:'#03A9F4', borderRadius:10, width:100}}
     //  backgroundColor="#03A9F4"
       title="SIGN OUT"
       onPress={() =>{
         onSignOut();
         navigation.navigate("SignedOut");
       }}
     />
    </Card>


<Card title='GROUPS'>
<Image style={{
width:50,
height:50,
position: 'absolute',
left:20,
  borderRadius:100,
}}
    source={require('../images/beauty.png')}>
    </Image>

    <Image style={{
    width:50,
    height:50,
    position: 'absolute',
    right:0,
      borderRadius:100,
    }}
        source={require('../images/beauty.png')}>
        </Image>

        <Image style={{
        width:50,
        height:50,
        position: 'absolute',
        left:70,
          borderRadius:100,
        }}
            source={require('../images/beauty.png')}>
            </Image>

</Card>







  </View>
);
