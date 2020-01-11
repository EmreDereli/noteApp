/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Icons from "react-native-vector-icons/AntDesign";
import { Colors } from '../styles/Colors';


const AddNoteButton: () => React$Node = (props) => {
  return (
   
      <TouchableOpacity onPress={props.onPress} style={styles.addNoteButtonStyle}>
        <Icons name="plus" size={30} color={Colors.white}></Icons>
      </TouchableOpacity>
    
  );
};

const styles = StyleSheet.create({
  addNoteButtonStyle:{
      zIndex:1,
      position:'absolute',
      right:20,
      bottom:25,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:Colors.addButtonColor,
      width:60,
      height:60,
     borderRadius:60/2,
     
  }
});

export default AddNoteButton;
