/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  ShadowPropTypesIOS,
} from 'react-native';
import { Colors } from '../styles/Colors';
import { Shadows } from '../styles/Effects';



export default class CustomTextInput extends Component {
  constructor(props){
    super(props);
  }
  onChangeText = (val)=>{
    const { getValue } = this.props;
    getValue(val);
  }
  render(){
    return (
      
        <View style={[styles.textInputStyle,Shadows.Shadow2]}>
           <TextInput onChangeText={(text) => this.onChangeText(text)} style={{fontSize:20,fontWeight:"bold"}} maxLength={15} placeholder="Başlık"></TextInput>
        </View>
     
    );
  }
  
};

const styles = StyleSheet.create({
  textInputStyle:{
      
      backgroundColor:Colors.white,
      paddingHorizontal:10,
      
     
      
  }
});

