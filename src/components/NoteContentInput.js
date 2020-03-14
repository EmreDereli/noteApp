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
} from 'react-native';
import { Colors } from '../styles/Colors';
import { Shadows } from '../styles/Effects';


export default class NoteContentInput extends Component {
  constructor(props){
    super(props);
  }

  onChangeText = (val) => {
    const { getValue } = this.props;
    getValue(val);
  }
  render(){
    return (
      
        <View style={[styles.textInputStyle, Shadows.Shadow2]}>
          <TextInput defaultValue={this.props.value} onChangeText={(text)=> this.onChangeText(text)} multiline style={{ fontSize:18,height: 500, textAlignVertical: 'top' }} placeholder="..............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................."></TextInput>
        </View>
     
    );
  }
  
};

const styles = StyleSheet.create({
  textInputStyle: {
    backgroundColor: Colors.white,
    paddingHorizontal: 10,
  }
});
