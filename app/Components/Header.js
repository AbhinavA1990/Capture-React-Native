import React, {Component} from "react";
import { View,AppRegistry,StyleSheet ,Text,Image} from "react-native";
import { Card, Button, Text } from "react-native-elements";
import { onSignOut } from "../auth";
import { TextField} from 'react-native-material-textfield'

export default class Profile extends Component {
  render() {
    return{
<Image style={styles.headerBackground} source={require('../images/life.jpeg')}>

      <View style={styles.header}>
      <View style={styles.profilePicWrap}>
<Image style={styles.profilePic} source={require('../images/onemore.jpeg')}/>
      </View>
      </View>

<Text style={styles.name}>Indu</Text>
<Text style={styles.prof}>-Developer-</Text>
      </Image>
    };
  }
}

const styles= StyleSheet.create({
headerBackground:{
  flex:1,
  width:null,
  alignSelf:'stretch'
},
header:{
  flex:1,
  alignItems:'center',
  justifyContent:'center'
  padding:20,
  backgroundColor:'rgba(0,0,0,0.5)',
},
  profilePicWrap:{
    width:180,
    height:180,
    borderRadius:100,
    borderColor:'rgba(0,0,0,0.4)',
    borderWidth:16,
  },

  profilePic:{
    flex:1,
    width:null,
    alignSelf:'stretch',
        borderRadius:100,
        borderColor:'#fff',
        borderWidth:4
  },
name:{
  marginTop:20,
  fontSize:16,
  color:'#fff',
  fontWeight:'bold'
},
prof:{
  fontSize:16,
  color:'#fff',
  fontWeight:'bold'
}


});
