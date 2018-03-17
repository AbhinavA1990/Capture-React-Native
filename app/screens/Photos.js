
import React, {Component} from "react";
import { View,AppRegistry,StyleSheet,Image } from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../auth";
import { TextField} from 'react-native-material-textfield'


export default ({ navigation }) => (
  <View style={{ paddingVertical: 10 }}>

  <Card>
  <Text>Add photos</Text>
  <TextField
   title='describe about Photo'/>
<Button title='+ ADD PHOTOS'></Button>
  </Card>




<Card style={{
  width:500,
height:500}} >

<Image style={{
width:80,
height:80,
position: 'absolute',
left:0
}}
    source={require('../images/beauty.png')}>
    </Image>

<Image style={{
width:80,
height:80,
position: 'absolute',
right:0
}}
    source={require('../images/life.png')}>
  </Image>
        <Image style={{
        width:80,
        height:80,
        alignSelf:'center'
        }}
            source={require('../images/onemore.png')}>
            </Image>
                        <Image style={{
                        width:80,
                        height:80,
                        alignSelf:'center'
                        }}
                            source={require('../images/onemore.png')}>
                            </Image>
                                        <Image style={{
                                        width:80,
                                        height:80,
                                        position: 'absolute',
                                        left:10
                                        }}
                                            source={require('../images/beauty.png')}>
                                            </Image>

                                            <Image style={{
                                            width:80,
                                            height:80,
                                            position: 'absolute',
                                            right:10
                                            }}
                                                source={require('../images/life.png')}>
                                              </Image>

</Card>




</View>
);
