import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class App extends Component{
  render(){
    return (
      <View>
        <Text style = {styles.head}>Text To Speech Converter</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  head:{
    textAlign:'center',
    padding:20,
    backgroundColor:'#00B8C0',
    fontWeight:'bold',
    fontSize:22
  },
})