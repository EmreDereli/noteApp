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


import CustomTextInput from '../components/CustomTextInput';
import NoteContentInput from '../components/NoteContentInput';
import { Colors } from '../styles/Colors';

const CustomButton: () => React$Node = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
            <Text>Add New Note</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        margin:10,
        backgroundColor: Colors.addButtonColor,
        paddingVertical:10,
        marginHorizontal:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:15

    },
    
});

export default CustomButton;
