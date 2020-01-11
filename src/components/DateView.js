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
    ImageBackground,
} from 'react-native';
import Icons from "react-native-vector-icons/FontAwesome";
import { Colors } from '../styles/Colors';
import { Shadows } from '../styles/Effects';
import { Typography } from '../styles/Typography';
import { TextInput } from 'react-native-gesture-handler';



const DateView: () => React$Node = (props) => {
    return (
        <>
        <StatusBar backgroundColor={Colors.dotColor4}></StatusBar>
            <ImageBackground source={require('../../notes.jpg')} style={[styles.dateView, Shadows.Shadow1]}>
                <View style={{flex:1}}>

                </View>
                <View style={{alignItems:'center',alignSelf:'center',flex:1}}>
                <Text style={[Typography.Title,{color:'white'}]}>Tüm Notlarım</Text>
                <Text style={[Typography.Date,{color:'white'}]}>{props.count} Adet</Text>
                </View>
                
             
               
               
                    <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,flex:1}}>
                    <TextInput placeholder="Search" placeholderTextColor="white" style={{flex:1,color:'white',borderBottomWidth:1,borderBottomColor:'white'}}></TextInput>
                    <Icons name="search" size={20} color="white" style={{marginHorizontal:15}}></Icons>
                    </View>
               
            </ImageBackground>
           
        </>
    );
};

const styles = StyleSheet.create({
    dateView: {

       justifyContent:'space-between',
       
        backgroundColor: Colors.dotColor4,
        width: '100%',
        height: 200,
        // borderTopRightRadius:30,
        // borderBottomRightRadius: 30,
        // borderBottomLeftRadius: 30
    }
});

export default DateView;
