
import React, {Component} from "react";
import { ScrollView, View,AppRegistry,StyleSheet,Image, TextInput} from "react-native";
import { Card, Button, Text, Divider } from "react-native-elements";
import { onSignOut } from "../auth";
import { FontAwesome } from "react-native-vector-icons";
import {Icon,Item, Input} from "native-base";



const Post = ({ navigation }) => (
<View style={{ paddingVertical: 30  }}>
  <Card>
  <View>
  <View style={{ flexDirection: 'row' }}>
    <View style={{ flexDirection: 'row', height: 50}}>
      <Image style={{
          width:100,
          height:80,
          alignSelf:'center',
          borderRadius:1,
          borderColor:'#fff',
          borderWidth:2}}
          source={require('../images/slk-logo.png')}>
      </Image>
              <TextInput placeholder='What is on your mind?'/>
    </View>
  </View>
    <Divider style={{ marginTop: 20 ,marginBottom: 10}} />
    <View style={{flexDirection: 'row', justifyContent: "space-between" }}>
      <View style={{  height: 30, alignItems: 'center' }}>
        <FontAwesome name ="photo" style={{ fontSize:20, right:0}}/>
        <Text style={{ marginLeft:10, marginTop:2 }}>Photo</Text>
      </View>
      <View style={{  height: 30, alignItems: 'center'}}>
        <FontAwesome name ="youtube" style={{ fontSize:20, right:0}}/>
        <Text style={{ marginLeft:10, marginTop:2 }}>Video</Text>
      </View>
      <View style={{  height: 30, alignItems: 'center'}}>
        <FontAwesome name ="comments" style={{ fontSize:20, right:0}}/>
        <Text style={{ marginLeft:10, marginTop:2 }}>Discussion </Text>
      </View>
      <View style={{  height: 30, alignItems: 'center'}}>
        <FontAwesome name ="car" style={{ fontSize:20, right:0}}/>
        <Text style={{ marginLeft:10, marginTop:2 }}>Carpool</Text>
      </View>
      <View style={{  height: 30, alignItems: 'center'}}>
        <FontAwesome name ="shopping-cart" style={{ fontSize:20, right:0}}/>
        <Text style={{ marginLeft:10, marginTop:2 }}>Buy/Sell</Text>
      </View>
    </View>
    </View>
  </Card>

<ScrollView style={{ paddingVertical: 30 }}>
  <Card>
  <View>
    <View style={{ flexDirection: 'row', height: 50}}>
      <Image style={{
          width:100,
          height:80,
          alignSelf:'center',
          borderRadius:1,
          borderColor:'#fff',
          borderWidth:2}}
          source={require('../images/slk-logo.png')}>
      </Image>
        <Text> Abhinav Verma added a new Skill --- React Native --- to his Profile</Text>
    </View>
    <Text style={{ marginTop :20}}> 14 Likes * 19 Comments</Text>
  </View>
    <Divider style={{ marginTop: 10 ,marginBottom: 10}} />
    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
      <View style={{ flexDirection: 'row', height: 30,}}>
        <FontAwesome name ="thumbs-up" style={{ fontSize:20, right:0}}/>
        <Text style={{ marginLeft:10, marginTop:2 }}>Like</Text>
      </View>
      <View style={{ flexDirection: 'row', height: 30,}}>
        <FontAwesome name ="share" style={{ fontSize:20, right:0}}/>
        <Text style={{ marginLeft:10, marginTop:2 }}>Share</Text>
      </View>
      <View style={{ flexDirection: 'row', height: 30,}}>
        <FontAwesome name ="comments" style={{ fontSize:20, right:0}}/>
        <Text style={{ marginLeft:10, marginTop:2 }}>Comments </Text>
      </View>
    </View>
  </Card>

  <Card>
  <View>
    <View style={{ flexDirection: 'row', height: 200 , justifyContent: "space-between"}}>
      <Image style={{
          width:100,
          height:80,
          alignSelf:'flex-start',
          borderRadius:1,
          borderColor:'#fff',
          borderWidth:2}}
          source={require('../images/slk-logo.png')}>
      </Image>
        <View>
        <Text> Abhinav Verma added a new photo </Text>
        <Text> #Sakleshpur </Text>
        <Text>Sakleshpur is a hill station in western ghats mountain range,in karnataka state india</Text>
        <Image style={{ marginTop: 10, marginBottom: 10,
        width:150,
        height:150,
        alignSelf:'flex-start'
      }}
            source={require('../images/life.png')}>
            </Image>
        </View>
    </View>
    <Text style={{ marginTop :20}}> 14 Likes * 19 Comments</Text>
  </View>
    <Divider style={{ marginTop: 10 ,marginBottom: 10}} />
    <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
      <View style={{ flexDirection: 'row', height: 30,}}>
        <FontAwesome name ="thumbs-up" style={{ fontSize:20, right:0}}/>
        <Text style={{ marginLeft:10, marginTop:2 }}>Like</Text>
      </View>
      <View style={{ flexDirection: 'row', height: 30,}}>
        <FontAwesome name ="share" style={{ fontSize:20, right:0}}/>
        <Text style={{ marginLeft:10, marginTop:2 }}>Share</Text>
      </View>
      <View style={{ flexDirection: 'row', height: 30,}}>
        <FontAwesome name ="comments" style={{ fontSize:20, right:0}}/>
        <Text style={{ marginLeft:10, marginTop:2 }}>Comments </Text>
      </View>
    </View>
  </Card>
</ScrollView>
</View>
);

export default Post;
