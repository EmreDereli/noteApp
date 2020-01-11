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
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '../styles/Colors';
import { Shadows } from '../styles/Effects';
import Icons from "react-native-vector-icons/FontAwesome";
import { Typography } from '../styles/Typography';

const Header: () => React$Node = (props) => {
  
  return (
    
      <View style={[styles.textInputStyle,Shadows.Shadow2]}>
          <TouchableOpacity onPress={props.onPressSave} style={{marginVertical:10,marginHorizontal:2,flexDirection:"row",alignItems:'center',justifyContent:'center',padding:10}}>
            <Text style={Typography.Title}> Save</Text>
         </TouchableOpacity>
      </View>
    
  );
};

const styles = StyleSheet.create({
  textInputStyle:{
      
      backgroundColor:Colors.white,
      justifyContent:'flex-end',
      flexDirection:"row",marginBottom:2
      
     
      
  }
});

export default Header;
