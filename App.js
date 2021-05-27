import React, {Component} from 'react';
import {View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import Header from './Components/AppHeader';
import image from './image.png';
import * as Speech from 'expo-speech';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      text:'',
    }
  }
  speak = ()=>{
    var thingToSay = this.state.text;
    Speech.speak(thingToSay);
  }
  render(){
    return (
      <View>
        <Header/>
          <Image source={image} style={{alignSelf:'center', width:100, height:100}}></Image>
          <Text style = {{textAlign:'center', fontWeight:'bold', fontSize:22}}>Enter The Word</Text>
          <TextInput style = {{    
            marginTop:10,
            borderWidth:5,
            backgroundColor:'white',
            width:300,
            height:50,
            alignSelf:'center',
            outline:0,
            textAlign:'center'
          }}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.name}></TextInput>
          <TouchableOpacity style = {{
            backgroundColor:'#00B8C0',
            marginTop:100,
            alignSelf:'center',
            padding:20,
            borderRadius:50,
          }} onPress = {this.speak}><Text style = {{fontWeight:'bold', fontSize:22}}>Click Here To Hear Speech</Text>
          </TouchableOpacity>
      </View>
    );
  }
}