
import React, {Component} from "react";
import { ScrollView, View,AppRegistry,StyleSheet,Image } from "react-native";
import { Card, Button, Text,Divider } from "react-native-elements";
import { onSignOut, onLoad } from "../auth";
import { FontAwesome } from "react-native-vector-icons";
import {Header, Item, Icon, Input, Container} from "native-base"

const Profile = ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
  <Header searchBar rounded>
          <Item style={{ marginBottom: 15}}>
            <Icon name="ios-search" />
            <Input placeholder="Search in Abhinav's posts, photos, carpool....." />
            <Icon name="ios-people" />
            <Icon name="ios-camera" />
            <Icon name="ios-car" />
          </Item>

          <FontAwesome style={{ marginLeft: 10, color:"#03A9F4"}} name="camera" size={30}
          onPress={() =>{
            onLoad();
            debugger;
            navigation.navigate("Photos");
          }}/>

        </Header>
    <ScrollView >
    <Card title="Abhinav Verma">
          <Image style={{
              width:300,
              height:300,
              alignSelf:'center',
              borderRadius:100,
              borderColor:'#fff',
              borderWidth:4}}
              source={require('../images/life.png')}>
          </Image>

          <FontAwesome style={{color:"#03A9F4",position: 'absolute',left:0}} name="edit" size={30}
              onPress={() =>{
              onLoad();
              debugger;
              navigation.navigate("Post");
          }}/>
          <Divider style={{ marginBottom: 10 , marginTop: 10}} />
                <View style={{ flexDirection: 'row',  justifyContent: "space-between", marginBottom : 15}}>
                  <View style={{  height: 30, alignItems: 'center'}}>
                    <FontAwesome name ="tasks" style={{color:"#03A9F4", fontSize:30, right:0}}/>
                    <Text style={{ marginLeft:10, marginTop:5 }}>Activity Log</Text>
                  </View>
                  <View style={{height: 30, alignItems: 'center'}}>
                    <FontAwesome name ="user" style={{color:"#03A9F4", fontSize:30, right:0}}/>
                    <Text style={{ marginLeft:10, marginTop:5  }}>Update Info</Text>
                  </View>
                  <View style={{ height: 30, alignItems: 'center'}}>
                    <FontAwesome name ="eye" style={{color:"#03A9F4", fontSize:30, right:0}}/>
                    <Text style={{ marginLeft:10,marginTop:5  }}>View as</Text>
                  </View>
                  <View style={{ height: 30, alignItems: 'center'}}>
                    <FontAwesome name ="ellipsis-h" style={{color:"#03A9F4", fontSize:30, right:0}}
                    onPress= {()=>{
                      alert("Pressed it")
                    }}
                    />

                  </View>
                </View>
            <Divider style={{ marginTop: 10 ,marginBottom: 10}} />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row',width: 200, height: 30,}}>
              <FontAwesome name ="map-marker" style={{ fontSize:20, right:0}}/>
              <Text style={{ marginLeft:10, marginTop:2 }}>Patna, Bihar</Text>
            </View>
          </View>
          <Text style={{ marginLeft:10, marginTop:2 ,color:"#03A9F4"}}>EDIT DETAILS</Text>
    </Card>

<Card>
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
    <Text style={{ marginLeft:10, marginTop:2 }}
          onPress={() =>{
          onLoad();
          debugger;
          navigation.navigate("Post");
      }}
    >Write something here...</Text>
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
</Card>

<Card>
<Button buttonStyle={{ marginTop: 20 }} backgroundColor="#03A9F4"
   title="SIGN OUT"
   onPress={() =>{
     onSignOut();
     navigation.navigate("SignedOut");
   }}
 />
</Card>
  </ScrollView>
  </View>
);

export default Profile;
